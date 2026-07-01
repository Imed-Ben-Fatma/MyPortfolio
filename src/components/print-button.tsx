"use client";

import { Printer } from 'lucide-react';

interface PrintButtonProps {
  label: string;
}

export function PrintButton({ label }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all duration-200"
    >
      <Printer className="mr-2 h-4 w-4" />
      {label}
    </button>
  );
}
