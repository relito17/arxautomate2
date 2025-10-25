import {
  ArrowRight,

} from 'lucide-react';

import { useThemeStore } from '../../store/useThemeStore';

import Botchat from '../../Botchat';

import '../../index.css';


const DeployInSeconds = () => {
    const isDark = useThemeStore((state) => state.isDark);


    const scrollToContact = () => {
    const contactSection = document.getElementById('action');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-black/50' : 'bg-white'} relative overflow-hidden`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white'}`} />
        
        <div className="container mx-auto px-4 overflow-x-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Deploy 
                <span className="gradient-text"> AI Agents </span>
                in Seconds
              </h2>
              
              <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                Transform your customer support with AI agents that understand, learn, and evolve. 
                Handle interactions seamlessly, 24/7.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                onClick={scrollToContact}>
                  🚀 Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-800'}`} onClick={scrollToContact}>
                📅 Schedule a free demo
              </p>
            </div>

         <div className={`rounded-lg bg-black p-4 ${isDark ? 'shadow-lg' : 'shadow-lg'} flex justify-center`}>
              <Botchat /> 
            </div>
          </div>
        </div>
      </section>
  );
};

export default DeployInSeconds;
