export class NotesManager {
    constructor() {
        this.setupEventListeners();
        this.loadNotes();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('notes-toggle')) {
                this.toggleNotes(e.target);
            }
        });

        document.addEventListener('input', (e) => {
            if (e.target.tagName === 'TEXTAREA' && e.target.closest('.notes-content')) {
                this.saveNotes();
            }
        });
    }

    toggleNotes(button) {
        const targetId = button.dataset.target;
        const notesContent = document.getElementById(targetId);
        
        if (notesContent) {
            notesContent.classList.toggle('active');
            button.textContent = notesContent.classList.contains('active') ? '📝 Masquer' : '📝 Notes';
        }
    }

    saveNotes() {
        const notes = {};
        document.querySelectorAll('.notes-content textarea').forEach(textarea => {
            const id = textarea.closest('.notes-content').id;
            notes[id] = textarea.value;
        });
        localStorage.setItem('checklist-notes', JSON.stringify(notes));
    }

    loadNotes() {
        const savedNotes = localStorage.getItem('checklist-notes');
        if (savedNotes) {
            const notes = JSON.parse(savedNotes);
            Object.entries(notes).forEach(([id, content]) => {
                const textarea = document.querySelector(`#${id} textarea`);
                if (textarea) {
                    textarea.value = content;
                }
            });
        }
    }
} 