# 🚀 Deployment Checklist

## Pre-Deployment

- [ ] Review all pages locally (`yarn dev`)
- [ ] Test property pages
- [ ] Check responsive design on mobile
- [ ] Verify all images load correctly
- [ ] Test build command (`yarn build`)
- [ ] Review content in all property markdown files

## GitHub Setup

- [ ] Create/use GitHub repository
- [ ] Commit all changes
- [ ] Push to GitHub main branch
- [ ] Verify all files are pushed

## Netlify Deployment

### Initial Setup
- [ ] Sign in to Netlify (https://app.netlify.com)
- [ ] Click "Add new site"
- [ ] Choose "Import an existing project"
- [ ] Connect to GitHub
- [ ] Select your repository

### Build Configuration
- [ ] Set build command: `yarn build` or `npm run build`
- [ ] Set publish directory: `.next`
- [ ] (Optional) Set base directory if using `nextjs-site` folder
- [ ] Click "Deploy site"

### Wait for Deployment
- [ ] Wait for initial build to complete (~2-5 minutes)
- [ ] Check deploy logs for any errors
- [ ] Visit the deployed site URL

## Netlify CMS Configuration

### Enable Identity
- [ ] Go to Site settings → Identity
- [ ] Click "Enable Identity"
- [ ] Under Registration, select "In invite only"
- [ ] Save settings

### Enable Git Gateway
- [ ] In Identity settings, go to Services
- [ ] Click "Enable Git Gateway"
- [ ] Confirm your GitHub connection

### Invite Users
- [ ] Go to Identity tab in main dashboard
- [ ] Click "Invite users"
- [ ] Add email addresses for CMS access
- [ ] Users receive invitation emails

## Test CMS Access

- [ ] Go to `https://your-site.netlify.app/admin`
- [ ] Accept invitation from email
- [ ] Create password
- [ ] Login successfully
- [ ] Test creating a new property
- [ ] Test editing an existing property
- [ ] Test uploading images
- [ ] Verify changes appear on site after ~2 min

## Custom Domain (Optional)

- [ ] In Netlify, go to Domain settings
- [ ] Click "Add custom domain"
- [ ] Enter your domain (gobhinvestments.com)
- [ ] Update DNS records as instructed by Netlify:
  - Add A record pointing to Netlify
  - Or add CNAME record
- [ ] Wait for DNS propagation (up to 24-48 hours)
- [ ] Enable HTTPS (automatic after DNS verifies)

## SSL Certificate

- [ ] Netlify automatically provisions SSL
- [ ] Wait for "HTTPS" badge in Domain settings
- [ ] Verify site loads with https://

## Final Verification

- [ ] Test all pages on live site
- [ ] Check all portfolio items load
- [ ] Test responsive design
- [ ] Verify images load correctly
- [ ] Test CMS workflow end-to-end:
  - [ ] Login to CMS
  - [ ] Add new property
  - [ ] Edit property
  - [ ] Publish changes
  - [ ] Verify changes appear on site
- [ ] Test on different devices/browsers
- [ ] Check site speed (GTmetrix or PageSpeed Insights)

## Post-Deployment

- [ ] Share admin access with team
- [ ] Document CMS workflow for team
- [ ] Set up deployment notifications (optional)
- [ ] Monitor Netlify analytics
- [ ] Set up form submissions if needed
- [ ] Configure any redirects if needed

## Troubleshooting Common Issues

### Build Fails
1. Check build logs in Netlify
2. Verify `package.json` has correct scripts
3. Check Node version compatibility
4. Test build locally first

### CMS Not Loading
1. Verify Identity is enabled
2. Check Git Gateway is enabled
3. Clear browser cache
4. Check browser console for errors

### Changes Not Appearing
1. Wait 2-3 minutes for rebuild
2. Check Deploys tab for build status
3. Clear browser cache
4. Verify changes were saved in CMS

### Images Not Showing
1. Check image paths in markdown
2. Verify images are in correct folder
3. Check `next.config.js` for remote patterns
4. Test image URLs directly

## Need Help?

- Netlify Support: https://www.netlify.com/support/
- Next.js Docs: https://nextjs.org/docs
- Netlify CMS Docs: https://decapcms.org/docs/
- Community Forums: https://answers.netlify.com/

---

## Quick Reference

**Site URL**: https://your-site-name.netlify.app
**CMS URL**: https://your-site-name.netlify.app/admin
**Build Command**: `yarn build`
**Publish Directory**: `.next`
**Node Version**: 20

---

## Success Criteria

✅ Site is live and accessible
✅ All pages load correctly
✅ CMS is accessible at /admin
✅ Can login to CMS
✅ Can create/edit properties
✅ Changes auto-deploy
✅ Images load correctly
✅ Mobile responsive
✅ SSL enabled (HTTPS)
✅ Custom domain working (if configured)

When all items are checked, you're successfully deployed! 🎉
