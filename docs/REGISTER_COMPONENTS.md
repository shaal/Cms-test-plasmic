# How to Register Your Components in Plasmic Studio

## Current Status ✅
- Dev server is running: `http://localhost:4321`
- Plasmic host page is working: `http://localhost:4321/plasmic-host`
- Components are registered successfully (check console: "✅ Plasmic components registered successfully!")

## Steps to Register in Plasmic Studio:

### 1. Sign in to Plasmic
Go to: https://studio.plasmic.app/projects/wYYgvLaUtsMjC29YyzEHqw

### 2. Register Code Components
Once you're in your project:
- Look for the **"Code"** button in the left sidebar (or press `Cmd/Ctrl + K`)
- Click **"Register code components"** or **"Configure host"**
- Enter your host URL: `http://localhost:4321/plasmic-host`
- Click **"Register"** or **"Save"**

### 3. Wait for Component Registration
Plasmic Studio will connect to your local server and load the components. You should see:
- **Header** - Navigation header component
- **Footer** - Footer with social links
- **Hero** - Hero section with CTA
- **VideoPlayer** - Video player component

### 4. Verify Components Loaded
After registration, check:
- The component panel in Plasmic Studio
- Look under "Code Components" section
- All 4 components should be listed

## Troubleshooting

### If you see a blank page after registration:
1. Make sure dev server is still running: `npm run dev`
2. Verify the host page loads: http://localhost:4321/plasmic-host
3. Check browser console for any errors
4. Try refreshing Plasmic Studio

### If Plasmic can't connect to localhost:
1. Make sure you're using `http://` not `https://`
2. The full URL should be: `http://localhost:4321/plasmic-host`
3. Check if any firewall/antivirus is blocking the connection
4. Try using `http://127.0.0.1:4321/plasmic-host` instead

### If components don't appear:
1. Open browser DevTools in Plasmic Studio (F12)
2. Check the Console tab for any errors
3. Look for CORS errors or connection failures
4. Make sure the components registered successfully (check the host page console)

## What You'll See in Plasmic Studio

Once registered, you can:
- Drag and drop your components onto pages
- Edit component properties in the right sidebar:
  - **Header**: logo, menuItems, colors
  - **Footer**: copyright, socialLinks, colors
  - **Hero**: title, subtitle, CTA text/URL, background
  - **VideoPlayer**: videoUrl, controls, autoplay, etc.

## Next Steps After Registration

1. Create a new page in Plasmic Studio
2. Add your components by dragging them from the component panel
3. Customize the properties
4. Publish your changes
5. View the result in your Astro app at `/plasmic-page`

---

**Note**: Keep the dev server running (`npm run dev`) while working in Plasmic Studio so it can communicate with your local components.
