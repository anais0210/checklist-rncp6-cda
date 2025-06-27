export class ExportManager {
    constructor() {
        this.init();
    }

    init() {
        const exportBtn = document.querySelector('.export-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportToExcel());
        }
    }

    exportToExcel() {
        console.log('Début de l\'export Excel...');
        
        try {
            const versionElement = document.getElementById('version-number');
            const version = versionElement ? versionElement.textContent : '';
            
            const data = this.prepareExcelData();
            
            const wb = XLSX.utils.book_new();
            
            const ws = XLSX.utils.aoa_to_sheet(data);
            
            ws['!cols'] = [
                { width: 5 },   
                { width: 60 },  
                { width: 15 }, 
                { width: 20 }, 
                { width: 25 }  
            ];
            
            XLSX.utils.book_append_sheet(wb, ws, 'Checklist CDA');
            
            const fileName = `checklist-cda-${new Date().toISOString().split('T')[0]}.xlsx`;
            XLSX.writeFile(wb, fileName);
            
            console.log('Export Excel terminé avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'export Excel:', error);
            alert('Une erreur est survenue lors de l\'export Excel. Veuillez réessayer.');
        }
    }

    prepareExcelData() {
        const data = [];
        
        data.push([
            'Statut',
            'Description',
            'Badge',
            'Bloc',
            'Section'
        ]);
        
        const versionElement = document.getElementById('version-number');
        const version = versionElement ? versionElement.textContent : '';
        data.push([
            '',
            `Checklist CDA 6 - ${version}`,
            '',
            '',
            ''
        ]);
        data.push([
            '',
            `Date d'export : ${new Date().toLocaleDateString('fr-FR')}`,
            '',
            '',
            ''
        ]);
        data.push([]);
        
        const checklistItems = document.querySelectorAll('.checklist li');
        
        checklistItems.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            const description = item.querySelector('span:not(.demo-badge)');
            const badge = item.querySelector('.demo-badge');
            
            if (checkbox && description) {
                const isChecked = checkbox.checked;
                const descriptionText = description.textContent.trim();
                const badgeText = badge ? badge.textContent.trim() : '';
                
                const block = item.closest('.block');
                const section = item.closest('.section');
                
                const blockTitle = block ? block.querySelector('.block-title')?.textContent.trim() : '';
                const sectionTitle = section ? section.querySelector('h3')?.textContent.trim() : '';
                
                data.push([
                    isChecked ? '✓' : '☐',
                    descriptionText,
                    badgeText,
                    blockTitle,
                    sectionTitle
                ]);
            }
        });
        
        return data;
    }
} 