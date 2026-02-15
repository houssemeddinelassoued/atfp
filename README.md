# CFA Bizerte - Centre de Formation et d'Apprentissage

Site Web de présentation du Centre de Formation et d'Apprentissage de Bizerte (ATFP). Plateforme bilingue (Français/Arabe) présentant les spécialités de formation, informations de contact et opportunités d'apprentissage professionnel.

**🌐 Live:** https://atfp.vercel.app/

## 📋 Features

- ✅ **Bilingue** : Support complet Français (FR) et Arabe (AR) avec RTL
- ✅ **Spécialités groupées** : Dropdowns par sous-secteur pour meilleure navigation
- ✅ **Design responsive** : Optimisé pour desktop, tablet, mobile
- ✅ **Performance** : Built with Next.js 16 et Turbopack
- ✅ **Accessibilité** : Tailwind CSS + lucide-react icons

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Vercel](https://vercel.com) - Hosting & Deployment

## 🚀 Démarrage rapide

### Installation
```bash
npm install
```

### Mode développement
```bash
npm run dev
```
Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Production
```bash
npm run build
npm run start
```

## 📁 Structure du Projet

```
app/
  ├── page.jsx          # Main page (composant client bilingue)
  ├── layout.js         # Root layout
  ├── globals.css       # Tailwind config
public/
  ├── logo.png          # Logo ATFP
  ├── cfa-entree.png    # Entrance image
  └── cfa-batiment.png  # Building image
```

## 🖼 Images Requises

Les images suivantes doivent être placées dans le dossier `public/` :
- `logo.png` - Logo du centre
- `cfa-entree.png` - Photo d'entrée du centre
- `cfa-batiment.png` - Photo du bâtiment du centre

Si manquantes, des placeholders s'affichent automatiquement.

## 📝 Contenu Bilingue

Les spécialités et contenus sont entièrement traduits en:
- **Français (FR)** - Défaut
- **Arabe (AR)** - Right-to-left layout

Changement de langue via le bouton globe en haut à droite.

## 🚢 Déploiement

### Sur Vercel (Production)
Le projet est automatiquement déployé sur Vercel à chaque push sur `main`:
- Repository: https://github.com/houssemeddinelassoued/atfp
- Production URL: https://atfp.vercel.app/

### Build & Deploy Local
```bash
npm run build
npm run start
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)

## 📄 Licence

Projet du Centre de Formation et d'Apprentissage de Bizerte (ATFP)

---

**Contact:** cfa.bizerte@atfp.tn | 📞 72 436 133
