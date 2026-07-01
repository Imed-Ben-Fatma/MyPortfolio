'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { type Dictionary } from '@/dictionaries/get-dictionary';
import { useTheme } from 'next-themes';


interface NavbarProps {
  lang: 'en' | 'fr';
  dict: Dictionary;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isHome = pathname === '/' || pathname === '/en' || pathname === '/fr';
  const homePrefix = isHome ? '' : (lang === 'en' ? '/' : '/fr');

  const navItems = [
    { label: dict.nav.services, href: `${homePrefix}#services` },
    { label: dict.nav.experience, href: `${homePrefix}#experience` },
    { label: dict.nav.projects, href: `${homePrefix}#projects` },
    { label: dict.nav.education, href: `${homePrefix}#education` },
    { label: dict.nav.contact, href: `${homePrefix}#contact` },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              href={lang === 'en' ? '/' : '/fr'} 
              className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
            >
              Imed<span className="text-muted-foreground font-light">.BF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Interactive Controls (Theme, Language, Mobile Menu) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Language Switcher */}
            <Link
              href={lang === 'en' ? '/fr' : '/'}
              className="flex items-center space-x-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{lang === 'en' ? 'FR' : 'EN'}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Theme Switcher for mobile */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Language Switcher for mobile */}
            <Link
              href={lang === 'en' ? '/fr' : '/'}
              className="flex items-center space-x-1 rounded-lg border border-border/60 px-2 py-1 text-xs font-semibold text-muted-foreground"
            >
              <Globe className="h-3 w-3" />
              <span>{lang === 'en' ? 'FR' : 'EN'}</span>
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 text-muted-foreground hover:bg-muted/80 hover:text-foreground focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/40 bg-background px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
