# 🚀 Manual Update Instructions

Since the GitHub App doesn't have workflow permissions, please apply these changes manually through the GitHub web interface.

## 📝 Quick Steps

### Step 1: Update `.github/workflows/deploy.yml`

1. Go to: https://github.com/Davidsea-z/devportfolio.github.io/blob/main/.github/workflows/deploy.yml
2. Click the **pencil icon** (✏️) to edit
3. **Delete all existing content** and replace with the content below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          CI: false

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Scroll down and commit with message: `feat: upgrade to GitHub Actions automated deployment`

### Step 2: Create `README.md`

1. Go to: https://github.com/Davidsea-z/devportfolio.github.io
2. Click **Add file** → **Create new file**
3. Name it: `README.md`
4. Copy and paste the content from the `README.md` section below
5. Commit the file

### Step 3: Create `DEPLOYMENT.md`

1. Go to: https://github.com/Davidsea-z/devportfolio.github.io
2. Click **Add file** → **Create new file**
3. Name it: `DEPLOYMENT.md`
4. Copy and paste the content from the `DEPLOYMENT.md` section below
5. Commit the file

## ✅ Verify

After committing:

1. Go to **Actions** tab: https://github.com/Davidsea-z/devportfolio.github.io/actions
2. The "Deploy to GitHub Pages" workflow should start automatically
3. Wait 2-3 minutes
4. Your site will be live at: https://davidsea-z.github.io/devportfolio.github.io/

## 🎉 Done!

Your portfolio will now automatically deploy whenever you push to the main branch!

---

## 📄 README.md Content

Copy everything below this line for README.md:

---

# Developer Portfolio

A modern, responsive developer portfolio built with React.

## 🚀 Live Demo

Visit the live site: [https://davidsea-z.github.io/devportfolio.github.io/](https://davidsea-z.github.io/devportfolio.github.io/)

## ✨ Features

- Modern and responsive design
- Interactive UI with animations
- GitHub calendar integration
- PDF resume viewer
- Project showcase
- Particle effects background
- Bootstrap-based styling

## 🛠️ Tech Stack

- **React** - Frontend framework
- **React Bootstrap** - UI components
- **React Router** - Navigation
- **Lottie React** - Animations
- **React Particles** - Background effects
- **Typewriter Effect** - Text animations
- **React GitHub Calendar** - GitHub activity visualization
- **React PDF** - Resume viewer

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Davidsea-z/devportfolio.github.io.git

# Navigate to the project directory
cd devportfolio.github.io

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
# Create a production build
npm run build
```

The build output will be in the `build/` directory.

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Automated Deployment (Recommended)

Every push to the `main` branch automatically triggers a deployment workflow that:

1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the project
5. Deploys to GitHub Pages

**Setup Instructions:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Push your changes to the `main` branch
4. The workflow will automatically deploy your site

### Manual Deployment (Legacy)

If you prefer to deploy manually using `gh-pages`:

```bash
npm run deploy
```

This command will build and deploy to the `gh-pages` branch.

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages (manual method)
- `npm run eject` - Ejects from Create React App (⚠️ one-way operation)

## 🔄 GitHub Actions Workflows

### Deploy Workflow (`.github/workflows/deploy.yml`)

Automatically deploys the application to GitHub Pages when code is pushed to the `main` branch.

**Trigger:** Push to `main` branch or manual workflow dispatch

**Jobs:**
1. **Build** - Compiles the React application
2. **Deploy** - Publishes the build to GitHub Pages

### CI Workflow (`.github/workflows/ci.yml`)

Runs continuous integration checks on pull requests and pushes.

**Jobs:**
- Installs dependencies
- Runs tests in CI mode

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in the source files
2. Replace project data in the relevant components
3. Update the `homepage` field in `package.json`
4. Modify styling in the component CSS files

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Davidsea-z**

- GitHub: [@Davidsea-z](https://github.com/Davidsea-z)

---

⭐ Star this repository if you find it helpful!

---

## 📄 DEPLOYMENT.md Content

Copy everything below this line for DEPLOYMENT.md:

---

# 🚀 Deployment Guide

This guide explains how to set up automatic deployment to GitHub Pages using GitHub Actions.

## Prerequisites

- A GitHub repository
- Code pushed to the `main` branch
- GitHub Actions enabled for your repository

## Setting Up GitHub Pages with Actions

### Step 1: Configure GitHub Pages

1. Navigate to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### Step 2: Verify Workflow Files

Your repository should have the following workflow files:

```
.github/
└── workflows/
    ├── ci.yml        # Continuous Integration
    └── deploy.yml    # Deployment to GitHub Pages
```

These files are already configured in this repository.

### Step 3: Trigger Deployment

The deployment is triggered automatically when:

- You push commits to the `main` branch
- You manually run the workflow from the Actions tab

#### Manual Deployment

To manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow** button

### Step 4: Monitor Deployment

1. Go to the **Actions** tab
2. Click on the latest workflow run
3. Watch the progress of both jobs:
   - **build** - Compiles your React app
   - **deploy** - Publishes to GitHub Pages

The deployment typically takes 2-3 minutes.

### Step 5: Access Your Site

Once deployed, your site will be available at:

```
https://davidsea-z.github.io/devportfolio.github.io/
```

## Workflow Details

### Deploy Workflow (deploy.yml)

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Permissions:**
- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Required for GitHub Pages deployment

**Jobs:**

1. **Build Job**
   - Checks out code
   - Sets up Node.js 20
   - Configures GitHub Pages
   - Installs dependencies (`npm ci`)
   - Builds the app (`npm run build`)
   - Uploads build artifact

2. **Deploy Job**
   - Waits for build job to complete
   - Deploys artifact to GitHub Pages
   - Sets up deployment environment
   - Provides deployment URL

### CI Workflow (ci.yml)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Jobs:**
- Sets up Node.js environment
- Installs dependencies
- Runs tests in CI mode

## Troubleshooting

### Build Fails

**Issue:** Build job fails with errors

**Solution:**
1. Check the Actions logs for specific error messages
2. Ensure all dependencies are correctly specified in `package.json`
3. Test the build locally: `npm run build`
4. Check for any linting or type errors

### Deploy Fails

**Issue:** Deploy job fails or site doesn't update

**Solution:**
1. Verify GitHub Pages source is set to "GitHub Actions"
2. Check that workflow has correct permissions
3. Ensure the `build` folder is being generated correctly
4. Review the Actions logs for deployment errors

### 404 Error on Site

**Issue:** Site shows 404 error

**Solution:**
1. Verify the `homepage` field in `package.json`:
   ```json
   "homepage": "https://davidsea-z.github.io/devportfolio.github.io/"
   ```
2. Ensure the repository name matches the URL
3. Wait a few minutes for DNS propagation
4. Clear browser cache and try again

### Changes Not Appearing

**Issue:** Pushed changes don't appear on the live site

**Solution:**
1. Check that your push was to the `main` branch
2. Verify the workflow ran successfully in the Actions tab
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check the deployment timestamp in Actions

## Advantages of GitHub Actions Deployment

✅ **Automated** - Deploy on every push
✅ **Official** - Uses GitHub's official Pages action
✅ **Secure** - No need for deploy keys or personal access tokens
✅ **Transparent** - Full deployment logs in Actions tab
✅ **Reliable** - Handled by GitHub's infrastructure
✅ **Flexible** - Can trigger manually when needed
✅ **Clean** - No `gh-pages` branch to manage

## Best Practices

1. **Test Locally First**
   ```bash
   npm test
   npm run build
   ```

2. **Use Pull Requests**
   - Create feature branches
   - Open PRs to `main`
   - CI will run tests automatically
   - Merge when tests pass

3. **Monitor Deployments**
   - Check Actions tab after pushing
   - Review deployment logs
   - Verify site updates

4. **Keep Dependencies Updated**
   ```bash
   npm update
   npm audit fix
   ```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Deploy Pages Action](https://github.com/actions/deploy-pages)
- [Configure Pages Action](https://github.com/actions/configure-pages)

---

Need help? Open an issue in the repository!

---
