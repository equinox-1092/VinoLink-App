"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import "./globals.css";

const SITE_METADATA = {
  title: "VinoLink",
  description: "Created by VinoLink in 2025",
  defaultImage: "https://vinolink-app.vercel.app/nextjs.png",
  url: "https://vinolink-app.vercel.app",
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get language from URL path - ensure consistent casing
  const getLanguageFromPath = () => {
    if (!pathname) return 'en';
    const segments = pathname.split('/');
    return segments[1]?.toLowerCase() === 'es' ? 'es' : 'en';
  };

  const lang = getLanguageFromPath();
  
  return (
    <html lang={lang}>
      <head>
        <title>{SITE_METADATA.title}</title>
        <meta name="description" content={SITE_METADATA.description} />
        <meta name="image" content={SITE_METADATA.defaultImage} />
        <meta name="url" content={SITE_METADATA.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {mounted && (
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        )}
      </body>
    </html>
  );
}