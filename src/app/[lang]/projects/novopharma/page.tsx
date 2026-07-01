import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, Smartphone, ShieldCheck, Database, Layers, CheckCircle2, Apple } from 'lucide-react';
import { getDictionary } from '@/dictionaries/get-dictionary';
import { ScreenshotGallery } from '@/components/screenshot-gallery';

interface ProjectPageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: ProjectPageProps) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  const isEn = lang === 'en';

  // Localized texts for the novoPharma details page
  const content = {
    back: isEn ? 'Back to Portfolio' : 'Retour au Portfolio',
    role_label: isEn ? 'Role' : 'Rôle',
    role_val: isEn ? 'Lead Mobile & Backend Developer' : 'Développeur Mobile & Backend Principal',
    client_label: isEn ? 'Client / Company' : 'Client / Entreprise',
    client_val: 'Apeiron Technologies / novoPharma',
    stack_label: isEn ? 'Tech Stack' : 'Technologies',
    overview_title: isEn ? 'Project Overview' : 'Aperçu du Projet',
    overview_p1: isEn 
      ? 'novoPharma engagement ecosystem comprises two core B2B solutions: MyChallenge (a gamified mobile app built for pharmacy employees) and PharmaDéfi (a B2B logistics/rewards dashboard and geo-field tracking system).'
      : 'L\'écosystème d\'engagement de novoPharma comprend deux solutions B2B majeures : MyChallenge (une application mobile gamifiée pour les préparateurs en pharmacie) et PharmaDéfi (un tableau de bord logistique/récompenses et de suivi géolocalisé des dermo-conseillers).',
    overview_p2: isEn
      ? 'MyChallenge gamifies sales operations. Employees scan barcode items to log transactions, accumulate reward points, climb real-time leaderboards, and take interactive training quizzes. PharmaDéfi coordinates the pharmacy relations, managing geolocated representative visits, verifying barcode audits, tracking expiry dates, and processing Pluxee rewards.'
      : 'MyChallenge gamifie les opérations de vente. Les préparateurs scannent les codes-barres pour enregistrer les ventes, accumulent des points, grimpent dans les classements en temps réel et passent des quiz de formation. PharmaDéfi coordonne la relation pharmacie en gérant les visites géolocalisées des dermo-conseillers, validant les stocks et traitant les bons Pluxee.',
    pillars_title: isEn ? 'Key Engineering Pillars' : 'Piliers d\'Ingénierie',
    gamification_title: isEn ? 'Gamification & Real-Time Leaderboards' : 'Gamification & Classements en Temps Réel',
    gamification_desc: isEn
      ? 'Engineered a highly engaging Flutter client utilizing Firestore for real-time leaderboard states and daily/weekly engagement cycles. Quizzes, streaks, and achievements drive user retention and professional learning.'
      : 'Développement d\'une application Flutter engageante utilisant Firestore pour la mise à jour en temps réel des classements et défis hebdomadaires. Les quiz, séries de ventes et trophées boostent l\'apprentissage et la fidélisation.',
    serverless_title: isEn ? 'Firebase Serverless Architecture' : 'Architecture Serverless Firebase',
    serverless_desc: isEn
      ? 'Implemented secure, transaction-safe Cloud Functions in Node.js/TypeScript to process barcode validation logic, ledger points math, and automated Pluxee voucher allocations, protecting against fraudulent scanning.'
      : 'Implémentation de Cloud Functions sécurisées sous Node.js/TypeScript pour traiter la validation des codes-barres, le calcul comptable des points et la génération automatique des bons Pluxee, protégeant le système contre la fraude.',
    field_title: isEn ? 'Geolocated Visits & Expiry Audits' : 'Visites Géolocalisées & Suivi de Péremption',
    field_desc: isEn
      ? 'Built geolocated tracking workflows for dermo-consultants, enabling automated validation of store visits, real-time inventory checks, and pharmaceutical product expiration date warnings.'
      : 'Développement de flux de géolocalisation pour les conseillers terrain, permettant la validation automatique des visites de pharmacies, les audits de stocks en temps réel et l\'alerte sur les dates de péremption des produits.',
    gallery_title: isEn ? 'PharmaDéfi Back-Office System' : 'Système Back-Office PharmaDéfi',
    screenshots: [
      {
        src: '/projects/novopharma/backoffice/bo1.png',
        title: isEn ? 'PharmaDéfi Dashboard' : 'Tableau de Bord PharmaDéfi',
        desc: isEn ? 'B2B management portal overview displaying pharmacy engagements, rewards, and logs.' : 'Portail de gestion B2B affichant l\'engagement des pharmacies, récompenses et journaux d\'activités.',
        isTall: false
      },
      {
        src: '/projects/novopharma/backoffice/bo2.png',
        title: isEn ? 'Field Representative Visits Log' : 'Historique des Visites Terrain',
        desc: isEn ? 'Tracking and validating geolocated visits and inventory audits from dermo-consultants.' : 'Suivi et validation des visites géolocalisées et des audits d\'inventaire des dermo-conseillers.',
        isTall: false
      },
      {
        src: '/projects/novopharma/backoffice/bo3.png',
        title: isEn ? 'Representative Details & Stock Checks' : 'Détails Représentant & Audits Stocks',
        desc: isEn ? 'Detailed stock level tracking, barcode validation, and shelf expiration parameters.' : 'Suivi détaillé des niveaux de stock, validation de codes-barres et dates de péremption.',
        isTall: false
      },
      {
        src: '/projects/novopharma/backoffice/bo4.png',
        title: isEn ? 'Stock & Expire Alerts Config' : 'Configuration des Alertes Stocks & Péremptions',
        desc: isEn ? 'Configuration of automated alert thresholds for expiring products and empty shelf warnings.' : 'Configuration des seuils d\'alertes automatiques pour produits périmés et alertes de rupture de stock.',
        isTall: false
      }
    ],
    mobile_showcase_title: isEn ? 'MyChallenge Flutter App Showcase' : 'Interface de l\'Application Mobile MyChallenge',
    mobile_shots: [
      { src: '/projects/novopharma/mobile/mobile1.png', title: isEn ? 'Gamified Leaderboard' : 'Classement Gamifié' },
      { src: '/projects/novopharma/mobile/mobile2.png', title: isEn ? 'Product Sales Scanner' : 'Scanner de Ventes Produits' },
      { src: '/projects/novopharma/mobile/mobile3.png', title: isEn ? 'Interactive Quizzes' : 'Quiz Interactifs' },
      { src: '/projects/novopharma/mobile/mobile4.png', title: isEn ? 'Rewards Store' : 'Boutique de Récompenses' },
      { src: '/projects/novopharma/mobile/mobile5.png', title: isEn ? 'Campaign Quizzes' : 'Campagnes de Quiz' },
      { src: '/projects/novopharma/mobile/mobile6.png', title: isEn ? 'Leaderboards Overview' : 'Aperçu des Classements' },
      { src: '/projects/novopharma/mobile/mobile7.png', title: isEn ? 'User Profile Summary' : 'Résumé du Profil' }
    ]
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Navigation */}
      <div className="flex items-center justify-between border-b border-border/40 pb-6">
        <Link 
          href={lang === 'en' ? '/' : '/fr'} 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {content.back}
        </Link>

        <div className="flex items-center space-x-2.5">
          <a
            href="https://pharmadfi.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-all duration-200"
          >
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            Web Portal
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.apeiron.novopharma&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-all duration-200"
          >
            <Smartphone className="mr-1.5 h-3.5 w-3.5" />
            Play Store
          </a>
          <a
            href="https://apps.apple.com/tn/app/novopharma-mychallenge/id6753335186?l=fr-FR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-all duration-200"
          >
            <Apple className="mr-1.5 h-3.5 w-3.5" />
            App Store
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-white p-2 shrink-0 shadow-sm">
            <Image
              src="/novopharma-logo.png"
              alt="novoPharma Logo"
              fill
              priority
              className="object-contain p-1"
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              novoPharma MyChallenge / PharmaDéfi
            </h1>
            <p className="text-muted-foreground font-light mt-1">
              Gamified B2B Engagement & Pharmaceutical Audits Ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* Banner Cover Image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-lg">
        <Image
          src="/projects/novopharma/cover_mockup.png"
          alt="novoPharma MyChallenge / PharmaDéfi Case Study"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Meta Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Overview and Pillars */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{content.overview_title}</h2>
            <p className="text-muted-foreground font-light leading-relaxed">{content.overview_p1}</p>
            <p className="text-muted-foreground font-light leading-relaxed">{content.overview_p2}</p>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{content.pillars_title}</h2>
            
            <div className="space-y-6">
              {/* Gamification */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.gamification_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.gamification_desc}</p>
                </div>
              </div>

              {/* Serverless Firebase */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.serverless_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.serverless_desc}</p>
                </div>
              </div>

              {/* Field Visits */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Database className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.field_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.field_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Stats Column */}
        <div className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 space-y-6 shadow-sm">
          {/* Stat 1: Role */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.role_label}</span>
            <p className="text-sm font-semibold text-foreground">{content.role_val}</p>
          </div>

          {/* Stat 2: Client */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.client_label}</span>
            <p className="text-sm font-semibold text-foreground">{content.client_val}</p>
          </div>

          {/* Stat 3: Tech Stack */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">{content.stack_label}</span>
            <div className="flex flex-wrap gap-1.5">
              {['Flutter', 'Next.js', 'Firebase', 'Firestore', 'FCM', 'Node.js', 'TypeScript', 'Cloud Functions', 'Pluxee API', 'Geolocation'].map((tech) => (
                <span key={tech} className="rounded-lg border border-border/80 bg-background px-3 py-1 text-xs font-light text-foreground shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScreenshotGallery
        galleryTitle={content.gallery_title}
        mobileTitle={content.mobile_showcase_title}
        screenshots={content.screenshots}
        mobileShots={content.mobile_shots}
      />
    </div>
  );
}
