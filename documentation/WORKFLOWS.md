# Developer Workflows

This guide covers the day-to-day workflows for developing and deploying PoliVis.

## 📋 Table of Contents

- [Development Workflow](#development-workflow)
- [Version Release Workflow](#version-release-workflow)
- [Deployment Workflow](#deployment-workflow)
- [Testing Workflow](#testing-workflow)
- [Troubleshooting Workflow](#troubleshooting-workflow)

---

## 🛠 Development Workflow

### Starting Development

```bash
# 1. Navigate to project
cd PoliVis

# 2. Start dev server
npm run dev

# 3. Open browser
# Visit: http://localhost:3000
```

### Live Development

**The dev server runs with hot reload:**
- Edit any `.tsx`, `.ts`, `.css` file
- Save the file
- Browser updates automatically
- No manual refresh needed!

**What gets updated instantly:**
- React components
- TypeScript files
- CSS/styling
- Constants and data

### Making Changes

1. **Edit files** in your editor
2. **Save** (Ctrl+S / Cmd+S)
3. **See changes** in browser immediately
4. **Check console** for any errors

### Testing on Mobile

Use the network URL for mobile testing:
```
Local:   http://localhost:3000/
Network: http://192.168.x.x:3000/  ← Use this on your phone
```

1. Find the Network URL in terminal after starting dev server
2. Open on mobile device (must be on same WiFi)
3. Changes sync in real-time to mobile too!

### Stopping Development

```bash
# Press Ctrl+C in the terminal running dev server
# Or just close the terminal
```

---

## 📦 Version Release Workflow

### Understanding Semantic Versioning

```
MAJOR.MINOR.PATCH
  1  .  0  .  0

MAJOR (1.x.x) - Breaking changes
MINOR (x.1.x) - New features, backwards compatible
PATCH (x.x.1) - Bug fixes, minor changes
```

### Release Process

#### For Bug Fixes (Patch)
```bash
# Bumps version: 1.0.0 → 1.0.1
npm run version:patch

# Push changes
git push origin main
git push origin --tags
```

#### For New Features (Minor)
```bash
# Bumps version: 1.0.0 → 1.1.0
npm run version:minor

# Push changes
git push origin main
git push origin --tags
```

#### For Breaking Changes (Major)
```bash
# Bumps version: 1.0.0 → 2.0.0
npm run version:major

# Push changes
git push origin main
git push origin --tags
```

### What Happens Automatically

When you run `npm run version:*`:

1. ✅ Updates `package.json` version
2. ✅ Updates `version.ts` with new version and build date
3. ✅ Creates a git commit: "1.0.1"
4. ✅ Creates a git tag: "v1.0.1"

When you push:

5. ✅ GitHub Actions triggers
6. ✅ Builds project with new version
7. ✅ Deploys to GitHub Pages
8. ✅ Users see update banner automatically

---

## 🚀 Deployment Workflow

### Automatic Deployment (Recommended)

**Every push to `main` triggers automatic deployment:**

```bash
# 1. Make your changes
git add .
git commit -m "Add new feature"
git push origin main

# 2. Wait 2-3 minutes
# GitHub Actions builds and deploys automatically

# 3. Verify deployment
# Visit: https://BenWassa.github.io/PoliVis/
```

### Manual Deployment Trigger

If you need to re-deploy without changes:

1. Go to: https://github.com/BenWassa/PoliVis/actions
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow" → "Run workflow"

### Deployment Checklist

Before pushing to production:

- [ ] Test locally: `npm run build && npm run preview`
- [ ] Check for TypeScript errors: Build succeeds
- [ ] Test on mobile (if UI changes)
- [ ] Update version if needed: `npm run version:patch/minor/major`
- [ ] Review changes: `git diff`
- [ ] Commit with clear message
- [ ] Push to main
- [ ] Monitor GitHub Actions
- [ ] Verify live site after deployment

---

## 🧪 Testing Workflow

### Local Testing

#### Development Mode
```bash
npm run dev
# Test features interactively
# Hot reload for quick iteration
```

#### Production Build Testing
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Visit: http://localhost:4173
```

### Testing Service Worker Updates

**Simulate update flow:**

```bash
# 1. Build initial version
npm run build
npm run preview

# 2. Open in browser
# Visit: http://localhost:4173

# 3. Make changes to app
# Edit App.tsx or any component

# 4. Bump version and rebuild
npm run version:patch
npm run build

# 5. Restart preview
npm run preview

# 6. Refresh browser
# Should see update banner!
```

### Testing on Mobile Devices

```bash
# 1. Start dev server
npm run dev

# 2. Note the Network URL
# Network: http://192.168.x.x:3000

# 3. On mobile device (same WiFi)
# Open browser → enter Network URL

# 4. Test mobile-specific features
# - Touch interactions
# - Screen sizes
# - PWA install prompt
# - Offline mode
```

### Testing PWA Features

#### Install as PWA
1. Open site on mobile
2. Browser shows "Add to Home Screen"
3. Install app
4. Open from home screen
5. Verify standalone mode

#### Test Offline Mode
1. Open app in browser
2. Open DevTools → Network tab
3. Check "Offline"
4. Reload page
5. Should load from cache

#### Test Updates
1. Have app installed/cached
2. Deploy new version
3. Reopen app (may need to wait up to 1 hour)
4. Should see update banner
5. Click "Update Now"
6. Verify new version loads

---

## 🔧 Troubleshooting Workflow

### Common Issues and Solutions

#### Issue: PowerShell Won't Run npm Commands

**Error:** `cannot be loaded because running scripts is disabled`

**Solution:**
```bash
# Use cmd instead
cmd /c npm run dev
cmd /c npm run build
```

#### Issue: Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Find and kill process using port 3000
# Or run on different port:
npm run dev -- --port 3001
```

#### Issue: Old Version Stuck in Browser

**Problem:** Browser shows old version after deployment

**Solutions:**

1. **Hard Refresh:**
   - Windows: `Ctrl+Shift+R`
   - Mac: `Cmd+Shift+R`

2. **Clear Service Worker:**
   ```javascript
   // In DevTools Console
   navigator.serviceWorker.getRegistrations().then(regs => 
     regs.forEach(reg => reg.unregister())
   );
   // Then hard refresh
   ```

3. **Clear All Caches:**
   ```javascript
   // In DevTools Console
   caches.keys().then(names => 
     Promise.all(names.map(name => caches.delete(name)))
   );
   ```

#### Issue: Build Fails

**Error:** Build fails with TypeScript errors

**Solution:**
```bash
# Check for errors
npm run build

# Fix TypeScript errors in code
# Common issues:
# - Missing imports
# - Type mismatches
# - Unused variables

# Rebuild
npm run build
```

#### Issue: Service Worker Not Updating

**Problem:** Changes deployed but SW not updating

**Debug Steps:**

1. **Check Service Worker Status:**
   - Open DevTools → Application → Service Workers
   - Look for "waiting to activate" or "activated"

2. **Force Update:**
   ```javascript
   // In Console
   navigator.serviceWorker.getRegistrations().then(regs => {
     regs.forEach(reg => reg.update());
   });
   ```

3. **Skip Waiting:**
   - In DevTools → Application → Service Workers
   - Click "skipWaiting" if available

4. **Unregister and Refresh:**
   ```javascript
   navigator.serviceWorker.getRegistrations().then(regs => 
     regs.forEach(reg => reg.unregister())
   );
   location.reload();
   ```

#### Issue: Changes Not Appearing in Dev Mode

**Problem:** Saved changes don't appear in browser

**Solutions:**

1. **Check Terminal:** Make sure dev server is running
2. **Check for Errors:** Look in terminal for compilation errors
3. **Hard Refresh:** Sometimes needed for CSS changes
4. **Restart Dev Server:** `Ctrl+C` then `npm run dev` again

---

## 📁 File Organization Workflow

### Adding New Components

```bash
# 1. Create component file
# Location: components/YourComponent.tsx

# 2. Import and use in App.tsx or other components
import YourComponent from './components/YourComponent';

# 3. Test in dev mode
npm run dev

# 4. Component auto-reloads as you edit
```

### Adding New Data

```bash
# 1. Edit constants.ts
# Add new politicians, issues, etc.

# 2. Ensure types match in types.ts
# Add new interfaces if needed

# 3. Test changes immediately
# Dev server auto-reloads with new data
```

### Adding Documentation

```bash
# Add to documentation/ folder
# Use Markdown format
# Link from main README.md if important
```

---

## 🔄 Git Workflow

### Daily Development

```bash
# 1. Make changes
# Edit files as needed

# 2. Check status
git status

# 3. Stage changes
git add .

# 4. Commit with clear message
git commit -m "Add feature: description of what changed"

# 5. Push to main
git push origin main
```

### Best Practices

**Commit Messages:**
```bash
# Good commit messages:
git commit -m "Add politician search functionality"
git commit -m "Fix: Layout issue on mobile devices"
git commit -m "Update README with new instructions"

# Less helpful:
git commit -m "changes"
git commit -m "update"
git commit -m "fix"
```

**Before Pushing:**
```bash
# Check what you're committing
git status
git diff

# Make sure it builds
npm run build

# Then push
git push origin main
```

---

## 📊 Monitoring Workflow

### Check Deployment Status

1. **Go to Actions tab:**
   - https://github.com/BenWassa/PoliVis/actions

2. **Look for latest workflow run:**
   - Green checkmark ✓ = Success
   - Red X = Failed
   - Yellow circle = In progress

3. **Click on workflow for details:**
   - View build logs
   - Check for errors
   - See deployment time

### Check Live Site

```bash
# Visit production URL
https://BenWassa.github.io/PoliVis/

# Check version in footer
# Should match package.json version

# Open DevTools → Console
# Should see: "PoliVis v1.0.0 initialized"
```

### Monitor Service Worker

```bash
# In DevTools → Application → Service Workers
# Should show:
# - Status: activated
# - Source: /service-worker.js
# - Version in cache name: polivis-cache-1.0.0
```

---

## 🎯 Quick Reference

### Most Used Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run version:patch` | Bump patch version |
| `git push origin main` | Deploy to production |

### Most Common Workflows

**Making a Change:**
```bash
npm run dev → edit code → see changes → commit → push
```

**Releasing an Update:**
```bash
npm run version:patch → git push origin main → git push origin --tags
```

**Testing Before Deploy:**
```bash
npm run build → npm run preview → verify → commit → push
```

---

## 💡 Tips & Best Practices

1. **Always test locally before deploying**
   - Run `npm run build && npm run preview`
   - Catch errors before they go live

2. **Use semantic versioning correctly**
   - Patch: Bug fixes and minor tweaks
   - Minor: New features that don't break anything
   - Major: Breaking changes or major rewrites

3. **Write clear commit messages**
   - Future you will thank present you
   - Helps track what changed when

4. **Keep dev server running**
   - Hot reload makes development much faster
   - Only restart if you need to

5. **Test on mobile regularly**
   - PoliVis is mobile-first
   - Desktop testing isn't enough

6. **Monitor the console**
   - Errors appear there first
   - Service Worker logs are helpful

7. **Use version tags**
   - Makes it easy to roll back if needed
   - Creates clear release history

---

## 🆘 When Things Go Wrong

**Golden Rules:**

1. **Don't panic** - Most issues are fixable
2. **Check the console** - Error messages are your friend
3. **Try turning it off and on again** - Restart dev server
4. **Clear everything** - Unregister SW, clear caches
5. **Ask for help** - Check documentation or search error messages

**Emergency Rollback:**

```bash
# Find previous working tag
git tag

# Rollback to specific version
git checkout v1.0.0

# Or reset to previous commit
git log
git reset --hard <commit-hash>
git push origin main --force
```

---

## 📚 Related Documentation

- [README.md](../README.md) - Project overview
- [documentation/README.md](README.md) - Complete documentation
- [documentation/VERSIONING.md](VERSIONING.md) - Version management details
- [documentation/Vision.md](Vision.md) - Project vision and goals

---

**Remember:** These workflows are designed to be simple and efficient. If something feels too complicated, there might be a better way - feel free to suggest improvements!
