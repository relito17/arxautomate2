import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [, setPreferences] = useState<{
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  } | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(consent);
      setPreferences(parsed);

      if (parsed.analytics) {
        // GA4 Script
        const ga = document.createElement("script");
        ga.async = true;
        ga.src = "https://www.googletagmanager.com/gtag/js?id=G-CFXCFQ3P3Z"; // Substitui pelo teu ID
        document.head.appendChild(ga);

        const gaInline = document.createElement("script");
        gaInline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `;
        document.head.appendChild(gaInline);

        // Microsoft Clarity Script
        const clarity = document.createElement("script");
        clarity.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "r1wwismbhe");
        `;
        document.head.appendChild(clarity);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
    window.location.reload(); // Para forçar reexecução do useEffect e injetar os scripts
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 border-t border-gray-800 p-4 z-50 backdrop-blur-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Cookie Preferences</h3>
            <p className="text-gray-400 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="border border-[#FF6A00] px-6 py-2 rounded-lg font-semibold hover:bg-[#FF6A00]/10 transition-colors"
              >
                Deny
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowBanner(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>
          {' '}&bull;{' '}
          <a href="/terms" className="underline hover:text-white">Terms of Service</a>
          {' '}&bull;{' '}
          <a href="/cookie-policy" className="underline hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
