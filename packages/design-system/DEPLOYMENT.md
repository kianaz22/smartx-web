# Deploying Storybook to Netlify (GitLab)

This guide will help you deploy your Storybook to Netlify for free, with automatic deployments from your development branch using GitLab CI/CD.

## Prerequisites

- A GitLab repository with your code
- A Netlify account (free tier)
- Your Storybook code in the `packages/design-system` directory

## Step 1: Set up Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/sign in
2. Click "New site from Git"
3. Choose GitLab as your Git provider
4. Select your repository
5. Configure the build settings:
   - **Build command**: `cd packages/design-system && pnpm build-storybook`
   - **Publish directory**: `packages/design-system/storybook-static`
   - **Base directory**: Leave empty (or set to `packages/design-system` if you prefer)
6. Click "Deploy site"

## Step 2: Configure Netlify Site Settings

1. In your Netlify dashboard, go to Site settings > Build & deploy
2. Set the production branch to `development`
3. Go to Site settings > Domain management
4. Note your site ID (you'll need this for GitLab CI/CD)

## Step 3: Get Netlify Auth Token

1. In Netlify, go to User settings > Applications
2. Click "New access token"
3. Give it a name (e.g., "Storybook Deployment")
4. Copy the token (you'll need this for GitLab CI/CD)

## Step 4: Set up GitLab CI/CD Variables

1. In your GitLab repository, go to Settings > CI/CD
2. Expand the "Variables" section
3. Add the following variables:
   - **Key**: `NETLIFY_AUTH_TOKEN`
     **Value**: Your Netlify access token
     **Type**: Variable
     **Environment scope**: All (default)
     **Protect variable**: ✅ (recommended)
     **Mask variable**: ✅ (recommended)
   - **Key**: `NETLIFY_SITE_ID`
     **Value**: Your Netlify site ID
     **Type**: Variable
     **Environment scope**: All (default)
     **Protect variable**: ✅ (recommended)
     **Mask variable**: ❌ (can't mask this one)

## Step 5: Push to Development Branch

The GitLab CI/CD pipeline will automatically trigger when you push to the `development` branch:

```bash
git checkout development
git add .
git commit -m "Add Storybook deployment configuration"
git push origin development
```

## Step 6: Monitor Deployment

1. Check the GitLab CI/CD tab in your repository
2. Monitor the deployment in your Netlify dashboard
3. Your Storybook will be available at your Netlify URL

## Manual Deployment (Optional)

If you want to deploy manually:
1. Go to GitLab CI/CD > Pipelines
2. Find your latest pipeline
3. Click on the "deploy-to-netlify" job
4. Click "Play" button to trigger deployment

## Configuration Files

- `netlify.toml`: Netlify build configuration
- `.gitlab-ci.yml`: GitLab CI/CD pipeline
- `.storybook/main.ts`: Storybook configuration

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `pnpm install`
- Verify Storybook builds locally: `pnpm build-storybook`
- Check the GitLab CI/CD logs for specific errors

### Deployment Issues
- Verify your Netlify auth token and site ID are correct
- Check that the `storybook-static` directory is generated
- Ensure your development branch exists and is pushed to GitLab

### Performance Issues
- The free tier has build time limits (300 minutes/month)
- Consider optimizing your Storybook build if it's slow

## Benefits of This Setup

✅ **Free hosting** on Netlify  
✅ **Automatic builds** from development branch  
✅ **Preview deployments** for merge requests  
✅ **Fast builds** with pnpm caching  
✅ **Easy rollbacks** through Netlify dashboard  
✅ **GitLab native** CI/CD integration  

## Next Steps

After successful deployment:
1. Customize your Netlify domain (optional)
2. Set up custom headers if needed
3. Configure analytics and monitoring
4. Share your Storybook URL with your team!

---

**Note**: This setup uses the free tier of Netlify, which includes:
- 100GB bandwidth/month
- 300 build minutes/month
- Unlimited personal projects
- Form submissions (100/month)
