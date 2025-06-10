# Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 14 and React
- 🎭 Smooth animations with Framer Motion
- 💅 Styled with Tailwind CSS
- 📱 Mobile-first approach
- 🌐 SEO optimized
- 📧 Contact form with EmailJS integration

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons, Lucide Icons
- **Email Service:** EmailJS
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SiddheshM716/Portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd Portfolio
   npm install
   ```

3. Create a `.env.local` file in the root directory with your environment variables:
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

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── lib/           # Utility functions
├── .env.local         # Environment variables
└── package.json       # Project dependencies
```

## Deployment

The site is deployed on Vercel. For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@SiddheshM716](https://github.com/SiddheshM716)
- LinkedIn: [Siddhesh Mohan](https://www.linkedin.com/in/siddhesh-m-86838428a/)
- Email: siddheshm716@gmail.com
