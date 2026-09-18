// QCM d'entraînement RNCP6 CDA — 110 questions reprises de quiz4dev (src/data/qcmBase.ts).
// Rattachement aux blocs du référentiel 2023 fait depuis les sous-compétences de l'ancien référentiel (C1/C2/C3).
// Fichier source désormais : on peut l'éditer à la main (une seule option `correct: true`,
// ou plusieurs avec `multiple: true`). Les options sont mélangées à l'affichage.

export const QCM = [
    {
        "num": 1,
        "id": "base_qcm_c1_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Théorique",
        "question": "Qu'est-ce qu'une maquette dans le développement d'applications ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une représentation visuelle de l'interface utilisatrice·eur avant développement",
                "correct": true,
                "explication": "Une maquette (mockup) est effectivement une représentation visuelle statique de l'interface."
            },
            {
                "texte": "Un prototype fonctionnel de l'application",
                "correct": false,
                "explication": "Un prototype est interactif, contrairement à une maquette qui est statique."
            },
            {
                "texte": "Le code source de l'interface",
                "correct": false,
                "explication": "Le code source vient après la phase de maquettage."
            },
            {
                "texte": "La documentation technique",
                "correct": false,
                "explication": "La documentation technique ne concerne pas la représentation visuelle."
            }
        ],
        "explication": "Le maquettage est une étape cruciale de conception qui permet de visualiser l'interface avant le développement."
    },
    {
        "num": 2,
        "id": "base_qcm_c1_2",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Pratique",
        "question": "Quelle propriété CSS permet de créer un layout flexible ?",
        "multiple": false,
        "options": [
            {
                "texte": "display: flex",
                "correct": true,
                "explication": "Flexbox est effectivement un système de layout flexible introduit en CSS3."
            },
            {
                "texte": "position: absolute",
                "correct": false,
                "explication": "Position absolute retire l'élément du flux normal, ce n'est pas flexible."
            },
            {
                "texte": "float: left",
                "correct": false,
                "explication": "Float est une ancienne méthode, moins flexible que flexbox."
            },
            {
                "texte": "display: block",
                "correct": false,
                "explication": "Display block ne crée pas de layout flexible."
            }
        ],
        "explication": "Flexbox révolutionne la création de layouts en offrant flexibilité et simplicité."
    },
    {
        "num": 3,
        "id": "base_qcm_c1_3",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Pratique",
        "question": "Comment sélectionner un élément par son ID en JavaScript ?",
        "multiple": false,
        "options": [
            {
                "texte": "document.getElementById(\"monId\")",
                "correct": true,
                "explication": "getElementById() est la méthode standard pour sélectionner un élément par son ID."
            },
            {
                "texte": "document.getElement(\"monId\")",
                "correct": false,
                "explication": "Cette méthode n'existe pas en JavaScript."
            },
            {
                "texte": "document.querySelector(\"#monId\")",
                "correct": false,
                "explication": "Bien que fonctionnelle, cette méthode est plus générique et moins spécifique."
            },
            {
                "texte": "document.findById(\"monId\")",
                "correct": false,
                "explication": "Cette méthode n'existe pas en JavaScript natif."
            }
        ],
        "explication": "La manipulation du DOM est fondamentale en JavaScript pour créer des interfaces dynamiques."
    },
    {
        "num": 4,
        "id": "base_qcm_c2_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce qu'une clé primaire dans une base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un identifiant unique pour chaque enregistrement d'une table",
                "correct": true,
                "explication": "La clé primaire garantit l'unicité de chaque ligne dans une table."
            },
            {
                "texte": "Une clé pour chiffrer les données",
                "correct": false,
                "explication": "La clé primaire ne concerne pas le chiffrement mais l'identification."
            },
            {
                "texte": "Une référence vers une autre table",
                "correct": false,
                "explication": "Ceci décrit plutôt une clé étrangère."
            },
            {
                "texte": "Un index pour accélérer les recherches",
                "correct": false,
                "explication": "Bien qu'un index soit créé automatiquement, ce n'est pas la définition principale."
            }
        ],
        "explication": "Les clés primaires sont essentielles pour maintenir l'intégrité des données."
    },
    {
        "num": 5,
        "id": "base_qcm_c2_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Quelle commande SQL permet de créer une nouvelle table ?",
        "multiple": false,
        "options": [
            {
                "texte": "CREATE TABLE nom_table (...)",
                "correct": true,
                "explication": "CREATE TABLE est effectivement la commande DDL pour créer une table."
            },
            {
                "texte": "INSERT TABLE nom_table (...)",
                "correct": false,
                "explication": "INSERT sert à ajouter des données, pas à créer une structure."
            },
            {
                "texte": "NEW TABLE nom_table (...)",
                "correct": false,
                "explication": "NEW n'est pas une commande SQL standard."
            },
            {
                "texte": "ADD TABLE nom_table (...)",
                "correct": false,
                "explication": "ADD est utilisé avec ALTER TABLE, pas pour créer une nouvelle table."
            }
        ],
        "explication": "Les commandes DDL (Data Definition Language) gèrent la structure des bases de données."
    },
    {
        "num": 6,
        "id": "base_qcm_c3_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Théorique",
        "question": "Que signifie l'acronyme \"Git\" dans le contexte du développement ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un système de contrôle de version distribué",
                "correct": true,
                "explication": "Git est effectivement un système de contrôle de version créé par Linus Torvalds."
            },
            {
                "texte": "Un framework JavaScript",
                "correct": false,
                "explication": "Git n'est pas un framework mais un outil de versioning."
            },
            {
                "texte": "Un serveur web",
                "correct": false,
                "explication": "Git n'est pas un serveur web mais un outil de développement."
            },
            {
                "texte": "Un langage de programmation",
                "correct": false,
                "explication": "Git est un outil, pas un langage de programmation."
            }
        ],
        "explication": "Git est devenu l'outil de référence pour la gestion de versions dans le développement moderne."
    },
    {
        "num": 7,
        "id": "base_qcm_c3_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Théorique",
        "question": "Qu'est-ce que le pattern MVC ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un pattern architectural séparant Modèle, Vue et Contrôleur",
                "correct": true,
                "explication": "MVC sépare effectivement les données (Model), l'affichage (View) et la logique (Controller)."
            },
            {
                "texte": "Un type de base de données",
                "correct": false,
                "explication": "MVC est un pattern architectural, pas un type de base de données."
            },
            {
                "texte": "Un framework CSS",
                "correct": false,
                "explication": "MVC n'est pas spécifique au CSS mais à l'architecture logicielle."
            },
            {
                "texte": "Un protocole réseau",
                "correct": false,
                "explication": "MVC concerne l'organisation du code, pas les communications réseau."
            }
        ],
        "explication": "Le pattern MVC favorise la séparation des responsabilités et la maintenabilité du code."
    },
    {
        "num": 8,
        "id": "base_qcm_c3_3",
        "bloc": "Bloc 3 — Déploiement sécurisé",
        "blocKey": "bloc3",
        "theme": "Tests",
        "type": "Théorique",
        "question": "Qu'est-ce qu'un test unitaire ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un test qui vérifie le bon fonctionnement d'une unité de code isolée",
                "correct": true,
                "explication": "Les tests unitaires testent des composants individuels en isolation."
            },
            {
                "texte": "Un test qui vérifie l'interface utilisatrice·eur complète",
                "correct": false,
                "explication": "Ceci décrit plutôt des tests d'interface ou end-to-end."
            },
            {
                "texte": "Un test de performance de l'application",
                "correct": false,
                "explication": "Les tests de performance sont une catégorie différente."
            },
            {
                "texte": "Un test de sécurité",
                "correct": false,
                "explication": "Les tests de sécurité sont spécialisés dans la détection de vulnérabilités."
            }
        ],
        "explication": "Les tests unitaires sont la base d'une stratégie de test robuste et permettent un développement plus sûr."
    },
    {
        "num": 9,
        "id": "base_qcm_general_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Théorique",
        "question": "Qu'est-ce que le responsive design ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une approche de conception qui s'adapte à différentes tailles d'écran",
                "correct": true,
                "explication": "Le responsive design permet aux sites web de s'adapter automatiquement aux différents appareils."
            },
            {
                "texte": "Un framework JavaScript",
                "correct": false,
                "explication": "Le responsive design est un concept de design, pas un framework."
            },
            {
                "texte": "Une technique de référencement",
                "correct": false,
                "explication": "Bien que bénéfique pour le SEO, ce n'est pas sa définition principale."
            },
            {
                "texte": "Un type de base de données",
                "correct": false,
                "explication": "Le responsive design concerne l'interface utilisatrice·eur, pas les données."
            }
        ],
        "explication": "Avec la diversité des appareils, le responsive design est devenu incontournable."
    },
    {
        "num": 10,
        "id": "base_qcm_architecture_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Mise en situation",
        "question": "Lors du choix d'un framework, quel critère technique est le PLUS important pour un projet d'entreprise ?",
        "multiple": false,
        "options": [
            {
                "texte": "La maintenabilité et la pérennité du framework",
                "correct": true,
                "explication": "En entreprise, la maintenabilité à long terme est cruciale pour éviter la dette technique."
            },
            {
                "texte": "La popularité sur GitHub",
                "correct": false,
                "explication": "La popularité est un indicateur mais pas le critère principal pour un choix technique."
            },
            {
                "texte": "La facilité d'apprentissage",
                "correct": false,
                "explication": "Important pour la montée en compétences mais pas prioritaire face à la maintenabilité."
            },
            {
                "texte": "Le nombre de fonctionnalités disponibles",
                "correct": false,
                "explication": "Trop de fonctionnalités peuvent créer de la complexité inutile (over-engineering)."
            }
        ],
        "explication": "Le choix de frameworks doit privilégier la maintenabilité, l'écosystème et l'alignement avec les besoins métier."
    },
    {
        "num": 11,
        "id": "base_qcm_security_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Quelle est la PREMIÈRE mesure de sécurité à implémenter lors de l'accès à une base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser des requêtes paramétrées (prepared statements)",
                "correct": true,
                "explication": "Les requêtes paramétrées préviennent les injections SQL, vulnérabilité critique OWASP."
            },
            {
                "texte": "Chiffrer toutes les données",
                "correct": false,
                "explication": "Le chiffrement est important mais ne protège pas contre les injections SQL."
            },
            {
                "texte": "Limiter les privilèges utilisatrice·eur",
                "correct": false,
                "explication": "Principe de moindre privilège important mais pas la priorité immédiate."
            },
            {
                "texte": "Utiliser HTTPS",
                "correct": false,
                "explication": "HTTPS sécurise le transport mais pas l'accès à la base de données."
            }
        ],
        "explication": "Les injections SQL sont dans le top 3 OWASP. Les prepared statements sont la défense de base."
    },
    {
        "num": 12,
        "id": "base_qcm_testing_1",
        "bloc": "Bloc 3 — Déploiement sécurisé",
        "blocKey": "bloc3",
        "theme": "Tests",
        "type": "Théorique",
        "question": "Dans une stratégie de tests, quel type de test doit représenter la PLUS grande proportion ?",
        "multiple": false,
        "options": [
            {
                "texte": "Les tests unitaires",
                "correct": true,
                "explication": "Pyramide de tests : nombreux tests unitaires (base), moins d'intégration, très peu d'E2E (sommet)."
            },
            {
                "texte": "Les tests d'intégration",
                "correct": false,
                "explication": "Tests d'intégration importants mais moins nombreux que les unitaires (plus lents, complexes)."
            },
            {
                "texte": "Les tests end-to-end (E2E)",
                "correct": false,
                "explication": "Tests E2E au sommet de la pyramide : peu nombreux car lents et fragiles."
            },
            {
                "texte": "Les tests manuels",
                "correct": false,
                "explication": "Tests manuels pour cas spécifiques mais ne doivent pas être la majorité."
            }
        ],
        "explication": "La pyramide de tests privilégie les tests unitaires : rapides, fiables et faciles à maintenir."
    },
    {
        "num": 13,
        "id": "base_qcm_devops_1",
        "bloc": "Bloc 3 — Déploiement sécurisé",
        "blocKey": "bloc3",
        "theme": "Déploiement",
        "type": "Théorique",
        "question": "Quel est l'avantage PRINCIPAL de l'intégration continue (CI) ?",
        "multiple": false,
        "options": [
            {
                "texte": "Détecter rapidement les régressions et conflits",
                "correct": true,
                "explication": "CI permet de détecter immédiatement les problèmes à chaque commit, réduisant les risques."
            },
            {
                "texte": "Automatiser le déploiement en production",
                "correct": false,
                "explication": "Ceci décrit le déploiement continu (CD), pas l'intégration continue (CI)."
            },
            {
                "texte": "Générer automatiquement la documentation",
                "correct": false,
                "explication": "Fonctionnalité possible mais pas l'objectif principal de la CI."
            },
            {
                "texte": "Optimiser les performances de l'application",
                "correct": false,
                "explication": "La CI peut inclure des tests de performance mais ce n'est pas son rôle principal."
            }
        ],
        "explication": "La CI réduit les risques en intégrant fréquemment le code et en exécutant les tests automatiquement."
    },
    {
        "num": 14,
        "id": "base_qcm_patterns_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Architecture en couches",
        "type": "Théorique",
        "question": "Le pattern Repository sert principalement à :",
        "multiple": false,
        "options": [
            {
                "texte": "Encapsuler la logique d'accès aux données",
                "correct": true,
                "explication": "Repository abstrait l'accès aux données, permettant de changer de source sans impacter le métier."
            },
            {
                "texte": "Créer une seule instance d'un objet",
                "correct": false,
                "explication": "Ceci décrit le pattern Singleton, pas Repository."
            },
            {
                "texte": "Observer les changements d'état",
                "correct": false,
                "explication": "Ceci décrit le pattern Observer, pas Repository."
            },
            {
                "texte": "Créer des objets de manière flexible",
                "correct": false,
                "explication": "Ceci décrit le pattern Factory, pas Repository."
            }
        ],
        "explication": "Repository centralise et abstrait l'accès aux données, améliorant la testabilité et la maintenabilité."
    },
    {
        "num": 15,
        "id": "base_qcm_c1_4",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Théorique",
        "question": "Qu'est-ce que le CSS Grid Layout ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un système de layout bidimensionnel pour créer des grilles complexes",
                "correct": true,
                "explication": "CSS Grid permet de créer des layouts en 2D avec des lignes et colonnes."
            },
            {
                "texte": "Un framework CSS comme Bootstrap",
                "correct": false,
                "explication": "CSS Grid est natif au CSS, pas un framework externe."
            },
            {
                "texte": "Un système de flexbox amélioré",
                "correct": false,
                "explication": "Grid et Flexbox sont deux systèmes différents, pas une amélioration."
            },
            {
                "texte": "Un outil de génération de CSS",
                "correct": false,
                "explication": "CSS Grid est une propriété CSS native, pas un outil de génération."
            }
        ],
        "explication": "CSS Grid Layout est un système de mise en page bidimensionnel introduit en CSS3."
    },
    {
        "num": 16,
        "id": "base_qcm_c1_5",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Théorique",
        "question": "Qu'est-ce que le Virtual DOM en React ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une représentation JavaScript du DOM réel pour optimiser les performances",
                "correct": true,
                "explication": "Le Virtual DOM permet de minimiser les manipulations du DOM réel."
            },
            {
                "texte": "Un DOM virtuel pour les applications mobiles",
                "correct": false,
                "explication": "Le Virtual DOM n'est pas spécifique aux applications mobiles."
            },
            {
                "texte": "Un outil de développement pour inspecter le DOM",
                "correct": false,
                "explication": "Ce n'est pas un outil de développement mais un concept de React."
            },
            {
                "texte": "Un DOM sécurisé pour les applications sensibles",
                "correct": false,
                "explication": "Le Virtual DOM n'est pas lié à la sécurité mais aux performances."
            }
        ],
        "explication": "Le Virtual DOM améliore les performances en minimisant les manipulations du DOM réel."
    },
    {
        "num": 17,
        "id": "base_qcm_c2_3",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce qu'une clé étrangère en base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une contrainte qui établit une relation entre deux tables",
                "correct": true,
                "explication": "La clé étrangère crée une relation référentielle entre tables."
            },
            {
                "texte": "Une clé de chiffrement pour sécuriser les données",
                "correct": false,
                "explication": "Ceci décrit une clé de chiffrement, pas une clé étrangère."
            },
            {
                "texte": "Une clé primaire temporaire",
                "correct": false,
                "explication": "Une clé étrangère référence une clé primaire, mais n'en est pas une."
            },
            {
                "texte": "Une clé d'index pour optimiser les requêtes",
                "correct": false,
                "explication": "Ceci décrit un index, pas une clé étrangère."
            }
        ],
        "explication": "Les clés étrangères maintiennent l'intégrité référentielle entre les tables."
    },
    {
        "num": 18,
        "id": "base_qcm_c2_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce que la normalisation en base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un processus pour éliminer la redondance et les anomalies de données",
                "correct": true,
                "explication": "La normalisation optimise la structure de la base de données."
            },
            {
                "texte": "Un processus pour standardiser les noms de tables",
                "correct": false,
                "explication": "Ceci concerne la nomenclature, pas la normalisation."
            },
            {
                "texte": "Un processus pour chiffrer les données sensibles",
                "correct": false,
                "explication": "Ceci décrit le chiffrement, pas la normalisation."
            },
            {
                "texte": "Un processus pour optimiser les performances des requêtes",
                "correct": false,
                "explication": "Ceci décrit l'optimisation, pas la normalisation."
            }
        ],
        "explication": "La normalisation suit des règles (1NF, 2NF, 3NF) pour optimiser la structure."
    },
    {
        "num": 19,
        "id": "base_qcm_c3_4",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Théorique",
        "question": "Qu'est-ce que l'architecture en couches ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une organisation du code en niveaux logiques avec des responsabilités distinctes",
                "correct": true,
                "explication": "L'architecture en couches sépare les préoccupations logiquement."
            },
            {
                "texte": "Une organisation physique des fichiers en dossiers",
                "correct": false,
                "explication": "Ceci décrit l'organisation des fichiers, pas l'architecture logicielle."
            },
            {
                "texte": "Une méthode de déploiement en plusieurs étapes",
                "correct": false,
                "explication": "Ceci décrit le déploiement, pas l'architecture logicielle."
            },
            {
                "texte": "Une technique de sécurité par niveaux",
                "correct": false,
                "explication": "Ceci décrit la sécurité en couches, pas l'architecture logicielle."
            }
        ],
        "explication": "L'architecture en couches améliore la maintenabilité et la testabilité."
    },
    {
        "num": 20,
        "id": "base_qcm_c1_6",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Pratique",
        "question": "Comment créer un layout responsive avec CSS Grid ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser grid-template-columns avec repeat() et auto-fit",
                "correct": true,
                "explication": "auto-fit permet aux colonnes de s'adapter automatiquement à l'espace disponible."
            },
            {
                "texte": "Utiliser uniquement des media queries",
                "correct": false,
                "explication": "Grid peut être responsive sans media queries grâce à auto-fit."
            },
            {
                "texte": "Utiliser flexbox avec flex-wrap",
                "correct": false,
                "explication": "Ceci décrit Flexbox, pas CSS Grid."
            },
            {
                "texte": "Utiliser des pourcentages fixes",
                "correct": false,
                "explication": "Les pourcentages fixes ne sont pas vraiment responsives."
            }
        ],
        "explication": "CSS Grid avec auto-fit crée des layouts responsives automatiquement."
    },
    {
        "num": 21,
        "id": "base_qcm_c1_7",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Pratique",
        "question": "Comment gérer l'état local dans un composant React ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser le hook useState pour les données qui changent",
                "correct": true,
                "explication": "useState est le hook standard pour l'état local dans les composants fonctionnels."
            },
            {
                "texte": "Utiliser uniquement les props",
                "correct": false,
                "explication": "Les props sont en lecture seule, pas pour l'état local."
            },
            {
                "texte": "Utiliser des variables globales",
                "correct": false,
                "explication": "Les variables globales ne sont pas recommandées en React."
            },
            {
                "texte": "Utiliser localStorage directement",
                "correct": false,
                "explication": "localStorage est pour la persistance, pas l'état local du composant."
            }
        ],
        "explication": "useState permet de gérer l'état local et déclenche le re-rendu automatiquement."
    },
    {
        "num": 22,
        "id": "base_qcm_c2_5",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Comment optimiser une requête SQL lente ?",
        "multiple": false,
        "options": [
            {
                "texte": "Ajouter des index appropriés et analyser le plan d'exécution",
                "correct": true,
                "explication": "Les index et l'analyse du plan d'exécution sont essentiels pour l'optimisation."
            },
            {
                "texte": "Utiliser SELECT * pour récupérer toutes les colonnes",
                "correct": false,
                "explication": "SELECT * peut ralentir les requêtes, il vaut mieux spécifier les colonnes."
            },
            {
                "texte": "Éviter les jointures à tout prix",
                "correct": false,
                "explication": "Les jointures sont nécessaires, il faut les optimiser, pas les éviter."
            },
            {
                "texte": "Utiliser des sous-requêtes au lieu de jointures",
                "correct": false,
                "explication": "Les sous-requêtes peuvent être plus lentes que les jointures optimisées."
            }
        ],
        "explication": "L'optimisation SQL passe par les index, l'analyse des plans et la révision des requêtes."
    },
    {
        "num": 23,
        "id": "base_qcm_c3_5",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Pratique",
        "question": "Comment implémenter le pattern Observer en JavaScript ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser un système d'événements avec addEventListener ou un EventEmitter",
                "correct": true,
                "explication": "Le pattern Observer peut être implémenté avec des événements natifs ou personnalisés."
            },
            {
                "texte": "Utiliser uniquement des callbacks synchrones",
                "correct": false,
                "explication": "Les callbacks synchrones ne constituent pas le pattern Observer complet."
            },
            {
                "texte": "Utiliser des variables globales partagées",
                "correct": false,
                "explication": "Les variables globales ne sont pas une implémentation propre du pattern Observer."
            },
            {
                "texte": "Utiliser des timers setInterval",
                "correct": false,
                "explication": "Les timers ne sont pas appropriés pour le pattern Observer."
            }
        ],
        "explication": "Le pattern Observer permet une communication découplée entre objets."
    },
    {
        "num": 24,
        "id": "base_qcm_situation_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Mise en situation",
        "question": "Un client se plaint que l'interface de votre application est difficile à utiliser sur mobile. Que faites-vous en premier ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les métriques d'utilisation et tester l'interface sur différents appareils",
                "correct": true,
                "explication": "Il faut d'abord diagnostiquer le problème avant de proposer des solutions."
            },
            {
                "texte": "Refaire complètement l'interface mobile",
                "correct": false,
                "explication": "Il faut d'abord identifier les problèmes spécifiques avant de tout refaire."
            },
            {
                "texte": "Ignorer la plainte car l'interface fonctionne sur desktop",
                "correct": false,
                "explication": "L'expérience mobile est cruciale aujourd'hui, il faut la prendre au sérieux."
            },
            {
                "texte": "Demander au client de préciser exactement ce qui ne va pas",
                "correct": false,
                "explication": "Bien que utile, il faut d'abord faire ses propres tests et analyses."
            }
        ],
        "explication": "L'analyse des métriques et les tests utilisateur sont essentiels pour diagnostiquer les problèmes UX."
    },
    {
        "num": 25,
        "id": "base_qcm_situation_3",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Mise en situation",
        "question": "Votre base de données devient lente avec l'augmentation des données. Quelle approche privilégiez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les requêtes lentes et optimiser les index avant de considérer d'autres solutions",
                "correct": true,
                "explication": "L'optimisation des requêtes et index est souvent la solution la plus efficace."
            },
            {
                "texte": "Migrer immédiatement vers une base NoSQL",
                "correct": false,
                "explication": "La migration vers NoSQL est une décision majeure qui nécessite une analyse approfondie."
            },
            {
                "texte": "Augmenter la puissance du serveur de base de données",
                "correct": false,
                "explication": "Le scaling vertical peut être coûteux et ne résout pas toujours les problèmes de conception."
            },
            {
                "texte": "Réduire la quantité de données stockées",
                "correct": false,
                "explication": "La réduction des données peut impacter la fonctionnalité de l'application."
            }
        ],
        "explication": "L'optimisation des requêtes et index est généralement la première étape pour améliorer les performances."
    },
    {
        "num": 26,
        "id": "base_qcm_situation_4",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Composants métier",
        "type": "Mise en situation",
        "question": "Votre équipe a des difficultés à maintenir le code existant. Quelle stratégie adoptez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Implémenter des tests automatisés et refactoriser progressivement le code",
                "correct": true,
                "explication": "Les tests permettent de refactoriser en toute sécurité et d'améliorer la maintenabilité."
            },
            {
                "texte": "Recruter plus de développeurs pour compenser",
                "correct": false,
                "explication": "Plus de développeurs sur du code difficile à maintenir peut aggraver le problème."
            },
            {
                "texte": "Recommencer le projet depuis zéro",
                "correct": false,
                "explication": "Recommencer depuis zéro est rarement la meilleure solution et peut être risqué."
            },
            {
                "texte": "Ignorer le problème et continuer comme avant",
                "correct": false,
                "explication": "Ignorer les problèmes de maintenabilité aggrave la situation à long terme."
            }
        ],
        "explication": "Les tests automatisés et le refactoring progressif sont les meilleures pratiques pour améliorer la maintenabilité."
    },
    {
        "num": 27,
        "id": "base_qcm_analyse_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Analyse",
        "question": "Analysez les avantages et inconvénients du design system pour une application web moderne.",
        "multiple": false,
        "options": [
            {
                "texte": "Avantages : cohérence, réutilisabilité, maintenance. Inconvénients : complexité initiale, rigidité potentielle",
                "correct": true,
                "explication": "Un design system offre de nombreux avantages mais nécessite une planification initiale."
            },
            {
                "texte": "Avantages : rapidité de développement. Inconvénients : aucun",
                "correct": false,
                "explication": "Cette réponse ignore les défis de mise en place et de maintenance d'un design system."
            },
            {
                "texte": "Avantages : aucun. Inconvénients : complexité, coût, temps de développement",
                "correct": false,
                "explication": "Cette réponse ignore les bénéfices à long terme d'un design system bien conçu."
            },
            {
                "texte": "Avantages : esthétique. Inconvénients : performance",
                "correct": false,
                "explication": "Cette réponse est trop simpliste et ne couvre pas les vrais enjeux d'un design system."
            }
        ],
        "explication": "Un design system bien conçu améliore la cohérence et la maintenabilité, mais nécessite une planification initiale."
    },
    {
        "num": 28,
        "id": "base_qcm_analyse_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Analyse",
        "question": "Comparez les approches de migration de base de données : migration complète vs migration progressive.",
        "multiple": false,
        "options": [
            {
                "texte": "Migration complète : rapide mais risquée. Migration progressive : plus sûre mais plus longue",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon le contexte et les contraintes du projet."
            },
            {
                "texte": "Migration complète : toujours la meilleure option",
                "correct": false,
                "explication": "La migration complète n'est pas toujours la meilleure option selon le contexte."
            },
            {
                "texte": "Migration progressive : toujours la meilleure option",
                "correct": false,
                "explication": "La migration progressive n'est pas toujours la meilleure option selon le contexte."
            },
            {
                "texte": "Les deux approches sont équivalentes en termes de risque",
                "correct": false,
                "explication": "Les deux approches ont des profils de risque différents."
            }
        ],
        "explication": "Le choix entre migration complète et progressive dépend du contexte, des risques acceptables et des contraintes temporelles."
    },
    {
        "num": 29,
        "id": "base_qcm_analyse_3",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Analyse",
        "question": "Évaluez l'impact de l'architecture microservices sur la complexité d'un projet.",
        "multiple": false,
        "options": [
            {
                "texte": "Complexité opérationnelle augmentée mais complexité de développement réduite par service",
                "correct": true,
                "explication": "Les microservices simplifient le développement individuel mais complexifient l'orchestration globale."
            },
            {
                "texte": "Complexité réduite dans tous les aspects",
                "correct": false,
                "explication": "Les microservices ne réduisent pas automatiquement toute la complexité."
            },
            {
                "texte": "Complexité augmentée dans tous les aspects",
                "correct": false,
                "explication": "Les microservices peuvent simplifier certains aspects du développement."
            },
            {
                "texte": "Aucun impact sur la complexité",
                "correct": false,
                "explication": "L'architecture a toujours un impact sur la complexité du projet."
            }
        ],
        "explication": "Les microservices offrent des avantages en développement mais ajoutent de la complexité opérationnelle."
    },
    {
        "num": 30,
        "id": "base_qcm_analyse_4",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Analyse",
        "question": "Analysez les implications de l'utilisation de TypeScript vs JavaScript vanilla pour un projet React.",
        "multiple": false,
        "options": [
            {
                "texte": "TypeScript : sécurité de type, meilleure IDE, plus de code. JavaScript : flexibilité, moins de configuration",
                "correct": true,
                "explication": "TypeScript offre des avantages en développement mais nécessite plus de configuration et de code."
            },
            {
                "texte": "TypeScript : toujours meilleur que JavaScript",
                "correct": false,
                "explication": "Le choix dépend du contexte, de l'équipe et des besoins du projet."
            },
            {
                "texte": "JavaScript : toujours meilleur que TypeScript",
                "correct": false,
                "explication": "Le choix dépend du contexte, de l'équipe et des besoins du projet."
            },
            {
                "texte": "Aucune différence significative",
                "correct": false,
                "explication": "Il y a des différences significatives entre TypeScript et JavaScript vanilla."
            }
        ],
        "explication": "Le choix entre TypeScript et JavaScript dépend des besoins du projet et de l'expertise de l'équipe."
    },
    {
        "num": 31,
        "id": "base_qcm_analyse_5",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Analyse",
        "question": "Évaluez les stratégies de cache pour optimiser les performances d'une API REST.",
        "multiple": false,
        "options": [
            {
                "texte": "Cache HTTP : simple, efficace. Cache applicatif : plus de contrôle. Cache base de données : optimise les requêtes",
                "correct": true,
                "explication": "Chaque niveau de cache a ses avantages et cas d'usage spécifiques."
            },
            {
                "texte": "Le cache HTTP est toujours suffisant",
                "correct": false,
                "explication": "Le cache HTTP ne couvre pas tous les besoins d'optimisation."
            },
            {
                "texte": "Le cache applicatif est toujours la meilleure option",
                "correct": false,
                "explication": "Le cache applicatif n'est pas toujours la meilleure option selon le contexte."
            },
            {
                "texte": "Aucune stratégie de cache n'est nécessaire",
                "correct": false,
                "explication": "Les stratégies de cache sont souvent essentielles pour les performances."
            }
        ],
        "explication": "Une stratégie de cache multi-niveaux optimise les performances selon les besoins spécifiques."
    },
    {
        "num": 32,
        "id": "base_qcm_theorique_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Théorique",
        "question": "Qu'est-ce que le CSS-in-JS ?",
        "multiple": false,
        "options": [
            {
                "texte": "Une approche pour écrire du CSS directement dans le code JavaScript",
                "correct": true,
                "explication": "CSS-in-JS permet de gérer les styles directement dans les composants JavaScript."
            },
            {
                "texte": "Un outil pour convertir CSS en JavaScript",
                "correct": false,
                "explication": "Ce n'est pas un outil de conversion mais une approche de développement."
            },
            {
                "texte": "Un framework CSS moderne",
                "correct": false,
                "explication": "Ce n'est pas un framework mais une méthodologie de développement."
            },
            {
                "texte": "Un préprocesseur CSS",
                "correct": false,
                "explication": "Ce n'est pas un préprocesseur mais une approche de développement."
            }
        ],
        "explication": "CSS-in-JS offre une approche modulaire et dynamique pour la gestion des styles."
    },
    {
        "num": 33,
        "id": "base_qcm_theorique_2",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Théorique",
        "question": "Qu'est-ce que le Server-Side Rendering (SSR) ?",
        "multiple": false,
        "options": [
            {
                "texte": "Le rendu des pages côté serveur avant l'envoi au navigateur",
                "correct": true,
                "explication": "SSR génère le HTML côté serveur pour améliorer les performances et le SEO."
            },
            {
                "texte": "Un serveur qui gère uniquement les requêtes API",
                "correct": false,
                "explication": "Ceci décrit un serveur API, pas le SSR."
            },
            {
                "texte": "Un système de cache côté serveur",
                "correct": false,
                "explication": "Ceci décrit le cache serveur, pas le SSR."
            },
            {
                "texte": "Un protocole de communication client-serveur",
                "correct": false,
                "explication": "Ceci décrit un protocole, pas le SSR."
            }
        ],
        "explication": "SSR améliore les performances initiales et l'indexation par les moteurs de recherche."
    },
    {
        "num": 34,
        "id": "base_qcm_theorique_3",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce que l'ACID en base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "Atomicité, Cohérence, Isolation, Durabilité - propriétés des transactions",
                "correct": true,
                "explication": "ACID garantit la fiabilité des transactions en base de données."
            },
            {
                "texte": "Un protocole de sécurité pour les bases de données",
                "correct": false,
                "explication": "ACID ne concerne pas la sécurité mais la fiabilité des transactions."
            },
            {
                "texte": "Un standard de performance pour les requêtes",
                "correct": false,
                "explication": "ACID ne concerne pas la performance mais la fiabilité."
            },
            {
                "texte": "Un format de stockage des données",
                "correct": false,
                "explication": "ACID ne concerne pas le format de stockage mais les propriétés des transactions."
            }
        ],
        "explication": "ACID garantit que les transactions sont fiables même en cas de panne."
    },
    {
        "num": 35,
        "id": "base_qcm_theorique_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce que le sharding en base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "La répartition horizontale des données sur plusieurs serveurs",
                "correct": true,
                "explication": "Le sharding distribue les données pour améliorer les performances."
            },
            {
                "texte": "La sauvegarde automatique des données",
                "correct": false,
                "explication": "Ceci décrit la sauvegarde, pas le sharding."
            },
            {
                "texte": "Le chiffrement des données sensibles",
                "correct": false,
                "explication": "Ceci décrit le chiffrement, pas le sharding."
            },
            {
                "texte": "La compression des données pour économiser l'espace",
                "correct": false,
                "explication": "Ceci décrit la compression, pas le sharding."
            }
        ],
        "explication": "Le sharding permet de distribuer la charge sur plusieurs serveurs."
    },
    {
        "num": 36,
        "id": "base_qcm_theorique_5",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Théorique",
        "question": "Qu'est-ce que l'injection de dépendances ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un pattern qui fournit les dépendances d'un objet depuis l'extérieur",
                "correct": true,
                "explication": "L'injection de dépendances améliore la testabilité et la flexibilité."
            },
            {
                "texte": "Une technique de sécurité pour prévenir les attaques",
                "correct": false,
                "explication": "Ceci décrit la protection contre les injections SQL, pas l'injection de dépendances."
            },
            {
                "texte": "Un mécanisme de cache pour les objets fréquemment utilisés",
                "correct": false,
                "explication": "Ceci décrit le cache, pas l'injection de dépendances."
            },
            {
                "texte": "Un système de gestion des erreurs",
                "correct": false,
                "explication": "Ceci décrit la gestion d'erreurs, pas l'injection de dépendances."
            }
        ],
        "explication": "L'injection de dépendances améliore la testabilité et réduit le couplage."
    },
    {
        "num": 37,
        "id": "base_qcm_theorique_6",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface mobile",
        "type": "Théorique",
        "question": "Qu'est-ce que React Native ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un framework pour développer des applications mobiles avec JavaScript",
                "correct": true,
                "explication": "React Native permet de créer des apps mobiles natives avec React."
            },
            {
                "texte": "Une version mobile de React pour le web",
                "correct": false,
                "explication": "React Native n'est pas pour le web mais pour les applications mobiles natives."
            },
            {
                "texte": "Un outil de test pour React",
                "correct": false,
                "explication": "Ceci décrit un outil de test, pas React Native."
            },
            {
                "texte": "Un framework backend pour React",
                "correct": false,
                "explication": "React Native est pour le frontend mobile, pas le backend."
            }
        ],
        "explication": "React Native permet de développer des applications mobiles cross-platform."
    },
    {
        "num": 38,
        "id": "base_qcm_theorique_7",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Théorique",
        "question": "Qu'est-ce qu'un ORM ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un outil qui mappe les objets de programmation aux tables de base de données",
                "correct": true,
                "explication": "L'ORM simplifie l'accès aux données en utilisant des objets."
            },
            {
                "texte": "Un protocole de communication entre applications",
                "correct": false,
                "explication": "Ceci décrit un protocole, pas un ORM."
            },
            {
                "texte": "Un système de gestion des versions",
                "correct": false,
                "explication": "Ceci décrit Git, pas un ORM."
            },
            {
                "texte": "Un outil de migration de base de données",
                "correct": false,
                "explication": "Ceci décrit un outil de migration, pas un ORM."
            }
        ],
        "explication": "L'ORM simplifie l'accès aux données et améliore la productivité."
    },
    {
        "num": 39,
        "id": "base_qcm_theorique_8",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Théorique",
        "question": "Qu'est-ce que le pattern Singleton ?",
        "multiple": false,
        "options": [
            {
                "texte": "Un pattern qui garantit qu'une classe n'a qu'une seule instance",
                "correct": true,
                "explication": "Singleton assure qu'une seule instance existe dans toute l'application."
            },
            {
                "texte": "Un pattern pour créer plusieurs instances d'une classe",
                "correct": false,
                "explication": "Ceci décrit le pattern Factory, pas Singleton."
            },
            {
                "texte": "Un pattern pour observer les changements d'état",
                "correct": false,
                "explication": "Ceci décrit le pattern Observer, pas Singleton."
            },
            {
                "texte": "Un pattern pour encapsuler l'accès aux données",
                "correct": false,
                "explication": "Ceci décrit le pattern Repository, pas Singleton."
            }
        ],
        "explication": "Singleton est utile pour les ressources partagées comme les connexions de base de données."
    },
    {
        "num": 40,
        "id": "base_qcm_theorique_9",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Théorique",
        "question": "Qu'est-ce que l'accessibilité web (a11y) ?",
        "multiple": false,
        "options": [
            {
                "texte": "L'ensemble des pratiques pour rendre le web accessible aux personnes en situation de handicap",
                "correct": true,
                "explication": "L'accessibilité web vise à inclure tous les utilisateurs, quelles que soient leurs capacités."
            },
            {
                "texte": "Un protocole de sécurité pour les sites web",
                "correct": false,
                "explication": "Ceci décrit la sécurité, pas l'accessibilité."
            },
            {
                "texte": "Un standard de performance pour les sites web",
                "correct": false,
                "explication": "Ceci décrit la performance, pas l'accessibilité."
            },
            {
                "texte": "Un système de cache pour améliorer la vitesse",
                "correct": false,
                "explication": "Ceci décrit le cache, pas l'accessibilité."
            }
        ],
        "explication": "L'accessibilité web est essentielle pour l'inclusion numérique."
    },
    {
        "num": 41,
        "id": "base_qcm_theorique_10",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Qu'est-ce que la dénormalisation en base de données ?",
        "multiple": false,
        "options": [
            {
                "texte": "L'introduction volontaire de redondance pour améliorer les performances",
                "correct": true,
                "explication": "La dénormalisation sacrifie la normalisation pour optimiser les performances."
            },
            {
                "texte": "La suppression de toutes les contraintes de base de données",
                "correct": false,
                "explication": "Ceci décrit la suppression de contraintes, pas la dénormalisation."
            },
            {
                "texte": "La migration vers une base NoSQL",
                "correct": false,
                "explication": "Ceci décrit une migration, pas la dénormalisation."
            },
            {
                "texte": "La compression des données pour économiser l'espace",
                "correct": false,
                "explication": "Ceci décrit la compression, pas la dénormalisation."
            }
        ],
        "explication": "La dénormalisation est un compromis entre performance et intégrité des données."
    },
    {
        "num": 42,
        "id": "base_qcm_pratique_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Pratique",
        "question": "Comment implémenter un système de thème sombre/clair en CSS ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser les media queries prefers-color-scheme et des variables CSS",
                "correct": true,
                "explication": "prefers-color-scheme détecte la préférence système et les variables CSS permettent le changement dynamique."
            },
            {
                "texte": "Utiliser uniquement JavaScript pour changer les couleurs",
                "correct": false,
                "explication": "JavaScript seul ne respecte pas les préférences système et nécessite plus de code."
            },
            {
                "texte": "Créer deux fichiers CSS séparés",
                "correct": false,
                "explication": "Cette approche est moins maintenable et ne respecte pas les préférences système."
            },
            {
                "texte": "Utiliser uniquement des classes CSS",
                "correct": false,
                "explication": "Les classes seules ne permettent pas de détecter les préférences système."
            }
        ],
        "explication": "L'approche moderne combine les préférences système et les variables CSS pour une expérience optimale."
    },
    {
        "num": 43,
        "id": "base_qcm_pratique_2",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Pratique",
        "question": "Comment optimiser les performances d'une application React ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser React.memo, useMemo, useCallback et la lazy loading des composants",
                "correct": true,
                "explication": "Ces techniques évitent les re-rendus inutiles et améliorent les performances."
            },
            {
                "texte": "Utiliser uniquement des composants fonctionnels",
                "correct": false,
                "explication": "Les composants fonctionnels seuls n'optimisent pas automatiquement les performances."
            },
            {
                "texte": "Réduire le nombre de composants",
                "correct": false,
                "explication": "Le nombre de composants n'est pas le facteur principal de performance."
            },
            {
                "texte": "Utiliser uniquement des hooks personnalisés",
                "correct": false,
                "explication": "Les hooks personnalisés n'optimisent pas automatiquement les performances."
            }
        ],
        "explication": "L'optimisation React passe par la mémorisation et le chargement différé."
    },
    {
        "num": 44,
        "id": "base_qcm_pratique_3",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Pratique",
        "question": "Comment concevoir un schéma de base de données pour un système de e-commerce ?",
        "multiple": false,
        "options": [
            {
                "texte": "Créer des tables pour produits, commandes, clients, catégories avec des relations appropriées",
                "correct": true,
                "explication": "Cette structure permet de gérer les entités principales et leurs relations."
            },
            {
                "texte": "Utiliser une seule table pour tous les produits et commandes",
                "correct": false,
                "explication": "Cette approche viole les principes de normalisation et crée de la redondance."
            },
            {
                "texte": "Créer une table par type de produit",
                "correct": false,
                "explication": "Cette approche rend le système rigide et difficile à maintenir."
            },
            {
                "texte": "Utiliser uniquement des fichiers JSON",
                "correct": false,
                "explication": "Les fichiers JSON ne sont pas appropriés pour un système de e-commerce complexe."
            }
        ],
        "explication": "Une bonne modélisation e-commerce sépare les préoccupations et optimise les performances."
    },
    {
        "num": 45,
        "id": "base_qcm_pratique_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Comment sécuriser une API REST ?",
        "multiple": false,
        "options": [
            {
                "texte": "Implémenter l'authentification JWT, la validation des entrées, HTTPS et la limitation de débit",
                "correct": true,
                "explication": "Ces mesures couvrent les aspects essentiels de la sécurité API."
            },
            {
                "texte": "Utiliser uniquement HTTPS",
                "correct": false,
                "explication": "HTTPS seul ne suffit pas pour sécuriser une API complètement."
            },
            {
                "texte": "Cacher les endpoints sensibles",
                "correct": false,
                "explication": "La sécurité par obscurité n'est pas une stratégie fiable."
            },
            {
                "texte": "Utiliser uniquement des mots de passe forts",
                "correct": false,
                "explication": "Les mots de passe ne sont qu'un aspect de la sécurité API."
            }
        ],
        "explication": "La sécurité API nécessite une approche multi-couches et une vigilance continue."
    },
    {
        "num": 46,
        "id": "base_qcm_pratique_5",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Pratique",
        "question": "Comment implémenter le pattern Factory en JavaScript ?",
        "multiple": false,
        "options": [
            {
                "texte": "Créer une fonction qui retourne différents objets selon les paramètres fournis",
                "correct": true,
                "explication": "Le pattern Factory centralise la création d'objets et améliore la flexibilité."
            },
            {
                "texte": "Utiliser uniquement des constructeurs de classe",
                "correct": false,
                "explication": "Les constructeurs seuls ne constituent pas le pattern Factory."
            },
            {
                "texte": "Créer des objets avec Object.create()",
                "correct": false,
                "explication": "Object.create() est une méthode de création, pas le pattern Factory."
            },
            {
                "texte": "Utiliser des variables globales pour stocker les objets",
                "correct": false,
                "explication": "Les variables globales ne sont pas une bonne pratique et ne constituent pas le pattern Factory."
            }
        ],
        "explication": "Le pattern Factory améliore la maintenabilité et la testabilité du code."
    },
    {
        "num": 47,
        "id": "base_qcm_pratique_6",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface mobile",
        "type": "Pratique",
        "question": "Comment déboguer une application React Native ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser React Native Debugger, Flipper, et les outils de développement natifs",
                "correct": true,
                "explication": "Ces outils offrent des capacités de débogage complètes pour React Native."
            },
            {
                "texte": "Utiliser uniquement console.log",
                "correct": false,
                "explication": "console.log est limité et ne suffit pas pour un débogage efficace."
            },
            {
                "texte": "Utiliser les outils de débogage web uniquement",
                "correct": false,
                "explication": "Les outils web ne fonctionnent pas directement avec React Native."
            },
            {
                "texte": "Redémarrer l'application à chaque problème",
                "correct": false,
                "explication": "Cette approche n'est pas efficace et ne résout pas les problèmes de fond."
            }
        ],
        "explication": "Un bon débogage React Native nécessite des outils spécialisés et une méthodologie appropriée."
    },
    {
        "num": 48,
        "id": "base_qcm_pratique_7",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Comment optimiser les requêtes SQL avec des jointures multiples ?",
        "multiple": false,
        "options": [
            {
                "texte": "Ajouter des index appropriés, analyser les plans d'exécution et optimiser l'ordre des jointures",
                "correct": true,
                "explication": "Ces techniques améliorent significativement les performances des requêtes complexes."
            },
            {
                "texte": "Utiliser uniquement des sous-requêtes",
                "correct": false,
                "explication": "Les sous-requêtes peuvent être plus lentes que les jointures optimisées."
            },
            {
                "texte": "Éviter toutes les jointures",
                "correct": false,
                "explication": "Les jointures sont souvent nécessaires et peuvent être optimisées."
            },
            {
                "texte": "Utiliser des vues pour toutes les requêtes",
                "correct": false,
                "explication": "Les vues ne sont pas toujours la solution optimale pour les performances."
            }
        ],
        "explication": "L'optimisation des jointures nécessite une analyse approfondie et des techniques appropriées."
    },
    {
        "num": 49,
        "id": "base_qcm_pratique_8",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Pratique",
        "question": "Comment implémenter un système de cache en JavaScript ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser Map/WeakMap pour le cache mémoire et localStorage/sessionStorage pour la persistance",
                "correct": true,
                "explication": "Cette approche combine performance et persistance selon les besoins."
            },
            {
                "texte": "Utiliser uniquement des variables globales",
                "correct": false,
                "explication": "Les variables globales ne sont pas une approche propre et peuvent causer des fuites mémoire."
            },
            {
                "texte": "Utiliser uniquement localStorage",
                "correct": false,
                "explication": "localStorage seul ne suffit pas pour tous les cas d'usage de cache."
            },
            {
                "texte": "Ne pas utiliser de cache",
                "correct": false,
                "explication": "Le cache améliore significativement les performances dans de nombreux cas."
            }
        ],
        "explication": "Un bon système de cache améliore les performances et l'expérience utilisateur."
    },
    {
        "num": 50,
        "id": "base_qcm_pratique_9",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Pratique",
        "question": "Comment tester l'accessibilité d'une application web ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser des outils automatisés (axe-core, Lighthouse) et des tests manuels avec des lecteurs d'écran",
                "correct": true,
                "explication": "L'accessibilité nécessite des tests automatisés et manuels pour être complète."
            },
            {
                "texte": "Utiliser uniquement des outils automatisés",
                "correct": false,
                "explication": "Les outils automatisés ne détectent pas tous les problèmes d'accessibilité."
            },
            {
                "texte": "Tester uniquement avec un navigateur",
                "correct": false,
                "explication": "Les tests navigateur ne suffisent pas pour évaluer l'accessibilité complète."
            },
            {
                "texte": "Ignorer l'accessibilité car c'est optionnel",
                "correct": false,
                "explication": "L'accessibilité est une obligation légale et éthique, pas une option."
            }
        ],
        "explication": "Les tests d'accessibilité doivent être intégrés dans le processus de développement."
    },
    {
        "num": 51,
        "id": "base_qcm_pratique_10",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Pratique",
        "question": "Comment gérer les migrations de base de données en production ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser des outils de migration, tester en environnement de staging, et planifier des fenêtres de maintenance",
                "correct": true,
                "explication": "Cette approche minimise les risques et assure la fiabilité des migrations."
            },
            {
                "texte": "Modifier directement la base de production",
                "correct": false,
                "explication": "Cette approche est risquée et peut causer des pertes de données."
            },
            {
                "texte": "Utiliser uniquement des sauvegardes",
                "correct": false,
                "explication": "Les sauvegardes sont importantes mais ne remplacent pas une stratégie de migration."
            },
            {
                "texte": "Ignorer les migrations et recréer la base",
                "correct": false,
                "explication": "Cette approche n'est pas viable en production avec des données réelles."
            }
        ],
        "explication": "Les migrations en production nécessitent une planification rigoureuse et des tests approfondis."
    },
    {
        "num": 52,
        "id": "base_qcm_situation_5",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Mise en situation",
        "question": "Votre application web se charge très lentement sur mobile. Que faites-vous en priorité ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les métriques de performance, optimiser les images et implémenter le lazy loading",
                "correct": true,
                "explication": "L'analyse des métriques permet d'identifier les goulots d'étranglement spécifiques."
            },
            {
                "texte": "Réduire la taille de tous les fichiers CSS et JavaScript",
                "correct": false,
                "explication": "Cette approche générique peut ne pas résoudre le problème spécifique."
            },
            {
                "texte": "Augmenter la puissance du serveur",
                "correct": false,
                "explication": "Le problème peut être côté client, pas serveur."
            },
            {
                "texte": "Ignorer le problème car l'application fonctionne sur desktop",
                "correct": false,
                "explication": "L'expérience mobile est cruciale aujourd'hui."
            }
        ],
        "explication": "L'optimisation mobile nécessite une analyse ciblée et des solutions spécifiques."
    },
    {
        "num": 53,
        "id": "base_qcm_situation_6",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Mise en situation",
        "question": "Votre base de données MySQL plante régulièrement en production. Quelle approche adoptez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les logs d'erreur, vérifier la configuration et implémenter un monitoring",
                "correct": true,
                "explication": "L'analyse des logs permet d'identifier la cause racine des plantages."
            },
            {
                "texte": "Redémarrer le serveur à chaque plantage",
                "correct": false,
                "explication": "Cette solution temporaire ne résout pas le problème de fond."
            },
            {
                "texte": "Migrer immédiatement vers PostgreSQL",
                "correct": false,
                "explication": "La migration ne résout pas nécessairement le problème et peut introduire de nouveaux risques."
            },
            {
                "texte": "Ignorer le problème car il se résout tout seul",
                "correct": false,
                "explication": "Les plantages répétés indiquent un problème sérieux qui nécessite une intervention."
            }
        ],
        "explication": "La stabilité de la base de données en production nécessite un diagnostic approfondi."
    },
    {
        "num": 54,
        "id": "base_qcm_situation_7",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Mise en situation",
        "question": "Votre équipe a des difficultés à maintenir la cohérence du code. Quelle stratégie privilégiez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Implémenter un linter, des conventions de code et des revues de code obligatoires",
                "correct": true,
                "explication": "Ces outils automatisent et standardisent la qualité du code."
            },
            {
                "texte": "Laisser chaque développeur écrire comme il veut",
                "correct": false,
                "explication": "Cette approche nuit à la maintenabilité et à la collaboration."
            },
            {
                "texte": "Recruter un développeur senior pour tout relire",
                "correct": false,
                "explication": "Cette approche n'est pas scalable et crée un goulot d'étranglement."
            },
            {
                "texte": "Réécrire tout le code depuis zéro",
                "correct": false,
                "explication": "Cette approche est risquée et coûteuse sans garantie de succès."
            }
        ],
        "explication": "La cohérence du code nécessite des outils automatisés et des processus établis."
    },
    {
        "num": 55,
        "id": "base_qcm_situation_8",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Mise en situation",
        "question": "Un utilisateur signale que l'application ne fonctionne plus après une mise à jour. Que faites-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Vérifier les logs d'erreur, tester la régression et préparer un rollback si nécessaire",
                "correct": true,
                "explication": "Cette approche permet d'identifier et résoudre rapidement le problème."
            },
            {
                "texte": "Demander à l'utilisateur de redémarrer son navigateur",
                "correct": false,
                "explication": "Cette solution temporaire ne résout pas le problème de fond."
            },
            {
                "texte": "Ignorer le signalement car il n'y a qu'un seul utilisateur",
                "correct": false,
                "explication": "Un seul utilisateur peut indiquer un problème plus large."
            },
            {
                "texte": "Continuer le développement sans investiguer",
                "correct": false,
                "explication": "Ignorer les problèmes de production peut aggraver la situation."
            }
        ],
        "explication": "Les problèmes de production nécessitent une réponse rapide et méthodique."
    },
    {
        "num": 56,
        "id": "base_qcm_situation_9",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Mise en situation",
        "question": "Votre API REST reçoit trop de requêtes et devient lente. Quelle solution privilégiez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Implémenter un système de cache, une limitation de débit et optimiser les requêtes",
                "correct": true,
                "explication": "Cette approche multi-couches améliore significativement les performances."
            },
            {
                "texte": "Augmenter uniquement la puissance du serveur",
                "correct": false,
                "explication": "Le scaling vertical a des limites et peut être coûteux."
            },
            {
                "texte": "Bloquer toutes les requêtes suspectes",
                "correct": false,
                "explication": "Cette approche peut bloquer des utilisateurs légitimes."
            },
            {
                "texte": "Ignorer le problème car c'est temporaire",
                "correct": false,
                "explication": "Les problèmes de performance peuvent s'aggraver avec le temps."
            }
        ],
        "explication": "L'optimisation d'API nécessite une approche holistique et des solutions adaptées."
    },
    {
        "num": 57,
        "id": "base_qcm_situation_10",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Mise en situation",
        "question": "Votre application a des fuites mémoire qui ralentissent le système. Comment procédez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Utiliser les outils de profilage, identifier les fuites et corriger les références circulaires",
                "correct": true,
                "explication": "Le profilage permet d'identifier précisément les sources de fuites mémoire."
            },
            {
                "texte": "Redémarrer l'application régulièrement",
                "correct": false,
                "explication": "Cette solution temporaire ne résout pas le problème de fond."
            },
            {
                "texte": "Augmenter la mémoire disponible",
                "correct": false,
                "explication": "Cette approche masque le problème sans le résoudre."
            },
            {
                "texte": "Ignorer le problème car c'est normal",
                "correct": false,
                "explication": "Les fuites mémoire ne sont jamais normales et doivent être corrigées."
            }
        ],
        "explication": "Les fuites mémoire nécessitent un diagnostic précis et des corrections ciblées."
    },
    {
        "num": 58,
        "id": "base_qcm_situation_11",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Mise en situation",
        "question": "Un client se plaint que l'interface est difficile à utiliser pour les personnes âgées. Que faites-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Améliorer l'accessibilité, augmenter la taille des polices et simplifier la navigation",
                "correct": true,
                "explication": "Ces améliorations rendent l'interface plus accessible aux personnes âgées."
            },
            {
                "texte": "Créer une version spéciale pour les personnes âgées",
                "correct": false,
                "explication": "Cette approche peut créer de la confusion et de la maintenance supplémentaire."
            },
            {
                "texte": "Demander au client de s'adapter à l'interface",
                "correct": false,
                "explication": "L'accessibilité est une responsabilité du développeur, pas de l'utilisateur."
            },
            {
                "texte": "Ignorer la plainte car l'interface fonctionne pour la majorité",
                "correct": false,
                "explication": "L'accessibilité est une obligation légale et éthique."
            }
        ],
        "explication": "L'accessibilité universelle améliore l'expérience pour tous les utilisateurs."
    },
    {
        "num": 59,
        "id": "base_qcm_situation_12",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Mise en situation",
        "question": "Votre base de données contient des données corrompues après une panne. Comment réagissez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Restaurer depuis la dernière sauvegarde valide et analyser la cause de la corruption",
                "correct": true,
                "explication": "La restauration rapide minimise les pertes et l'analyse prévient les récurrences."
            },
            {
                "texte": "Essayer de réparer manuellement les données corrompues",
                "correct": false,
                "explication": "Cette approche est risquée et peut aggraver la corruption."
            },
            {
                "texte": "Ignorer le problème et continuer avec les données corrompues",
                "correct": false,
                "explication": "Les données corrompues peuvent causer des problèmes en cascade."
            },
            {
                "texte": "Recréer complètement la base de données",
                "correct": false,
                "explication": "Cette approche peut causer des pertes de données importantes."
            }
        ],
        "explication": "La gestion des données corrompues nécessite une approche méthodique et des sauvegardes fiables."
    },
    {
        "num": 60,
        "id": "base_qcm_situation_13",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Composants métier",
        "type": "Mise en situation",
        "question": "Votre équipe a des difficultés à livrer dans les délais. Quelle stratégie adoptez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les causes des retards, ajuster la planification et améliorer les processus",
                "correct": true,
                "explication": "Cette approche systémique identifie et résout les problèmes de fond."
            },
            {
                "texte": "Demander à l'équipe de travailler plus d'heures",
                "correct": false,
                "explication": "Cette approche n'est pas durable et peut causer du burnout."
            },
            {
                "texte": "Réduire la qualité pour respecter les délais",
                "correct": false,
                "explication": "Cette approche compromet la qualité et peut causer des problèmes futurs."
            },
            {
                "texte": "Ignorer les retards car c'est normal dans le développement",
                "correct": false,
                "explication": "Les retards répétés indiquent des problèmes de processus à résoudre."
            }
        ],
        "explication": "L'amélioration des processus de livraison nécessite une analyse systémique."
    },
    {
        "num": 61,
        "id": "base_qcm_situation_14",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface mobile",
        "type": "Mise en situation",
        "question": "Votre application mobile plante sur certains appareils Android. Comment procédez-vous ?",
        "multiple": false,
        "options": [
            {
                "texte": "Analyser les crash reports, tester sur différents appareils et corriger les bugs spécifiques",
                "correct": true,
                "explication": "Cette approche méthodique identifie et résout les problèmes spécifiques à certaines plateformes."
            },
            {
                "texte": "Ignorer les problèmes car l'app fonctionne sur iOS",
                "correct": false,
                "explication": "Les utilisateurs Android méritent la même qualité d'expérience."
            },
            {
                "texte": "Demander aux utilisateurs de changer d'appareil",
                "correct": false,
                "explication": "Cette approche n'est pas réaliste et nuit à l'expérience utilisateur."
            },
            {
                "texte": "Arrêter le support Android",
                "correct": false,
                "explication": "Cette décision drastique prive une large partie des utilisateurs."
            }
        ],
        "explication": "Le débogage cross-platform nécessite une approche systématique et des outils appropriés."
    },
    {
        "num": 62,
        "id": "base_qcm_situation_15",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Mise en situation",
        "question": "Votre application web est victime d'attaques par injection SQL. Que faites-vous en priorité ?",
        "multiple": false,
        "options": [
            {
                "texte": "Implémenter des requêtes préparées, valider les entrées et auditer la sécurité",
                "correct": true,
                "explication": "Ces mesures de sécurité sont essentielles pour prévenir les injections SQL."
            },
            {
                "texte": "Changer les mots de passe de la base de données",
                "correct": false,
                "explication": "Cette mesure ne résout pas le problème d'injection SQL."
            },
            {
                "texte": "Fermer temporairement l'application",
                "correct": false,
                "explication": "Cette mesure drastique prive les utilisateurs légitimes du service."
            },
            {
                "texte": "Ignorer les attaques car elles échouent",
                "correct": false,
                "explication": "Même les attaques qui échouent indiquent des vulnérabilités à corriger."
            }
        ],
        "explication": "La sécurité des applications nécessite une approche proactive et des mesures de protection appropriées."
    },
    {
        "num": 63,
        "id": "base_qcm_analyse_6",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface statique",
        "type": "Analyse",
        "question": "Analysez les avantages et inconvénients de l'utilisation de CSS-in-JS vs CSS traditionnel.",
        "multiple": false,
        "options": [
            {
                "texte": "CSS-in-JS : dynamisme, encapsulation, maintenance. CSS traditionnel : performance, standards, compatibilité",
                "correct": true,
                "explication": "Chaque approche a ses forces selon le contexte et les besoins du projet."
            },
            {
                "texte": "CSS-in-JS est toujours meilleur que CSS traditionnel",
                "correct": false,
                "explication": "Le choix dépend du contexte, de l'équipe et des contraintes du projet."
            },
            {
                "texte": "CSS traditionnel est toujours meilleur que CSS-in-JS",
                "correct": false,
                "explication": "Le choix dépend du contexte, de l'équipe et des contraintes du projet."
            },
            {
                "texte": "Les deux approches sont équivalentes",
                "correct": false,
                "explication": "Il y a des différences significatives entre les deux approches."
            }
        ],
        "explication": "Le choix entre CSS-in-JS et CSS traditionnel dépend des besoins spécifiques du projet."
    },
    {
        "num": 64,
        "id": "base_qcm_analyse_7",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Analyse",
        "question": "Comparez les approches de modélisation de données : approche relationnelle vs NoSQL.",
        "multiple": false,
        "options": [
            {
                "texte": "Relationnel : ACID, schéma fixe, requêtes complexes. NoSQL : flexibilité, scalabilité, performance",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon les besoins de l'application."
            },
            {
                "texte": "Les bases relationnelles sont toujours meilleures",
                "correct": false,
                "explication": "Le choix dépend des besoins spécifiques de l'application."
            },
            {
                "texte": "NoSQL est toujours meilleur pour les applications modernes",
                "correct": false,
                "explication": "Le choix dépend des besoins spécifiques de l'application."
            },
            {
                "texte": "Les deux approches sont identiques",
                "correct": false,
                "explication": "Il y a des différences fondamentales entre les deux approches."
            }
        ],
        "explication": "Le choix entre relationnel et NoSQL dépend des contraintes et besoins de l'application."
    },
    {
        "num": 65,
        "id": "base_qcm_analyse_8",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Analyse",
        "question": "Évaluez l'impact de l'architecture hexagonale sur la maintenabilité d'une application.",
        "multiple": false,
        "options": [
            {
                "texte": "Avantages : découplage, testabilité, flexibilité. Inconvénients : complexité initiale, courbe d'apprentissage",
                "correct": true,
                "explication": "L'architecture hexagonale offre des avantages à long terme mais nécessite un investissement initial."
            },
            {
                "texte": "L'architecture hexagonale simplifie toujours le développement",
                "correct": false,
                "explication": "Elle peut ajouter de la complexité initiale avant d'apporter des bénéfices."
            },
            {
                "texte": "L'architecture hexagonale complique toujours le développement",
                "correct": false,
                "explication": "Elle peut simplifier le développement à long terme malgré la complexité initiale."
            },
            {
                "texte": "L'architecture hexagonale n'a aucun impact",
                "correct": false,
                "explication": "L'architecture a toujours un impact sur le développement et la maintenance."
            }
        ],
        "explication": "L'architecture hexagonale améliore la maintenabilité mais nécessite une planification initiale."
    },
    {
        "num": 66,
        "id": "base_qcm_analyse_9",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface dynamique",
        "type": "Analyse",
        "question": "Analysez les implications de l'utilisation de GraphQL vs REST pour une API moderne.",
        "multiple": false,
        "options": [
            {
                "texte": "GraphQL : flexibilité, efficacité, sur-fetching réduit. REST : simplicité, cache, standards établis",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon les besoins de l'API et des clients."
            },
            {
                "texte": "GraphQL est toujours meilleur que REST",
                "correct": false,
                "explication": "Le choix dépend des besoins spécifiques de l'API et des contraintes du projet."
            },
            {
                "texte": "REST est toujours meilleur que GraphQL",
                "correct": false,
                "explication": "Le choix dépend des besoins spécifiques de l'API et des contraintes du projet."
            },
            {
                "texte": "Les deux approches sont identiques",
                "correct": false,
                "explication": "Il y a des différences significatives entre GraphQL et REST."
            }
        ],
        "explication": "Le choix entre GraphQL et REST dépend des besoins de flexibilité et de performance."
    },
    {
        "num": 67,
        "id": "base_qcm_analyse_10",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Analyse",
        "question": "Comparez les stratégies de sauvegarde : sauvegarde complète vs incrémentale vs différentielle.",
        "multiple": false,
        "options": [
            {
                "texte": "Complète : temps de restauration rapide, espace important. Incrémentale : espace minimal, restauration lente",
                "correct": true,
                "explication": "Chaque stratégie a ses avantages selon les contraintes de temps et d'espace."
            },
            {
                "texte": "La sauvegarde complète est toujours la meilleure option",
                "correct": false,
                "explication": "Le choix dépend des contraintes de temps, d'espace et de performance."
            },
            {
                "texte": "La sauvegarde incrémentale est toujours la meilleure option",
                "correct": false,
                "explication": "Le choix dépend des contraintes de temps, d'espace et de performance."
            },
            {
                "texte": "Toutes les stratégies sont équivalentes",
                "correct": false,
                "explication": "Il y a des différences significatives entre les stratégies de sauvegarde."
            }
        ],
        "explication": "Le choix de stratégie de sauvegarde dépend des contraintes RTO et RPO."
    },
    {
        "num": 68,
        "id": "base_qcm_analyse_11",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Analyse",
        "question": "Évaluez l'impact de l'utilisation de conteneurs Docker sur le développement et le déploiement.",
        "multiple": false,
        "options": [
            {
                "texte": "Avantages : portabilité, isolation, reproductibilité. Inconvénients : complexité, overhead, courbe d'apprentissage",
                "correct": true,
                "explication": "Docker offre des avantages significatifs mais nécessite un investissement en formation."
            },
            {
                "texte": "Docker simplifie toujours le développement",
                "correct": false,
                "explication": "Docker peut ajouter de la complexité initiale avant d'apporter des bénéfices."
            },
            {
                "texte": "Docker complique toujours le développement",
                "correct": false,
                "explication": "Docker peut simplifier le développement à long terme malgré la complexité initiale."
            },
            {
                "texte": "Docker n'a aucun impact sur le développement",
                "correct": false,
                "explication": "Docker a un impact significatif sur les processus de développement et de déploiement."
            }
        ],
        "explication": "Docker améliore la portabilité et la reproductibilité mais nécessite une formation appropriée."
    },
    {
        "num": 69,
        "id": "base_qcm_analyse_12",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Interface mobile",
        "type": "Analyse",
        "question": "Analysez les avantages et inconvénients du développement mobile cross-platform vs natif.",
        "multiple": false,
        "options": [
            {
                "texte": "Cross-platform : coût réduit, code unique, délai de mise à jour. Natif : performance, accès complet, UX optimale",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon les contraintes budgétaires et les besoins de performance."
            },
            {
                "texte": "Le développement natif est toujours meilleur",
                "correct": false,
                "explication": "Le choix dépend des contraintes budgétaires, temporelles et des besoins de performance."
            },
            {
                "texte": "Le développement cross-platform est toujours meilleur",
                "correct": false,
                "explication": "Le choix dépend des contraintes budgétaires, temporelles et des besoins de performance."
            },
            {
                "texte": "Les deux approches sont identiques",
                "correct": false,
                "explication": "Il y a des différences significatives entre le développement natif et cross-platform."
            }
        ],
        "explication": "Le choix entre natif et cross-platform dépend des contraintes et des objectifs du projet."
    },
    {
        "num": 70,
        "id": "base_qcm_analyse_13",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Analyse",
        "question": "Comparez les approches de gestion des sessions : sessions côté serveur vs JWT vs cookies sécurisés.",
        "multiple": false,
        "options": [
            {
                "texte": "Sessions serveur : contrôle, sécurité, complexité. JWT : stateless, scalabilité, taille. Cookies : simplicité, sécurité",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon les besoins de sécurité et de scalabilité."
            },
            {
                "texte": "JWT est toujours la meilleure option",
                "correct": false,
                "explication": "Le choix dépend des besoins de sécurité, de scalabilité et de complexité acceptée."
            },
            {
                "texte": "Les sessions côté serveur sont toujours meilleures",
                "correct": false,
                "explication": "Le choix dépend des besoins de sécurité, de scalabilité et de complexité acceptée."
            },
            {
                "texte": "Toutes les approches sont équivalentes",
                "correct": false,
                "explication": "Il y a des différences significatives entre les approches de gestion des sessions."
            }
        ],
        "explication": "Le choix de gestion des sessions dépend des contraintes de sécurité et de scalabilité."
    },
    {
        "num": 71,
        "id": "base_qcm_analyse_14",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Composants métier",
        "type": "Analyse",
        "question": "Évaluez l'impact de l'intégration continue (CI) sur la qualité du code et la productivité.",
        "multiple": false,
        "options": [
            {
                "texte": "Avantages : détection précoce des bugs, qualité constante, déploiement automatisé. Inconvénients : complexité, temps de build",
                "correct": true,
                "explication": "La CI améliore significativement la qualité mais nécessite une configuration initiale."
            },
            {
                "texte": "La CI améliore toujours la productivité",
                "correct": false,
                "explication": "La CI peut ralentir le développement initialement avant d'apporter des bénéfices."
            },
            {
                "texte": "La CI ralentit toujours le développement",
                "correct": false,
                "explication": "La CI peut accélérer le développement à long terme malgré le temps de build."
            },
            {
                "texte": "La CI n'a aucun impact sur le développement",
                "correct": false,
                "explication": "La CI a un impact significatif sur les processus de développement et la qualité du code."
            }
        ],
        "explication": "La CI améliore la qualité et la fiabilité mais nécessite un investissement initial."
    },
    {
        "num": 72,
        "id": "base_qcm_analyse_15",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Maquettage",
        "type": "Analyse",
        "question": "Analysez les implications de l'utilisation de PWA (Progressive Web Apps) vs applications natives.",
        "multiple": false,
        "options": [
            {
                "texte": "PWA : accessibilité web, mise à jour facile, coût réduit. Natif : performance, accès complet, UX optimale",
                "correct": true,
                "explication": "Chaque approche a ses avantages selon les besoins de performance et d'accessibilité."
            },
            {
                "texte": "Les PWA sont toujours meilleures que les applications natives",
                "correct": false,
                "explication": "Le choix dépend des besoins de performance, d'accès aux fonctionnalités et d'expérience utilisateur."
            },
            {
                "texte": "Les applications natives sont toujours meilleures que les PWA",
                "correct": false,
                "explication": "Le choix dépend des besoins de performance, d'accès aux fonctionnalités et d'expérience utilisateur."
            },
            {
                "texte": "Les PWA et applications natives sont identiques",
                "correct": false,
                "explication": "Il y a des différences significatives entre les PWA et les applications natives."
            }
        ],
        "explication": "Le choix entre PWA et natif dépend des contraintes techniques et des objectifs utilisateur."
    },
    {
        "num": 73,
        "id": "base_qcm_sql_1",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Une base de données relationnelle est principalement organisée en :",
        "multiple": false,
        "options": [
            {
                "texte": "Fichiers et dossiers",
                "correct": false,
                "explication": "Les fichiers et dossiers sont une organisation de système de fichiers, pas de base de données relationnelle."
            },
            {
                "texte": "Tables, colonnes et lignes",
                "correct": true,
                "explication": "Une base de données relationnelle est organisée en tables (relations), colonnes (attributs) et lignes (tuples)."
            },
            {
                "texte": "Graphes et arêtes",
                "correct": false,
                "explication": "Les graphes et arêtes sont utilisés dans les bases de données orientées graphe, pas relationnelles."
            },
            {
                "texte": "Objets et méthodes",
                "correct": false,
                "explication": "Les objets et méthodes sont utilisés dans les bases de données orientées objet, pas relationnelles."
            }
        ],
        "explication": "La structure fondamentale d'une base de données relationnelle repose sur les tables, colonnes et lignes."
    },
    {
        "num": 74,
        "id": "base_qcm_sql_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Pratique",
        "question": "Dans la table `candidates` ci-dessous, combien de colonnes y a-t-il ?\n\n```sql\nCREATE TABLE candidates (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  age INT,\n  city VARCHAR(50),\n  region VARCHAR(50)\n);\n```",
        "multiple": false,
        "options": [
            {
                "texte": "3",
                "correct": false,
                "explication": "Il y a plus de 3 colonnes dans la table candidates."
            },
            {
                "texte": "4",
                "correct": false,
                "explication": "Il y a plus de 4 colonnes dans la table candidates."
            },
            {
                "texte": "5",
                "correct": true,
                "explication": "La table candidates contient 5 colonnes : id, name, age, city, region."
            },
            {
                "texte": "6",
                "correct": false,
                "explication": "Il n'y a pas 6 colonnes dans la table candidates."
            }
        ],
        "explication": "La table candidates contient 5 colonnes : id, name, age, city, region."
    },
    {
        "num": 75,
        "id": "base_qcm_sql_3",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "La colonne `id` dans la table `candidates` sert principalement à :",
        "multiple": false,
        "options": [
            {
                "texte": "Trier les lignes",
                "correct": false,
                "explication": "L'ID peut être utilisé pour le tri, mais ce n'est pas sa fonction principale."
            },
            {
                "texte": "Avoir un identifiant unique",
                "correct": true,
                "explication": "La colonne id sert principalement à identifier de manière unique chaque enregistrement."
            },
            {
                "texte": "Compter les enregistrements",
                "correct": false,
                "explication": "Pour compter les enregistrements, on utilise COUNT(), pas l'ID."
            },
            {
                "texte": "Remplacer une clé étrangère",
                "correct": false,
                "explication": "L'ID est généralement la clé primaire, pas une clé étrangère."
            }
        ],
        "explication": "La colonne id sert d'identifiant unique pour chaque enregistrement de la table."
    },
    {
        "num": 76,
        "id": "base_qcm_sql_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Que signifie SGBDR ?",
        "multiple": false,
        "options": [
            {
                "texte": "Système de Gestion de Binaire de Données Relationnelles",
                "correct": false,
                "explication": "Le terme \"Binaire\" n'est pas correct dans cet acronyme."
            },
            {
                "texte": "Système de Gestion de Base de Données Relationnelles",
                "correct": true,
                "explication": "SGBDR signifie Système de Gestion de Base de Données Relationnelles."
            },
            {
                "texte": "Service Global de Base de Données Relationnelles",
                "correct": false,
                "explication": "Le terme \"Service Global\" n'est pas correct dans cet acronyme."
            },
            {
                "texte": "Standard Général de Bases et Données Relationnelles",
                "correct": false,
                "explication": "Le terme \"Standard Général\" n'est pas correct dans cet acronyme."
            }
        ],
        "explication": "SGBDR est l'acronyme pour Système de Gestion de Base de Données Relationnelles."
    },
    {
        "num": 77,
        "id": "base_qcm_sql_5",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Parmi ces logiciels, lequel est un SGBDR ?",
        "multiple": true,
        "options": [
            {
                "texte": "SQLite",
                "correct": true,
                "explication": "SQLite est un SGBDR léger et embarqué."
            },
            {
                "texte": "MySQL",
                "correct": true,
                "explication": "MySQL est un SGBDR très populaire."
            },
            {
                "texte": "PostgreSQL",
                "correct": true,
                "explication": "PostgreSQL est un SGBDR open source avancé."
            },
            {
                "texte": "ReactJS",
                "correct": false,
                "explication": "ReactJS est une bibliothèque JavaScript pour les interfaces utilisateur, pas un SGBDR."
            }
        ],
        "explication": "SQLite, MySQL et PostgreSQL sont des SGBDR, tandis que ReactJS est une bibliothèque frontend."
    },
    {
        "num": 78,
        "id": "base_qcm_sql_6",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Le rôle d'un SGBDR est de :",
        "multiple": false,
        "options": [
            {
                "texte": "Créer, gérer et manipuler les bases de données",
                "correct": true,
                "explication": "C'est le rôle principal d'un SGBDR : créer, gérer et manipuler les bases de données."
            },
            {
                "texte": "Traduire SQL en JavaScript",
                "correct": false,
                "explication": "Le SGBDR ne traduit pas SQL en JavaScript, il exécute directement les requêtes SQL."
            },
            {
                "texte": "Générer des fichiers JSON automatiquement",
                "correct": false,
                "explication": "La génération de JSON n'est pas le rôle principal d'un SGBDR."
            },
            {
                "texte": "Héberger un site web",
                "correct": false,
                "explication": "L'hébergement web n'est pas le rôle d'un SGBDR."
            }
        ],
        "explication": "Le SGBDR a pour rôle principal de créer, gérer et manipuler les bases de données."
    },
    {
        "num": 79,
        "id": "base_qcm_sql_7",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Dans SQLite, le type `TEXT` sert à :",
        "multiple": false,
        "options": [
            {
                "texte": "Stocker des nombres entiers",
                "correct": false,
                "explication": "Pour les nombres entiers, on utilise INTEGER, pas TEXT."
            },
            {
                "texte": "Stocker une chaîne de caractères",
                "correct": true,
                "explication": "Le type TEXT sert à stocker des chaînes de caractères en SQLite."
            },
            {
                "texte": "Stocker une image brute",
                "correct": false,
                "explication": "Pour les images, on utilise généralement BLOB, pas TEXT."
            },
            {
                "texte": "Stocker un booléen",
                "correct": false,
                "explication": "SQLite n'a pas de type booléen natif, on utilise INTEGER(0/1)."
            }
        ],
        "explication": "Le type TEXT en SQLite est utilisé pour stocker des chaînes de caractères."
    },
    {
        "num": 80,
        "id": "base_qcm_sql_8",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Dans MySQL, `VARCHAR(50)` signifie :",
        "multiple": false,
        "options": [
            {
                "texte": "Une chaîne de 50 caractères exactement",
                "correct": false,
                "explication": "VARCHAR(50) ne signifie pas exactement 50 caractères, mais un maximum de 50."
            },
            {
                "texte": "Une chaîne de caractères variable avec un maximum de 50",
                "correct": true,
                "explication": "VARCHAR(50) définit une chaîne de caractères variable avec un maximum de 50 caractères."
            },
            {
                "texte": "Une chaîne illimitée",
                "correct": false,
                "explication": "VARCHAR a toujours une limite, contrairement à TEXT qui peut être plus long."
            },
            {
                "texte": "Un nombre flottant",
                "correct": false,
                "explication": "VARCHAR est pour les chaînes de caractères, pas pour les nombres flottants."
            }
        ],
        "explication": "VARCHAR(50) définit une chaîne de caractères variable avec un maximum de 50 caractères."
    },
    {
        "num": 81,
        "id": "base_qcm_sql_9",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Dans PostgreSQL, quel type permet de stocker des identifiants uniques universels ?",
        "multiple": false,
        "options": [
            {
                "texte": "UUID",
                "correct": true,
                "explication": "PostgreSQL a un type natif UUID pour stocker des identifiants uniques universels."
            },
            {
                "texte": "SERIAL",
                "correct": false,
                "explication": "SERIAL est pour les entiers auto-incrémentés, pas pour les UUID."
            },
            {
                "texte": "TEXT",
                "correct": false,
                "explication": "TEXT peut stocker un UUID mais n'est pas le type optimisé pour cela."
            },
            {
                "texte": "BIGINT",
                "correct": false,
                "explication": "BIGINT est pour les grands entiers, pas pour les UUID."
            }
        ],
        "explication": "PostgreSQL dispose d'un type natif UUID pour stocker des identifiants uniques universels."
    },
    {
        "num": 82,
        "id": "base_qcm_sql_10",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Dans MySQL, le type `DATETIME` est au format :",
        "multiple": false,
        "options": [
            {
                "texte": "DD/MM/YYYY hh:mm",
                "correct": false,
                "explication": "Ce format n'est pas le format standard de DATETIME en MySQL."
            },
            {
                "texte": "YYYY-MM-DD hh:mm:ss",
                "correct": true,
                "explication": "Le format standard de DATETIME en MySQL est YYYY-MM-DD hh:mm:ss."
            },
            {
                "texte": "MM-DD-YYYY",
                "correct": false,
                "explication": "Ce format ne correspond pas au standard DATETIME de MySQL."
            },
            {
                "texte": "hh:mm:ss YYYY",
                "correct": false,
                "explication": "Ce format ne correspond pas au standard DATETIME de MySQL."
            }
        ],
        "explication": "Le format standard de DATETIME en MySQL est YYYY-MM-DD hh:mm:ss."
    },
    {
        "num": 83,
        "id": "base_qcm_sql_11",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Quel mot-clé permet de sélectionner des colonnes en SQL ?",
        "multiple": false,
        "options": [
            {
                "texte": "FROM",
                "correct": false,
                "explication": "FROM spécifie la table source, pas la sélection des colonnes."
            },
            {
                "texte": "SELECT",
                "correct": true,
                "explication": "SELECT est le mot-clé utilisé pour sélectionner des colonnes en SQL."
            },
            {
                "texte": "WHERE",
                "correct": false,
                "explication": "WHERE sert à filtrer les lignes, pas à sélectionner les colonnes."
            },
            {
                "texte": "ORDER BY",
                "correct": false,
                "explication": "ORDER BY sert à trier les résultats, pas à sélectionner les colonnes."
            }
        ],
        "explication": "SELECT est le mot-clé utilisé pour spécifier les colonnes à récupérer dans une requête SQL."
    },
    {
        "num": 84,
        "id": "base_qcm_sql_12",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Que fait la requête suivante : SELECT * FROM candidates;",
        "multiple": false,
        "options": [
            {
                "texte": "Sélectionne toutes les lignes de la table candidates",
                "correct": true,
                "explication": "SELECT * FROM candidates sélectionne toutes les colonnes et toutes les lignes de la table candidates."
            },
            {
                "texte": "Supprime toutes les lignes de la table candidates",
                "correct": false,
                "explication": "Pour supprimer, on utiliserait DELETE FROM candidates."
            },
            {
                "texte": "Crée une nouvelle table",
                "correct": false,
                "explication": "Pour créer une table, on utiliserait CREATE TABLE."
            },
            {
                "texte": "Ajoute une condition de filtre",
                "correct": false,
                "explication": "Cette requête ne contient pas de condition de filtre (WHERE)."
            }
        ],
        "explication": "SELECT * FROM candidates récupère toutes les colonnes et toutes les lignes de la table candidates."
    },
    {
        "num": 85,
        "id": "base_qcm_sql_13",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Quel mot-clé permet de limiter le nombre de résultats ?",
        "multiple": false,
        "options": [
            {
                "texte": "GROUP BY",
                "correct": false,
                "explication": "GROUP BY sert à regrouper les résultats, pas à les limiter."
            },
            {
                "texte": "LIMIT",
                "correct": true,
                "explication": "LIMIT permet de limiter le nombre de lignes retournées par une requête."
            },
            {
                "texte": "HAVING",
                "correct": false,
                "explication": "HAVING sert à filtrer les groupes, pas à limiter le nombre de résultats."
            },
            {
                "texte": "COUNT",
                "correct": false,
                "explication": "COUNT est une fonction d'agrégation, pas un mot-clé de limitation."
            }
        ],
        "explication": "LIMIT permet de limiter le nombre de lignes retournées par une requête SQL."
    },
    {
        "num": 86,
        "id": "base_qcm_sql_14",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Pour trier des résultats, on utilise :",
        "multiple": false,
        "options": [
            {
                "texte": "ORDER BY",
                "correct": true,
                "explication": "ORDER BY est le mot-clé utilisé pour trier les résultats d'une requête SQL."
            },
            {
                "texte": "JOIN",
                "correct": false,
                "explication": "JOIN sert à joindre des tables, pas à trier les résultats."
            },
            {
                "texte": "SORT",
                "correct": false,
                "explication": "SORT n'est pas un mot-clé SQL standard."
            },
            {
                "texte": "GROUP BY",
                "correct": false,
                "explication": "GROUP BY sert à regrouper, pas à trier les résultats."
            }
        ],
        "explication": "ORDER BY est le mot-clé utilisé pour trier les résultats d'une requête SQL."
    },
    {
        "num": 87,
        "id": "base_qcm_sql_15",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Une clé primaire (PRIMARY KEY) sert à :",
        "multiple": false,
        "options": [
            {
                "texte": "Identifier de façon unique une ligne",
                "correct": true,
                "explication": "La clé primaire sert à identifier de manière unique chaque ligne d'une table."
            },
            {
                "texte": "Lier deux tables",
                "correct": false,
                "explication": "C'est le rôle d'une clé étrangère, pas d'une clé primaire."
            },
            {
                "texte": "Compter les enregistrements",
                "correct": false,
                "explication": "Pour compter, on utilise COUNT(), pas la clé primaire."
            },
            {
                "texte": "Supprimer les doublons",
                "correct": false,
                "explication": "La clé primaire empêche les doublons mais ce n'est pas son rôle principal."
            }
        ],
        "explication": "La clé primaire sert à identifier de manière unique chaque ligne d'une table."
    },
    {
        "num": 88,
        "id": "base_qcm_sql_16",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Pratique",
        "question": "Dans l'exemple de la table `candidates`, la clé primaire choisie est :",
        "multiple": false,
        "options": [
            {
                "texte": "name",
                "correct": false,
                "explication": "name n'est pas la clé primaire car il peut y avoir des doublons de noms."
            },
            {
                "texte": "city",
                "correct": false,
                "explication": "city n'est pas la clé primaire car plusieurs candidats peuvent habiter la même ville."
            },
            {
                "texte": "id",
                "correct": true,
                "explication": "id est la clé primaire car elle est unique pour chaque candidat."
            },
            {
                "texte": "region",
                "correct": false,
                "explication": "region n'est pas la clé primaire car plusieurs candidats peuvent être dans la même région."
            }
        ],
        "explication": "Dans la table candidates, la colonne id est choisie comme clé primaire car elle est unique."
    },
    {
        "num": 89,
        "id": "base_qcm_sql_17",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception de BDD",
        "type": "Théorique",
        "question": "Pourquoi est-il préférable d'utiliser un identifiant de type INTEGER ou UUID comme clé primaire ?",
        "multiple": false,
        "options": [
            {
                "texte": "Pour optimiser les performances",
                "correct": true,
                "explication": "Les entiers et UUID sont plus rapides à indexer et rechercher que les chaînes de caractères."
            },
            {
                "texte": "Parce que c'est plus lisible",
                "correct": false,
                "explication": "La lisibilité n'est pas le critère principal pour choisir une clé primaire."
            },
            {
                "texte": "Parce que SQL l'impose",
                "correct": false,
                "explication": "SQL n'impose pas le type de clé primaire, c'est un choix de conception."
            },
            {
                "texte": "Parce que TEXT n'existe pas",
                "correct": false,
                "explication": "TEXT existe bien en SQL, mais n'est pas optimal pour les clés primaires."
            }
        ],
        "explication": "Les entiers et UUID sont préférés pour les clés primaires car ils offrent de meilleures performances."
    },
    {
        "num": 90,
        "id": "base_qcm_sql_18",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "La fonction COUNT(*) renvoie :",
        "multiple": false,
        "options": [
            {
                "texte": "Le nombre de colonnes",
                "correct": false,
                "explication": "COUNT(*) ne compte pas les colonnes mais les lignes."
            },
            {
                "texte": "Le nombre de lignes",
                "correct": true,
                "explication": "COUNT(*) renvoie le nombre total de lignes dans le résultat de la requête."
            },
            {
                "texte": "La somme des nombres",
                "correct": false,
                "explication": "Pour la somme, on utilise SUM(), pas COUNT()."
            },
            {
                "texte": "La valeur minimale",
                "correct": false,
                "explication": "Pour la valeur minimale, on utilise MIN(), pas COUNT()."
            }
        ],
        "explication": "COUNT(*) renvoie le nombre total de lignes dans le résultat de la requête."
    },
    {
        "num": 91,
        "id": "base_qcm_sql_19",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "Quelle requête renvoie la somme des âges dans la table candidates ?",
        "multiple": false,
        "options": [
            {
                "texte": "SELECT MIN(age) FROM candidates;",
                "correct": false,
                "explication": "MIN(age) renvoie l'âge minimum, pas la somme."
            },
            {
                "texte": "SELECT MAX(age) FROM candidates;",
                "correct": false,
                "explication": "MAX(age) renvoie l'âge maximum, pas la somme."
            },
            {
                "texte": "SELECT SUM(age) FROM candidates;",
                "correct": true,
                "explication": "SUM(age) renvoie la somme de tous les âges dans la table candidates."
            },
            {
                "texte": "SELECT COUNT(age) FROM candidates;",
                "correct": false,
                "explication": "COUNT(age) renvoie le nombre d'âges non-nuls, pas la somme."
            }
        ],
        "explication": "SUM(age) est la fonction d'agrégation qui renvoie la somme des valeurs de la colonne age."
    },
    {
        "num": 92,
        "id": "base_qcm_sql_20",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Pratique",
        "question": "La fonction MIN(age) renvoie :",
        "multiple": false,
        "options": [
            {
                "texte": "La valeur la plus petite",
                "correct": true,
                "explication": "MIN(age) renvoie la valeur la plus petite (âge minimum) dans la colonne age."
            },
            {
                "texte": "La valeur la plus grande",
                "correct": false,
                "explication": "Pour la valeur la plus grande, on utilise MAX(), pas MIN()."
            },
            {
                "texte": "Le nombre d'âges",
                "correct": false,
                "explication": "Pour compter, on utilise COUNT(), pas MIN()."
            },
            {
                "texte": "La moyenne des âges",
                "correct": false,
                "explication": "Pour la moyenne, on utilise AVG(), pas MIN()."
            }
        ],
        "explication": "MIN(age) renvoie la valeur la plus petite (âge minimum) dans la colonne age."
    },
    {
        "num": 93,
        "id": "base_qcm_sql_21",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Théorique",
        "question": "Les mots-clés souvent associés aux fonctions d'agrégation sont :",
        "multiple": true,
        "options": [
            {
                "texte": "GROUP BY",
                "correct": true,
                "explication": "GROUP BY est souvent utilisé avec les fonctions d'agrégation pour grouper les résultats."
            },
            {
                "texte": "HAVING",
                "correct": true,
                "explication": "HAVING permet de filtrer les résultats après agrégation."
            },
            {
                "texte": "ORDER BY",
                "correct": false,
                "explication": "ORDER BY sert à trier, pas spécifiquement aux fonctions d'agrégation."
            },
            {
                "texte": "JOIN",
                "correct": false,
                "explication": "JOIN sert à joindre des tables, pas aux fonctions d'agrégation."
            }
        ],
        "explication": "GROUP BY et HAVING sont les mots-clés principalement associés aux fonctions d'agrégation."
    },
    {
        "num": 94,
        "id": "base_qcm_sql_22",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Théorique",
        "question": "Une bonne pratique d'écriture SQL est de :",
        "multiple": true,
        "options": [
            {
                "texte": "Écrire les mots-clés en majuscules",
                "correct": true,
                "explication": "Écrire les mots-clés SQL en majuscules améliore la lisibilité du code."
            },
            {
                "texte": "Écrire les tables au singulier",
                "correct": false,
                "explication": "Il est généralement recommandé d'utiliser le pluriel pour les noms de tables."
            },
            {
                "texte": "Ne pas mettre de point-virgule à la fin",
                "correct": false,
                "explication": "Il est recommandé de terminer les requêtes SQL par un point-virgule."
            },
            {
                "texte": "Utiliser snake_case",
                "correct": true,
                "explication": "Utiliser snake_case pour les noms de tables et colonnes est une bonne pratique."
            }
        ],
        "explication": "Les bonnes pratiques SQL incluent l'utilisation de majuscules pour les mots-clés et snake_case pour les noms."
    },
    {
        "num": 95,
        "id": "base_qcm_sql_23",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Théorique",
        "question": "Dans les conventions données, comment sont écrits les noms de tables ?",
        "multiple": false,
        "options": [
            {
                "texte": "En pluriel",
                "correct": true,
                "explication": "Les noms de tables sont généralement écrits au pluriel (candidates, users, products)."
            },
            {
                "texte": "En majuscules",
                "correct": false,
                "explication": "Les noms de tables ne sont pas écrits en majuscules, mais les mots-clés SQL oui."
            },
            {
                "texte": "En camelCase",
                "correct": false,
                "explication": "camelCase n'est pas la convention standard pour les noms de tables SQL."
            },
            {
                "texte": "En kebab-case",
                "correct": false,
                "explication": "kebab-case n'est pas la convention standard pour les noms de tables SQL."
            }
        ],
        "explication": "La convention standard est d'écrire les noms de tables au pluriel."
    },
    {
        "num": 96,
        "id": "base_qcm_sql_24",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Accès aux données",
        "type": "Théorique",
        "question": "Quel est le symbole utilisé pour représenter snake_case ?",
        "multiple": false,
        "options": [
            {
                "texte": "🐍",
                "correct": true,
                "explication": "Le serpent (🐍) représente snake_case car les mots sont séparés par des underscores comme les écailles d'un serpent."
            },
            {
                "texte": "🐫",
                "correct": false,
                "explication": "Le chameau (🐫) représente camelCase, pas snake_case."
            },
            {
                "texte": "🐪",
                "correct": false,
                "explication": "Le dromadaire (🐪) représente aussi camelCase, pas snake_case."
            },
            {
                "texte": "🐉",
                "correct": false,
                "explication": "Le dragon (🐉) n'est pas utilisé pour représenter snake_case."
            }
        ],
        "explication": "Le serpent (🐍) est utilisé pour représenter snake_case car les mots sont séparés par des underscores."
    },
    {
        "num": 97,
        "id": "base_qcm_sql_25",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Quelle commande permet de vérifier si SQLite est installé sur Mac/Linux ?",
        "multiple": false,
        "options": [
            {
                "texte": "sqlite --check",
                "correct": false,
                "explication": "Cette commande n'existe pas pour vérifier l'installation de SQLite."
            },
            {
                "texte": "sqlite3 --version",
                "correct": true,
                "explication": "sqlite3 --version affiche la version de SQLite si elle est installée."
            },
            {
                "texte": "mysql --version",
                "correct": false,
                "explication": "Cette commande vérifie MySQL, pas SQLite."
            },
            {
                "texte": "sql --version",
                "correct": false,
                "explication": "Cette commande n'existe pas pour vérifier SQLite."
            }
        ],
        "explication": "sqlite3 --version permet de vérifier si SQLite est installé et affiche sa version."
    },
    {
        "num": 98,
        "id": "base_qcm_sql_26",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Pour lancer SQLite avec un fichier drag_race_france.db, on tape :",
        "multiple": false,
        "options": [
            {
                "texte": "sqlite drag_race_france.db",
                "correct": false,
                "explication": "La commande correcte est sqlite3, pas sqlite."
            },
            {
                "texte": "sqlite3 drag_race_france.db",
                "correct": true,
                "explication": "sqlite3 drag_race_france.db lance SQLite avec le fichier de base de données spécifié."
            },
            {
                "texte": ".open drag_race_france",
                "correct": false,
                "explication": ".open est une commande interne de SQLite, pas une commande shell."
            },
            {
                "texte": "mysql -u root -p",
                "correct": false,
                "explication": "Cette commande lance MySQL, pas SQLite."
            }
        ],
        "explication": "sqlite3 drag_race_france.db lance SQLite avec le fichier de base de données spécifié."
    },
    {
        "num": 99,
        "id": "base_qcm_sql_27",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Quelle commande permet de quitter SQLite ?",
        "multiple": false,
        "options": [
            {
                "texte": "exit",
                "correct": false,
                "explication": "exit n'est pas la commande correcte pour quitter SQLite."
            },
            {
                "texte": "quit",
                "correct": false,
                "explication": "quit n'est pas la commande correcte pour quitter SQLite."
            },
            {
                "texte": ".quit",
                "correct": true,
                "explication": ".quit est la commande correcte pour quitter SQLite."
            },
            {
                "texte": "stop",
                "correct": false,
                "explication": "stop n'est pas une commande SQLite valide."
            }
        ],
        "explication": ".quit est la commande utilisée pour quitter SQLite."
    },
    {
        "num": 100,
        "id": "base_qcm_sql_28",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Sous MySQL, quelle commande permet de lancer la base en ligne de commande ?",
        "multiple": false,
        "options": [
            {
                "texte": "mysql -u root -p",
                "correct": true,
                "explication": "mysql -u root -p lance le client MySQL en ligne de commande avec authentification root."
            },
            {
                "texte": "sqlite3",
                "correct": false,
                "explication": "sqlite3 lance SQLite, pas MySQL."
            },
            {
                "texte": "sql run",
                "correct": false,
                "explication": "Cette commande n'existe pas pour MySQL."
            },
            {
                "texte": "start mysql root",
                "correct": false,
                "explication": "Cette commande n'est pas la syntaxe correcte pour lancer MySQL."
            }
        ],
        "explication": "mysql -u root -p lance le client MySQL en ligne de commande avec authentification root."
    },
    {
        "num": 101,
        "id": "base_qcm_sql_29",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Dans MySQL sous Mac, quelle commande permet de démarrer le service ?",
        "multiple": false,
        "options": [
            {
                "texte": "mysql start",
                "correct": false,
                "explication": "Cette commande n'est pas la syntaxe correcte pour démarrer MySQL sur Mac."
            },
            {
                "texte": "service mysql start",
                "correct": false,
                "explication": "Cette commande est pour Linux, pas pour Mac."
            },
            {
                "texte": "brew services start mysql",
                "correct": true,
                "explication": "brew services start mysql démarre le service MySQL installé via Homebrew sur Mac."
            },
            {
                "texte": "mysql -start",
                "correct": false,
                "explication": "Cette commande n'est pas la syntaxe correcte pour démarrer MySQL."
            }
        ],
        "explication": "brew services start mysql démarre le service MySQL installé via Homebrew sur Mac."
    },
    {
        "num": 102,
        "id": "base_qcm_sql_30",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Mise en place de BDD",
        "type": "Pratique",
        "question": "Sous Windows, quel mot de passe est conseillé par défaut à l'installation de MySQL ?",
        "multiple": false,
        "options": [
            {
                "texte": "admin",
                "correct": false,
                "explication": "admin n'est pas le mot de passe par défaut conseillé pour MySQL sur Windows."
            },
            {
                "texte": "password",
                "correct": false,
                "explication": "password n'est pas le mot de passe par défaut conseillé pour MySQL sur Windows."
            },
            {
                "texte": "root",
                "correct": true,
                "explication": "root est le mot de passe par défaut conseillé pour l'utilisateur root de MySQL sur Windows."
            },
            {
                "texte": "1234",
                "correct": false,
                "explication": "1234 n'est pas le mot de passe par défaut conseillé pour MySQL sur Windows."
            }
        ],
        "explication": "root est le mot de passe par défaut conseillé pour l'utilisateur root de MySQL sur Windows."
    },
    {
        "num": 103,
        "id": "linux_qcm_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Pratique",
        "question": "Quelle commande permet de lister les fichiers d’un répertoire sous Linux ?",
        "multiple": false,
        "options": [
            {
                "texte": "ls",
                "correct": true,
                "explication": "La commande ls affiche la liste des fichiers et dossiers."
            },
            {
                "texte": "dir",
                "correct": false,
                "explication": "dir existe mais est plutôt utilisée dans Windows."
            },
            {
                "texte": "list",
                "correct": false,
                "explication": "list n’est pas une commande Linux."
            },
            {
                "texte": "show",
                "correct": false,
                "explication": "show n’existe pas en tant que commande native."
            }
        ],
        "explication": "ls est la commande de base pour explorer le contenu d’un répertoire sous Linux."
    },
    {
        "num": 104,
        "id": "linux_qcm_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Pratique",
        "question": "Quelle commande permet de donner les droits d’exécution à un fichier ?",
        "multiple": false,
        "options": [
            {
                "texte": "chmod +x fichier.sh",
                "correct": true,
                "explication": "chmod +x ajoute le droit d’exécution."
            },
            {
                "texte": "sudo exec fichier.sh",
                "correct": false,
                "explication": "exec n’est pas une commande de gestion de droits."
            },
            {
                "texte": "setperm fichier.sh",
                "correct": false,
                "explication": "setperm n’est pas une commande standard."
            },
            {
                "texte": "perm add fichier.sh",
                "correct": false,
                "explication": "Cette syntaxe n’existe pas sous Linux."
            }
        ],
        "explication": "chmod est la commande standard pour modifier les permissions des fichiers."
    },
    {
        "num": 105,
        "id": "linux_qcm_3",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Composants métier",
        "type": "Pratique",
        "question": "Quelle commande affiche le chemin absolu du répertoire courant ?",
        "multiple": false,
        "options": [
            {
                "texte": "pwd",
                "correct": true,
                "explication": "pwd signifie \"print working directory\"."
            },
            {
                "texte": "whereami",
                "correct": false,
                "explication": "whereami n’est pas une commande Linux standard."
            },
            {
                "texte": "path",
                "correct": false,
                "explication": "path est une commande Windows, pas Linux."
            },
            {
                "texte": "showdir",
                "correct": false,
                "explication": "showdir n’existe pas sous Linux."
            }
        ],
        "explication": "pwd est la commande basique pour connaître son répertoire courant."
    },
    {
        "num": 106,
        "id": "linux_qcm_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Architecture en couches",
        "type": "Pratique",
        "question": "Quelle commande permet de rechercher un mot dans un fichier texte ?",
        "multiple": false,
        "options": [
            {
                "texte": "grep \"mot\" fichier.txt",
                "correct": true,
                "explication": "grep recherche des motifs dans un fichier."
            },
            {
                "texte": "find \"mot\" fichier.txt",
                "correct": false,
                "explication": "find sert à localiser des fichiers, pas à lire leur contenu."
            },
            {
                "texte": "search \"mot\" fichier.txt",
                "correct": false,
                "explication": "search n’existe pas comme commande native."
            },
            {
                "texte": "locate \"mot\" fichier.txt",
                "correct": false,
                "explication": "locate cherche des fichiers dans l’index, pas des contenus."
            }
        ],
        "explication": "grep est la commande la plus utilisée pour rechercher du texte dans des fichiers."
    },
    {
        "num": 107,
        "id": "windows_qcm_1",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Gestion de projet",
        "type": "Pratique",
        "question": "Quelle commande permet de lister les fichiers d’un répertoire dans l’invite de commandes Windows ?",
        "multiple": false,
        "options": [
            {
                "texte": "dir",
                "correct": true,
                "explication": "dir est l’équivalent de ls sous Windows."
            },
            {
                "texte": "ls",
                "correct": false,
                "explication": "ls est une commande Linux."
            },
            {
                "texte": "show",
                "correct": false,
                "explication": "show n’existe pas en commande Windows."
            },
            {
                "texte": "files",
                "correct": false,
                "explication": "files n’est pas une commande native."
            }
        ],
        "explication": "La commande dir permet de lister le contenu d’un dossier dans CMD."
    },
    {
        "num": 108,
        "id": "windows_qcm_2",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Conception d'application",
        "type": "Pratique",
        "question": "Quel raccourci clavier ouvre le gestionnaire des tâches Windows ?",
        "multiple": false,
        "options": [
            {
                "texte": "Ctrl + Shift + Esc",
                "correct": true,
                "explication": "Ce raccourci ouvre directement le gestionnaire des tâches."
            },
            {
                "texte": "Ctrl + Alt + Delete",
                "correct": false,
                "explication": "Ce raccourci ouvre un menu, pas directement le gestionnaire."
            },
            {
                "texte": "Alt + Tab",
                "correct": false,
                "explication": "Alt + Tab permet de changer d’application active."
            },
            {
                "texte": "Win + D",
                "correct": false,
                "explication": "Win + D réduit toutes les fenêtres."
            }
        ],
        "explication": "Ctrl + Shift + Esc est le raccourci direct vers le gestionnaire des tâches."
    },
    {
        "num": 109,
        "id": "windows_qcm_3",
        "bloc": "Bloc 1 — Dev application sécurisée",
        "blocKey": "bloc1",
        "theme": "Composants métier",
        "type": "Pratique",
        "question": "Quel outil Windows permet de vérifier et corriger les erreurs sur un disque ?",
        "multiple": false,
        "options": [
            {
                "texte": "chkdsk",
                "correct": true,
                "explication": "chkdsk analyse et répare les disques."
            },
            {
                "texte": "diskfix",
                "correct": false,
                "explication": "diskfix n’est pas une commande Windows."
            },
            {
                "texte": "fsck",
                "correct": false,
                "explication": "fsck est utilisé sous Linux, pas Windows."
            },
            {
                "texte": "repair-disk",
                "correct": false,
                "explication": "repair-disk n’existe pas comme commande native."
            }
        ],
        "explication": "chkdsk est la commande standard pour analyser et corriger les erreurs disque."
    },
    {
        "num": 110,
        "id": "windows_qcm_4",
        "bloc": "Bloc 2 — Application en couches",
        "blocKey": "bloc2",
        "theme": "Architecture en couches",
        "type": "Pratique",
        "question": "Quelle commande permet d’afficher la configuration réseau d’un poste Windows ?",
        "multiple": false,
        "options": [
            {
                "texte": "ipconfig",
                "correct": true,
                "explication": "ipconfig affiche la configuration réseau sur Windows."
            },
            {
                "texte": "ifconfig",
                "correct": false,
                "explication": "ifconfig est utilisé sur Linux, pas Windows."
            },
            {
                "texte": "netstat",
                "correct": false,
                "explication": "netstat liste les connexions, pas la config IP complète."
            },
            {
                "texte": "ping",
                "correct": false,
                "explication": "ping teste une connexion, mais ne donne pas la config réseau."
            }
        ],
        "explication": "ipconfig est la commande principale pour obtenir les infos réseau sur Windows."
    }
];
