# Hamza Weslati - Professional Portfolio

A modern, responsive portfolio website showcasing 12+ years of IT management and cybersecurity expertise.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Accessibility**: WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML for better search visibility
- **Performance**: Built with Next.js 15 for optimal loading speed and Core Web Vitals
- **Modern Stack**: TypeScript, Tailwind CSS v4, and shadcn/ui components

## 📋 Sections

1. **Hero**: Eye-catching introduction with key metrics and CTA buttons
2. **About**: Overview of expertise in cybersecurity, infrastructure, and management
3. **Experience**: Detailed professional timeline with quantified achievements
4. **Skills**: Technical competencies with progress indicators and certifications
5. **Projects**: Featured case studies with detailed metrics and outcomes
6. **CV Download**: Bilingual CV downloads (English & French)
7. **Contact**: Contact form and information with target locations
8. **Footer**: Navigation, social links, and additional resources

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Theme**: next-themes
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Local Development

1. **Clone or download the project**

\`\`\`bash
# If using git
git clone <repository-url>
cd hamza-portfolio

# Or extract the ZIP file
unzip hamza-portfolio.zip
cd hamza-portfolio
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Add CV files**

Place your CV PDF files in the `public/cv/` directory:
- `hamza-weslati-cv-en.pdf` (English version)
- `hamza-weslati-cv-fr.pdf` (French version)

4. **Run development server**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. **Open browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo>
git push -u origin main
\`\`\`

2. **Deploy on Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure build settings
- Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**

\`\`\`bash
npm run build
\`\`\`

2. **Deploy to Netlify**

- Go to [netlify.com](https://netlify.com)
- Drag and drop the `.next` folder
- Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. **Update package.json**

\`\`\`json
{
  "scripts": {
    "deploy": "next build && next export && gh-pages -d out"
  }
}
\`\`\`

3. **Deploy**

\`\`\`bash
npm run deploy
\`\`\`

## 📁 Project Structure

\`\`\`
hamza-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and theme tokens
│   └── projects/
│       └── [id]/
│           └── page.tsx    # Dynamic project pages
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Sticky navigation with theme toggle
│   ├── hero-section.tsx    # Hero section
│   ├── about-section.tsx   # About section
│   ├── experience-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── cv-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx  # Theme context provider
│   └── skip-to-content.tsx # Accessibility skip link
├── public/
│   ├── cv/                 # CV PDF files
│   └── *.jpg               # Project images
├── lib/
│   └── utils.ts            # Utility functions
├── ACCESSIBILITY_REPORT.txt
├── README.md
└── package.json
\`\`\`

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ WCAG 2.1 Level AA compliant
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Screen reader optimized
- ✅ Sufficient color contrast (both themes)
- ✅ Focus indicators on all interactive elements
- ✅ Skip to content link
- ✅ Responsive touch targets (44x44px minimum)

See `ACCESSIBILITY_REPORT.txt` for detailed compliance information.

## 🎨 Customization

### Update Content

Edit the component files in `components/` to update:
- Personal information
- Experience details
- Project case studies
- Skills and certifications
- Contact information

### Change Theme Colors

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... other color tokens */
}
\`\`\`

### Add New Projects

1. Add project data to `app/projects/[id]/page.tsx` in the `projectsData` object
2. Add project card to `components/projects-section.tsx`
3. Add project images to `public/` directory

## 📝 Environment Variables

No environment variables are required for basic functionality. The portfolio is fully static.

Optional:
- Vercel Analytics is included by default when deployed to Vercel
- Add `.env.local` for any custom environment variables

## 🐛 Troubleshooting

### Theme not switching
- Clear browser cache and cookies
- Check that JavaScript is enabled
- Verify `next-themes` is properly installed

### Images not loading
- Ensure images are in the `public/` directory
- Check image paths in component files
- Verify Next.js Image component is used correctly

### CV downloads not working
- Confirm PDF files are in `public/cv/` directory
- Check file names match exactly: `hamza-weslati-cv-en.pdf` and `hamza-weslati-cv-fr.pdf`

## 📄 License

This portfolio is created for Hamza Weslati. Feel free to use as inspiration for your own portfolio.

## 📧 Contact

**Hamza Weslati**
- Email: hamza_weslati@live.fr
- LinkedIn: [linkedin.com/in/hamza-weslati](https://linkedin.com/in/hamza-weslati)
- Phone: +216 98 755 480

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
