// Page « Questions par critère » — rendu dynamique + filtres combinables.
// Filtres : niveau + démo + catégorie + recherche plein texte (tous cumulatifs).

import { QUESTIONS } from './questions-data.js';

const NIVEAUX = [
    { key: 'fondamental', label: 'Fondamental', symbol: '●' },
    { key: 'intermediaire', label: 'Intermédiaire', symbol: '◆' },
    { key: 'avance', label: 'Avancé', symbol: '▲' },
];

const DEMOS = [
    { key: 'demo1', label: 'Démo 1' },
    { key: 'demo2', label: 'Démo 2' },
    { key: 'demo3', label: 'Démo 3' },
    { key: 'demo4', label: 'Démo 4' },
    { key: 'dossier', label: 'Dossier projet' },
    { key: 'optionnel', label: 'Optionnel' },
];

// Raccourci bloc pour l'affichage compact (« Bloc 1 — … » -> « Bloc 1 »).
function blocShort(bloc) {
    const m = /^(Bloc\s*\d+)/.exec(bloc);
    return m ? m[1] : bloc;
}

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const state = {
    niveau: 'all',
    demo: 'all',
    categorie: 'all',
    type: 'all',
    search: '',
};

let containerEl;
let countEl;

function normalize(str) {
    return String(str ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function matches(q) {
    if (state.niveau !== 'all' && q.niveauKey !== state.niveau) return false;
    if (state.demo !== 'all' && q.demoKey !== state.demo) return false;
    if (state.categorie !== 'all' && q.categorie !== state.categorie) return false;
    if (state.type !== 'all' && q.type !== state.type) return false;
    if (state.search) {
        const haystack = normalize(
            `${q.question} ${q.reponse} ${q.vigilance} ${q.categorie} ${q.bloc} ${q.type}`,
        );
        if (!haystack.includes(normalize(state.search))) return false;
    }
    return true;
}

function questionCard(q) {
    const niveau = NIVEAUX.find((n) => n.key === q.niveauKey) || NIVEAUX[0];
    const typeBadge = q.type
        ? `<span class="q-badge q-badge-type">${escapeHtml(q.type)}</span>`
        : '';
    const vigilance = q.vigilance
        ? `<details class="question-detail question-detail-vigilance">
             <summary><span class="question-detail-icon" aria-hidden="true">⚠️</span> Point de vigilance / relance</summary>
             <p>${escapeHtml(q.vigilance)}</p>
           </details>`
        : '';

    return `<article class="question-card"
        data-niveau="${q.niveauKey}" data-demo="${q.demoKey}" data-categorie="${escapeHtml(q.categorie)}">
      <div class="question-badges">
        <span class="q-badge q-badge-bloc">${escapeHtml(blocShort(q.bloc))}</span>
        <span class="demo-badge" data-badge="${q.demoKey}">${escapeHtml(q.demo)}</span>
        <span class="niveau-badge" data-niveau="${q.niveauKey}">
          <span class="niveau-badge-symbol" aria-hidden="true">${niveau.symbol}</span>${escapeHtml(niveau.label)}
        </span>
        <span class="q-badge q-badge-cat">${escapeHtml(q.categorie)}</span>
        ${typeBadge}
      </div>
      <h2 class="question-text"><span class="question-num" aria-hidden="true">Q${q.num}.</span> ${escapeHtml(q.question)}</h2>
      <details class="question-detail question-detail-reponse">
        <summary><span class="question-detail-icon" aria-hidden="true">💡</span> Réponse attendue — points clés</summary>
        <p>${escapeHtml(q.reponse)}</p>
      </details>
      ${vigilance}
    </article>`;
}

function render() {
    const visible = QUESTIONS.filter(matches);

    if (visible.length === 0) {
        containerEl.innerHTML =
            '<p class="questions-empty">Aucune question ne correspond à ces filtres. Essayez d\'élargir votre recherche.</p>';
    } else {
        containerEl.innerHTML = visible.map(questionCard).join('');
    }

    const total = QUESTIONS.length;
    countEl.textContent =
        visible.length === total
            ? `${total} questions`
            : `${visible.length} question${visible.length > 1 ? 's' : ''} sur ${total}`;
}

function buildSegmentedGroup(el, options, stateKey) {
    el.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        state[stateKey] = btn.dataset.filter;
        el.querySelectorAll('.filter-btn').forEach((b) => {
            const active = b === btn;
            b.classList.toggle('active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        render();
    });

    // Navigation clavier gauche/droite entre les boutons du groupe.
    el.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const buttons = [...el.querySelectorAll('.filter-btn')];
        const i = buttons.indexOf(document.activeElement);
        if (i === -1) return;
        const next =
            e.key === 'ArrowRight'
                ? (i + 1) % buttons.length
                : (i - 1 + buttons.length) % buttons.length;
        buttons[next].focus();
        e.preventDefault();
    });
}

function init() {
    containerEl = document.getElementById('questions-container');
    countEl = document.getElementById('questions-count');
    if (!containerEl) return;

    buildSegmentedGroup(document.getElementById('filter-niveau'), NIVEAUX, 'niveau');
    buildSegmentedGroup(document.getElementById('filter-demo'), DEMOS, 'demo');

    // Catégorie : liste déroulante (26 valeurs -> trop pour des boutons).
    const catSelect = document.getElementById('filter-categorie');
    const categories = [...new Set(QUESTIONS.map((q) => q.categorie))].sort((a, b) =>
        a.localeCompare(b, 'fr'),
    );
    for (const c of categories) {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        catSelect.appendChild(opt);
    }
    catSelect.addEventListener('change', () => {
        state.categorie = catSelect.value || 'all';
        render();
    });

    // Type de question (colonne « Type » de la série 2 : mise en situation, technique…).
    const typeSelect = document.getElementById('filter-type');
    const types = [...new Set(QUESTIONS.map((q) => q.type).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'fr'),
    );
    for (const t of types) {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        typeSelect.appendChild(opt);
    }
    typeSelect.addEventListener('change', () => {
        state.type = typeSelect.value || 'all';
        render();
    });

    // Recherche plein texte.
    const searchInput = document.getElementById('questions-search');
    searchInput.addEventListener('input', () => {
        state.search = searchInput.value.trim();
        render();
    });

    // Réinitialiser.
    document.getElementById('questions-reset').addEventListener('click', () => {
        state.niveau = 'all';
        state.demo = 'all';
        state.categorie = 'all';
        state.type = 'all';
        state.search = '';
        catSelect.value = '';
        typeSelect.value = '';
        searchInput.value = '';
        document.querySelectorAll('#filter-niveau .filter-btn, #filter-demo .filter-btn').forEach((b) => {
            const active = b.dataset.filter === 'all';
            b.classList.toggle('active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        render();
    });

    render();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
