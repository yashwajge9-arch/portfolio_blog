import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 flex items-center justify-between gap-3 rounded-xl bg-amber-950/90 border border-amber-500/40 px-4 py-2.5 text-xs font-medium text-amber-200 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2.5">
        <WifiOff className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
        <span>Offline Mode — Cached video portfolio and articles are ready.</span>
      </div>
    </div>
  );
};
