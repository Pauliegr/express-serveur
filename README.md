# express-serveur
Consignes:
Pour le chemin /contact, créer une page HTML dans un fichier twig.
Dans cette page, en plus d'une base HTML, créer un lien a href en "mailto"
Le mailto doit lier vers une adresse mail
Cette adresse mail doit êtredéfinie en backend dans une variable et envoyée au template

Faire en sorte que vous avez un fichier style.css qui fonctionne et ajouter une image dans la page contact

Faire un pied de page qui est dispo dans toutes les pages .twig (juste avec un copyright 2021 BG tous droits réservés)

Créer une page article.twig, une page blog.twig.
La page article.twig sera accessible depuis l'URL ('/blog/:id')
La page blog.twig sera accessible depuis l'URL ('/blog')
Faire en sorte que ces 2 pages + la page d'index ait le même gabarit (avec une base HTML correcte / une navbar / un footer et du contenu spécifique ... pour l'instant juste un h1 différent)

Exercice pour jeudi:
/blog/1 -> doit afficher les infos de l'article 1 de l'API JSon placeholder (posts), à savoir le title et le body
/blog/8 ->doit afficher les infos de l'article 8 de l'API JSon placeholder (posts), à savoir le title et le body