# Portfolio Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. A [GitHub](https://github.com) account
3. Your portfolio repository pushed to GitHub

## Environment Variables

Before deploying, you need to set up the following environment variables in your Vercel project:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=your_deployed_url
NEXT_PUBLIC_SITE_NAME=your_name
NEXT_PUBLIC_SITE_DESCRIPTION=your_description
```

## Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure your project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `next build`
     - Output Directory: .next
   - Add your environment variables
   - Click "Deploy"

3. **Verify Deployment**
   - Check that all pages load correctly
   - Test the contact form
   - Test on different devices and browsers

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form works and sends emails
- [ ] Images and assets load properly
- [ ] Links work correctly
- [ ] SEO meta tags are present
- [ ] Site is responsive on all devices
- [ ] Performance is good (check Lighthouse score)

## Troubleshooting

1. **Contact Form Not Working**
   - Verify EmailJS credentials
   - Check browser console for errors
   - Ensure environment variables are set correctly

2. **Build Errors**
   - Check Vercel build logs
   - Verify all dependencies are in package.json
   - Ensure TypeScript types are correct

## Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor performance metrics
   - Update content regularly

2. **Backup**
   - Keep a local backup of your code
   - Document any custom configurations

3. **Monitoring**
   - Set up error tracking
   - Check for broken links periodically

## Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Vercel documentation](https://vercel.com/docs)
3. Search for similar issues on GitHub
4. Contact Vercel support if needed 