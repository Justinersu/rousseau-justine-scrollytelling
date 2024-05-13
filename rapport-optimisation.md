# Rapport d’optimisation du projet ScrollyTelling

[Page Speed Insights - Rapport du 12 mai 2024, 8:34:05](https://pagespeed.web.dev/analysis/https-justine-tim-momo-com/26thn8tt4k?form_factor=mobile)

## Problème #1

### Des feuilles de style bloquent le rendu

### Action concrète pour résoudre le problème

Élimination des feuilles de style non essentielles dans le HTML. Celles-ci sont des fichiers de polices (https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap et https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap) qui comprennent des styles non utilisées comme l'italique et le gras. Au lieu de lier leurs fichiers de style dans le head, je vais faire un font-face dans le style.css. Je vais faire ce changement pour les polices 'Urbanist' et 'Outfit'.

### Résultat

J'ai résolu le problème. Dans le style.css, j'ai ajouté les font-face des polices 'Urbanist' et 'Outfit' et supprimé les feuilles de style du html. Les polices apparaissent comme dans leurs états originals et mon site a moins de fichiers de style à charger.

## Problème #2

### Dimensions incorrectes de certaines images

### Action concrète pour résoudre le problème

Diffuser les images avec leurs tailles appropriées. Pour ce faire, je vais utiliser l'outil proposé par chrome : RespImageLint qui va analyser toutes les images de mon site et déterminer si la taille de chaque image est surdimensionné ou trop petite.

### Résultat

Je n'ai pas résolu le problème. J'ai analysé toutes les images de mon site et ajouté un srcset aux images qui avaient un problème. Malheureusement, ajouter un srcset n'a fait que rendre mes images invisibles. J'ai donc enlevé le srcset. Je crois que le vw et vh de mon script rends déjà les images responsive.

## Problème #3

### Une image a été identifiée comme "Largest contentful paint" 

### Action concrète pour résoudre le problème
Mon image de fond d'écran sur le header a été identifiée comme une image qui prends du temps à charger. Je vais appliquer un conseil par Chrome de identifier l'image comme à priorité haute en ajoutant fetchpriority="high" sur l'image.

### Résultat
J'ai résolu le problème en enlevant le background-image de l'accueil, en le transformant en une balise image puis en ajoutant fetchpriority="high".

## Rapport projet ScrollyTelling après optimisation

[Page Speed Insights - Rapport du 12 mai 2024, 22:12:21](https://pagespeed.web.dev/analysis/https-justine-tim-momo-com/tgkgsbi595?form_factor=desktop)