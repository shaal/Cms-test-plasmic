# Plasmic Studio CMS Guide

## Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Centralized Menu Management](#centralized-menu-management)
4. [Creating Pages in Plasmic](#creating-pages-in-plasmic)
5. [Available Components](#available-components)
6. [Workflow](#workflow)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Overview

This project is configured so that **all pages are managed through Plasmic Studio**. This means:

✅ **Pages are created visually** in Plasmic Studio, not in code
✅ **Menu is centralized** - update in one place, affects all pages
✅ **No code changes needed** for content or layout updates
✅ **Visual editing** with live preview

---

## Quick Start

### 1. Start Your Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

### 2. Open Plasmic Studio

1. Go to [Plasmic Studio](https://studio.plasmic.app/)
2. Open your project (or create a new one)
3. Register your code component host:
   - Click on the "Code Components" button
   - Add host URL: `http://localhost:4321/plasmic-host`
   - Wait for components to load

### 3. Verify Components Are Loaded

You should see these components available in Plasmic:
- **MainLayout** ⭐ (RECOMMENDED - includes header & footer)
- Header
- Footer
- Hero
- VideoPlayer

---

## Centralized Menu Management

### The MainLayout Component

**MainLayout** is your secret weapon for consistent navigation! It includes:
- Header with menu
- Footer
- Content area (slot for your page content)

### How to Use MainLayout

#### Option 1: Set Default Menu Items (Recommended)

Update the menu **once** for all pages:

1. Open `src/lib/plasmic-registration.js`
2. Find the `MainLayout` registration (around line 21)
3. Update the `menuItems` default value:

```javascript
menuItems: {
  type: 'array',
  defaultValue: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  description: 'Array of menu item labels - UPDATE HERE to change menu site-wide',
},
```

4. Save the file - all pages using MainLayout will automatically show the updated menu!

#### Option 2: Override Per Page (Advanced)

If you need different menus for specific pages:

1. In Plasmic Studio, select the MainLayout component on your page
2. In the right panel, find "menuItems"
3. Click "Override" and customize for that page only

**Note:** Most sites should use Option 1 for consistency.

---

## Creating Pages in Plasmic

### Step-by-Step: Create Your First Page

#### 1. Create a New Page in Plasmic Studio

1. Click "+" or "New Page" in Plasmic Studio
2. Give it a name (e.g., "About Us")
3. Choose "Blank" template

#### 2. Add the MainLayout Component

1. From the left panel, drag **MainLayout** onto the canvas
2. The header and footer will automatically appear
3. Your page content goes in the middle (the slot area)

#### 3. Add Content

Drag any components into the MainLayout's content area:
- **Hero** for banner sections
- **VideoPlayer** for videos
- Text, images, buttons from Plasmic's built-in components

#### 4. Configure Page Settings

1. Click on "Page Settings" (gear icon)
2. Set the page path (e.g., `/about`)
3. Set page title and SEO metadata
4. Click "Publish"

#### 5. Publish Your Page

1. Click "Publish" button in top-right
2. Add a version note (optional)
3. Your page is now live!

### Creating Additional Pages

Repeat the process above for each page:
- Home: `/` (path)
- About: `/about`
- Services: `/services`
- Blog: `/blog`
- Contact: `/contact`

**Pro Tip:** Each page should use MainLayout for consistent navigation!

---

## Available Components

### MainLayout ⭐ (RECOMMENDED)

**Purpose:** Provides consistent header/footer across all pages

**Props:**
- `logo` (string): Your brand name
- `menuItems` (array): Menu item labels (e.g., `['Home', 'About', 'Contact']`)
- `headerBackgroundColor` (string): Header background color (hex)
- `headerTextColor` (string): Header text color (hex)
- `footerCopyright` (string): Copyright text
- `footerBackgroundColor` (string): Footer background color (hex)
- `footerTextColor` (string): Footer text color (hex)
- `children` (slot): Page content goes here

**When to Use:** Use on every page for consistent navigation!

---

### Header

**Purpose:** Navigation header (standalone, or use MainLayout instead)

**Props:**
- `logo` (string): Brand name
- `menuItems` (array): Menu items
- `backgroundColor` (string): Background color
- `textColor` (string): Text color

**When to Use:** Only if you need a header without MainLayout

---

### Footer

**Purpose:** Page footer (standalone, or use MainLayout instead)

**Props:**
- `copyright` (string): Copyright text
- `socialLinks` (array): Social media links
- `backgroundColor` (string): Background color
- `textColor` (string): Text color

**When to Use:** Only if you need a footer without MainLayout

---

### Hero

**Purpose:** Large banner section with heading, subtitle, and CTA button

**Props:**
- `title` (string): Main heading
- `subtitle` (string): Description text
- `ctaText` (string): Button text
- `ctaUrl` (string): Button link
- `backgroundImage` (string): Background image URL
- `backgroundColor` (string): Background color (if no image)
- `textColor` (string): Text color

**When to Use:** Top of homepage or landing pages

---

### VideoPlayer

**Purpose:** Embedded video with controls

**Props:**
- `videoUrl` (string): Video file URL
- `posterUrl` (string): Poster image URL
- `title` (string): Video title
- `controls` (boolean): Show controls
- `autoplay` (boolean): Auto-play video
- `loop` (boolean): Loop video
- `width` (string): Video width
- `maxWidth` (string): Maximum width

**When to Use:** Anywhere you need video content

---

## Workflow

### Typical Development Workflow

```
┌─────────────────────────────────────────┐
│ 1. Start dev server (npm run dev)      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│ 2. Open Plasmic Studio                  │
│    Connect to localhost:4321/plasmic-host│
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│ 3. Create/Edit pages with MainLayout    │
│    Update menu items in one place       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│ 4. Preview changes in Plasmic           │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│ 5. Publish in Plasmic Studio            │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│ 6. View live site at localhost:4321     │
└─────────────────────────────────────────┘
```

### Content Update Workflow (No Code!)

When you need to update content:

1. Open Plasmic Studio
2. Find the page
3. Edit the content
4. Publish
5. Done! ✨

No git commits, no deployments, no code changes!

---

## Best Practices

### ✅ DO

1. **Use MainLayout on every page** for consistent navigation
2. **Update menu in one place** (src/lib/plasmic-registration.js)
3. **Publish changes** in Plasmic Studio when ready
4. **Use semantic menu item names** (e.g., 'Home', 'Services', not 'Page1', 'Page2')
5. **Test pages in preview** before publishing
6. **Use version control** in Plasmic (create versions before major changes)

### ❌ DON'T

1. **Don't create pages in Astro files** - use Plasmic Studio instead
2. **Don't hardcode menu items** in multiple places
3. **Don't forget to publish** changes in Plasmic
4. **Don't skip MainLayout** unless you have a specific reason
5. **Don't mix approaches** - stick to Plasmic for all pages

---

## Troubleshooting

### Menu Items Not Updating

**Problem:** Changed menu items but not showing on site

**Solutions:**
1. **Check if you updated the right place:**
   - Open `src/lib/plasmic-registration.js`
   - Look for `MainLayout` registration
   - Verify `menuItems` defaultValue
2. **Restart dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```
3. **Refresh Plasmic Studio:**
   - Disconnect and reconnect code component host
4. **Clear cache:**
   - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

### Components Not Showing in Plasmic

**Problem:** Can't see MainLayout or other components

**Solutions:**
1. **Verify host connection:**
   - In Plasmic Studio, check code components section
   - Host URL should be: `http://localhost:4321/plasmic-host`
   - Status should show "Connected"
2. **Check dev server is running:**
   ```bash
   npm run dev
   ```
3. **Look for errors:**
   - Open browser console on plasmic-host page
   - Check for registration errors
4. **Re-register host:**
   - Remove and re-add the host URL in Plasmic Studio

---

### Page Not Found After Publishing

**Problem:** Published page shows 404 error

**Solutions:**
1. **Check page path:**
   - In Plasmic Studio, open page settings
   - Verify path is correct (e.g., `/about` not `about`)
2. **Verify Plasmic config:**
   - Check `.env` file has correct `PLASMIC_PROJECT_ID` and `PLASMIC_PROJECT_TOKEN`
3. **Check page is published:**
   - Ensure "Publish" button was clicked in Plasmic
   - Check published version includes your page

---

### Menu Links Not Working

**Problem:** Clicking menu items doesn't navigate

**Solution:** Menu items are currently labels only. To add navigation:

**Option 1: Update Header Component (Recommended)**

Modify `src/components/Header.ts`:

```typescript
// Change line 50 from:
<a href="#${item.toLowerCase()}" style="color: ${this.textColor}">${item}</a>

// To use absolute paths:
<a href="/${item.toLowerCase()}" style="color: ${this.textColor}">${item}</a>
```

**Option 2: Use Custom Menu Array**

Pass menu items as objects with labels and URLs:

```javascript
menuItems: [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Contact', url: '/contact' }
]
```

Then update Header component to handle object structure.

---

## Advanced Topics

### Custom Menu Structure

If you need more complex menus (dropdowns, mega menus), you have options:

1. **Enhance the Header component** to support nested menuItems
2. **Create a new navigation component** with dropdown support
3. **Use Plasmic's built-in menu components** and slot them into MainLayout

### Dynamic Pages

For dynamic content (e.g., blog posts from a database):

1. Create a template page in Plasmic
2. Use Astro's dynamic routing
3. Pass data to Plasmic components as props

### Integrating with a CMS

You can combine Plasmic with a headless CMS:

1. Use Plasmic for page structure and layout
2. Fetch content from your CMS (Contentful, Sanity, etc.)
3. Pass CMS data to Plasmic components

---

## Next Steps

1. ✅ Read this guide
2. ✅ Start dev server (`npm run dev`)
3. ✅ Open Plasmic Studio and connect host
4. ✅ Create your first page with MainLayout
5. ✅ Update menu items in `plasmic-registration.js`
6. ✅ Publish and view your site!

---

## Resources

- [Plasmic Documentation](https://docs.plasmic.app/)
- [Plasmic Studio](https://studio.plasmic.app/)
- [Astro Documentation](https://docs.astro.build/)
- [Lit Documentation](https://lit.dev/)

---

**Questions?** Check the troubleshooting section or refer to the Plasmic docs!
