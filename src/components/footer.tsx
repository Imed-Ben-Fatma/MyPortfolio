import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { type Dictionary } from '@/dictionaries/get-dictionary';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

interface FooterProps {
  lang: 'en' | 'fr';
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-card py-12 text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand and Description */}
          <div>
            <span className="text-base font-bold tracking-tight text-foreground">
              Imed Ben Fatma
            </span>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </span>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>{dict.hero.location}</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors duration-200">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:imad.benfatma98@gmail.com">imad.benfatma98@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors duration-200">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+21651198800">+216 51 198 800</a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {lang === 'en' ? 'Connect' : 'Réseaux'}
            </span>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/imed-ben-fatma-061b101a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Imed-Ben-Fatma"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {currentYear} Imed Ben Fatma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
