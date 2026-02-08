export class FilterManager {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => this.filterItems(button.dataset.filter));
        });

        const filterContainer = document.querySelector('.filters');
        if (filterContainer) {
            filterContainer.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    const buttons = [...filterContainer.querySelectorAll('.filter-btn')];
                    const currentIndex = buttons.indexOf(document.activeElement);
                    if (currentIndex === -1) return;
                    const nextIndex = e.key === 'ArrowRight'
                        ? (currentIndex + 1) % buttons.length
                        : (currentIndex - 1 + buttons.length) % buttons.length;
                    buttons[nextIndex].focus();
                    e.preventDefault();
                }
            });
        }
    }

    filterItems(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const isActive = btn.dataset.filter === filter;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        document.querySelectorAll('.checklist li').forEach(item => {
            const badge = item.querySelector('.demo-badge');
            if (filter === 'all') {
                item.classList.remove('hidden');
            } else {
                const badgeText = badge ? badge.textContent.trim() : '';
                let isVisible = false;

                if (filter.startsWith('demo')) {
                    const demoNumber = filter.replace('demo', '');
                    isVisible = badgeText.replace(/\s+/g, '').toLowerCase() === `démo${demoNumber}`.toLowerCase();
                } else if (filter === 'dossier') {
                    isVisible = badgeText === 'Dossier projet';
                } else {
                    isVisible = badgeText.toLowerCase() === filter.toLowerCase();
                }

                item.classList.toggle('hidden', !isVisible);
            }
        });
    }
}
