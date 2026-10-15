# Nabou Shop — site e-commerce de démonstration

Site responsive en HTML, CSS et JavaScript, sans framework, prêt à ouvrir dans Visual Studio Code et à publier sur GitHub Pages.

## Fichiers
- `index.html` : structure du site
- `style.css` : design responsive, animations et thème sombre
- `script.js` : catalogue, recherche, filtres, panier, compte démo et commande démo

## Tester en local
1. Décompressez le dossier.
2. Ouvrez le dossier `nabou-shop` dans Visual Studio Code.
3. Ouvrez `index.html` dans votre navigateur. Pour une meilleure expérience, utilisez l'extension **Live Server** de VS Code puis cliquez sur **Go Live**.

## Publier avec GitHub Pages
1. Créez un dépôt GitHub, par exemple `nabou-shop`.
2. Importez `index.html`, `style.css`, `script.js`, `README.md` **et le dossier `images/`** à la racine du dépôt.
3. Dans le dépôt, ouvrez **Settings → Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**.
5. Choisissez `main` et `/(root)`, puis cliquez sur **Save**.
6. Attendez le déploiement. L'adresse du site apparaîtra dans la section Pages.

## À personnaliser avant une vraie mise en vente
- Les produits, prix et descriptions sont dans le tableau `PRODUCTS` au début de `script.js`.
- Les commandes s'envoient sur WhatsApp au 77 636 60 92 (`WHATSAPP_NUMBER` dans `script.js`).
- Les prix sont en FCFA.
- Les photos produits sont dans le dossier `images/`. Le hero (`hero.jpg`) et la section « À propos » (`a-propos.jpg`) utilisent désormais les photos de la boutique.
- Le compte et le panier de démonstration sont stockés dans `localStorage` sur le navigateur.
- **Important : ce n'est pas encore une boutique prête pour de vraies commandes.** Les mots de passe sont stockés localement en clair dans cette démo, sans authentification sécurisée. Les commandes ne sont pas envoyées à un vendeur et aucun paiement n'est effectué. Pour une vraie boutique, il faudra un backend sécurisé, une base de données et une intégration de paiement/livraison.

## Produits Nabou Shop personnalisés
La liste des produits, les prix en FCFA et les descriptions sont dans `script.js`, dans `const PRODUCTS`.
Les chemins des photos sont préparés dans `images/README-images.txt`. Place tes photos dans le dossier `images` avec les noms indiqués, ou adapte le chemin `image` de chaque produit dans `script.js`.
Les prix et descriptions ont été retranscrits depuis la liste manuscrite. Vérifie notamment les références dont l’écriture est difficile à lire avant publication.
