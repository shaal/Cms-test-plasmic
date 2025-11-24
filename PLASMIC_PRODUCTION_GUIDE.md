# Plasmic Production Guide

This guide explains how Plasmic content management works in production, including version control, rollback strategies, and deployment workflows.

## Table of Contents

1. [How It Works](#how-it-works)
2. [Content Storage](#content-storage)
3. [Production Readiness](#production-readiness)
4. [Version Control](#version-control)
5. [Rollback Strategies](#rollback-strategies)
6. [Deployment Workflows](#deployment-workflows)
7. [Environment Configuration](#environment-configuration)
8. [Troubleshooting](#troubleshooting)

---

## How It Works

This project uses **Plasmic's Loader API** (headless CMS approach) to fetch page content at runtime or build-time.

### Architecture Overview

```
Editor in Plasmic Studio
    ↓ (Publishes changes)
Plasmic CDN (stores all designs)
    ↓ (API fetch)
Your Astro App
    ↓ (Renders)
End User
```

### Key Concepts

- **No Database Required**: All design data lives in Plasmic's cloud
- **No Code in Git**: Your repo contains integration code, not designs
- **API-Driven**: Content fetched via Plasmic's API
- **Version Control**: Every publish creates an immutable version
- **CDN-Backed**: Fast global content delivery

---

## Content Storage

### Where Content Lives

All Plasmic content is stored in **Plasmic's cloud infrastructure**:

- ✅ Designs and layouts
- ✅ Component configurations
- ✅ Content and text
- ✅ Images and assets (via CDN URLs)
- ✅ Version history

### What's in Your Codebase

Your repository only contains:

```
src/
├── components/
│   ├── PlasmicPage.jsx          # Plasmic loader wrapper
│   └── plasmic/                 # Your custom Lit components
│       ├── HeaderWrapper.jsx
│       ├── FooterWrapper.jsx
│       ├── HeroWrapper.jsx
│       └── VideoPlayerWrapper.jsx
├── pages/
│   └── newpage.astro            # Page that loads Plasmic content
```

**What's NOT in your repo:**
- ❌ Plasmic page designs
- ❌ Layout configurations
- ❌ Content updates from editors

---

## Production Readiness

Your current setup is **production-ready** ✅

### What's Already Configured

1. **Public API Token** (`src/components/PlasmicPage.jsx:15`)
   - Read-only access token
   - Safe to expose in client-side code
   - Required for fetching published content

2. **Production Mode** (`preview: false`)
   - Only fetches **published** versions
   - Ignores draft changes
   - Ensures stable content

3. **CDN Caching**
   - Plasmic automatically caches responses
   - Fast content delivery worldwide
   - Reduces API calls

4. **Version Control**
   - Environment variable support enabled
   - Can pin to specific versions
   - Rollback capability

### Current Behavior

With your setup:

```javascript
// src/components/PlasmicPage.jsx:11-20
const PLASMIC = initPlasmicLoader({
  projects: [{
    id: "wYYgvLaUtsMjC29YyzEHqw",
    token: "pxFtGLabN1cBPQyz5qmP1TbtGWYyhchcRdIV5n4i0p7wzEPY5mHRAPJCHNh7vcLv3RIfso9Tkt77lwArgvA",
    version: import.meta.env.PUBLIC_PLASMIC_VERSION || "latest",
  }],
  preview: false,
});
```

**Default behavior** (no env var set):
- Fetches the **latest published version**
- Updates appear immediately after editors publish
- No deployment needed for content changes

---

## Version Control

### How Versioning Works

Every time you click **"Publish"** in Plasmic Studio, it creates an **immutable version** (like a Git commit).

**Example version history:**
```
v2.0.0 - Dec 24, 2024 - "Added new hero section"
v1.0.0 - Dec 24, 2024 - "Initial NewPage publish"
v0.1.0 - Dec 23, 2024 - "Project setup"
```

### Viewing Version History

**In Plasmic Studio:**
1. Click your project name (top-left)
2. Click **"Settings"** icon (⚙️)
3. Select **"Versions"** tab
4. View all published versions with descriptions

**Alternative:**
- When publishing, click **"View history"** in the publish dialog

### Version Pinning Options

#### Option 1: Always Use Latest (Current Default)

```bash
# .env or environment variables
# Leave PUBLIC_PLASMIC_VERSION unset or set to "latest"
PUBLIC_PLASMIC_VERSION=latest
```

**Behavior:**
- ✅ Editors can publish immediately
- ✅ Changes go live instantly
- ✅ No developer involvement needed
- ⚠️ Unexpected changes could appear

**Best for:** Content-heavy sites with trusted editors

---

#### Option 2: Pin to Specific Version

```bash
# .env or environment variables
PUBLIC_PLASMIC_VERSION=1.0.0
```

**Behavior:**
- ✅ Predictable content (locked to version)
- ✅ Changes only go live when you update version
- ✅ Full control over releases
- ⚠️ Requires manual version bumps

**Best for:** Enterprise sites requiring change control

---

#### Option 3: Environment-Specific Versions

```bash
# Development (.env.development)
PUBLIC_PLASMIC_VERSION=latest

# Staging (.env.staging)
PUBLIC_PLASMIC_VERSION=2.1.0

# Production (.env.production)
PUBLIC_PLASMIC_VERSION=2.0.0
```

**Behavior:**
- ✅ Test new versions in staging first
- ✅ Production stays stable
- ✅ Gradual rollout capability
- ⚠️ Requires environment management

**Best for:** Teams with staging/production pipelines

---

## Rollback Strategies

### Method 1: Environment Variable Rollback (Fastest ⚡)

**When to use:** Emergency rollback needed immediately

**Steps:**

1. **Identify target version** in Plasmic Studio (Settings > Versions)
   ```
   Example: v1.0.0
   ```

2. **Update environment variable** in your hosting platform:

   **Vercel:**
   ```bash
   # In Vercel dashboard or CLI
   vercel env add PUBLIC_PLASMIC_VERSION production
   # Enter: 1.0.0
   ```

   **Netlify:**
   ```bash
   # In Netlify dashboard: Site settings > Environment variables
   PUBLIC_PLASMIC_VERSION = 1.0.0
   ```

3. **Restart your application**
   - Vercel: Trigger redeploy or it restarts automatically
   - Netlify: Redeploy from UI

**Result:** Site now shows content from version 1.0.0

**Time to rollback:** ~2-5 minutes (no code deploy!)

---

### Method 2: Code-Based Rollback

**When to use:** Permanent version pin needed

**Steps:**

1. **Update `.env` file** locally:
   ```bash
   PUBLIC_PLASMIC_VERSION=1.0.0
   ```

2. **Commit and deploy**:
   ```bash
   git add .env
   git commit -m "Rollback to Plasmic v1.0.0"
   git push origin main
   ```

3. **Wait for deployment** to complete

**Result:** Version pinned in code (tracked in Git)

**Time to rollback:** ~5-10 minutes (includes deployment)

---

### Method 3: Plasmic Studio Rollback

**When to use:** Want to create a new version with old content

**Steps:**

1. **Open Plasmic Studio**
2. **Go to Settings > Versions**
3. **Find the version** you want to restore (e.g., v1.0.0)
4. **Click "Restore"** button
5. **Publish as new version** (creates v2.1.0 with v1.0.0 content)

**Result:** New version published with old content

**Time to rollback:** Immediate (if using `version: "latest"`)

---

## Deployment Workflows

### Workflow 1: Continuous Deployment (Current Setup)

```
Editor publishes in Plasmic
    ↓
Plasmic CDN updates
    ↓
Next user request fetches new version
    ↓
Changes live immediately
```

**Pros:**
- ✅ No deployment needed
- ✅ Editors are autonomous
- ✅ Fastest time to publish

**Cons:**
- ⚠️ No staging step
- ⚠️ Changes go live immediately

**Configuration:**
```javascript
version: import.meta.env.PUBLIC_PLASMIC_VERSION || "latest"
```

---

### Workflow 2: Controlled Releases

```
Editor publishes in Plasmic (v2.0.0)
    ↓
Test in staging (PUBLIC_PLASMIC_VERSION=2.0.0)
    ↓
Approve changes
    ↓
Update production env var to 2.0.0
    ↓
Redeploy production
```

**Pros:**
- ✅ Testing before production
- ✅ Gradual rollout
- ✅ Rollback safety

**Cons:**
- ⚠️ Requires manual promotion
- ⚠️ Slower time to publish

**Configuration:**
```bash
# Staging
PUBLIC_PLASMIC_VERSION=2.0.0

# Production (after testing)
PUBLIC_PLASMIC_VERSION=2.0.0
```

---

### Workflow 3: Webhook-Triggered Builds

```
Editor publishes in Plasmic
    ↓
Webhook triggers CI/CD
    ↓
Build runs (fetches latest Plasmic content)
    ↓
Deploy to production
    ↓
Changes live
```

**Pros:**
- ✅ Static build (fastest page loads)
- ✅ Offline capability
- ✅ Audit trail in CI/CD

**Cons:**
- ⚠️ Requires webhook setup
- ⚠️ Build time delay

**Setup:**
1. **In Plasmic Studio:** Settings > Webhooks
2. **Add webhook URL:** Your CI/CD trigger endpoint
3. **Configure build:** Fetch Plasmic data during build

---

## Environment Configuration

### Astro Environment Variables

Astro supports environment variables prefixed with `PUBLIC_` for client-side access.

**File structure:**
```
.env                    # Local development (gitignored)
.env.example            # Template (committed to git)
```

### Setting Environment Variables

#### Local Development

1. **Create `.env` file**:
   ```bash
   cp .env.example .env
   ```

2. **Set variable**:
   ```bash
   PUBLIC_PLASMIC_VERSION=latest
   ```

3. **Restart dev server**:
   ```bash
   npm run dev
   ```

---

#### Production Hosting

**Vercel:**
```bash
# Dashboard: Project > Settings > Environment Variables
# Or via CLI:
vercel env add PUBLIC_PLASMIC_VERSION production
```

**Netlify:**
```bash
# Dashboard: Site settings > Environment variables > Add variable
# Key: PUBLIC_PLASMIC_VERSION
# Value: latest
```

**Other platforms:**
- Refer to your hosting provider's documentation
- Most support environment variables in dashboard/CLI

---

### Accessing in Code

```javascript
// In any client-side component
const version = import.meta.env.PUBLIC_PLASMIC_VERSION || "latest";
console.log("Loading Plasmic version:", version);
```

---

## Troubleshooting

### Issue: Changes Not Appearing

**Symptoms:** Published changes in Plasmic don't show on site

**Solutions:**

1. **Check publish status**
   - In Plasmic Studio, ensure you clicked "Publish"
   - Verify publish completed successfully

2. **Check version setting**
   ```bash
   echo $PUBLIC_PLASMIC_VERSION
   ```
   - If pinned to old version, update to latest

3. **Clear cache**
   ```bash
   # Development
   rm -rf .astro
   npm run dev
   ```

4. **Check browser cache**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

### Issue: Version Rollback Not Working

**Symptoms:** Setting version env var doesn't change content

**Solutions:**

1. **Verify env var is set**
   ```bash
   # In your app
   console.log(import.meta.env.PUBLIC_PLASMIC_VERSION);
   ```

2. **Restart server**
   - Environment variables require server restart
   - Redeploy in production

3. **Check version exists**
   - Go to Plasmic Studio > Settings > Versions
   - Verify the version number exists

---

### Issue: Code Components Not Rendering

**Symptoms:** Plasmic warnings about unregistered components

**Solution:**

Ensure components are registered in `src/components/PlasmicPage.jsx:19-64`:

```javascript
PLASMIC.registerComponent(HeaderWrapper, {
  name: 'Header',
  props: { /* ... */ },
});
```

Component name in `registerComponent` must match name used in Plasmic Studio.

---

### Issue: Slow Page Loads

**Symptoms:** Pages take long to load content

**Solutions:**

1. **Enable build-time fetching** (for static sites):
   ```javascript
   // Fetch at build time instead of runtime
   export async function getStaticProps() {
     const plasmicData = await PLASMIC.maybeFetchComponentData("NewPage");
     return { props: { plasmicData } };
   }
   ```

2. **Check CDN**
   - Plasmic uses a CDN, should be fast
   - Test from multiple locations

3. **Monitor API calls**
   - Open browser DevTools > Network
   - Look for Plasmic API calls
   - Check response times

---

## Additional Resources

### Official Documentation

- **Plasmic Docs:** https://docs.plasmic.app/
- **Loader API:** https://docs.plasmic.app/learn/loader-api/
- **Version Control:** https://docs.plasmic.app/learn/publishing-importing/

### Your Project Files

- **Plasmic Integration:** `src/components/PlasmicPage.jsx`
- **Example Page:** `src/pages/newpage.astro`
- **Environment Template:** `.env.example`

### Need Help?

- **Plasmic Community:** https://forum.plasmic.app/
- **Discord:** https://www.plasmic.app/slack
- **GitHub Issues:** https://github.com/plasmicapp/plasmic

---

## Summary

### ✅ Production Checklist

- [x] Public API token configured
- [x] Production mode enabled (`preview: false`)
- [x] Version control via environment variables
- [x] `.env.example` documented
- [ ] Deployment pipeline configured (if using webhooks)
- [ ] Staging environment setup (if using controlled releases)
- [ ] Team trained on Plasmic Studio
- [ ] Rollback procedure documented

### 🎯 Key Takeaways

1. **No database needed** - Plasmic stores everything
2. **Instant rollback** - Change env var, restart app
3. **Version control** - Every publish creates immutable version
4. **Production ready** - Current setup works as-is
5. **Flexible workflows** - Choose continuous or controlled deployment

Your Plasmic integration is ready for production! 🚀
