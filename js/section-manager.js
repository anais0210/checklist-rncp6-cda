export class SectionManager {
    constructor() {
        this.updateAllCounts();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const section = e.target.closest('details.section');
                if (section) {
                    this.updateSectionCount(section);
                }
            }
        });
    }

    updateSectionCount(section) {
        const countEl = section.querySelector('.section-count');
        if (!countEl) return;

        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        const checked = section.querySelectorAll('input[type="checkbox"]:checked').length;
        const total = checkboxes.length;

        countEl.textContent = `${checked}/${total}`;
        countEl.setAttribute('aria-label', `${checked} sur ${total} complétés`);
    }

    updateAllCounts() {
        document.querySelectorAll('details.section').forEach(section => {
            this.updateSectionCount(section);
        });
    }
}
