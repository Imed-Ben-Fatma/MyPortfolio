import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, CheckCircle2, Layers, Cpu, Terminal, Settings } from 'lucide-react';
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

  // Localized texts for the QA & Testing details page
  const content = {
    back: isEn ? 'Back to Portfolio' : 'Retour au Portfolio',
    role_label: isEn ? 'Role' : 'Rôle',
    role_val: isEn ? 'Lead QA & Automation Engineer' : 'Ingénieur Principal QA & Automatisation',
    client_label: isEn ? 'Domain' : 'Domaine',
    client_val: isEn ? 'Quality Assurance & Continuous Integration' : 'Assurance Qualité & Intégration Continue',
    stack_label: isEn ? 'Tech Stack' : 'Technologies',
    overview_title: isEn ? 'Project Overview' : 'Aperçu du Projet',
    
    overview_p1: isEn 
      ? 'To guarantee the robustness and security of our modular B2B and consumer web platforms, we developed a multi-layered automated Quality Assurance platform consisting of E2E functional suites, backend API contract testing, and Jenkins CI pipeline automation.'
      : 'Pour garantir la robustesse et la sécurité de nos plateformes B2B et grand public, nous avons développé une plateforme d\'assurance qualité automatisée multicouche comprenant des suites fonctionnelles E2E, des tests de contrats d\'API backend et une automatisation via Jenkins.',
    
    overview_p2: isEn
      ? 'End-to-End (E2E) tests simulate actual user behavior (authenticating, managing geographic zones, adding discounts) automated with Selenium Webdriver and structured using Cucumber Gherkin scenarios executed via JUnit. Parallel API testing with Newman/Postman validates response status codes, header contents, response payloads, and latency tolerances. Jenkins orchestrates this pipeline on every commit, alerting on regressions before production deployment.'
      : 'Les tests de bout en bout (E2E) simulent les actions des utilisateurs (connexion, gestion des zones géographiques, ajout de remises) automatisés avec Selenium et structurés en scénarios Cucumber/JUnit. En parallèle, les tests API avec Newman/Postman valident les codes de statut, en-têtes HTTP, assertions personnalisées et latences. Jenkins orchestre ce pipeline à chaque commit pour bloquer les régressions.',

    pillars_title: isEn ? 'Quality Assurance Pillars' : 'Piliers d\'Assurance Qualité',
    
    e2e_title: isEn ? 'Selenium & Cucumber E2E Workflows' : 'Workflows E2E Selenium & Cucumber',
    e2e_desc: isEn
      ? 'Simulated end-to-end user actions across authentications, manager creations, and promotion configurations using Selenium, mapping them to human-readable Gherkin/BDD scenarios to ensure high functional integrity.'
      : 'Simulation complète des parcours utilisateurs (connexion, création de gestionnaires, configurations de promotions) via Selenium, modélisés sous forme de scénarios Gherkin/BDD pour maximiser l\'intégrité fonctionnelle.',
    
    api_title: isEn ? 'Newman API Contract Testing' : 'Tests de Contrats d\'API avec Newman',
    api_desc: isEn
      ? 'Automated Postman collections executed via Newman CLI. Verifies positive conditions (200/201 response status) and negative validation parameters (401 unauthorized / 403 forbidden / 404 not found) with custom latency assertions.'
      : 'Automatisation des collections Postman exécutées via la CLI Newman. Vérification des cas nominaux (statuts 200/201) et des gestions d\'erreurs (401 unauthorized / 403 forbidden / 404) avec assertions de latence.',
    
    ci_title: isEn ? 'Jenkins CI/CD Automation' : 'Automatisation Intégration Continue Jenkins',
    ci_desc: isEn
      ? 'Configured multi-stage Jenkins pipelines that execute the E2E and API test suites automatically. Generates comprehensive HTML reports (Newman Reporter / Cucumber reports) and alerts developers on build failures.'
      : 'Configuration de pipelines Jenkins multi-étapes exécutant automatiquement les suites E2E et API. Génération de rapports HTML détaillés (Newman Reporter / Cucumber) et alertes en cas d\'anomalie.',
    
    gallery_title: isEn ? 'Test Automation Reports & Dashboards' : 'Rapports d\'Automatisation & Tableaux de Bord',
    screenshots: [
      {
        src: '/projects/qa/e2e/dashboard_e2e.png',
        title: isEn ? 'E2E Execution Dashboard' : 'Tableau de Bord d\'Exécution E2E',
        desc: isEn ? 'JUnit test execution runner detailing passing functional blocks and assertion counts.' : 'JUnit test execution runner détaillant les blocs fonctionnels validés et le nombre d\'assertions.',
        isTall: false
      },
      {
        src: '/projects/qa/e2e/add_discount_success.png',
        title: isEn ? 'E2E Scenario: Add Discount Success' : 'Scénario E2E : Ajout de Remise Réussi',
        desc: isEn ? 'Selenium validation trace confirming successful promotion addition and data synchronization.' : 'Validation Selenium confirmant l\'ajout réussi de la promotion et la synchronisation des données.',
        isTall: false
      },
      {
        src: '/projects/qa/e2e/add_zone_manager_failed.png',
        title: isEn ? 'E2E Scenario: Invalid Email Validation Error' : 'Scénario E2E : Erreur d\'Email Invalide',
        desc: isEn ? 'E2E negative scenario test verifying UI error rendering when an invalid email format is input.' : 'Test de scénario négatif E2E vérifiant l\'affichage de l\'erreur UI en cas d\'email invalide.',
        isTall: false
      },
      {
        src: '/projects/qa/e2e/all_tests.png',
        title: isEn ? 'JUnit E2E Test Suite Summary' : 'Résumé de la Suite JUnit E2E',
        desc: isEn ? 'Complete report of the Selenium/Cucumber suite execution detailing pass rates.' : 'Rapport complet d\'exécution de la suite Selenium/Cucumber détaillant les taux de succès.',
        isTall: true
      },
      {
        src: '/projects/qa/api/folders.png',
        title: isEn ? 'Postman API Collection Structure' : 'Structure de Collection Postman API',
        desc: isEn ? 'Modular directory setup in Postman representing functional modules for automated Newman runs.' : 'Dossiers modulaires organisés dans Postman pour l\'exécution automatisée via Newman.',
        isTall: true
      },
      {
        src: '/projects/qa/api/dashboard_api.png',
        title: isEn ? 'Newman API Test Report' : 'Rapport de Test API Newman',
        desc: isEn ? 'HTML report summary showing total requests, assertions, average latency, and payload sizes.' : 'Synthèse du rapport HTML Newman détaillant les requêtes, assertions, latences et tailles.',
        isTall: false
      },
      {
        src: '/projects/qa/api/delete_zone_manager.png',
        title: isEn ? 'API Test: Delete Zone Manager Success' : 'Test API : Suppression de Manager Réussie',
        desc: isEn ? 'Newman response validation tracing successful delete operation with 200 OK.' : 'Validation Newman confirmant la suppression d\'un gestionnaire avec le statut 200 OK.',
        isTall: false
      },
      {
        src: '/projects/qa/api/delete_zone_manager_invalid.png',
        title: isEn ? 'API Test: Delete Zone Manager Error Case' : 'Test API : Erreur Suppression Manager',
        desc: isEn ? 'Asserting 404 response payload when attempting to delete a non-existent manager ID.' : 'Assertion du code de statut 404 lors de la suppression d\'un identifiant inexistant.',
        isTall: false
      },
      {
        src: '/projects/qa/api/publication_valid.png',
        title: isEn ? 'API Test: Valid Publication Post' : 'Test API : Publication Valide',
        desc: isEn ? 'Verifying 201 Created and response payload integrity on publication endpoints.' : 'Validation du statut 201 Created et de l\'intégrité des payloads sur le endpoint de publication.',
        isTall: false
      },
      {
        src: '/projects/qa/api/remises_invalid.png',
        title: isEn ? 'API Test: Invalid Discount Bad Request' : 'Test API : Remise Invalide',
        desc: isEn ? 'Verifying 400 Bad Request error structure when posting a malformed promotion payload.' : 'Validation de l\'erreur 400 Bad Request lors de l\'envoi d\'une promotion mal formée.',
        isTall: false
      }
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
      </div>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="flex h-16 w-16 overflow-hidden rounded-2xl border border-border bg-slate-100 dark:bg-zinc-800 items-center justify-center shrink-0 shadow-sm text-foreground">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Automated QA Test Suites & CI Pipelines
            </h1>
            <p className="text-muted-foreground font-light mt-1">
              End-to-End Functional Slices, API Contract Assertions, & Continuous Integration
            </p>
          </div>
        </div>
      </div>

      {/* Banner Cover Image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-lg">
        <Image
          src="/projects/qa/cover_mockup.png"
          alt="QA & Testing Automation Cover Banner"
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
              {/* E2E */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.e2e_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.e2e_desc}</p>
                </div>
              </div>

              {/* API Contract */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Terminal className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.api_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.api_desc}</p>
                </div>
              </div>

              {/* CI Jenkins */}
              <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 h-10 w-10 text-foreground">
                  <Settings className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">{content.ci_title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{content.ci_desc}</p>
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

          {/* Stat 2: Domain */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.client_label}</span>
            <p className="text-sm font-semibold text-foreground">{content.client_val}</p>
          </div>

          {/* Stat 3: Tech Stack */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">{content.stack_label}</span>
            <div className="flex flex-wrap gap-1.5">
              {['Selenium', 'Cucumber', 'Gherkin', 'JUnit', 'Java', 'Newman', 'Postman CLI', 'Jenkins CI', 'HTML Reporter', 'Regression Testing'].map((tech) => (
                <span key={tech} className="rounded-lg border border-border/80 bg-background px-3 py-1 text-xs font-light text-foreground shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Screenshot Gallery */}
      <ScreenshotGallery
        galleryTitle={content.gallery_title}
        mobileTitle=""
        screenshots={content.screenshots}
        mobileShots={[]}
      />
    </div>
  );
}
