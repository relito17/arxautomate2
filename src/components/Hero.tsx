import ShootingStars from './ShootingStars';
import ShootingStars2 from './ShootingStars2';
import { ChevronRight, Phone } from 'lucide-react';
import logo from '../images/logoarx5.png';
import { ThemeToggle } from './ui/ThemeToggle';
import { useThemeStore } from '../store/useThemeStore';
import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const isDark = useThemeStore((state) => state.isDark);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const words = useMemo(
    () => ['Automate ', 'Scale ', 'Enhance ', 'Supercharge ', 'Skyrocket '],
    []
  );
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, words]);

  return (
    <header
      id="hero"
      className={`relative min-h-screen overflow-hidden flex items-center justify-center ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Theme toggle */}
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Logo and brand (top-left) - Versão melhorada */}
      <div className="absolute top-5 left-5 z-50 flex items-center gap-2 max-w-[calc(100vw-200px)] xl:max-w-none">
        <img src={logo} alt="ARxAutomate Logo" className="hidden sm:block h-10 sm:h-12 flex-shrink-0" />
        <h1
          className={`hidden xl:block text-xl 2xl:text-2xl tracking-[5px] font-normal whitespace-nowrap ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          style={{ fontFamily: 'Mokoto' }}
        >
          <span>AR</span>
          <span
            className="inline-block scale-90 transform origin-bottom gradient-text"
            style={{
              fontFamily: 'Orbitron',
              fontWeight: 800,
            }}
          >
            x
          </span>
          <span>Automate</span>
        </h1>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        {isDark ? <ShootingStars /> : <ShootingStars2 />}

        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-black/70 via-black/40 to-black/90'
              : 'bg-gradient-to-br from-white/80 via-white/40 to-white/90'
          }`}
        />
        <div className="services-background" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in-up">
          
          {/* Logo centrado para telas médias (tablets e desktops pequenos) */}
          <div
            className={`hidden sm:block xl:hidden mb-6 text-2xl md:text-3xl tracking-[6px] ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontFamily: 'Mokoto' }}
          >
            <span>AR</span>
            <span
              className="inline-block scale-90 transform origin-bottom gradient-text"
              style={{
                fontFamily: 'Orbitron',
                fontWeight: 800,
              }}
            >
              x
            </span>
            <span>Automate</span>
          </div>

          {/* Mobile business name - aparece apenas em telas muito pequenas */}
          <div
            className={`sm:hidden mb-4 text-2xl tracking-[5px] ${
              isDark ? 'text-white' : 'text-gray-900'
            } font-mokoto`}
          >
            <span>AR</span>
            <span className="gradient-text scale-90 transform"
            style={{
                fontFamily: 'Orbitron',
                fontWeight: 800,
              }}
              >x</span>
            <span>Automate</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'}`}>
            AI-Powered Systems to{' '}
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute font-extrabold gradient-text"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </span>
            Your Business
          </h1>

          <p className={`mt-6 text-base sm:text-lg md:text-xl font-light ${
              isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            ARxAutomate streamlines your business — you lead, we automate.
          </p>

          {/* Buttons container */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Our Services button */}
            <button
              onClick={scrollToServices}
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]'
                  : 'bg-gray-900/10 border-gray-900/20 text-gray-900 hover:bg-gray-900/20 hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]'
              } overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Services
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition duration-300 blur-lg ${
                isDark ? 'bg-white/30' : 'bg-gray-900/30'
              }`} />
            </button>

            {/* Jump on a Call button */}
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_#f9d342] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Jump on a Call
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition duration-300 bg-white/30 blur-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce-slow">
        <ChevronRight className="w-7 h-7 rotate-90" />
      </div>
    </header>
  );
};

export default Hero;