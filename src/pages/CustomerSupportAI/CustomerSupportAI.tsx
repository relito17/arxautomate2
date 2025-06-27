
import { useEffect, useState, useMemo } from 'react';
import React from "react";

import {
  Clock,
  DollarSign,
  Zap,
  Brain,
  Calendar,
  BarChart3,
  ArrowRight,
  XCircle,
  PiggyBank,
  TrendingDown,
  SlidersHorizontal,
} from 'lucide-react';
import { ThemeToggle } from '../../components/ui/ThemeToggle';
import { useThemeStore } from '../../store/useThemeStore';

import CustomCursor from '../../components/CustomCursor';

import BackToTop from "../../components/ui/BackToTopButton"
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
//import Botchat from '../Botchat';
import SetupAnimation from '../../components/animations/SetupAnimation';
import AnalyticsAnimation from '../../components/animations/AnalyticsAnimation';
import AvailabilityAnimation from '../../components/animations/AvailabilityAnimation';
import TimeSavingsAnimation from '../../components/animations/TimeSavingsAnimation';
import { useLocation } from 'react-router-dom';
import '../../index.css';
import { useNavigate } from 'react-router-dom'; 
import Hero from "./Hero";
import DeployInSeconds from './DeployInSeconds';

const CustomerSupportAI = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const navigate = useNavigate();
  const location = useLocation();
  const [titleNumber, setTitleNumber] = useState(0);
  const [ , setShowContactForm] = useState(false);

  const words = useMemo(() => ["Revenue", "Satisfaction", "Efficiency", "Growth", "Trust"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === words.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, words]);



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === words.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, words]);
  

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'} font-inter`}>
      <Hero/>
      <CustomCursor />
      <BackToTop />
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <BackButton />

      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />
      <DeployInSeconds />
      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section className={`py-20 ${isDark ? 'bg-black/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center mb-16 reveal">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            The <span className="gradient-text"><em>HIDDEN&nbsp; </em></span>Costs <br></br>of Bad
            Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Slow Response Times',
                description:
                  "Customers leave when they don't get answers fast enough. Every second you delay, you're losing trust.",
              },
              {
                icon: <XCircle className="w-8 h-8" />,
                title: 'No Sales-Driven Support',
                description:
                  "Support isn't just about solving problems; it's about converting opportunities.",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Sky-High Costs',
                description:
                  'Managing a small team can cost $20,000+ annually—not including the hidden costs of inefficiency and churn.',
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: 'Lost Revenue',
                description:
                  "Every delayed response, every frustrated customer—it's more than just missed sales. It's opportunity costs piling up daily.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-[#FF6A00]/10 rounded-lg w-fit mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 reveal">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Support That Works{' '}
              <span className="gradient-text"><em>SMARTER </em></span>, Not{' '}
              <span className="line-through">HARDER</span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-800'}`}>
              For less than the cost of one team member, you get{' '}
              <strong>24/7 AI-powered support</strong> that's fast, reliable,
              and feels as human as your best agent—but never takes a day off.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Faster',
                description:
                  'Deliver answers in seconds, not hours, to keep customers happy and engaged.',
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Smarter',
                description:
                  'Engage with natural, human-like conversations—no robotic scripts, just personalized support that adapts to your customers.',
              },
              {
                icon: <PiggyBank className="w-8 h-8" />,
                title: 'Cheaper',
                description:
                  'Replace an entire team while saving thousands every year—without compromising quality.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-[#FF6A00]/10 rounded-lg w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section className={`py-20 ${isDark ? 'bg-black/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Maximize <span className="gradient-text"><em>EFFICIENCY&nbsp;</em></span> with{' '}
              <span className="gradient-text"><em>INTELLIGENT&nbsp; </em></span>Automation
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-800'}`}>
              Unlock your full potential with cutting-edge features that work
              for you, 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24 items-start">
            {[
              {
                icon: <SlidersHorizontal className="w-8 h-8" />,
                title: 'Plug-and-Play Setup',
                features: [
                  "Customization to match your brand's unique tone and style.",
                  "Seamless integration with your website in less than 24 hours"
                ],
                animation: <SetupAnimation />
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Performance Analytics',
                features: [
                  'Track engagement, analyze customer interactions, and fine-tune responses.',
                  'Leverage data-driven insights to boost conversions and elevate the customer experience'
                ],
                animation: <AnalyticsAnimation />
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: '24/7 Availability',
                features: [
                  'Always-on support that ensures no customer inquiry slips through the cracks',
                  'Smooth handoff to live agents whenever needed, giving customers the best of both worlds'
                ],
                animation: <AvailabilityAnimation />
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Time Savings',
                features: [
                  'Automates 20+ hours of repetitive support tasks every week',
                  'Free up your team to focus on scaling your business and driving growth'
                ],
                animation: <TimeSavingsAnimation />
              }
            ].map((feature, index) => (
              <React.Fragment key={index}>
                <div className="feature-card p-8 hover:bg-gray-900/30 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-[#FF6A00]/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-4 ml-16">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-gray-800'}`}>
                        <ArrowRight className={`w-5 h-5 mt-1 ${isDark ? 'text-white' : 'text-black'} flex-shrink-0`} />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[400px]">
                  {feature.animation}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />

      <section id="action" className={`py-20 ${isDark ? 'bg-gradient-to-br from-[#FF6A00]/20 to-black' : 'bg-gradient-to-br from-[#FF6A00]/30 to-white'}`}>
        <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Book Your <span className="gradient-text">Demo Today</span>
    </h2>
    <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}>
      Stop overpaying for outdated solutions. Automate smarter, deliver
      faster, and cut costs by half. Schedule your demo now and start
      transforming your business in no time!
    </p>
    <div className="flex gap-6 justify-center">
      <button
        onClick={() => navigate('/schedule-call')}
        className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2">
        Schedule Demo
        <ArrowRight className="w-5 h-5" />
      </button>
      <button
        onClick={() => setShowContactForm(true)}
        className={`border border-[#FF6A00] ${isDark ? 'text-white' : 'text-gray-800'} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6A00]/10 transition-colors`}>
        Get in touch
      </button>
    </div>
  </div>
</section>



<div className={`section-divider ${isDark ? 'section-divider' : 'section-divider-light'} `} />
        <Footer />
      </div>
    
  );
};

export default CustomerSupportAI;