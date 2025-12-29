# Hafiz Muhammad Abubakar - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Material-UI.

## Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Form Handling**: react-hook-form + zod validation
- **Styling**: MUI's sx prop + custom theme

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hmabubakar313/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation with theme toggle
│   │   ├── Footer.tsx      # Site footer with social links
│   │   └── Section.tsx     # Reusable section wrapper
│   ├── sections/
│   │   ├── Hero.tsx        # Landing section with CTAs
│   │   ├── Story.tsx       # About/biography section
│   │   ├── Journey.tsx     # Experience & education timeline
│   │   ├── Skills.tsx      # Technical skills grid
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Now.tsx         # Current work section
│   │   └── Contact.tsx     # Contact form & info
│   ├── ui/
│   │   ├── ContactForm.tsx # Form with validation
│   │   ├── ProjectCard.tsx # Project display card
│   │   ├── SkillCategory.tsx # Skills group display
│   │   └── TimelineItem.tsx # Timeline entry
│   └── ThemeToggle.tsx     # Dark/light mode switch
├── hooks/
│   └── useSectionInView.ts # Intersection observer hook
├── theme/
│   └── theme.ts            # MUI theme configuration
├── config/
│   └── site.ts             # All site content & config
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main app component
└── main.tsx               # App entry point
```

## Customization

### Updating Content

All site content is centralized in `src/config/site.ts`. Edit this file to update:

- Personal information (name, title, contact)
- Social media links
- Hero section text
- Story/about paragraphs
- Work experience & education
- Skills and categories
- Projects
- "Now" section content

### Theme Customization

Edit `src/theme/theme.ts` to customize:

- Primary and secondary colors
- Typography (fonts, sizes)
- Component styling
- Border radius
- Shadows

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `App.tsx`
3. Add navigation item in `src/config/site.ts` under `navItems`
4. Use `useSectionInView` hook for active nav highlighting

## Features

- **Dark/Light Theme**: System preference detection with manual toggle
- **Smooth Scroll Navigation**: Active section highlighting
- **Responsive Design**: Mobile-first approach
- **Animations**: Scroll-reveal effects with Framer Motion
- **Form Validation**: Real-time validation with zod schemas
- **Accessibility**: Skip links, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, sitemap

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Connecting Contact Form to Backend

The contact form is currently set up for client-side validation only. To connect to a backend:

1. Open `src/components/ui/ContactForm.tsx`
2. Uncomment the API call in the `onSubmit` function:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
if (!response.ok) throw new Error('Failed to send message');
```

3. Set up your backend endpoint to handle the form data

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: hmabubakar313@gmail.com
- **LinkedIn**: [linkedin.com/in/hmabubakar313](https://linkedin.com/in/hmabubakar313)
- **Medium**: [medium.com/@hmabubakar313](https://medium.com/@hmabubakar313)
