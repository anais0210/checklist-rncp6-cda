# Contribuer à Checklist RNCP6 CDA

Merci de vouloir améliorer ce projet ! Il aide les candidat·es au titre **RNCP6 CDA**
(Concepteur Développeur d'Applications) à préparer leur dossier et leur soutenance.

Toutes les contributions sont les bienvenues :

- 🗣️ **Nouvelles questions du jury** (vécues à l'oral) ou corrections de réponses
- 🐛 **Corrections de bugs** (affichage, filtres, accessibilité)
- ♿ **Améliorations d'accessibilité**
- 📝 **Corrections de fautes / clarifications**

Pas besoin d'être développeur·se confirmé·e : ce guide t'explique tout, y compris **la
notion de _fork_** si tu ne l'as jamais fait.

---

## 🍴 C'est quoi un « fork » ?

Tu **n'as pas** les droits d'écriture sur ce dépôt (`anais0210/checklist-rncp6-cda`).
Tu ne peux donc pas y pousser directement tes modifications. Le _fork_ résout ça.

> **Un fork = ta copie personnelle du projet, sur ton propre compte GitHub.**
> Tu as tous les droits sur *ta* copie. Tu y fais tes changements tranquillement, puis
> tu **proposes** de les reverser au projet d'origine via une *Pull Request*.

Ne pas confondre :

| Terme | Ce que c'est |
|---|---|
| **Fork** | Une copie du dépôt **sur ton compte GitHub** (côté serveur). Point de départ quand tu n'es pas membre du projet. |
| **Clone** | Télécharger un dépôt **sur ton ordinateur** pour y travailler en local. |
| **Branche** | Une ligne de travail isolée **à l'intérieur** d'un dépôt, pour ne pas casser `main`. |
| **Pull Request (PR)** | La demande d'intégrer les changements de **ta** branche/fork vers le projet d'origine. |

Schéma du flux :

```
anais0210/checklist-rncp6-cda   ──(1. Fork)──▶   TON-COMPTE/checklist-rncp6-cda
        ▲                                                  │
        │                                          (2. Clone en local)
        │                                                  ▼
   (5. Pull Request)                            ta machine : branche + commits
        │                                                  │
        └──────────────────(4. Push)◀─────────────────────┘
```

---

## 🚀 Étapes pas à pas

### 1. Forker le dépôt
Sur la page GitHub du projet, clique sur **« Fork »** (en haut à droite). GitHub crée
`https://github.com/TON-COMPTE/checklist-rncp6-cda`.

### 2. Cloner **ton** fork en local
```bash
git clone https://github.com/TON-COMPTE/checklist-rncp6-cda.git
cd checklist-rncp6-cda
```

### 3. Installer les dépendances (pour les linters et tests)
```bash
npm install
```

### 4. Créer une branche dédiée
Un nom court et parlant, jamais directement sur `main` :
```bash
git checkout -b ajout-question-docker
```

### 5. Faire tes modifications
Voir plus bas « Lancer le site » et « Règles du projet ». Vérifie **avant** de commiter :
```bash
npm run lint        # HTML + CSS
npm run test:a11y   # tests d'accessibilité
```

### 6. Committer
```bash
git add .
git commit -m "Ajoute une question sur les volumes Docker"
```

### 7. Pousser sur **ton** fork
```bash
git push -u origin ajout-question-docker
```

### 8. Ouvrir la Pull Request
GitHub affiche un bouton **« Compare & pull request »**. La cible est
`anais0210/checklist-rncp6-cda` → branche `main`. Décris ce que tu changes et pourquoi.

### 9. (Plus tard) Garder ton fork à jour
Le projet d'origine (« upstream ») évolue. Pour récupérer ses nouveautés :
```bash
git remote add upstream https://github.com/anais0210/checklist-rncp6-cda.git
git fetch upstream
git checkout main
git merge upstream/main
```

---

## 🖥️ Lancer le site en local

C'est un site **statique** (HTML/CSS/JS, sans build). Sers-le avec n'importe quel
serveur statique, par exemple :
```bash
python3 -m http.server 4244
# puis ouvre http://localhost:4244
```

## 🗂️ Ajouter ou corriger des questions du jury

Les 202 questions sont **générées** depuis des fichiers Excel source vers
`js/questions-data.js` (l'en-tête du fichier le rappelle : _ne pas éditer à la main_
pour un ajout en masse).

- **Quelques questions / une correction** : tu peux éditer `js/questions-data.js` en
  respectant **exactement** le schéma des objets existants
  (`bloc`, `categorie`, `demo`, `demoKey`, `niveau`, `niveauKey`, `type`, `question`,
  `reponse`, `vigilance`…). Renumérote au besoin.
- **Un lot de questions** : ouvre plutôt une **issue** en joignant ta liste (ou un
  Excel au même format), la mainteneuse régénère proprement le fichier.

## ✅ Règles du projet (à respecter dans ta PR)

1. **Une page = une PR.** Ne mélange pas plusieurs chantiers dans une même demande.
2. **Design system uniquement.** Passe par les tokens CSS (`:root` de `styles.css`) —
   jamais de couleur, police ou rayon écrits en dur.
3. **Accessibilité non négociable (WCAG AA).** Contrastes suffisants, focus clavier
   visible, et l'information **jamais portée par la seule couleur** (toujours
   icône/forme + libellé).
4. **Le lint et les tests doivent rester verts** (`npm run lint`, `npm run test:a11y`).
   La CI GitHub Actions les rejoue sur chaque PR.
5. **Commits et PR clairs**, en français, décrivant le _quoi_ et le _pourquoi_.

Merci beaucoup pour ta contribution ! 🙌
