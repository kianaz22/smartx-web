#!/bin/bash

# Script to push to both GitLab and GitHub remotes
# Usage: ./push-both.sh [commit_message] [branch_name]

# Default values
COMMIT_MSG=${1:-"Update code"}
BRANCH=${2:-"development"}

echo "🚀 Pushing to both GitLab and GitHub..."
echo "📝 Commit message: $COMMIT_MSG"
echo "🌿 Branch: $BRANCH"
echo ""

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push to GitLab (origin)
echo "🦊 Pushing to GitLab..."
git push origin $BRANCH

# Push to GitHub
echo "🐙 Pushing to GitHub..."
git push github $BRANCH

echo ""
echo "✅ Successfully pushed to both remotes!"
echo "🌐 GitLab: $(git remote get-url origin)"
echo "🐙 GitHub: $(git remote get-url github)"
