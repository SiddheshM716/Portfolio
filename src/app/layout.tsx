import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GasBackground from "@/components/GasBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Siddhesh Mohan | Full Stack Developer',
    template: '%s | Siddhesh Mohan'
  },
  description: 'Full Stack Developer Portfolio - Showcasing my projects and skills in web and mobile development',
  keywords: ['Full Stack Developer', 'Web Development', 'Mobile Development', 'React', 'Next.js', 'Flutter', 'Swift'],
  authors: [{ name: 'Siddhesh Mohan' }],
  creator: 'Siddhesh Mohan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Siddhesh Mohan | Full Stack Developer',
    description: 'Full Stack Developer Portfolio - Showcasing my projects and skills in web and mobile development',
    siteName: 'Siddhesh Mohan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddhesh Mohan | Full Stack Developer',
    description: 'Full Stack Developer Portfolio - Showcasing my projects and skills in web and mobile development',
    creator: '@your_twitter_handle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col`}>
        <GasBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
