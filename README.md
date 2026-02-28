# Portfolio — Serigne Saliou BA

Ce dossier contient un portfolio **100% statique** (HTML/CSS/JS).  
Il est prêt pour **GitHub Pages**.

## Structure
- `index.html`
- `styles.css`
- `script.js`
- `assets/`
  - `profile.jpeg`
  - `CV_Serigne_Saliou_BA.pdf`
  - `pwmgr_rapport.pdf`

## Publier sur GitHub Pages (méthode simple)
1. Crée un dépôt GitHub : `portfolio` (ou n'importe quel nom).
2. Mets ces fichiers à la racine du dépôt.
3. Dans GitHub : **Settings → Pages**
   - Source : `Deploy from a branch`
   - Branch : `main` + `/ (root)`
4. Ton site devient accessible via une URL du type :
   `https://<username>.github.io/<repo>/`

## Publier en tant que site principal (option)
Si tu veux `https://Ba-hack.github.io/` :
1. Crée un dépôt qui s'appelle exactement : `Ba-hack.github.io`
2. Pousse les fichiers à la racine
3. GitHub Pages est actif automatiquement.

## Mettre tes repos de projets
Dans `index.html`, cherche **"Repo (à lier)"** et remplace par le lien exact du dépôt du projet.

## Conseils
- Mets tes PDF dans `assets/` (CV, rapports) et référence-les avec des liens relatifs.
- Évite de versionner des secrets : ajoute `*.vault.json` au `.gitignore` si tu utilises pwmgr.
