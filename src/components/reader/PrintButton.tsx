'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-3 py-1.5 text-sm border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded hover:bg-[#7B1E1E]/5 dark:hover:bg-[#FF9933]/5 transition"
      title="Print or save as PDF"
    >
      <Printer size={16} />
      <span className="hidden sm:inline">Print / PDF</span>
    </button>
  );
}