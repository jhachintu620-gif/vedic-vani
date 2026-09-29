'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  src?: string;
  label?: string;
}

export function AudioPlayer({ src, label }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [src]);

  if (!src) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border border-[#7B1E1E]/10 dark:border-[#FF9933]/10 rounded text-[#1A1A1A]/40 dark:text-[#F5F5F5]/40 cursor-not-allowed"
        title="Audio coming soon"
      >
        <Play size={14} />
        <span>{label ?? 'Recitation coming soon'}</span>
      </button>
    );
  }

  function toggle() {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  }

  function toggleMute() {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded hover:bg-[#7B1E1E]/5 dark:hover:bg-[#FF9933]/5 transition"
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
        <span>{playing ? 'Pause' : (label ?? 'Listen')}</span>
      </button>
      {playing && (
        <button onClick={toggleMute} className="text-[#7B1E1E] dark:text-[#FF9933]" aria-label="Mute">
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} preload="none" />
    </div>
  );
}