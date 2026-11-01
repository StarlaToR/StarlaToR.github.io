# Portfolio d'Antoine Mordant

Site statique (HTML/CSS/JS, sans build) publié sur GitHub Pages : https://starlator.github.io

## Structure
- `index.html` : accueil (projets phares, autres projets, parcours, contact)
- `projets/ai-drone-flight.html` : étude de cas AI Drone Flight
- `assets/css/style.css` : styles (couleurs en haut du fichier)
- `assets/js/main.js` : bascule FR/EN et filtres de projets
- `assets/docs/` : CV et mémoire en PDF
- `assets/video/` : vidéos (à ajouter)

## Traduire un texte
Chaque texte existe en deux versions côte à côte :
`<span data-lang="fr">Bonjour</span><span data-lang="en">Hello</span>`
Le bouton FR/EN masque l'une ou l'autre. Le choix est mémorisé et `?lang=en` force l'anglais.

## Ajouter une vidéo
Chaque emplacement contient un commentaire `<!-- Vidéo à ajouter : ... -->`.
Remplacer l'`<img>` par la balise `<video>` du commentaire et déposer le fichier dans `assets/video/`.
Conseil : MP4 H.264, 1280 px de large, 10 à 30 s, sans son, moins de 8 Mo.

## Reste à faire
- [ ] Déposer `assets/docs/CV_Antoine_Mordant.pdf`
- [x] Vidéos RollerLoop (caméra, intro)
- [ ] Vidéos : drones IA, réplication avant/après, showreel
- [ ] Mesurer le gain de la refonte de la réplication et écrire son étude de cas
