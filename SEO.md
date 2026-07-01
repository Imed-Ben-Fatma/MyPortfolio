# SEO Architecture & Maintenance Guide

This document explains the SEO setup for the portfolio website (`https://www.imed-ben-fatma.site`) built with **Next.js (v16+)** using localized routing (`/en` and `/fr`). 

Use this guide when instructing an AI Coding Assistant to add new pages, update layouts, or modify translations so that metadata standards remain consistent.

---

## 1. Core SEO Components

### 🌐 Base URL
* **Production URL**: `https://www.imed-ben-fatma.site` (Any canonical links, JSON-LD schemas, sitemaps, or robots files must target this domain).

### 🛠️ Key Files
* **Sitemap Config**: [src/app/sitemap.ts](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/sitemap.ts) (Generates `/sitemap.xml`)
* **Robots Config**: [src/app/robots.ts](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/robots.ts) (Generates `/robots.txt`)
* **Global Layout**: [src/app/[lang]/layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx) (Global metadata, canonical links, alternates, and JSON-LD schema)
* **Middleware**: [src/proxy.ts](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/proxy.ts) (Next.js 16 middleware proxy that redirects `/` to `/en` and manages localized routes)

---

## 2. Checklist for Adding a New Page

When adding a new page (e.g., `/projects/new-project`), perform the following steps:

### Step A: Add Page Metadata
Every page in the localized directory (e.g., `src/app/[lang]/projects/new-project/page.tsx`) must export a `generateMetadata` function supporting both languages (`en` and `fr`):

```typescript
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const isEn = lang === 'en';

  return {
    title: isEn ? 'New Project | Imed Ben Fatma' : 'Nouveau Projet | Imed Ben Fatma',
    description: isEn 
      ? 'English description of the new project.' 
      : 'Description en français du nouveau projet.',
  };
}
```

### Step B: Update the Sitemap
Register the new route in [src/app/sitemap.ts](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/sitemap.ts) under the `routes` array:

```typescript
  const routes = [
    '',
    '/cv',
    '/projects/b-car',
    '/projects/novopharma',
    '/projects/qa',
    '/projects/new-project', // <-- Add here
  ];
```
This automatically updates `sitemap.xml` with English and French version endpoints (`/projects/new-project` and `/fr/projects/new-project`) along with translation alternate tags (`hreflang`).

### Step C: Configure Translation Keys
Place page meta titles and descriptions in:
* [src/dictionaries/en.json](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/dictionaries/en.json)
* [src/dictionaries/fr.json](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/dictionaries/fr.json)

---

## 3. Global Schema & Canonical Alternates
Global configurations are in [src/app/[lang]/layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx). 

* **Canonical Alternates**: Tells Google which URL is canonical and maps language alternatives:
  ```typescript
  alternates: {
    canonical: lang === 'en' ? `${baseUrl}/` : `${baseUrl}/${lang}`,
    languages: {
      en: `${baseUrl}/`,
      fr: `${baseUrl}/fr`,
    },
  }
  ```
* **JSON-LD Schema**: Configured dynamically in the layout to export structured entities (`Person`, `Service`, `SoftwareApplication`, and `FAQPage`). If personal details, services, or projects change, update this block to keep Google Search rich snippets up-to-date.

---

## 4. FAQ SEO Integration
To maintain high search ranking and GEO (Generative Engine Optimization) compatibility:
* The visible FAQ component is built in [src/app/[lang]/page.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/page.tsx).
* Always keep the visible questions in sync with the metadata `FAQPage` schema in [src/app/[lang]/layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx) so AI search bots validate and output the same Q&A data.

