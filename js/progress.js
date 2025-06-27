export class ProgressManager {
    constructor() {
        this.loadProgress();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateProgress();
                this.saveProgress();
            });
        });
    }

    calculateProgressByBadge(badgeText) {
        const items = document.querySelectorAll(`.checklist li`);
        let total = 0;
        let checked = 0;

        items.forEach(item => {
            const badge = item.querySelector('.demo-badge');
            if (badge && badge.textContent.trim() === badgeText) {
                total++;
                const checkbox = item.querySelector('input[type="checkbox"]');
                if (checkbox && checkbox.checked) {
                    checked++;
                }
            }
        });

        return total > 0 ? Math.round((checked / total) * 100) : 0;
    }

    updateProgress() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const total = checkboxes.length;
        const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
        const percentage = Math.round((checked / total) * 100);

        document.getElementById('progress-fill').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${percentage}%`;

        for (let i = 1; i <= 4; i++) {
            const demoPercentage = this.calculateProgressByBadge(`Démo ${i}`);
            document.getElementById(`demo${i}-text`).textContent = `${demoPercentage}%`;
        }

        const dossierPercentage = this.calculateProgressByBadge('Dossier projet');
        const optionnelPercentage = this.calculateProgressByBadge('Optionnel');

        document.getElementById('dossier-text').textContent = `${dossierPercentage}%`;
        document.getElementById('optionnel-text').textContent = `${optionnelPercentage}%`;

        document.dispatchEvent(new CustomEvent('checklist-updated'));
    }

    saveProgress() {
        const progress = {};
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            progress[checkbox.id] = checkbox.checked;
        });
        localStorage.setItem('checklist-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const savedProgress = localStorage.getItem('checklist-progress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            Object.entries(progress).forEach(([id, checked]) => {
                const checkbox = document.getElementById(id);
                if (checkbox) {
                    checkbox.checked = checked;
                }
            });
            this.updateProgress();
        }
    }
} 