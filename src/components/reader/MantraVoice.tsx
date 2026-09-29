'use client';

import { VoicePlayer } from './VoicePlayer';

interface MantraVoiceProps {
  sanskrit: string;
}

export function MantraVoice({ sanskrit }: MantraVoiceProps) {
  return (
    <div className="mt-3 no-print">
      <VoicePlayer text={sanskrit} label="Listen to Mantra" />
    </div>
  );
}