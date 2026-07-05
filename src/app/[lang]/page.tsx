import Image from 'next/image';
import Link from 'next/link';
import { 
  Code2, 
  Smartphone, 
  ShieldCheck, 
  Settings2, 
  MapPin, 
  Download, 
  FileText,
  Mail, 
  GraduationCap, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { getDictionary } from '@/dictionaries/get-dictionary';
import profilePic from '@/../public/profile.jpg';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  // Categorized skills mapping based on Imed's technical competencies
  const skillsData = {
    backend: ['Java', 'Spring Boot 3', 'Spring Security (JWT)', 'JPA / Hibernate', 'Spring Data', 'MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'SQL Server'],
    frontend: ['Angular', 'TypeScript', 'React.js', 'Next.js', 'Flutter', 'Dart', 'HTML5', 'CSS3', 'RxJS'],
    devops: ['Docker', 'Maven', 'Git (GitFlow)', 'Jenkins', 'CI/CD', 'Jira'],
    qa: ['JUnit 5', 'Selenium', 'Cucumber (BDD)', 'Postman', 'Newman', 'Swagger', 'Page Object Model (POM)', 'Clean Code']
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section id="hero" className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pt-8 md:pt-16">
        {/* Hero Copy */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{lang === 'en' ? 'Available for Contracts & Remote roles' : 'Disponible pour contrats & rôles à distance'}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block text-muted-foreground text-xl sm:text-2xl font-normal leading-loose">
                {dict.hero.greeting}
              </span>
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                {dict.hero.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium tracking-tight text-foreground/80 leading-snug">
              {dict.hero.title}
            </p>
            <p className="text-base text-muted-foreground font-light max-w-2xl">
              {dict.hero.subtitle}
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed font-light max-w-xl">
            {dict.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center text-sm font-light text-muted-foreground mr-4">
              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
              {dict.hero.location}
            </span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* View Online CV page */}
            <Link
              href={lang === 'en' ? '/cv' : '/fr/cv'}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all duration-200"
            >
              <FileText className="mr-2 h-4 w-4" />
              {lang === 'en' ? 'View Online CV' : 'Voir CV en Ligne'}
            </Link>

            {/* ATS-friendly CV Download button */}
            <a
              href={lang === 'en' ? '/resume-en.pdf' : '/resume-fr.pdf'}
              download
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              {dict.hero.cta_cv}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              {dict.hero.cta_contact}
            </a>
          </div>
        </div>

        {/* Hero Headshot Frame with Premium Rings */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group flex items-center justify-center">
            {/* Double Border Accent Ring (Glow Effect) */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-zinc-800 dark:to-zinc-900 opacity-30 blur-lg transition duration-1000 group-hover:opacity-40"></div>
            
            {/* Minimalist Geometric Double Frame */}
            <div className="relative p-1.5 rounded-[2rem] border border-border bg-background shadow-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] bg-muted">
                <Image
                  src={profilePic}
                  alt="Imed Ben Fatma Headshot"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="space-y-8 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{dict.services.title}</h2>
          <p className="text-muted-foreground font-light max-w-2xl">{dict.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pillar 1: Web Development */}
          <div className="group relative rounded-2xl border border-border/80 bg-card p-6 lg:p-8 hover:shadow-md transition-all duration-300 hover:border-primary/20">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 p-3 text-foreground group-hover:scale-110 transition-transform duration-300">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {dict.services.pillars.web.title}
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {dict.services.pillars.web.description}
            </p>
          </div>

          {/* Pillar 2: Mobile Development */}
          <div className="group relative rounded-2xl border border-border/80 bg-card p-6 lg:p-8 hover:shadow-md transition-all duration-300 hover:border-primary/20">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 p-3 text-foreground group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {dict.services.pillars.mobile.title}
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {dict.services.pillars.mobile.description}
            </p>
          </div>

          {/* Pillar 3: Software QA */}
          <div className="group relative rounded-2xl border border-border/80 bg-card p-6 lg:p-8 hover:shadow-md transition-all duration-300 hover:border-primary/20">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 p-3 text-foreground group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {dict.services.pillars.qa.title}
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {dict.services.pillars.qa.description}
            </p>
          </div>

          {/* Pillar 4: Maintenance & Consulting */}
          <div className="group relative rounded-2xl border border-border/80 bg-card p-6 lg:p-8 hover:shadow-md transition-all duration-300 hover:border-primary/20">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 p-3 text-foreground group-hover:scale-110 transition-transform duration-300">
              <Settings2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {dict.services.pillars.maintenance.title}
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {dict.services.pillars.maintenance.description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE TIMELINE */}
      <section id="experience" className="space-y-8 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{dict.experience.title}</h2>
          <p className="text-muted-foreground font-light max-w-2xl">{dict.experience.subtitle}</p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-border/80 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
          {/* Timeline Node 1: Apeiron AI */}
          <div className="relative">
            {/* Point node */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-foreground/60 shadow">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground"></span>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-semibold text-muted-foreground block tracking-wider uppercase">
                  {dict.experience.roles.apeiron_ai.duration}
                </span>
                <span className="text-sm font-light text-foreground block mt-1">
                  {dict.experience.roles.apeiron_ai.company}
                </span>
                <span className="text-xs font-light text-muted-foreground flex items-center mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {dict.experience.roles.apeiron_ai.location}
                </span>
              </div>
              <div className="md:col-span-9 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {dict.experience.roles.apeiron_ai.role}
                </h3>
                <ul className="space-y-2 text-sm font-light text-muted-foreground leading-relaxed list-disc list-outside pl-4">
                  <li>{dict.experience.roles.apeiron_ai.bullet1}</li>
                  <li>{dict.experience.roles.apeiron_ai.bullet2}</li>
                  <li>{dict.experience.roles.apeiron_ai.bullet3}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Node 2: Apeiron Technologies */}
          <div className="relative">
            {/* Point node */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-border/80 shadow">
              <span className="h-1.5 w-1.5 rounded-full bg-border"></span>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-semibold text-muted-foreground block tracking-wider uppercase">
                  {dict.experience.roles.apeiron_tech.duration}
                </span>
                <span className="text-sm font-light text-foreground block mt-1">
                  {dict.experience.roles.apeiron_tech.company}
                </span>
                <span className="text-xs font-light text-muted-foreground flex items-center mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {dict.experience.roles.apeiron_tech.location}
                </span>
              </div>
              <div className="md:col-span-9 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {dict.experience.roles.apeiron_tech.role}
                </h3>
                <ul className="space-y-2 text-sm font-light text-muted-foreground leading-relaxed list-disc list-outside pl-4">
                  <li>{dict.experience.roles.apeiron_tech.bullet1}</li>
                  <li>{dict.experience.roles.apeiron_tech.bullet2}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Node 3: Terraform Tunisia */}
          <div className="relative">
            {/* Point node */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-border/80 shadow">
              <span className="h-1.5 w-1.5 rounded-full bg-border"></span>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-semibold text-muted-foreground block tracking-wider uppercase">
                  {dict.experience.roles.terraform.duration}
                </span>
                <span className="text-sm font-light text-foreground block mt-1">
                  {dict.experience.roles.terraform.company}
                </span>
                <span className="text-xs font-light text-muted-foreground flex items-center mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {dict.experience.roles.terraform.location}
                </span>
              </div>
              <div className="md:col-span-9 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  {dict.experience.roles.terraform.role}
                </h3>
                <ul className="space-y-2 text-sm font-light text-muted-foreground leading-relaxed list-disc list-outside pl-4">
                  <li>{dict.experience.roles.terraform.bullet1}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY PROJECTS */}
      <section id="projects" className="space-y-8 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{dict.projects.title}</h2>
          <p className="text-muted-foreground font-light max-w-2xl">{dict.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* BCAR */}
          <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-white p-1">
                  <Image
                    src="/bcar-logo.png"
                    alt="B-CAR Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase block">
                    {lang === 'en' ? 'Full-Stack Fleet Ecosystem' : 'Écosystème de Flotte Full-Stack'}
                  </span>
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {dict.projects.items.bcar.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
                {dict.projects.items.bcar.description}
              </p>
              
              {/* External Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="https://bcar.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  {dict.projects.items.bcar.website_label}
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.apeiron.bcar&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  {dict.projects.items.bcar.playstore_label}
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {['Spring Boot', 'Angular', 'Flutter', 'PostgreSQL', 'Docker'].map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={lang === 'en' ? '/projects/b-car' : '/fr/projects/b-car'}
                className="text-xs font-semibold text-foreground flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
              >
                {dict.projects.view_project} <ChevronRight className="h-3 w-3 ml-0.5" />
              </Link>
            </div>
          </div>

          {/* Pharmaceutical Supply Chain */}
          <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-white p-1">
                  <Image
                    src="/novopharma-logo.png"
                    alt="novoPharma Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase block">
                    {lang === 'en' ? 'B2B Gamified Logistics' : 'Logistique Gamifiée B2B'}
                  </span>
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {dict.projects.items.pharma.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
                {dict.projects.items.pharma.description}
              </p>

              {/* External Links */}
              <div className="flex flex-wrap gap-3.5 mb-6">
                <a
                  href="https://pharmadfi.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  {dict.projects.items.pharma.website_label}
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.apeiron.novopharma&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  {dict.projects.items.pharma.playstore_label}
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                </a>
                <a
                  href="https://apps.apple.com/tn/app/novopharma-mychallenge/id6753335186?l=fr-FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  {dict.projects.items.pharma.appstore_label}
                  <ExternalLink className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'Flutter', 'Firebase', 'Serverless', 'Cloud Functions'].map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={lang === 'en' ? '/projects/novopharma' : '/fr/projects/novopharma'}
                className="text-xs font-semibold text-foreground flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
              >
                {dict.projects.view_project} <ChevronRight className="h-3 w-3 ml-0.5" />
              </Link>
            </div>
          </div>

          {/* QA */}
          <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-slate-100 dark:bg-zinc-800 text-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase block">
                    {lang === 'en' ? 'Quality Assurance' : 'Assurance Qualité'}
                  </span>
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {dict.projects.items.qa.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                {dict.projects.items.qa.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {['Selenium', 'JUnit', 'Cucumber', 'Newman', 'Jenkins'].map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={lang === 'en' ? '/projects/qa' : '/fr/projects/qa'}
                className="text-xs font-semibold text-foreground flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
              >
                {dict.projects.view_project} <ChevronRight className="h-3 w-3 ml-0.5" />
              </Link>
            </div>
          </div>

          {/* BI Analytics */}
          <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all duration-300">
            <div>
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                {lang === 'en' ? 'BI & ETL' : 'BI & ETL'}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">
                {dict.projects.items.bi.title}
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                {dict.projects.items.bi.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {['Power BI', 'SQL Server', 'ETL', 'Data modeling'].map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {dict.projects.view_project} <ChevronRight className="h-3 w-3 ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDUCATION & SKILLS MATRIX */}
      <section id="education" className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-20">
        {/* Education Timeline */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{dict.education.title}</h2>
            <p className="text-muted-foreground font-light">{dict.education.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* EPI Digital School */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 h-12 w-12 text-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-muted-foreground block">
                  {dict.education.items.epi.duration}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {dict.education.items.epi.degree}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  {dict.education.items.epi.school} — {dict.education.items.epi.location}
                </p>
              </div>
            </div>

            {/* ISET Kairouan */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800/80 h-12 w-12 text-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-muted-foreground block">
                  {dict.education.items.iset.duration}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {dict.education.items.iset.degree}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  {dict.education.items.iset.school} — {dict.education.items.iset.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Matrix Grid */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{dict.skills.title}</h2>
            <p className="text-muted-foreground font-light">{dict.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Backend Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                {dict.skills.categories.backend}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.backend.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-light text-foreground shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                {dict.skills.categories.frontend}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.frontend.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-light text-foreground shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* QA Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                {dict.skills.categories.qa}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.qa.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-light text-foreground shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                {dict.skills.categories.devops}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.devops.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-light text-foreground shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 FAQ SECTION */}
      <section id="faq" className="space-y-8 scroll-mt-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{dict.faq.title}</h2>
          <p className="text-muted-foreground font-light max-w-2xl">{dict.faq.subtitle}</p>
        </div>

        <div className="max-w-4xl space-y-4">
          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q1}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a1}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q2}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a2}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q3}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a3}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q4}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a4}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q5}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a5}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q6}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a6}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q7}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a7}
            </p>
          </details>

          <details className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
              <h3 className="text-base font-semibold">{dict.faq.q8}</h3>
              <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-foreground dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {dict.faq.a8}
            </p>
          </details>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="rounded-3xl border border-border bg-card p-8 md:p-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">{dict.contact.title}</h2>
            <p className="text-muted-foreground font-light max-w-sm">
              {dict.contact.subtitle}
            </p>
            <div className="space-y-2 pt-4">
              <p className="text-sm font-light text-muted-foreground">
                {lang === 'en' ? 'Direct communication channels:' : 'Canaux de communication directs :'}
              </p>
              <div className="space-y-1">
                <a href="mailto:imad.benfatma98@gmail.com" className="block text-sm font-medium text-foreground hover:underline">
                  imad.benfatma98@gmail.com
                </a>
                <a href="tel:+21651198800" className="block text-sm font-medium text-foreground hover:underline">
                  +216 51 198 800
                </a>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {dict.contact.form_name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {dict.contact.form_email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {dict.contact.form_message}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition duration-200"
            >
              {dict.contact.form_submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
