# Plasmic Visual Builder Setup Guide

## Step-by-Step Integration Guide

### Prerequisites Completed ✅
- [x] Created .env file with PLASMIC_PROJECT_ID and PLASMIC_PROJECT_TOKEN
- [x] Uncommented registration code in src/lib/plasmic-components.tsx
- [x] Uncommented PLASMIC initialization in src/lib/plasmic-init.ts

---

## Step 1: Start Your Development Server

```bash
npm run dev
```

The server will start at `http://localhost:4321`

---

## Step 2: Register Code Components in Plasmic Studio

### 2.1 Open Your Plasmic Project
1. Go to [https://studio.plasmic.app/](https://studio.plasmic.app/)
2. Open your project (the one matching your PLASMIC_PROJECT_ID)

### 2.2 Register the Code Component Host

1. In Plasmic Studio, click on the **"Code"** button in the left sidebar (or press `Cmd/Ctrl + K`)
2. Click **"Register code components"**
3. Enter your host URL: `http://localhost:4321/plasmic-host`
4. Click **"Register"**

Plasmic will now load your components from the running dev server!

### 2.3 Verify Components Are Loaded

After registration, you should see these 4 components in your component library:
- **Header** (navigation header)
- **Footer** (footer with social links)
- **Hero** (hero section with CTA)
- **VideoPlayer** (video player)

---

## Step 3: Use Components in Plasmic Visual Builder

### 3.1 Create a New Page

1. In Plasmic Studio, click **"New"** → **"Page"**
2. Name it (e.g., "MyLandingPage")
3. Click **"Create"**

### 3.2 Add Your Lit Components

1. Look for the **"Insert"** panel (usually on the left side, press `I` or click the `+` icon)
2. Find your registered components under **"Code Components"** section:
   - Header
   - Footer
   - Hero
   - VideoPlayer

3. **Drag and drop** components onto your page canvas

### 3.3 Customize Components

When you select a component, you'll see its properties in the right sidebar:

**Header Component:**
- `logo` - Change the logo text
- `menuItems` - Array of menu items
- `backgroundColor` - Header background color
- `textColor` - Text color

**Footer Component:**
- `copyright` - Copyright text
- `socialLinks` - Array of social links
- `backgroundColor` - Footer background color
- `textColor` - Text color

**Hero Component:**
- `title` - Main heading
- `subtitle` - Subtitle text
- `ctaText` - Button text
- `ctaUrl` - Button link
- `backgroundImage` - Background image URL
- `backgroundColor` - Background color (if no image)
- `textColor` - Text color

**VideoPlayer Component:**
- `videoUrl` - Video source URL
- `posterUrl` - Poster image
- `title` - Video title
- `controls` - Show controls (true/false)
- `autoplay` - Auto-play (true/false)
- `loop` - Loop video (true/false)
- `width` - Video width
- `maxWidth` - Maximum width

### 3.4 Example: Build a Landing Page

Try this layout:
1. Drag **Header** to the top
2. Drag **Hero** below the header
3. Drag **VideoPlayer** below the hero
4. Add some content sections (use Plasmic's built-in components)
5. Drag **Footer** to the bottom

Customize each component's properties in the right panel!

---

## Step 4: Preview and Publish

### 4.1 Preview Your Page

1. Click the **"Preview"** button in the top toolbar
2. See your page with live components!

### 4.2 Publish Your Changes

1. Click **"Publish"** button in the top-right
2. Your changes are now live

---

## Step 5: Display Your Plasmic Page in Astro

### Option A: Use the Pre-built Plasmic Page Route

1. Open `src/pages/plasmic-page.astro`
2. Change the component name from `'MyLandingPage'` to match your page name in Plasmic
3. Visit `http://localhost:4321/plasmic-page` to see your Plasmic-designed page!

### Option B: Create a Custom Route

Create a new file `src/pages/my-custom-page.astro`:

```astro
---
import { PLASMIC } from '../lib/plasmic-init';
import { PlasmicComponent } from '@plasmicapp/loader-fetcher';
import '../lib/plasmic-components';

const plasmicData = await PLASMIC.maybeFetchComponentData('YourPageName');
const componentMeta = plasmicData?.entryCompMetas[0];
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Custom Page</title>
  </head>
  <body>
    {componentMeta && (
      <PlasmicComponent
        client:load
        component={componentMeta.name}
      />
    )}
  </body>
</html>
```

---

## Troubleshooting

### Components Not Appearing in Plasmic Studio

**Check these:**

1. **Dev server is running**: `npm run dev` should be active
2. **Correct host URL**: Make sure you used `http://localhost:4321/plasmic-host`
3. **No errors in console**: Check browser console for errors
4. **Environment variables loaded**: Verify .env has correct PROJECT_ID and TOKEN

**Try this:**
```bash
# Stop the dev server (Ctrl+C)
# Restart it
npm run dev
# Re-register in Plasmic Studio
```

### .env Not Loading

Make sure your .env file is at the root of the project:
```
/home/user/Cms-test-plasmic/.env
```

Format:
```
PLASMIC_PROJECT_ID=your_actual_project_id
PLASMIC_PROJECT_TOKEN=your_actual_token
```

### Components Load but Don't Render

This usually means:
1. The Lit components aren't being imported - check browser console
2. Import statements in the page are missing - ensure you have:
   ```astro
   import '../lib/plasmic-components';
   ```

---

## Key Files Reference

- **Component Registration**: `src/lib/plasmic-components.tsx`
- **Plasmic Config**: `src/lib/plasmic-init.ts`
- **Lit Components**: `src/components/*.ts`
- **React Wrappers**: `src/components/plasmic/*.tsx`
- **Host Page**: `src/pages/plasmic-host.astro`
- **Example Plasmic Page**: `src/pages/plasmic-page.astro`

---

## Next Steps

1. ✅ Start dev server
2. ✅ Register components in Plasmic Studio
3. ✅ Create a page in Plasmic
4. ✅ Drag and drop your Lit components
5. ✅ Customize properties
6. ✅ Publish
7. ✅ Create an Astro page to display it

**You now have full visual editing control over code components built with Lit 3!** 🎉
