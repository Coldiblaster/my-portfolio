import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import { Footer } from '@/components/footer';
import { LoadingPage } from '@/components/loading-page';
import { NavMenu } from '@/components/nav-menu';
import { ScrollToTop } from '@/components/scroll-to-top';

import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export const viewport: Viewport = {
  themeColor: 'black',
  initialScale: 1,
  width: 'device-width',
  height: 'device-height',
  minimumScale: 1,
  maximumScale: 5, // Permite zoom até 5x
};

export const metadata: Metadata = {
  title:
    'Vinícius Bastazin || Desenvolvedor Frontend - React, Next.js, React Native',
  description:
    'Site profissional de Vinícius Bastazin. Freelancer Frontend com mais de 6 anos de experiência, especializado em React, Next.js, APIs escaláveis e otimização de performance. Freelance em soluções web e mobile.',
  keywords:
    'desenvolvedor de software, freelancer React, freelancer front-end, freelancer React Native, Next.js, desenvolvimento de sites, APIs escaláveis, otimização de performance, SEO, desenvolvimento de aplicativos móveis, desenvolvimento web, integração com CMS, Prismic, Firebase, Tailwind CSS, Styled Components, desenvolvimento responsivo, desenvolvimento de sistemas, criação de aplicativos, testes unitários, gerenciamento de estado, micro front-end, monorepo, AWS, Google Cloud, Docker, TypeScript, Node.js, Nest.js, GraphQL, RESTful APIs, Scrum, Kanban, desenvolvedor de interfaces reativas, React Hooks, Figma, desenvolvimento ágil.',
  robots: 'index, follow',
  openGraph: {
    title: 'Vinícius Bastazin - Desenvolvedor Full Stack Freelancer',
    description:
      'Portfólio de Vinícius Bastazin, desenvolvedor especializado em React.js, Next.js, React Native e soluções web personalizadas.',
    images: [
      {
        url: 'https://viniciusbastazin.vercel.app/avatar-desk.png',
        alt: 'Foto de Vinícius Bastazin - Desenvolvedor Full Stack Freelancer',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://viniciusbastazin.vercel.app/',
    siteName: 'Vinícius Bastazin',
    type: 'website',
    locale: 'pt_BR',
  },
  authors: [
    { name: 'Vinícius Bastazin', url: 'https://viniciusbastazin.vercel.app/' },
  ],
  appleWebApp: true,
  applicationName: 'Vinícius Bastazin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="min-h-screen antialiased">
        <Suspense fallback={<LoadingPage />}>
          <Providers>
            <NavMenu />
            {children}
            <Footer />
          </Providers>

          <SpeedInsights />
          <Analytics />
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
