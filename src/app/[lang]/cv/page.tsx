import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { getDictionary } from '@/dictionaries/get-dictionary';
import { PrintButton } from '@/components/print-button';

interface CVPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: CVPageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const isEn = lang === 'en';

  return {
    title: isEn ? 'Online CV | Imed Ben Fatma' : 'CV en Ligne | Imed Ben Fatma',
    description: isEn 
      ? 'Professional curriculum vitae of Imed Ben Fatma, Software Engineer specializing in Spring Boot, Angular, React, Next.js, and Flutter.'
      : 'Curriculum vitae professionnel de Imed Ben Fatma, Ingénieur Logiciel spécialisé en Spring Boot, Angular, React, Next.js et Flutter.',
  };
}


export default async function Page({ params }: CVPageProps) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  const isEn = lang === 'en';

  const cv = {
    jobTitle: isEn ? 'Software Engineer' : 'Ingénieur Logiciel',
    summary: isEn
      ? 'Product-focused Software Engineer with extensive experience in the Java ecosystem (Spring Boot, Spring Security, JPA/Hibernate) and modern frontend/mobile frameworks (Angular, React, Next.js, Flutter). Expert in designing scalable microservices, securing APIs, automating testing (Selenium, Newman), and setting up robust CI/CD integration pipelines.'
      : 'Ingénieur Logiciel orienté produit avec une solide expertise de l\'écosystème Java (Spring Boot, Spring Security, JPA/Hibernate) et des frameworks frontend/mobiles modernes (Angular, React, Next.js, Flutter). Spécialiste dans la conception de microservices évolutifs, la sécurisation des API, l\'automatisation des tests (Selenium, Newman) et le déploiement de pipelines CI/CD.',
    print_btn: isEn ? 'Print CV / Save as PDF' : 'Imprimer le CV / Enregistrer en PDF',
    back: isEn ? 'Back to Portfolio' : 'Retour au Portfolio',
    contact_header: isEn ? 'Contact Info' : 'Contact',
    skills_header: isEn ? 'Technical Skills' : 'Compétences Techniques',
    languages_header: isEn ? 'Languages' : 'Langues',
    experience_header: isEn ? 'Professional Experience' : 'Expérience Professionnelle',
    projects_header: isEn ? 'Key Projects' : 'Projets Clés',
    education_header: isEn ? 'Education' : 'Formation',
    languages: isEn 
      ? ['English (Professional)', 'French (Fluent)', 'Arabic (Native)']
      : ['Anglais (Professionnel)', 'Français (Courant)', 'Arabe (Langue maternelle)'],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-8 print:py-0 print:bg-white print:dark:bg-white">
      {/* Interactive Action Bar (Hidden when printing) */}
      <div className="mx-auto max-w-4xl px-4 mb-6 flex items-center justify-between print:hidden">
        <Link 
          href={lang === 'en' ? '/' : '/fr'} 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {cv.back}
        </Link>
        <PrintButton label={cv.print_btn} />
      </div>

      {/* Main CV Container (Structured to fit exactly on A4 print pages) */}
      <main className="mx-auto max-w-4xl bg-white dark:bg-zinc-900 border border-border/80 shadow-md rounded-2xl p-8 sm:p-12 print:border-none print:shadow-none print:rounded-none print:p-0 print:bg-white print:text-black">
        
        {/* Header Grid: Name, Title & Contacts */}
        <header className="border-b border-slate-200/80 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6 print:pb-4 print:mb-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black print:text-2xl">
              {dict.hero.name}
            </h1>
            <p className="text-lg font-bold text-primary print:text-slate-800 print:text-sm">
              {cv.jobTitle}
            </p>
            <p className="text-xs font-light text-muted-foreground flex items-center print:text-slate-500">
              <MapPin className="h-3.5 w-3.5 mr-1 shrink-0" />
              {dict.hero.location}
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-xs font-light text-slate-600 dark:text-zinc-400 print:text-slate-700 print:gap-1">
            <a href="mailto:imad.benfatma98@gmail.com" className="flex items-center hover:underline">
              <Mail className="h-3.5 w-3.5 mr-2 text-primary print:text-black shrink-0" />
              imad.benfatma98@gmail.com
            </a>
            <span className="flex items-center">
              <Phone className="h-3.5 w-3.5 mr-2 text-primary print:text-black shrink-0" />
              +216 51 198 800
            </span>
            <a href="https://www.linkedin.com/in/imed-ben-fatma-061b101a3/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              <svg className="h-3.5 w-3.5 mr-2 text-primary print:text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              linkedin.com/in/imed-ben-fatma-061b101a3
            </a>
            <a href="https://github.com/Imed-Ben-Fatma" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              <svg className="h-3.5 w-3.5 mr-2 text-primary print:text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              github.com/Imed-Ben-Fatma
            </a>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-6 print:mb-4">
          <p className="text-xs font-light text-slate-700 dark:text-zinc-300 leading-relaxed print:text-slate-800 print:text-[11px]">
            {cv.summary}
          </p>
        </section>

        {/* Dynamic 2-Column Split: Left Sidebar & Right main body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start print:grid-cols-12 print:gap-6">
          
          {/* Left Column: Skills & Languages (Span 4) */}
          <aside className="md:col-span-4 space-y-6 print:col-span-4 print:space-y-4">
            {/* Technical Skills Category */}
            <div className="space-y-3.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/80 pb-1.5 print:text-black print:text-xs">
                {cv.skills_header}
              </h2>
              
              {/* Category 1: Backend */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-300 print:text-black">{dict.skills.categories.backend}</h3>
                <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-700">
                  Spring Boot, Spring Security, JPA/Hibernate, Java, Node.js, Express, PostgreSQL, MySQL
                </p>
              </div>

              {/* Category 2: Frontend & Mobile */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-300 print:text-black">{dict.skills.categories.frontend}</h3>
                <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-700">
                  Angular, React, Next.js, Flutter, Dart, TypeScript, JavaScript, Tailwind CSS, HTML5/CSS3
                </p>
              </div>

              {/* Category 3: DevOps & Tools */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-300 print:text-black">{dict.skills.categories.devops}</h3>
                <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-700">
                  Jenkins CI/CD, Git, Docker, SonarQube, Firebase, GCP Services
                </p>
              </div>

              {/* Category 4: Testing & QA */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-300 print:text-black">{dict.skills.categories.qa}</h3>
                <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-700">
                  Selenium Webdriver, Cucumber BDD, JUnit, Postman, Newman CLI
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/80 pb-1.5 print:text-black print:text-xs">
                {cv.languages_header}
              </h2>
              <ul className="text-[11px] font-light text-slate-600 dark:text-zinc-400 space-y-1 print:text-slate-700">
                {cv.languages.map((langItem) => (
                  <li key={langItem} className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-2 text-primary shrink-0 print:text-black" />
                    {langItem}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Column: Work Experience & Projects & Education (Span 8) */}
          <section className="md:col-span-8 space-y-6 print:col-span-8 print:space-y-4">
            
            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/80 pb-1.5 print:text-black print:text-xs">
                {cv.experience_header}
              </h2>

              {/* Role 1: Apeiron AI */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <h3 className="text-slate-900 dark:text-white font-bold print:text-black print:text-[11.5px]">
                    {dict.experience.roles.apeiron_ai.role} — <span className="text-primary print:text-black">{dict.experience.roles.apeiron_ai.company}</span>
                  </h3>
                  <span className="text-muted-foreground text-[10px] font-light print:text-slate-600">{dict.experience.roles.apeiron_ai.duration}</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-light print:text-slate-500">{dict.experience.roles.apeiron_ai.location}</p>
                <ul className="text-[11px] font-light text-slate-600 dark:text-zinc-400 list-disc pl-4 space-y-1 leading-relaxed print:text-slate-800">
                  <li>{dict.experience.roles.apeiron_ai.bullet1}</li>
                  <li>{dict.experience.roles.apeiron_ai.bullet2}</li>
                  <li>{dict.experience.roles.apeiron_ai.bullet3}</li>
                </ul>
              </div>

              {/* Role 2: Apeiron Tech */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <h3 className="text-slate-900 dark:text-white font-bold print:text-black print:text-[11.5px]">
                    {dict.experience.roles.apeiron_tech.role} — <span className="text-primary print:text-black">{dict.experience.roles.apeiron_tech.company}</span>
                  </h3>
                  <span className="text-muted-foreground text-[10px] font-light print:text-slate-600">{dict.experience.roles.apeiron_tech.duration}</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-light print:text-slate-500">{dict.experience.roles.apeiron_tech.location}</p>
                <ul className="text-[11px] font-light text-slate-600 dark:text-zinc-400 list-disc pl-4 space-y-1 leading-relaxed print:text-slate-800">
                  <li>{dict.experience.roles.apeiron_tech.bullet1}</li>
                  <li>{dict.experience.roles.apeiron_tech.bullet2}</li>
                </ul>
              </div>

              {/* Role 3: Terraform */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <h3 className="text-slate-900 dark:text-white font-bold print:text-black print:text-[11.5px]">
                    {dict.experience.roles.terraform.role} — <span className="text-primary print:text-black">{dict.experience.roles.terraform.company}</span>
                  </h3>
                  <span className="text-muted-foreground text-[10px] font-light print:text-slate-600">{dict.experience.roles.terraform.duration}</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-light print:text-slate-500">{dict.experience.roles.terraform.location}</p>
                <ul className="text-[11px] font-light text-slate-600 dark:text-zinc-400 list-disc pl-4 space-y-1 leading-relaxed print:text-slate-800">
                  <li>{dict.experience.roles.terraform.bullet1}</li>
                </ul>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/80 pb-1.5 print:text-black print:text-xs">
                {cv.projects_header}
              </h2>
              
              <div className="grid grid-cols-1 gap-2.5">
                <div className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-800">
                  <span className="font-bold text-slate-800 dark:text-zinc-300 print:text-black">B-CAR (Smart Mobility):</span> {dict.projects.items.bcar.description}
                </div>
                <div className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-800">
                  <span className="font-bold text-slate-800 dark:text-zinc-300 print:text-black">novoPharma MyChallenge:</span> {dict.projects.items.pharma.description}
                </div>
                <div className="text-[11px] font-light text-slate-600 dark:text-zinc-400 leading-relaxed print:text-slate-800">
                  <span className="font-bold text-slate-800 dark:text-zinc-300 print:text-black">QA Automation:</span> {dict.projects.items.qa.description}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/80 pb-1.5 print:text-black print:text-xs">
                {cv.education_header}
              </h2>

              <div className="space-y-2.5">
                {/* School 1 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <h3 className="text-slate-900 dark:text-white font-bold print:text-black print:text-[11px]">
                      {dict.education.items.epi.degree}
                    </h3>
                    <span className="text-muted-foreground text-[10px] font-light print:text-slate-600">{dict.education.items.epi.duration}</span>
                  </div>
                  <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 print:text-slate-700">
                    {dict.education.items.epi.school} — {dict.education.items.epi.location}
                  </p>
                </div>

                {/* School 2 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <h3 className="text-slate-900 dark:text-white font-bold print:text-black print:text-[11px]">
                      {dict.education.items.iset.degree}
                    </h3>
                    <span className="text-muted-foreground text-[10px] font-light print:text-slate-600">{dict.education.items.iset.duration}</span>
                  </div>
                  <p className="text-[11px] font-light text-slate-600 dark:text-zinc-400 print:text-slate-700">
                    {dict.education.items.iset.school} — {dict.education.items.iset.location}
                  </p>
                </div>
              </div>
            </div>

          </section>

        </div>

      </main>
      
      {/* Global CSS for Print mode optimization */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body {
              background-color: white !important;
              color: black !important;
            }
            main {
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              max-width: 100% !important;
            }
            .print\\:hidden {
              display: none !important;
            }
            @page {
              size: A4;
              margin: 0.4in;
            }
          }
        `
      }} />
    </div>
  );
}
