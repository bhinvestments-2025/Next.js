# GOBH Investments - Next.js + Netlify CMS

This is the Next.js version of the GOBH Investments website with integrated Netlify CMS for easy property management.

## Features

- ✅ Next.js 14 with App Router
- ✅ Netlify CMS for content management
- ✅ Dynamic property pages
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript support
- ✅ Image optimization
- ✅ SEO-friendly

## Getting Started

### Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### CMS Access

Access the CMS at `/admin` once deployed to Netlify with Git Gateway configured.

## Deployment to Netlify

1. **Push to GitHub**:
   - Commit all changes
   - Push to your GitHub repository

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your GitHub repository
   - Build settings:
     - Build command: `yarn build` or `npm run build`
     - Publish directory: `.next`

3. **Enable Git Gateway**:
   - In Netlify dashboard, go to Site settings → Identity
   - Click "Enable Identity"
   - Under Registration, select "Invite only" (recommended)
   - Go to Services → Git Gateway and enable it

4. **Invite Users**:
   - Go to Identity tab
   - Click "Invite users"
   - Send invites to team members who need CMS access

5. **Access CMS**:
   - Go to `https://your-site.netlify.app/admin`
   - Login with invited email
   - Start managing properties!

## Project Structure

```
nextjs-site/
├── app/                  # Next.js app directory
│   ├── admin/           # CMS admin page
│   ├── portfolio/       # Portfolio pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
├── content/            # Markdown content files
│   └── properties/     # Property markdown files
├── lib/                # Utility functions
├── public/             # Static assets
│   ├── admin/         # CMS configuration
│   └── images/        # Images
└── next.config.js     # Next.js configuration
```

## Managing Properties

### Via CMS (Recommended)

1. Go to `/admin`
2. Login with your credentials
3. Click "Properties" collection
4. Add, edit, or delete properties
5. Publish changes

### Via Markdown Files

Properties are stored as markdown files in `content/properties/`. Each file contains:

```markdown
---
title: "Property Name"
slug: "property-slug"
location: "Location, NY"
featuredImage: "/images/properties/image.jpg"
propertyType: "residential"
status: "owned"
date: "2024-01-01"
---

Property description in markdown...
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#1a365d',    // Main brand color
  secondary: '#2c5282',  // Secondary brand color
},
```

### CMS Fields

Modify `public/admin/config.yml` to add or change property fields.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Netlify CMS / Decap CMS
- **Language**: TypeScript
- **Content**: Markdown with Gray Matter
- **Deployment**: Netlify

## Support

For issues or questions, please open an issue on GitHub.

## License

Private - GOBH Investments
