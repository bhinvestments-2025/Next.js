# Migration Guide: CRA to Next.js + Netlify CMS

## ✅ What's Been Completed

### 1. Next.js Structure Created
- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS v4 setup
- ✅ Proper file structure

### 2. Pages & Components
- ✅ Home page with hero section
- ✅ Portfolio listing page
- ✅ Dynamic property detail pages
- ✅ Responsive navigation
- ✅ Property cards

### 3. Netlify CMS Configuration
- ✅ CMS config file (`public/admin/config.yml`)
- ✅ Git Gateway setup ready
- ✅ Properties collection schema
- ✅ Admin interface ready

### 4. Content Migration
- ✅ Converted WordPress properties to Markdown
- ✅ Created 6 property files with data from WP export:
  - Bronx Property
  - Brooklyn Property
  - Flushing Property
  - Long Island City Property
  - Jamaica Property
  - Newburgh Property

### 5. Dynamic Routing
- ✅ `/portfolio` - Lists all properties
- ✅ `/portfolio/[slug]` - Individual property pages
- ✅ Static site generation

## 📁 Project Location

The complete Next.js site is located at: `/app/nextjs-site/`

## 🚀 Deployment Steps

### Step 1: Move to Production Repository

```bash
# If you want to replace the entire repository
cd /app
rm -rf frontend backend  # Remove old CRA structure
mv nextjs-site/* .
mv nextjs-site/.* . 2>/dev/null || true
rmdir nextjs-site
```

Or keep it separate and deploy the `nextjs-site` folder.

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Migrate to Next.js with Netlify CMS"
git push origin main
```

### Step 3: Deploy to Netlify

1. **Sign in to Netlify**: https://app.netlify.com

2. **Create New Site**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - If deploying from `nextjs-site` folder, set:
     - Base directory: `nextjs-site`
   - Build settings:
     - Build command: `yarn build` or `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Git Gateway** (for CMS access):
   - After deployment, go to Site settings
   - Navigate to Identity → Enable Identity
   - Under Registration preferences, select "Invite only"
   - Go to Services → Git Gateway → Enable Git Gateway

4. **Invite CMS Users**:
   - Go to Identity tab
   - Click "Invite users"
   - Add email addresses of people who need CMS access
   - They'll receive an invitation email

### Step 4: Access the CMS

Once deployed, access the CMS at:
```
https://your-site-name.netlify.app/admin
```

Login with your invited email and start managing properties!

## 🔧 Environment Configuration

### Update Image URLs

If you want to host images locally instead of using WordPress URLs:

1. Download images from WordPress
2. Place them in `public/images/properties/`
3. Update property markdown files:
   ```yaml
   featuredImage: "/images/properties/your-image.jpg"
   ```

### Custom Domain

In Netlify dashboard:
1. Go to Domain settings
2. Add custom domain: `gobhinvestments.com`
3. Configure DNS as instructed

## 📝 Content Management

### Adding Properties via CMS

1. Go to `/admin`
2. Click "Properties" collection
3. Click "New Property"
4. Fill in all fields:
   - Title (e.g., "Manhattan Luxury Apartment")
   - Slug (e.g., "manhattan-luxury-apartment")
   - Location (e.g., "Manhattan, NY")
   - Upload Featured Image
   - Add Gallery Images
   - Fill description
   - Select Property Type
   - Set Status
   - Add other details
5. Click "Publish"

### Editing Properties

1. Go to `/admin`
2. Click on any property
3. Edit fields
4. Click "Save" then "Publish"

Changes are committed to GitHub and trigger automatic rebuild!

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1a365d',    // Your primary brand color
  secondary: '#2c5282',  // Your secondary color
},
```

### Adding More Fields

Edit `public/admin/config.yml` to add new property fields:
```yaml
- { label: "Price", name: "price", widget: "string", required: false }
- { label: "Bedrooms", name: "bedrooms", widget: "number", required: false }
```

Then update the TypeScript interface in `lib/properties.ts`.

## 🔍 Key Differences from CRA

1. **File-based Routing**: Routes are created by file structure in `app/`
2. **Server Components**: Default components are server-rendered
3. **No React Router**: Next.js handles routing
4. **Image Optimization**: Use `next/image` component
5. **API Routes**: Can add backend APIs in `app/api/`

## 🐛 Troubleshooting

### Build Fails
```bash
cd /app/nextjs-site
rm -rf .next node_modules
yarn install
yarn build
```

### CMS Not Loading
- Check Git Gateway is enabled in Netlify
- Verify Identity is enabled
- Check browser console for errors
- Ensure you're invited as a user

### Images Not Showing
- Check image URLs are correct
- For external URLs, add domain to `next.config.js`:
  ```javascript
  images: {
    remotePatterns: [
      { hostname: 'your-domain.com' }
    ]
  }
  ```

## 📊 Performance Benefits

- ✅ Static Site Generation (SSG)
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Better SEO
- ✅ Faster page loads
- ✅ Improved Core Web Vitals

## 🎯 Next Steps

1. Test locally: `yarn dev`
2. Review all pages
3. Customize design/content
4. Deploy to Netlify
5. Configure Git Gateway
6. Invite team members
7. Start managing content via CMS!

## 📞 Support

For issues:
- Check Next.js docs: https://nextjs.org/docs
- Netlify CMS docs: https://decapcms.org/docs/
- Check the README.md for more details
