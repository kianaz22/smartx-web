# Dual Remote Setup: GitLab + GitHub

This guide explains how to maintain both GitLab and GitHub repositories for your project, with automatic deployments to Netlify from both platforms.

## 🎯 **Benefits of Dual Remotes**

✅ **Team collaboration** on GitLab (your primary)  
✅ **GitHub Actions** for additional CI/CD options  
✅ **GitHub Pages** or other GitHub-specific features  
✅ **Backup** and redundancy  
✅ **Open source** visibility if desired  

## 🔧 **Current Remote Configuration**

```bash
# View current remotes
git remote -v

# You should see:
origin    https://git.smartx.ir:1000/front-end/smartx-web.git (fetch)
origin    https://git.smartx.ir:1000/front-end/smartx-web.git (push)
github    https://github.com/YOUR_USERNAME/smartx-web.git (fetch)
github    https://github.com/YOUR_USERNAME/smartx-web.git (push)
```

## 📝 **Setting Up GitHub Repository**

1. **Create GitHub repo** at [github.com](https://github.com)
2. **Don't initialize** with README, .gitignore, or license
3. **Copy the repository URL**

## 🔗 **Adding GitHub Remote**

```bash
# Add GitHub as second remote
git remote add github https://github.com/YOUR_USERNAME/smartx-web.git

# Verify both remotes
git remote -v
```

## 🚀 **Pushing to Both Remotes**

### **Option 1: Use the Convenience Script**

```bash
# Make script executable (one-time setup)
chmod +x push-both.sh

# Push to both remotes
./push-both.sh "Your commit message" development

# Or with defaults
./push-both.sh "Update code"
```

### **Option 2: Manual Push Commands**

```bash
# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to GitLab (origin)
git push origin development

# Push to GitHub
git push github development
```

### **Option 3: Push All Remotes**

```bash
# Push to all remotes at once
git push --all origin
git push --all github
```

## 🔄 **Keeping Repositories in Sync**

### **Initial Push to GitHub**

```bash
# First time pushing to GitHub, you might need to set upstream
git push -u github development

# For all branches
git push --all github
git push --tags github
```

### **Regular Workflow**

```bash
# 1. Make changes
# 2. Commit changes
git add .
git commit -m "Update Storybook components"

# 3. Push to both remotes
./push-both.sh "Update Storybook components" development
```

## 🚀 **Deployment Configuration**

### **GitLab CI/CD**
- File: `.gitlab-ci.yml`
- Triggers: Push to `development` branch
- Variables needed: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`

### **GitHub Actions**
- File: `.github/workflows/deploy-storybook.yml`
- Triggers: Push to `development` branch
- Secrets needed: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`

### **Netlify Configuration**
- File: `packages/design-system/netlify.toml`
- Works with both platforms

## ⚙️ **Setting Up Secrets/Variables**

### **GitLab Variables**
1. Go to **Settings > CI/CD**
2. Expand **"Variables"**
3. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`

### **GitHub Secrets**
1. Go to **Settings > Secrets and variables > Actions**
2. Click **"New repository secret"**
3. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`

## 🔍 **Monitoring Deployments**

### **GitLab**
- Go to **CI/CD > Pipelines**
- Monitor build and deployment jobs

### **GitHub**
- Go to **Actions** tab
- Monitor workflow runs

### **Netlify**
- Check deployment status in Netlify dashboard
- Both platforms will deploy to the same Netlify site

## 🚨 **Troubleshooting**

### **GitHub Remote Issues**
```bash
# Remove and re-add GitHub remote
git remote remove github
git remote add github https://github.com/YOUR_USERNAME/smartx-web.git

# Check remote URLs
git remote -v
```

### **Push Failures**
```bash
# Force push if needed (use with caution)
git push -f github development

# Check remote tracking
git branch -vv
```

### **Sync Issues**
```bash
# Fetch from both remotes
git fetch origin
git fetch github

# Check differences
git log origin/development..github/development
git log github/development..origin/development
```

## 📋 **Best Practices**

✅ **Always push to both remotes** after commits  
✅ **Use the convenience script** for consistency  
✅ **Keep commit messages identical** across remotes  
✅ **Monitor both CI/CD pipelines** for issues  
✅ **Use GitLab as primary** for team collaboration  

## 🎉 **What You Get**

- **GitLab**: Primary development platform for your team
- **GitHub**: Additional CI/CD, visibility, and backup
- **Netlify**: Automatic deployments from both platforms
- **Storybook**: Live documentation accessible to everyone
- **Redundancy**: Code safe in two locations

## 🚀 **Next Steps**

1. **Create your GitHub repository**
2. **Update the GitHub remote URL** in the commands above
3. **Set up GitHub secrets** for Netlify deployment
4. **Test the dual push** with the convenience script
5. **Monitor deployments** on both platforms

---

**Note**: This setup gives you the flexibility to use either platform while maintaining consistency across both repositories.
