import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, Smartphone, ShieldCheck, Database, Layers } from 'lucide-react';
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

  // Localized texts for the B-CAR details page
  const content = {
    back: isEn ? 'Back to Portfolio' : 'Retour au Portfolio',
    role_label: isEn ? 'Role' : 'Rôle',
    role_val: isEn ? 'Lead Full-Stack Developer' : 'Développeur Full-Stack Principal',
    client_label: isEn ? 'Client / Company' : 'Client / Entreprise',
    client_val: 'Apeiron AI / Apeiron Technologies',
    stack_label: isEn ? 'Tech Stack' : 'Technologies',
    overview_title: isEn ? 'Project Overview' : 'Aperçu du Projet',
    overview_p1: isEn 
      ? 'B-CAR is an enterprise-grade Smart Mobility & Fleet Management Ecosystem resolving complex real-time vehicle monitoring logistics. It streamlines fleet tracking, driver operations, partner trade marketing, and fleet coordination.'
      : 'B-CAR est un écosystème d\'entreprise de mobilité intelligente et de gestion de flotte, résolvant des flux logistiques complexes de suivi de véhicules en temps réel. Il simplifie la logistique de flotte, la gestion des chauffeurs, le marketing partenaire et la coordination opérationnelle.',
    overview_p2: isEn
      ? 'The platform contains two primary interfaces: a responsive Angular-based Back-Office dashboard for administrative control, and a high-performance Flutter mobile application for drivers and field operations.'
      : 'La plateforme se compose de deux interfaces majeures : un tableau de bord Back-Office Angular réactif pour le contrôle administratif, et une application mobile Flutter performante dédiée aux chauffeurs et opérations sur le terrain.',
    pillars_title: isEn ? 'Key Engineering Pillars' : 'Piliers d\'Ingénierie',
    backoffice_title: isEn ? 'Angular Back-Office Control' : 'Back-Office de Contrôle Angular',
    backoffice_desc: isEn
      ? 'A robust administrative dashboard designed for partners and logistics coordinators. Features include real-time vehicle tracking, customizable alerts, B2C promo distributions, automated client notifications, and analytics widgets.'
      : 'Un tableau de bord administratif robuste conçu pour les partenaires et coordinateurs logistiques. Les fonctionnalités incluent le suivi en temps réel des véhicules, des alertes personnalisables, la distribution de promotions B2C, des notifications clients automatisées et des widgets d\'analyse de performance.',
    mobile_title: isEn ? 'Flutter Mobile Application' : 'Application Mobile Flutter',
    mobile_desc: isEn
      ? 'A native-performing cross-platform application developed for drivers. Integrates offline-first caching, location tracking services, real-time push alerts via FCM, and QR-based delivery validation.'
      : 'Une application cross-platform aux performances natives développée pour les chauffeurs. Intègre le cache hors-ligne (offline-first), les services de géolocalisation en arrière-plan, les alertes push en temps réel via FCM et la validation des livraisons par QR Code.',
    backend_title: isEn ? 'Secure Spring Boot Backend' : 'Backend Sécurisé Spring Boot',
    backend_desc: isEn
      ? 'A scalable RESTful API architecture secured using Spring Security and JWT. Built with a complex relational database model utilizing JPA/Hibernate on PostgreSQL, optimizing query index paths to reduce response times by up to 20%.'
      : 'Une architecture d\'API RESTful scalable sécurisée par Spring Security et JWT. Conçue sur un modèle de base de données relationnelle complexe avec JPA/Hibernate sous PostgreSQL, optimisant les requêtes pour réduire les temps de réponse de 20%.',
    gallery_title: isEn ? 'Back-Office System Preview' : 'Aperçu du Système Back-Office',
    screenshots: [
      {
        src: '/projects/bcar/login.png',
        title: isEn ? 'Enterprise Portal Entry' : 'Portail d\'Entrée d\'Entreprise',
        desc: isEn ? 'Secure centralized login system with multi-tenant access control.' : 'Système de connexion sécurisé centralisé avec contrôle d\'accès multi-locataire.',
        isTall: false
      },
      {
        src: '/projects/bcar/partner.png',
        title: isEn ? 'Partner & Fleet Management' : 'Gestion des Partenaires & Flotte',
        desc: isEn ? 'Detailed profile tracking, vehicle assignment matrices, and historical log data.' : 'Suivi détaillé des profils, matrices d\'attribution des véhicules et historique des connexions.',
        isTall: true
      },
      {
        src: '/projects/bcar/notification.png',
        title: isEn ? 'Centralized Notification Engine' : 'Moteur de Notifications Centralisé',
        desc: isEn ? 'Custom scheduling for fleet updates, partner alerts, and automated notifications.' : 'Planification personnalisée des alertes de flotte, alertes partenaires et notifications automatisées.',
        isTall: true
      },
      {
        src: '/projects/bcar/discount.png',
        title: isEn ? 'Loyalty & Discount Campaign Manager' : 'Gestionnaire de Campagnes & Fidélisation',
        desc: isEn ? 'Dynamic trade-marketing coupon engine, partner discounts, and reward algorithms.' : 'Moteur dynamique de coupons trade-marketing, remises partenaires et algorithmes de récompenses.',
        isTall: true
      }
    ],
    mobile_showcase_title: isEn ? 'Flutter Mobile App Interface' : 'Interface de l\'Application Mobile Flutter',
    mobile_shots: [
      { src: '/projects/bcar/mobile/mobile1.jpg', title: isEn ? 'Vehicle Diagnostics' : 'Diagnostics du Véhicule' },
      { src: '/projects/bcar/mobile/mobile2.jpg', title: isEn ? 'Location Tracking' : 'Suivi Géographique' },
      { src: '/projects/bcar/mobile/mobile3.jpg', title: isEn ? 'Fleet Operations' : 'Opérations de Flotte' },
      { src: '/projects/bcar/mobile/mobile4.jpg', title: isEn ? 'Security Alerts' : 'Alertes de Sécurité' },
      { src: '/projects/bcar/mobile/mobile5.jpg', title: isEn ? 'Driver Analytics' : 'Analyses Chauffeur' },
      { src: '/projects/bcar/mobile/mobile6.jpg', title: isEn ? 'User Profile' : 'Profil Utilisateur' }
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

        <div className="flex items-center space-x-3">
          <a
            href="https://bcar.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-all duration-200"
          >
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            Website
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.apeiron.bcar&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-all duration-200"
          >
            <Smartphone className="mr-1.5 h-3.5 w-3.5" />
            Play Store
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-white p-2 shrink-0 shadow-sm">
            <Image
              src="/bcar-logo.png"
              alt="B-CAR Logo"
              fill
              priority
              className="object-contain p-1"
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              B-CAR
            </h1>
            <p className="text-muted-foreground font-light mt-1">
              Smart Mobility & Fleet Management Ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* Banner Landing Page */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-lg">
        <Image
          src="/projects/bcar/landing.png"
          alt="B-CAR Landing Page"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
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
              {/* Back-Office */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.backoffice_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.backoffice_desc}</p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.mobile_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.mobile_desc}</p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Database className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.backend_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.backend_desc}</p>
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
              {['Spring Boot 3', 'Angular', 'Flutter', 'PostgreSQL', 'Docker', 'REST API', 'JWT', 'JPA/Hibernate', 'GitFlow'].map((tech) => (
                <span key={tech} className="rounded-lg border border-border/80 bg-background px-3 py-1 text-xs font-light text-foreground shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Screenshot Gallery (Backoffice & Mobile Showcase) */}
      <ScreenshotGallery
        galleryTitle={content.gallery_title}
        mobileTitle={content.mobile_showcase_title}
        screenshots={content.screenshots}
        mobileShots={content.mobile_shots}
      />
    </div>
  );
}
