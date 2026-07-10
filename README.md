# Checklist RNCP6 CDA

Outil d'aide à la préparation du titre **RNCP6 CDA** — Concepteur Développeur
d'Applications (RNCP37873). Il aide les candidat·es à construire leur **dossier de
projet** et à préparer leur **soutenance** face au jury.

🔗 **En ligne :** <https://checklist-rncp6-cda.vercel.app>

## ✨ Fonctionnalités

- **Checklist** (`index.html`) — suivi des livrables attendus par démo, avec notes
  personnelles, progression, recherche et export.
- **Questions du jury** (`questions.html`) — banque de **202 questions** type que le
  jury peut poser à l'oral, chacune avec la **réponse attendue** et les **points de
  vigilance**. Filtrable par **niveau**, **démo**, **catégorie** et **type**
  (mise en situation, technique, défense de choix…), plus une recherche plein texte.
- **Accessibilité** soignée : contrastes WCAG AA, focus clavier visible, information
  jamais portée par la seule couleur (icône/forme + libellé).

## 🧱 Stack

Site **statique**, sans framework ni étape de build :

- **HTML / CSS / JavaScript** (modules ES natifs)
- Design system maison via **tokens CSS** (`:root` de `styles.css`)
- Qualité : **HTMLHint** + **Stylelint**, tests d'accessibilité **Playwright + axe-core**
- Hébergement : **Vercel**

## 🚀 Démarrage rapide

```bash
git clone https://github.com/anais0210/checklist-rncp6-cda.git
cd checklist-rncp6-cda
npm install          # dépendances de lint et de tests

# Lancer le site en local (serveur statique au choix)
python3 -m http.server 4244
# puis ouvrir http://localhost:4244
```

## 📜 Scripts npm

| Commande | Rôle |
|---|---|
| `npm run lint` | Lint HTML **et** CSS |
| `npm run lint:html` | Lint HTML (HTMLHint) |
| `npm run lint:css` | Lint + correction auto CSS (Stylelint) |
| `npm run test:a11y` | Tests d'accessibilité (Playwright + axe-core) |
| `npm run deploy` | Déploiement en production (Vercel) |

La CI GitHub Actions (`.github/workflows/quality.yaml`) rejoue lint HTML, lint CSS et
tests d'accessibilité sur chaque `push` et chaque _pull request_ vers `main`.

## 🗂️ Structure

```
checklist-rncp6-cda/
├── index.html              # Page checklist
├── questions.html          # Page questions du jury (filtrable)
├── styles.css              # Design system + styles (tokens :root)
├── js/
│   ├── questions-data.js   # 202 questions (généré depuis les Excel source)
│   ├── questions-page.js   # Rendu + filtres de la page questions
│   ├── app.js, filters.js, search-manager.js, progress.js, …  # Logique de la checklist
│   └── …
├── .github/workflows/      # CI qualité
└── CONTRIBUTING.md         # Comment contribuer (fork, PR, règles)
```

> Les questions (`js/questions-data.js`) sont **générées** depuis des fichiers Excel
> source. Pour en ajouter, voir [CONTRIBUTING.md](CONTRIBUTING.md).

## 🤝 Contribuer

Les contributions sont les bienvenues (nouvelles questions du jury, corrections,
accessibilité…). Le guide [**CONTRIBUTING.md**](CONTRIBUTING.md) explique tout, y
compris **la notion de _fork_** si tu débutes avec Git.

En résumé : _fork_ → branche → modifs → `npm run lint && npm run test:a11y` →
_pull request_ vers `main`.

## 📄 Licence

Distribué sous licence **ISC** — voir [LICENSE](LICENSE).
