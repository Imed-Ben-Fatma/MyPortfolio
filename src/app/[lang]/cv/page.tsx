import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { getDictionary } from '@/dictionaries/get-dictionary';

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
      ? 'Professional curriculum vitae of Imed Ben Fatma, Software Engineer.'
      : 'Curriculum vitae professionnel de Imed Ben Fatma, Ingénieur Logiciel.',
  };
}

export default async function Page({ params }: CVPageProps) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const dict = await getDictionary(lang);

  const isEn = lang === 'en';
  
  const cvPath = isEn ? '/resume-en.pdf' : '/resume-fr.pdf';
  const backText = isEn ? 'Back to Portfolio' : 'Retour au Portfolio';
  const downloadText = isEn ? 'Download PDF' : 'Télécharger le PDF';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-8">
      {/* Action Bar */}
      <div className="mx-auto max-w-5xl px-4 mb-6 flex items-center justify-between">
        <Link 
          href={lang === 'en' ? '/' : '/fr'} 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backText}
        </Link>
        
        <a
          href={cvPath}
          download="CV Imed Ben Fatma.pdf"
          className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
        >
          <Download className="mr-2 h-4 w-4" />
          {downloadText}
        </a>
      </div>

      {/* PDF View Container */}
      <main className="mx-auto max-w-5xl aspect-[1/1.414] w-full bg-white dark:bg-zinc-900 border border-border/80 shadow-md rounded-2xl overflow-hidden">
        <iframe
          src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          className="w-full h-full border-none"
          title="CV PDF"
        />
      </main>
    </div>
  );
}
