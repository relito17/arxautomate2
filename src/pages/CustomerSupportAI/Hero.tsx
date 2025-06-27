
import { useEffect, useState, useMemo } from 'react';

import { motion } from "framer-motion";
import {

  Zap,

  ArrowRight,
  XCircle,

  MessageCircle,
  Users,
  Shield,
  CheckCircle,
} from 'lucide-react';

import { useThemeStore } from '../../store/useThemeStore';


import ContactForm from '../../components/ContactForm';

//import Botchat from '../Botchat';


import '../../index.css';
import { useNavigate } from 'react-router-dom'; 

const HeroSection = () => {
    
    const isDark = useThemeStore((state) => state.isDark);
    const navigate = useNavigate();

    const [titleNumber, setTitleNumber] = useState(0);
    const [showContactForm, setShowContactForm] = useState(false);

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


    


  return (
    <section className={`pt-20 pb-32 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF6A00]/10 to-[#f9d342]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Hero Content */}
            <div className="text-center mb-16 reveal">
              {/* Problem Statement Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isDark ? 'border-red-500/30 bg-red-500/10 text-red-400' : 'border-red-500/30 bg-red-50 text-red-600'
                } mb-8`}
              >
                <XCircle className="w-4 h-4" />
                <span className="text-sm font-medium">73% of customers abandon purchases due to poor support</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Turn Support Into Your
                <br />
                <span className="relative inline-block">
                  <span className="relative flex justify-center overflow-hidden">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="absolute font-bold bg-gradient-to-r from-[#FF6A00] to-[#f9d342] bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        animate={
                          titleNumber === index
                            ? { y: 0, opacity: 1 }
                            : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                        }
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </span>
                  <span className='gradient-text'>{words[0]}&nbsp;</span>
                </span>
                Machine
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-xl md:text-2xl mb-8 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                AI-powered customer support that responds instantly, converts more leads,
                <br />and scales without hiring more staff
              </motion.p>

              {/* Value Props */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    24/7 Instant Response
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    90% Cost Reduction
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    3x Higher Conversion
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={() => navigate('/schedule-call')}
                  className="group bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Get Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setShowContactForm(true)}
                  className={`border-2 border-[#FF6A00] ${isDark ? 'text-white hover:bg-[#FF6A00]/10' : 'text-black hover:bg-[#FF6A00]/5'} px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2`}
                >
                  <MessageCircle className="w-5 h-5" />
                  See It In Action
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>5-Min Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>+Clients Retention</span>
                </div>
              </motion.div>
            </div>

            {/* Problem/Solution Visual */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Before - Problems */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className={`p-8 rounded-2xl ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-red-500">Current Reality</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Hours-long response times losing customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Overwhelmed support team burning out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>High support costs eating into profits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Inconsistent support quality</span>
                  </li>
                </ul>
              </motion.div>

              {/* After - Solutions */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className={`p-8 rounded-2xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-500">With Our AI</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Instant responses 24/7, never miss a lead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Team focuses on high-value tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>90% reduction in support costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Perfect consistency every time</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Stats Bar */}
{/* Stats Bar */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.6 }}
  className={`mt-20 px-8 py-12 rounded-3xl relative ${
    isDark
      ? 'bg-gray-900 border border-gray-800 shadow-[0_0_20px_4px_rgba(255,106,0,0.2)]'
      : 'bg-white border border-gray-200 shadow-[0_0_20px_4px_rgba(255,174,0,0.1)]'
  }`}
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
    {[
      { value: '98%', label: 'Customer Satisfaction' },
      { value: '<2s', label: 'Average Response' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Always Available' },
    ].map((stat, index) => (
      <div
        key={index}
        className="relative group p-4 transition-transform duration-300 hover:scale-105"
      >
        <div
          className={`text-4xl md:text-5xl font-extrabold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {stat.value}
        </div>
        <div className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
</motion.div>


          </div>
        </div>

        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}
      </section>
  );
};

export default HeroSection;