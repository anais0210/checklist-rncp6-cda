const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

function startServer() {
    return new Promise((resolve, reject) => {
        const server = http.createServer((req, res) => {
            const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
            
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(404);
                    res.end('File not found');
                    return;
                }

                const ext = path.extname(filePath);
                const contentType = {
                    '.html': 'text/html',
                    '.css': 'text/css',
                    '.js': 'text/javascript'
                }[ext] || 'text/plain';

                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            });
        });

        server.listen(3000, () => {
            console.log('Serveur de test démarré sur http://localhost:3000');
            resolve(server);
        });

        server.on('error', reject);
    });
}

async function runA11yTests() {
    let server;
    let browser;
    
    try {
        server = await startServer();
        
        browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        
        await page.goto('http://localhost:3000');
        await page.waitForTimeout(1000);
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(500);

        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        if (results.violations.length > 0) {
            console.error('\nViolations d\'accessibilité trouvées:');
            results.violations.forEach(violation => {
                console.error(`
Règle: ${violation.id}
Impact: ${violation.impact}
Description: ${violation.description}
Éléments concernés: ${violation.nodes.length}
Aide: ${violation.help}`);
                violation.nodes.forEach((node, i) => {
                    console.error(`  [${i + 1}] ${node.target.join(' ')} — ${node.failureSummary}`);
                });
            });
            process.exit(1);
        } else {
            console.log(' Aucune violation d\'accessibilité trouvée');
            process.exit(0);
        }
    } catch (error) {
        console.error('Erreur lors de l\'exécution des tests:', error);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
        if (server) server.close();
    }
}

runA11yTests(); 