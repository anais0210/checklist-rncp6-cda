// Page « QCM d'entraînement » — configuration, session question par question, résultats.
// Aucune donnée n'est envoyée : tout l'état vit en mémoire le temps de la session.

import { QCM } from './qcm-data.js';

const BLOCS = [
    { key: 'all', label: 'Tous les blocs' },
    { key: 'bloc1', label: 'Bloc 1 — Dev application sécurisée' },
    { key: 'bloc2', label: 'Bloc 2 — Application en couches' },
    { key: 'bloc3', label: 'Bloc 3 — Déploiement sécurisé' },
];

const COUNTS = [5, 10, 20, 'all'];
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

const state = {
    bloc: 'all',
    count: 10,
    questions: [],
    index: 0,
    answers: [],
    validated: false,
};

const $ = (id) => document.getElementById(id);

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function blocShort(bloc) {
    const m = /^(Bloc\s*\d+)/.exec(bloc);
    return m ? m[1] : bloc;
}

function available(bloc) {
    return bloc === 'all' ? QCM : QCM.filter((q) => q.blocKey === bloc);
}

// Prépare une question pour la session : options mélangées (la bonne réponse
// est souvent en premier dans les données sources).
function prepare(q) {
    return { ...q, options: shuffle(q.options) };
}

function announce(message) {
    const el = $('qcm-announcer');
    el.textContent = '';
    // Laisse le temps au lecteur d'écran de détecter le changement.
    window.setTimeout(() => {
        el.textContent = message;
    }, 50);
}

function showScreen(id, focusId) {
    ['qcm-setup', 'qcm-session', 'qcm-results'].forEach((screen) => {
        $(screen).hidden = screen !== id;
    });
    window.scrollTo({ top: 0 });
    const focusEl = $(focusId);
    if (focusEl) focusEl.focus({ preventScroll: true });
}

/* ==================== CONFIGURATION ==================== */

function renderSetup() {
    $('qcm-bloc-choices').innerHTML = BLOCS.map((b) => {
        const n = available(b.key).length;
        return `<label class="qcm-choice">
            <input type="radio" name="qcm-bloc" value="${b.key}" ${b.key === state.bloc ? 'checked' : ''} />
            <span class="qcm-choice-label">${escapeHtml(b.label)}</span>
            <span class="qcm-choice-count">${n} question${n > 1 ? 's' : ''}</span>
        </label>`;
    }).join('');
    renderCountChoices();
}

function renderCountChoices() {
    const max = available(state.bloc).length;
    $('qcm-count-choices').innerHTML = COUNTS.map((c) => {
        const disabled = c !== 'all' && c > max;
        const label = c === 'all' ? `Toutes (${max})` : `${c}`;
        return `<label class="qcm-choice qcm-choice-compact${disabled ? ' is-disabled' : ''}">
            <input type="radio" name="qcm-count" value="${c}" ${c === state.count ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
            <span class="qcm-choice-label">${label}</span>
        </label>`;
    }).join('');

    // Si le nombre choisi dépasse ce que le bloc propose, on bascule sur « Toutes ».
    if (state.count !== 'all' && state.count > max) {
        state.count = 'all';
        $('qcm-count-choices').querySelector('input[value="all"]').checked = true;
    }
    renderSetupSummary();
}

function sessionSize() {
    const max = available(state.bloc).length;
    return state.count === 'all' ? max : Math.min(state.count, max);
}

function renderSetupSummary() {
    const bloc = BLOCS.find((b) => b.key === state.bloc);
    const n = sessionSize();
    $('qcm-setup-summary').textContent = `${n} question${n > 1 ? 's' : ''} tirée${n > 1 ? 's' : ''} au hasard · ${bloc.label}`;
}

function startSession(questions) {
    state.questions = questions.map(prepare);
    state.index = 0;
    state.answers = [];
    renderQuestion();
    showScreen('qcm-session', 'qcm-question-text');
}

/* ==================== SESSION ==================== */

function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;
    state.validated = false;

    $('qcm-progress-label').textContent = `Question ${state.index + 1} sur ${total}`;
    $('qcm-progress-fill').style.width = `${(state.index / total) * 100}%`;
    const good = state.answers.filter((a) => a.correct).length;
    $('qcm-progress-score').textContent = state.index > 0 ? `${good} / ${state.index} juste${good > 1 ? 's' : ''}` : '';

    $('qcm-question-badges').innerHTML = `
        <span class="q-badge q-badge-bloc">${escapeHtml(blocShort(q.bloc))}</span>
        <span class="q-badge q-badge-cat">${escapeHtml(q.theme)}</span>
        <span class="q-badge q-badge-type">${escapeHtml(q.type)}</span>`;

    $('qcm-question-text').textContent = q.question;
    $('qcm-question-hint').textContent = q.multiple
        ? 'Plusieurs réponses possibles : cochez toutes les bonnes.'
        : 'Une seule bonne réponse.';

    const inputType = q.multiple ? 'checkbox' : 'radio';
    $('qcm-options').innerHTML = q.options.map((o, i) => `
        <label class="qcm-option" data-index="${i}">
            <input type="${inputType}" name="qcm-answer" value="${i}" class="qcm-option-input" />
            <span class="qcm-option-letter" aria-hidden="true">${LETTERS[i]}</span>
            <span class="qcm-option-body">
                <span class="qcm-option-text">${escapeHtml(o.texte)}</span>
                <span class="qcm-option-status"></span>
                <span class="qcm-option-explanation" hidden>${escapeHtml(o.explication)}</span>
            </span>
        </label>`).join('');

    const feedback = $('qcm-feedback');
    feedback.hidden = true;
    feedback.className = 'qcm-feedback';
    feedback.innerHTML = '';

    const submit = $('qcm-submit');
    submit.textContent = 'Valider';
    submit.disabled = true;
}

function selectedIndexes() {
    return [...$('qcm-options').querySelectorAll('.qcm-option-input:checked')].map((input) =>
        Number(input.value),
    );
}

function validate() {
    const q = state.questions[state.index];
    const selected = selectedIndexes();
    if (selected.length === 0) {
        announce('Sélectionnez au moins une réponse.');
        return;
    }

    const expected = q.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i !== -1);
    const correct =
        selected.length === expected.length && selected.every((i) => expected.includes(i));
    state.answers.push({ question: q, selected, correct });
    state.validated = true;

    $('qcm-options').querySelectorAll('.qcm-option').forEach((label) => {
        const i = Number(label.dataset.index);
        const option = q.options[i];
        const isSelected = selected.includes(i);
        const input = label.querySelector('input');
        const status = label.querySelector('.qcm-option-status');
        input.disabled = true;

        // Statut porté par une icône + un libellé + une forme de bordure, pas seulement la couleur.
        if (option.correct) {
            label.classList.add('is-correct');
            status.textContent = isSelected ? '✓ Votre réponse — correcte' : '✓ Bonne réponse';
        } else if (isSelected) {
            label.classList.add('is-wrong');
            status.textContent = '✗ Votre réponse — incorrecte';
        }
        if ((option.correct || isSelected) && option.explication) {
            label.querySelector('.qcm-option-explanation').hidden = false;
        }
    });

    const feedback = $('qcm-feedback');
    feedback.classList.add(correct ? 'is-correct' : 'is-wrong');
    feedback.innerHTML = `
        <p class="qcm-feedback-title">${correct ? '✓ Bonne réponse !' : '✗ Ce n\'est pas la bonne réponse'}</p>
        ${q.explication ? `<p class="qcm-feedback-text">${escapeHtml(q.explication)}</p>` : ''}`;
    feedback.hidden = false;
    feedback.focus();

    const isLast = state.index === state.questions.length - 1;
    const submit = $('qcm-submit');
    submit.textContent = isLast ? 'Voir mon résultat' : 'Question suivante';
    submit.disabled = false;
}

function next() {
    if (state.index < state.questions.length - 1) {
        state.index += 1;
        renderQuestion();
        $('qcm-question-text').focus();
        window.scrollTo({ top: 0 });
    } else {
        renderResults();
        showScreen('qcm-results', 'qcm-results-title');
    }
}

/* ==================== RÉSULTATS ==================== */

function level(percent) {
    if (percent >= 80) return { symbol: '★', label: 'Excellent', message: 'Vous maîtrisez bien ces notions. Passez à un autre bloc ou augmentez le nombre de questions.' };
    if (percent >= 60) return { symbol: '▲', label: 'Satisfaisant', message: 'Bonne base : reprenez les questions ratées ci-dessous pour consolider.' };
    return { symbol: '●', label: 'À retravailler', message: 'Relisez les explications ci-dessous puis refaites vos erreurs.' };
}

function renderResults() {
    const total = state.answers.length;
    const good = state.answers.filter((a) => a.correct).length;
    const percent = total ? Math.round((good / total) * 100) : 0;
    const lvl = level(percent);

    $('qcm-score-value').innerHTML = `<span class="qcm-score-percent">${percent}%</span><span class="qcm-score-detail">${good} / ${total} bonnes réponses</span>`;
    const levelEl = $('qcm-score-level');
    levelEl.innerHTML = `<span aria-hidden="true">${lvl.symbol}</span> ${lvl.label}`;
    levelEl.dataset.level = percent >= 80 ? 'high' : percent >= 60 ? 'mid' : 'low';
    $('qcm-score-message').textContent = lvl.message;

    $('qcm-bloc-breakdown').innerHTML = BLOCS.filter((b) => b.key !== 'all')
        .map((b) => {
            const answers = state.answers.filter((a) => a.question.blocKey === b.key);
            if (answers.length === 0) return '';
            const ok = answers.filter((a) => a.correct).length;
            return `<tr>
                <th scope="row">${escapeHtml(b.label)}</th>
                <td>${ok} / ${answers.length}</td>
                <td>${Math.round((ok / answers.length) * 100)}%</td>
            </tr>`;
        })
        .join('');

    const mistakes = state.answers.filter((a) => !a.correct);
    $('qcm-mistakes-title').textContent = mistakes.length
        ? `À revoir (${mistakes.length})`
        : 'À revoir';
    $('qcm-mistakes').innerHTML = mistakes.length
        ? mistakes.map(mistakeCard).join('')
        : '<p class="qcm-empty">Aucune erreur sur cette série. Bravo !</p>';
    $('qcm-retry-mistakes').hidden = mistakes.length === 0;

    announce(`QCM terminé : ${good} bonnes réponses sur ${total}, soit ${percent}%.`);
}

function mistakeCard(a) {
    const q = a.question;
    const yours = a.selected.map((i) => q.options[i].texte);
    const expected = q.options.filter((o) => o.correct).map((o) => o.texte);
    return `<details class="question-detail qcm-mistake">
        <summary>${escapeHtml(q.question)}</summary>
        <div class="qcm-mistake-body">
            <p><strong>✗ Votre réponse :</strong> ${yours.map(escapeHtml).join(' · ')}</p>
            <p><strong>✓ Bonne réponse :</strong> ${expected.map(escapeHtml).join(' · ')}</p>
            ${q.explication ? `<p>${escapeHtml(q.explication)}</p>` : ''}
        </div>
    </details>`;
}

/* ==================== INIT ==================== */

function init() {
    if (!$('qcm-setup')) return;
    $('qcm-total').textContent = QCM.length;

    renderSetup();

    $('qcm-bloc-choices').addEventListener('change', (e) => {
        state.bloc = e.target.value;
        renderCountChoices();
    });

    $('qcm-count-choices').addEventListener('change', (e) => {
        state.count = e.target.value === 'all' ? 'all' : Number(e.target.value);
        renderSetupSummary();
    });

    $('qcm-setup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        startSession(shuffle(available(state.bloc)).slice(0, sessionSize()));
    });

    $('qcm-options').addEventListener('change', () => {
        if (!state.validated) $('qcm-submit').disabled = selectedIndexes().length === 0;
    });

    $('qcm-question-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (state.validated) next();
        else validate();
    });

    $('qcm-quit').addEventListener('click', () => {
        // eslint-disable-next-line no-alert
        if (window.confirm('Arrêter ce QCM ? Les réponses de cette série seront perdues.')) {
            showScreen('qcm-setup', 'qcm-setup-title');
        }
    });

    $('qcm-restart').addEventListener('click', () => {
        showScreen('qcm-setup', 'qcm-setup-title');
    });

    $('qcm-retry-mistakes').addEventListener('click', () => {
        startSession(shuffle(state.answers.filter((a) => !a.correct).map((a) => a.question)));
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
