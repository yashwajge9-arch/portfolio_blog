import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect standalone mode safely
    let isStandalone = false;
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      }
      if (!isStandalone && typeof window !== 'undefined' && 'navigator' in window) {
        isStandalone = (window.navigator as unknown as { standalone?: boolean })?.standalone === true;
      }
    } catch {
      isStandalone = false;
    }
    setIsInstalled(isStandalone);

    // Detect iOS devices safely
    try {
      const userAgent = (typeof navigator !== 'undefined' ? navigator.userAgent : '').toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    } catch {
      setIsIOS(false);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
  };
}
