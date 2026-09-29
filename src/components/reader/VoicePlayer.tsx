'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Square, Volume2 } from 'lucide-react';

interface VoicePlayerProps {
  text: string;
  label?: string;
  compact?: boolean;
}

const STORAGE_KEY = 'vedicvani:voice-prefs';

interface VoicePrefs {
  rate: number;
  voiceURI: string | null;
}

function getPrefs(): VoicePrefs {
  if (typeof window === 'undefined') return { rate: 0.85, voiceURI: null };
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{"rate":0.85,"voiceURI":null}');
  } catch {
    return { rate: 0.85, voiceURI: null };
  }
}

function savePrefs(prefs: VoicePrefs) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function VoicePlayer({ text, label, compact }: VoicePlayerProps) {
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rate, setRate] = useState(0.85);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    const prefs = getPrefs();
    setRate(prefs.rate);
    setVoiceURI(prefs.voiceURI);

    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices();
      // Prefer Indian/Sanskrit/Hindi voices
      const preferred = all.filter(
        (v) =>
          v.lang.startsWith('hi') ||
          v.lang.startsWith('sa') ||
          v.lang.includes('IN') ||
          v.name.toLowerCase().includes('hindi') ||
          v.name.toLowerCase().includes('india')
      );
      const list = preferred.length > 0 ? preferred : all;
      setVoices(list);
      setVoiceURI((prev) => {
        if (prev && list.some((v) => v.voiceURI === prev)) return prev;
        return list[0]?.voiceURI ?? null;
      });
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speak() {
    if (!supported) return;
    if (speaking && !paused) {
      window.speechSynthesis.pause();
      setPaused(true);
      return;
    }
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    if (voice) utter.voice = voice;
    utter.rate = rate;
    utter.pitch = 1;
    utter.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };
    utter.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
    setSpeaking(true);
  }

  function stop() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }

  function changeRate(newRate: number) {
    setRate(newRate);
    const prefs = getPrefs();
    savePrefs({ ...prefs, rate: newRate });
    if (speaking) {
      stop();
    }
  }

  function changeVoice(newURI: string) {
    setVoiceURI(newURI);
    const prefs = getPrefs();
    savePrefs({ ...prefs, voiceURI: newURI });
    if (speaking) stop();
  }

  if (!mounted || !supported) {
    return null;
  }

  return (
    <div className={`inline-flex items-center gap-1.5 ${compact ? '' : 'flex-wrap'} no-print`}>
      <button
        onClick={speak}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 hover:bg-[#7B1E1E]/5 dark:hover:bg-[#FF9933]/5 transition text-[#7B1E1E] dark:text-[#FF9933]"
        title={paused ? 'Resume' : speaking ? 'Pause' : 'Listen'}
        aria-label="Voice play"
      >
        {speaking && !paused ? <Pause size={13} /> : <Play size={13} />}
        {label && <span>{speaking ? (paused ? 'Resume' : 'Pause') : label}</span>}
      </button>

      {speaking && (
        <button
          onClick={stop}
          className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded border border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-500/10 transition"
          title="Stop"
          aria-label="Stop"
        >
          <Square size={12} />
        </button>
      )}

      {!compact && (
        <select
          value={rate}
          onChange={(e) => changeRate(parseFloat(e.target.value))}
          className="text-xs bg-transparent border border-[#7B1E1E]/20 dark:border-[#FF9933]/20 rounded px-1.5 py-1 cursor-pointer"
          title="Playback speed"
          aria-label="Playback speed"
        >
          <option value={0.6}>0.6×</option>
          <option value={0.75}>0.75×</option>
          <option value={0.85}>0.85×</option>
          <option value={1}>1×</option>
          <option value={1.15}>1.15×</option>
        </select>
      )}
    </div>
  );
}