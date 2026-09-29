'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Square, SkipForward } from 'lucide-react';

interface PlayAllButtonProps {
  verses: { id: string; sanskrit: string; translations: { hi?: string; en?: string } }[];
}

export function PlayAllButton({ verses }: PlayAllButtonProps) {
  const [supported, setSupported] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState(0.85);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    try {
      const prefs = JSON.parse(localStorage.getItem('vedicvani:voice-prefs') ?? '{}');
      if (prefs.rate) setRate(prefs.rate);
      if (prefs.voiceURI) setVoiceURI(prefs.voiceURI);
    } catch {
      // ignore
    }

    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices();
      const preferred = all.filter(
        (v) =>
          v.lang.startsWith('hi') ||
          v.lang.startsWith('sa') ||
          v.lang.includes('IN') ||
          v.name.toLowerCase().includes('hindi')
      );
      const list = preferred.length > 0 ? preferred : all;
      setVoices(list);
      setVoiceURI((prev) => prev ?? list[0]?.voiceURI ?? null);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speakVerse(index: number) {
    if (index >= verses.length) {
      setPlaying(false);
      setPaused(false);
      setCurrentIndex(0);
      isPlayingRef.current = false;
      return;
    }

    setCurrentIndex(index);
    const verse = verses[index];
    const text = [
      verse.sanskrit,
      verse.translations.hi ? `।। अर्थ ।। ${verse.translations.hi}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    const utter = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    if (voice) utter.voice = voice;
    utter.rate = rate;
    utter.pitch = 1;
    utter.onend = () => {
      if (isPlayingRef.current) {
        speakVerse(index + 1);
      }
    };
    utter.onerror = () => {
      if (isPlayingRef.current) {
        speakVerse(index + 1);
      }
    };
    window.speechSynthesis.speak(utter);
  }

  function start() {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    isPlayingRef.current = true;
    setPlaying(true);
    setPaused(false);
    speakVerse(0);
  }

  function togglePause() {
    if (!playing) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  }

  function stop() {
    window.speechSynthesis.cancel();
    isPlayingRef.current = false;
    setPlaying(false);
    setPaused(false);
    setCurrentIndex(0);
  }

  function skipNext() {
    if (currentIndex + 1 >= verses.length) {
      stop();
      return;
    }
    window.speechSynthesis.cancel();
    speakVerse(currentIndex + 1);
  }

  if (!mounted || !supported) return null;

  return (
    <div className="inline-flex flex-wrap items-center gap-2 no-print">
      {!playing ? (
        <button
          onClick={start}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[#7B1E1E] text-white hover:bg-[#5a1616] transition"
          aria-label="Play all verses"
        >
          <Play size={15} /> Play all verses
        </button>
      ) : (
        <>
          <button
            onClick={togglePause}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-[#7B1E1E]/30 hover:bg-[#7B1E1E]/5 transition"
            aria-label="Pause"
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={skipNext}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-sm rounded-lg border border-[#7B1E1E]/30 hover:bg-[#7B1E1E]/5 transition"
            aria-label="Next verse"
          >
            <SkipForward size={14} />
          </button>
          <button
            onClick={stop}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-sm rounded-lg border border-red-500/30 text-red-600 hover:bg-red-500/10 transition"
            aria-label="Stop"
          >
            <Square size={14} />
          </button>
          <span className="text-xs text-[#1A1A1A]/50 dark:text-[#F5F5F5]/50">
            {currentIndex + 1} / {verses.length}
          </span>
        </>
      )}

      <select
        value={rate}
        onChange={(e) => {
          const newRate = parseFloat(e.target.value);
          setRate(newRate);
          try {
            const prefs = JSON.parse(localStorage.getItem('vedicvani:voice-prefs') ?? '{}');
            localStorage.setItem(
              'vedicvani:voice-prefs',
              JSON.stringify({ ...prefs, rate: newRate })
            );
          } catch {
            // ignore
          }
        }}
        className="text-xs bg-transparent border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded px-1.5 py-1 cursor-pointer"
        aria-label="Speed"
      >
        <option value={0.6}>0.6×</option>
        <option value={0.75}>0.75×</option>
        <option value={0.85}>0.85×</option>
        <option value={1}>1×</option>
        <option value={1.15}>1.15×</option>
      </select>
    </div>
  );
}