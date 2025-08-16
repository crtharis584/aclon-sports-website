#!/bin/bash

# Aclon Sports Web - Deployment Script
echo "🚀 Starting deployment process for Aclon Sports Web..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Aclon Sports Web - Live showcase ready"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found!"
    echo "Please run: git remote add origin https://github.com/YOUR_USERNAME/aclon-sports-web.git"
    echo "Then run this script again."
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment to GitHub complete!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up/Login with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your 'aclon-sports-web' repository"
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your site will be live at: https://aclon-sports-web.vercel.app"
echo ""
echo "📋 Alternative: Use Vercel CLI"
echo "npm i -g vercel"
echo "vercel"
