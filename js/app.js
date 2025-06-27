import { ProgressManager } from './progress.js';
import { ExportManager } from './export.js';
import { FilterManager } from './filters.js';
import { NotesManager } from './notes-manager.js';
import { SearchManager } from './search-manager.js';
import { ResetManager } from './reset-manager.js';
import { ProjectNameManager } from './project-name-manager.js';

class App {
    constructor() {
        console.log('App initialisée');
        this.progressManager = new ProgressManager();
        this.exportManager = new ExportManager();
        this.filterManager = new FilterManager();
        this.notesManager = new NotesManager();
        this.searchManager = new SearchManager();
        this.resetManager = new ResetManager();
        this.projectNameManager = new ProjectNameManager();
        this.loadVersion();
        
        window.app = this;
        
        document.addEventListener('checklist-updated', () => {
            this.progressManager.updateProgress();
        });
    }

    async loadVersion() {
        try {
            const response = await fetch('config.json');
            const config = await response.json();
            const versionElement = document.getElementById('version-number');
            if (versionElement) {
                versionElement.textContent = `v${config.version}`;
            }
        } catch (error) {
            console.error('Erreur lors du chargement de la version:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé, initialisation de l\'app');
    new App();
}); 