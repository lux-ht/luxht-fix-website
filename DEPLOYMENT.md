# Deployment Guide: GitHub + Cloudflare Pages

## Step 1: Push to GitHub

Open Terminal and run these commands from your project folder:

```bash
# Navigate to project
cd "/Users/ruth/Desktop/LUXHT - Website"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: LUXHT Fix website"

# Add GitHub remote
git remote add origin https://github.com/lux-ht/luxht-fix-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If prompted for authentication, use your GitHub credentials or personal access token.

---

## Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Navigate to**: Workers & Pages → Create → Pages → Connect to Git
3. **Authorize GitHub** if not already connected
4. **Select repository**: `lux-ht/luxht-fix-website`

---

## Step 3: Configure Build Settings

In Cloudflare Pages, set these build settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js (Static HTML Export) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | 20 (or latest LTS) |

### Environment Variables (optional):
No environment variables required for this static site.

---

## Step 4: Deploy

1. Click **"Save and Deploy"**
2. Wait for the build (usually 1-3 minutes)
3. Your site will be live at: `luxht-fix-website.pages.dev`

---

## Step 5: Add Custom Domain (Optional)

1. In Cloudflare Pages → your project → Custom domains
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., `fix.luxht.com` or `luxhtfix.com`)
4. Follow DNS configuration instructions
5. Cloudflare will automatically provision SSL

---

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Cloudflare Pages will automatically rebuild and deploy.

---

## Build Output

The site exports to static HTML in the `out/` directory:
- 31 pages total
- All SEO meta tags included
- Static assets optimized
- Zero server-side dependencies

---

## Troubleshooting

### Build fails?
- Check Node.js version is 18+
- Run `npm run build` locally first
- Check for TypeScript errors

### Images not loading?
- Images must be in `/public/` directory
- Use absolute paths like `/image.jpg`

### 404 errors on routes?
- `trailingSlash: true` is configured
- URLs should end with `/`
