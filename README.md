## Projet Fondamentaux du Développement Piloté par les Tests (TDD)

### Introduction
Projet d'apprentissage du TDD en suivant le cours [Test Driven Development using Javascript and Jest](https://www.udemy.com/course/test-driven-development-using-javascript-and-jest/) de Joseph Delgadillo disponible sur la plateforme Udemy.
Ce projet met en œuvre le Jeu de la Vie de Conway en utilisant les principes du Développement Piloté par les Tests (TDD). Le Jeu de la Vie est un automate cellulaire imaginé par le mathématicien britannique John Horton Conway en 1970. Il s'agit d'un jeu à zéro joueur, ce qui signifie que son évolution est déterminée par son état initial, sans nécessiter d'autres entrées.

### Aperçu des Fichiers
- **index.js** : Contient la logique principale pour l'implémentation du Jeu de la Vie, y compris les fonctions pour déterminer l'état des cellules, générer la grille initiale, compter les voisins vivants, et plus encore.
- **index.html** : Fournit la structure HTML pour l'interface du Jeu de la Vie, y compris la visualisation de la grille et les contrôles pour démarrer et arrêter la simulation.
- **index.spec.js** : Contient les tests Jest pour garantir la justesse de l'implémentation du Jeu de la Vie. Il couvre divers scénarios et cas limites pour valider le comportement des fonctions mises en œuvre.

### Fonctions Clés

- **isAlive** : Détermine si une cellule donnée doit être vivante ou morte dans la génération suivante en fonction de son état actuel et du nombre de voisins vivants.
- **generate** : Crée une grille initiale de dimensions spécifiées remplie de cellules mortes.
- **regenerate** : Met à jour la grille à la génération suivante en fonction de l'état actuel de chaque cellule et de ses voisins.
- **countLivingNeighbors** : Compte le nombre de voisins vivants pour une cellule donnée.
- **drawGrid** : Rendu de l'état actuel de la grille dans l'interface HTML.
- **attachGridEventHandler** : Attache des gestionnaires d'événements à des cellules de la grille pour l'interaction utilisateur.

### Utilisation

1. Clôner le dépôt
2. Ouvrir `index.html` dans un navigateur web pour visualiser l'interface du Jeu de la Vie.
3. Cliquer sur les cellules de la grille pour basculer leur état (vivant/mort).
4. Utiliser les boutons "Démarrer" et "Arrêter" pour commencer et mettre en pause la simulation, respectivement.

### Exécution des Tests

- Les tests sont écrits en utilisant Jest. Pour exécuter les tests, exécuter `npm test` dans le terminal.


## Vidéo de démonstration

Vous pouvez regarder une démonstration du projet dans la vidéo /static/demo.mp4

### Références
- Cours Udemy : [Test Driven Development using Javascript and Jest](https://www.udemy.com/course/test-driven-development-using-javascript-and-jest/)
- Dépôt GitHub de Joseph Delgadillo: [tdd-fundamentals](https://github.com/roppa/tdd-fundamentals)
