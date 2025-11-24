# Astro + Plasmic + Lit Application

A modern web application combining Astro's performance, Plasmic's visual builder, and Lit 3 web components.

## 📚 Documentation

**Start here:** [SETUP_COMPLETE.md](./SETUP_COMPLETE.md) - Everything you need to know! ⭐

- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - 30-second guide to common tasks
- **[PLASMIC_GUIDE.md](./PLASMIC_GUIDE.md)** - Complete guide for managing pages & centralized menu
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture & how it works
- **[PLASMIC_SETUP_GUIDE.md](./PLASMIC_SETUP_GUIDE.md)** - Initial setup instructions
- **[PLASMIC_PRODUCTION_GUIDE.md](./PLASMIC_PRODUCTION_GUIDE.md)** - Production deployment guide
- **[PLASMIC_TROUBLESHOOTING.md](./PLASMIC_TROUBLESHOOTING.md)** - Common issues & solutions

## 🚀 Quick Start

1. **Install dependencies**: `npm install`
2. **Configure Plasmic** (optional): Copy `.env.example` to `.env` and add your Plasmic credentials
3. **Start dev server**: `npm run dev`
4. **Open Plasmic Studio** → Register components at `http://localhost:4321/plasmic-host`
5. **Create pages visually** using the MainLayout component!

### 🎯 Key Feature: Centralized Menu

Update your site menu in ONE place:
- Open `src/lib/plasmic-registration.js`
- Edit line 23: `menuItems: ['Home', 'About', 'Services', 'Contact']`
- Restart server - menu updates on all pages! ✨

See [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for a 30-second guide.

## Features

- **2 Landing Pages**: Home and About pages
- **Lit 3 Components**:
  - Header: Customizable navigation header
  - Footer: Footer with social links
  - Hero: Eye-catching hero section
  - VideoPlayer: Embedded video player
- **Plasmic Integration**: All components are registered with Plasmic and can be managed visually

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure Plasmic:
   - Copy `.env.example` to `.env`
   - Get your Plasmic project ID and token from [Plasmic Studio](https://studio.plasmic.app/)
   - Update the values in `.env`

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Lit 3 components
│   │   ├── Header.ts
│   │   ├── Footer.ts
│   │   ├── Hero.ts
│   │   ├── VideoPlayer.ts
│   │   └── plasmic/     # React wrappers for Plasmic
│   ├── layouts/         # Astro layouts
│   ├── lib/             # Plasmic configuration
│   └── pages/           # Astro pages
│       ├── index.astro  # Home page
│       └── about.astro  # About page
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## Components

### Header
Customizable navigation header with logo and menu items.

**Props:**
- `logo` (string): Logo text
- `menuItems` (string[]): Menu item labels
- `backgroundColor` (string): Background color
- `textColor` (string): Text color

### Footer
Footer with copyright and social links.

**Props:**
- `copyright` (string): Copyright text
- `socialLinks` (array): Social media links
- `backgroundColor` (string): Background color
- `textColor` (string): Text color

### Hero
Hero section with title, subtitle, and CTA button.

**Props:**
- `title` (string): Main heading
- `subtitle` (string): Subtitle text
- `ctaText` (string): Button text
- `ctaUrl` (string): Button URL
- `backgroundImage` (string): Background image URL
- `backgroundColor` (string): Background color
- `textColor` (string): Text color

### VideoPlayer
Video player with controls.

**Props:**
- `videoUrl` (string): Video source URL
- `posterUrl` (string): Poster image URL
- `title` (string): Video title
- `controls` (boolean): Show controls
- `autoplay` (boolean): Autoplay video
- `loop` (boolean): Loop video
- `width` (string): Video width
- `maxWidth` (string): Maximum width

## Using with Plasmic

All components are registered with Plasmic and can be used in the Plasmic visual builder. To use them:

1. Set up your Plasmic project
2. Configure the project ID and token in `.env`
3. Import the components in Plasmic Studio
4. Use the visual builder to customize and arrange components

The components are defined in code (using Lit 3) but can be visually managed and styled through Plasmic's interface.

## Technologies

- **[Astro](https://astro.build/)**: Static site generator
- **[Plasmic](https://www.plasmic.app/)**: Visual page builder
- **[Lit 3](https://lit.dev/)**: Web components library
- **TypeScript**: Type safety
- **React**: For Plasmic component wrappers

## License

MIT
