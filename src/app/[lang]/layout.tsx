import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { getDictionary } from '@/dictionaries/get-dictionary';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  const baseUrl = 'https://www.imed-ben-fatma.site';

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: lang === 'en' ? `${baseUrl}/` : `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/`,
        fr: `${baseUrl}/fr`,
      },
    },
    authors: [{ name: 'Imed Ben Fatma' }],
    creator: 'Imed Ben Fatma',
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: lang === 'en' ? `${baseUrl}/` : `${baseUrl}/${lang}`,
      siteName: 'Imed Ben Fatma Portfolio',
      locale: lang === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/profile.jpg`,
          width: 800,
          height: 800,
          alt: 'Imed Ben Fatma Headshot',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${baseUrl}/profile.jpg`],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  const baseUrl = 'https://www.imed-ben-fatma.site';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Imed Ben Fatma',
        jobTitle: 'Software Engineer & Full-Stack Developer',
        url: baseUrl,
        image: `${baseUrl}/profile.jpg`,
        sameAs: [
          'https://www.linkedin.com/in/imed-ben-fatma-061b101a3/',
          'https://github.com/Imed-Ben-Fatma',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Monastir',
          addressRegion: 'Monastir',
          addressCountry: 'Tunisia',
        },
        knowsAbout: [
          'Spring Boot',
          'Angular',
          'React',
          'Next.js',
          'Flutter',
          'Java',
          'TypeScript',
          'PostgreSQL',
          'QA Automation',
          'Docker',
          'Jenkins CI/CD',
          'JUnit 5',
          'Selenium',
          'Cucumber BDD',
        ],
      },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#webdev`,
        name: lang === 'en' ? 'Full-Stack Web Development' : 'Développement Web Full-Stack',
        provider: { '@id': `${baseUrl}/#person` },
        description:
          lang === 'en'
            ? 'Engineering scalable, high-performance web applications using Spring Boot (Java), Angular, React, and Next.js.'
            : "Conception et développement d'applications web scalables et performantes avec Spring Boot (Java), Angular, React et Next.js.",
        areaServed: 'Worldwide',
      },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#mobiledev`,
        name: lang === 'en' ? 'Mobile Application Development' : "Développement d'Applications Mobiles",
        provider: { '@id': `${baseUrl}/#person` },
        description:
          lang === 'en'
            ? 'Crafting high-fidelity, native-performing cross-platform mobile apps using Flutter and Dart.'
            : "Création d'applications mobiles cross-platform performantes et haute fidélité avec Flutter et Dart.",
        areaServed: 'Worldwide',
      },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#qadev`,
        name: lang === 'en' ? 'Software Quality Assurance (QA)' : 'Assurance Qualité Logicielle (QA)',
        provider: { '@id': `${baseUrl}/#person` },
        description:
          lang === 'en'
            ? 'Setting up robust testing frameworks, automated API validation, and E2E system testing integrated into CI/CD.'
            : "Mise en place de frameworks de test robustes, validation d'API automatisée et tests système E2E intégrés dans le CI/CD.",
        areaServed: 'Worldwide',
      },
    ],
  };

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar lang={lang} dict={dict} />
          <main className="flex-grow">{children}</main>
          <Footer lang={lang} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
