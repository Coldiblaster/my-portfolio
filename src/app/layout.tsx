import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
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
  maximumScale: 1,
};

export const metadata: Metadata = {
  title:
    'Vinícius Bastazin || Desenvolvedor Full Stack Freelancer - React, Next.js, React Native',
  description:
    'Vinícius Bastazin é desenvolvedor Full Stack com mais de 6 anos de experiência, especializado em React, Next.js, APIs escaláveis e otimização de performance. Freelance em soluções web e mobile.',
  keywords:
    'desenvolvedor de software, freelancer React, freelancer front-end, freelancer React Native, Next.js, desenvolvimento de sites, APIs escaláveis, otimização de performance, SEO, desenvolvimento de aplicativos móveis, desenvolvimento web, integração com CMS, Prismic, Firebase, Tailwind CSS, Styled Components, desenvolvimento responsivo, desenvolvimento de sistemas, criação de aplicativos, testes unitários, gerenciamento de estado, micro front-end, monorepo, AWS, Google Cloud, Docker, TypeScript, Node.js, Nest.js, GraphQL, RESTful APIs, Scrum, Kanban, desenvolvedor de interfaces reativas, React Hooks, Figma, desenvolvimento ágil.',
  robots: 'index, follow',
  openGraph: {
    title: 'Vinícius Bastazin - Desenvolvedor Full Stack Freelancer',
    description:
      'Portfólio de Vinícius Bastazin, desenvolvedor especializado em React.js, Next.js, React Native e soluções web personalizadas. Oferecendo serviços de desenvolvimento front-end, back-end, APIs e design de interfaces.',
    images: ['https://viniciusbastazin.vercel.app/avatar-desk.png'], // Coloque a URL da imagem de perfil ou logo
    url: 'https://viniciusbastazin.vercel.app/',
    siteName: 'Vinícius Bastazin - Portfólio',
    type: 'profile',
    firstName: 'Vinícius',
    lastName: 'Bastazin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="min-h-screen antialiased">
        <Providers>
          <NavMenu />
          {children}
          <Footer />
        </Providers>

        <SpeedInsights />
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  );
}
