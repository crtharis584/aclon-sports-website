@echo off
echo 🚀 Starting deployment process for Aclon Sports Web...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
)

REM Add all files
echo 📦 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy: Aclon Sports Web - Live showcase ready"

REM Set main branch
echo 🌿 Setting main branch...
git branch -M main

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo ⚠️  No remote repository found!
    echo Please run: git remote add origin https://github.com/YOUR_USERNAME/aclon-sports-web.git
    echo Then run this script again.
    pause
    exit /b 1
)

REM Push to GitHub
echo 📤 Pushing to GitHub...
git push -u origin main

echo ✅ Deployment to GitHub complete!
echo.
echo 🌐 Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login with GitHub
echo 3. Click "New Project"
echo 4. Import your "aclon-sports-web" repository
echo 5. Click "Deploy"
echo.
echo 🎉 Your site will be live at: https://aclon-sports-web.vercel.app
echo.
echo 📋 Alternative: Use Vercel CLI
echo npm i -g vercel
echo vercel
echo.
pause
