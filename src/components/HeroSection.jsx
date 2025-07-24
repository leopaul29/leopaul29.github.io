
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 font-medium text-lg"
            >
              Hello, I'm Leo / はじめまして、レオと申します。
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Web Developer
              <span className="block gradient-text">
                日本で働きたい
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Passionate full-stack developer seeking opportunities in Japan. 
              Building modern web applications with React, Angular, and Spring Boot.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-500"
            >
              日本の技術業界で働くことを夢見ているフルスタック開発者です。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-2 text-gray-600"
          >
            <MapPin size={20} className="text-red-500" />
            <span>Tokyo, Japan / 東京、日本</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="btn-primary group"
              onClick={() => window.open('https://www.linkedin.com/in/leo-paul-martin/', '_blank')}
            >
              Connect on LinkedIn
              <Linkedin className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/*<Button*/}
            {/*  variant="outline"*/}
            {/*  className="btn-secondary group"*/}
            {/*  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}*/}
            {/*>*/}
            {/*  Get in Touch*/}
            {/*  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
            {/*</Button>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {['React', 'Angular', 'TailwindCSS', 'Spring Boot', 'Java'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img  
                alt="Developer avatar from GitHub"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto"
               src="https://avatars.githubusercontent.com/u/10078357?v=4" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
