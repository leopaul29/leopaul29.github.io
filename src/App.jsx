import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import logo from "/logo.svg";

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Web Developer Portfolio - Seeking Opportunities in Japan | 日本で働きたい開発者</title>
        <meta 
          name="description" 
          content="Passionate full-stack web developer seeking opportunities in Japan. Experienced with React, Angular, Spring Boot, and modern web technologies. 日本で働くことを夢見ているフルスタック開発者のポートフォリオ。" 
        />
        <meta name="keywords" content="web developer, Japan, React, Angular, Spring Boot, portfolio, 開発者, 日本, ポートフォリオ" />
        <meta property="og:title" content="Web Developer Portfolio - Seeking Opportunities in Japan" />
        <meta property="og:description" content="Passionate full-stack developer with expertise in React, Angular, and Spring Boot, seeking opportunities in Japan's tech industry." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              {/*<h3 className="font-bold text-xl gradient-text mb-4">Portfolio</h3>*/}
              <img
                  alt="logo"
                  className=" h-40  object-cover shadow-2xl "
                  src={logo}
              />
              <p className="text-gray-400 text-sm">Passionate web developer seeking opportunities in Japan. Let's build something amazing together.</p>
              <p className="text-gray-500 text-xs mt-2">日本での機会を探している情熱的なウェブ開発者。</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Connect</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={22} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={22} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><BookOpen size={22} /></a>
                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={22} /></a>
                </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
             <p>© {new Date().getFullYear()} Web Developer Portfolio. Built with passion for Japan.</p>
             <p className="mt-1">日本への情熱を込めて作られました。</p>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;