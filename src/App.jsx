import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import Footer from "@/components/Footer.jsx";

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
        
        <Footer />
        
        <Toaster />
      </div>
    </>
  );
}

export default App;