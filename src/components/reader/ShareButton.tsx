'use client';

import { Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  text: string;
  url?: string;
}

export function ShareButton({ text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
    if (navigator.share) {
      try {
        await navigator.share({ title: 'VedicVani', text, url: shareUrl });
        return;
      } catch {
        // user cancelled — fall through to copy
      }
    }
    await navigator.clipboard.writeText(`${text}\n\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 px-2 py-1 text-xs rounded text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40 hover:text-[#D4AF37] transition"
      title="Share this verse"
      aria-label="Share"
    >
      {copied ? <Check size={14} /> : <Share2 size={14} />}
      {copied && <span>Copied!</span>}
    </button>
  );
}