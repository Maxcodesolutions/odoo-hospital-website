#!/bin/bash

# Odoo Hospital Website Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🚀 Odoo Hospital Website Deployment Script"
echo "=========================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please run 'git init' first."
    exit 1
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote origin found."
    echo "Please add your GitHub repository as remote origin:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/odoo-hospital-website.git"
    echo ""
    read -p "Do you want to add remote origin now? (y/n): " add_remote
    
    if [ "$add_remote" = "y" ] || [ "$add_remote" = "Y" ]; then
        read -p "Enter your GitHub username: " github_username
        git remote add origin "https://github.com/$github_username/odoo-hospital-website.git"
        echo "✅ Remote origin added!"
    else
        echo "❌ Please add remote origin manually and run this script again."
        exit 1
    fi
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Found uncommitted changes. Committing them..."
    git add .
    git commit -m "Update website content - $(date)"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click 'Settings' tab"
    echo "3. Scroll to 'Pages' section"
    echo "4. Source: 'Deploy from a branch'"
    echo "5. Branch: 'main'"
    echo "6. Folder: '/ (root)'"
    echo "7. Click 'Save'"
    echo ""
    echo "Your site will be live at: https://$(git remote get-url origin | sed 's/.*github\.com[:/]\([^/]*\)\/.*/\1/').github.io/odoo-hospital-website"
    echo ""
    echo "📋 Don't forget to:"
    echo "- Test all pages and functionality"
    echo "- Set up Google Analytics"
    echo "- Submit to search engines"
    echo "- Share your new website!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials and try again."
    exit 1
fi 