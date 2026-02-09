export class GlobalCommentManager {
    constructor() {
        this.setupEventListeners();
        this.loadGlobalComment();
    }

    setupEventListeners() {
        const textarea = document.getElementById('global-comment');
        if (textarea) {
            textarea.addEventListener('input', () => {
                this.saveGlobalComment();
            });
        }
    }

    saveGlobalComment() {
        const textarea = document.getElementById('global-comment');
        if (textarea) {
            localStorage.setItem('checklist-global-comment', textarea.value);
        }
    }

    loadGlobalComment() {
        const saved = localStorage.getItem('checklist-global-comment');
        const textarea = document.getElementById('global-comment');
        if (textarea && saved) {
            textarea.value = saved;
        }
    }

    getGlobalComment() {
        const textarea = document.getElementById('global-comment');
        return textarea ? textarea.value.trim() : '';
    }
}
