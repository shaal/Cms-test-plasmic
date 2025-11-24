# Quick Reference: Plasmic CMS

## 🚀 Getting Started (3 Minutes)

### 1. Start Server
```bash
npm run dev
```

### 2. Open Plasmic Studio
- Go to https://studio.plasmic.app/
- Add host: `http://localhost:4321/plasmic-host`

### 3. Create Page
- New Page → Drag **MainLayout** → Add content → Publish

---

## 📝 Update Menu (30 Seconds)

**File:** `src/lib/plasmic-registration.js`

**Line 23:** Change this array:

```javascript
defaultValue: ['Home', 'About', 'Services', 'Contact'],
```

Restart server. Done! Menu updates on all pages. ✨

---

## 🎨 Components Cheat Sheet

### MainLayout ⭐
Use on every page. Includes header + footer.

```
MainLayout
├── Header (automatic)
├── [Your Content Here]
└── Footer (automatic)
```

### Hero
Big banner with title, subtitle, button.

### VideoPlayer
Video embed with controls.

### Header / Footer
Standalone versions (rarely needed).

---

## 🔧 Common Tasks

### Add a new page
1. Plasmic Studio → New Page
2. Set path: `/my-page`
3. Drag MainLayout
4. Add content
5. Publish

### Update menu
1. Edit `src/lib/plasmic-registration.js` line 23
2. Restart server

### Change logo
1. Edit `src/lib/plasmic-registration.js` line 18
2. Restart server

### Override menu per page
1. Select MainLayout in Plasmic
2. Right panel → menuItems → Override
3. Customize

---

## 🐛 Quick Fixes

### Menu not updating?
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Components not in Plasmic?
1. Check `localhost:4321/plasmic-host` in browser
2. Look for errors in console
3. Re-connect host in Plasmic Studio

### Page shows 404?
1. Check page path in Plasmic (must start with `/`)
2. Verify `.env` has correct Plasmic credentials
3. Make sure page is published

---

## 📖 Full Guide

For detailed instructions, see [PLASMIC_GUIDE.md](./PLASMIC_GUIDE.md)

---

## 🎯 Golden Rule

**Always use MainLayout on pages for consistent navigation!**

This ensures your menu appears on every page and you only update it in one place.
