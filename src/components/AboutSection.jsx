import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  Heart,
  Code,
  Globe,
  PenTool,
  BrainCircuit,
  BookOpen,
  Box as Cube,
  Github,
  ExternalLink,
  Laptop,
  TerminalSquare,
  Trophy,
  Star,
  Target,
  Puzzle,
  BarChart,
  ShieldCheck,
  Bot,
  Gamepad2
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const { toast } = useToast();

  const experiences = [
    { icon: <Plane className="w-6 h-6" />, title: "Japan Explorer", titleJp: "日本探検家", description: "Traveled extensively across Japan, from bustling Tokyo to serene Kyoto temples.", descriptionJp: "東京の賑やかな街から京都の静寂な寺院まで、日本全国を広く旅行しました。" },
    { icon: <Heart className="w-6 h-6" />, title: "Cultural Enthusiast", titleJp: "文化愛好家", description: "Deep appreciation for Japanese culture, traditions, and way of life.", descriptionJp: "日本の文化、伝統、生き方に深い敬意を持っています。" },
    { icon: <Code className="w-6 h-6" />, title: "Tech Passionate", titleJp: "技術愛好家", description: "Fascinated by Japan's innovation in technology and software development.", descriptionJp: "日本の技術革新とソフトウェア開発に魅力を感じています。" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Mindset", titleJp: "グローバル思考", description: "Bringing international perspective to Japanese tech industry.", descriptionJp: "日本の技術業界に国際的な視点をもたらします。" }
  ];

  const calligraphyImages = [
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/b297a3861414703e825ca230ecf2d9ad.jpg', alt: 'Calligraphy of Ai (Love)', meaning: '愛 (Ai) - Love' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/61a6683f26170c7bffeae0b98c517e81.jpg', alt: 'Calligraphy of Hanabi (Fireworks)', meaning: '花火 (Hanabi) - Fireworks' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/f284c23ac7d5cd8b489557e1898ef4cc.jpg', alt: 'Calligraphy of Chousen (Challenge)', meaning: '挑戦 (Chōsen) - Challenge' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/e90425219ea64022fbc264f80c4e01d8.jpg', alt: 'Calligraphy of Yume (Dream)', meaning: '夢 (Yume) - Dream' }
  ];

  const platforms = [
    { name: 'TryHackMe', icon: <TerminalSquare className="w-6 h-6 text-red-500" />, description: 'Cybersecurity training' },
    { name: 'Frontend Mentor', icon: <Laptop className="w-6 h-6 text-blue-500" />, description: 'Real-world UI challenges' },
    { name: 'Codewars', icon: <Trophy className="w-6 h-6 text-yellow-500" />, description: 'Coding katas' },
    { name: 'LeetCode', icon: <Star className="w-6 h-6 text-orange-500" />, description: 'Algorithm practice' },
    { name: 'HackerRank', icon: <Puzzle className="w-6 h-6 text-green-500" />, description: 'Problem solving' },
    { name: 'Kaggle', icon: <BarChart className="w-6 h-6 text-sky-500" />, description: 'Data Science competitions' },
    { name: 'Secure Code Warrior', icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />, description: 'Secure coding skills' },
    { name: 'Hugging Face', icon: <Bot className="w-6 h-6 text-yellow-400" />, description: 'AI & ML models' },
      // global game jam profile
  ];

  const emergingTechProjects = [
    { title: "RobotBattle", titleJp: "ロボットバトル", icon: <Gamepad2 className="w-10 h-10 text-yellow-400" />, description: "Created during the 2020 Global Game Jam in Okinawa, RobotBattle is a 2D strategy game where players control robots that can attack and repair themselves, balancing offense and defense under a limited energy system.", descriptionJp: "2020年の沖縄グローバルゲームジャムで制作したロボットバトルは、攻撃と修理を駆使し、限られたエネルギーで戦う2D戦略ゲームです。", projectTitle: "RobotBattle", tech: ["Unity", "C#"], image: "2D strategy game featuring robot battles with attack and repair mechanics", codeUrl:"https://github.com/leopaul29/RobotBattle", detailUrl:"https://v3.globalgamejam.org/2020/games/robotbattle-1" },
    { title: "Blockchain Development", titleJp: "ブロックチェーン開発", icon: <Cube className="w-10 h-10 text-purple-500" />, description: "After a 3-month course, I built a decentralized NFT marketplace on the Ethereum testnet, allowing users to mint and trade unique digital assets.", descriptionJp: "3ヶ月のコースを経て、イーサリアムのテストネット上で分散型NFTマーケットプレイスを構築しました。", projectTitle: "NFT Marketplace", tech: ["Solidity", "Hardhat", "React", "Ethers.js"], image: "Digital art marketplace for NFTs with various creators" },
    { title: "AI Development", titleJp: "AI開発", icon: <BrainCircuit className="w-10 h-10 text-teal-500" />, description: "Following a 3-month AI course, I developed an image recognition model that can classify Japanese landmarks with high accuracy.", descriptionJp: "3ヶ月のAIコースに続き、日本のランドマークを高精度で分類できる画像認識モデルを開発しました。", projectTitle: "Landmark Recognition", tech: ["Python", "TensorFlow", "Keras", "Flask"], image: "Artificial intelligence recognizing landmarks on a map of Japan" }
  ];

  const handlePlatformClick = (platformName) => {
    toast({ title: `Navigating to ${platformName}...`, description: "🚧 This link is a placeholder. You can request to add your actual profile links next! 🚀", duration: 4000 });
  };
  
  const handleProjectClick = (projectTitle) => {
    toast({ title: "🚧 GitHub Integration Coming Soon!", description: `This will link to the ${projectTitle} repository. Request this feature in your next prompt! 🚀`, duration: 4000 });
  };

  return (
    <>
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me / <span className="gradient-text">私について</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">A passionate developer with a deep love for Japan, seeking to contribute to the innovative tech landscape while embracing the Japanese work culture and values.</p>
            <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">日本への深い愛情を持つ情熱的な開発者として、革新的な技術環境に貢献し、日本の仕事文化と価値観を受け入れたいと考えています。</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-blue-600 mb-4">{exp.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{exp.titleJp}</p>
                <p className="text-gray-600 text-sm mb-2">{exp.description}</p>
                <p className="text-gray-500 text-xs">{exp.descriptionJp}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey to Japan / 日本への道のり</h3>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p>My fascination with Japan began during my first visit to Tokyo in 2019. The perfect blend of traditional culture and cutting-edge technology captured my imagination and sparked a desire to be part of this incredible ecosystem.</p>
                  <p className="text-gray-500 text-sm">2019年の初回東京訪問で日本への魅力が始まりました。伝統文化と最先端技術の完璧な融合が私の想像力を掻き立て、この素晴らしいエコシステムの一部になりたいという願望を呼び起こしました。</p>
                </div>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">My Professional Goal in Japan</h4>
                      <p className="text-gray-600 text-sm">My primary objective is to secure a full-stack developer position where I can contribute to challenging projects, grow with a team, and immerse myself in Japan's unique work environment to build a long-term career.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <img alt="Beautiful Japanese landscape with cherry blossoms" className="w-full h-64 object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1560951112-9be2f5e8a81d" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                </motion.div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Discover More / もっと詳しく</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => setActiveModal('hobbies')} className="btn-secondary"><PenTool className="mr-2 h-4 w-4" /> Hobbies & Community</Button>
                <Button onClick={() => setActiveModal('learning')} className="btn-secondary"><BookOpen className="mr-2 h-4 w-4" /> Learning Platforms</Button>
                <Button onClick={() => setActiveModal('frontiers')} className="btn-secondary"><BrainCircuit className="mr-2 h-4 w-4" /> Tech Explorations</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={activeModal === 'hobbies'} onClose={() => setActiveModal(null)} title="Hobbies & Community / 趣味とコミュニティ">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Japanese Calligraphy (書道)</h3>
            <p className="text-gray-600 mb-4">Beyond coding, I find joy and discipline in Japanese calligraphy (Shodō). The art of balancing simplicity and complexity with each brush stroke mirrors the elegance I strive for in software development.</p>
            <p className="text-gray-500 text-sm">コーディング以外に、書道で喜びと規律を見出しています。一筆一筆の単純さと複雑さのバランスを取る芸術は、私がソフトウェア開発で目指す優雅さを反映しています。</p>
          </div>
          <div className="w-full max-w-md mx-auto px-10">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {calligraphyImages.map((image, index) => (
                  <CarouselItem key={index} className="relative">
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-contain rounded-lg bg-gray-100" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">{image.meaning}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Community Involvement</h3>
          <p className="text-gray-600">I'm an active member of the <a href="https://community.welearn.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">WeLearn community</a>, connecting with fellow learners and sharing my passion for Japanese language and culture.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'learning'} onClose={() => setActiveModal(null)} title="Active Learning Platforms / 積極的な学習">
        <p className="text-gray-600 mb-8 text-center">I am always curious and eager to learn new technologies. Here are some platforms where I sharpen my skills.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <motion.div 
              key={platform.name} 
              whileHover={{ y: -3, scale: 1.03 }} 
              className="bg-gray-50 p-4 rounded-lg border text-center cursor-pointer flex flex-col items-center justify-center h-32" 
              onClick={() => handlePlatformClick(platform.name)}
            >
              {platform.icon}
              <h3 className="text-sm font-semibold text-gray-800 mt-2">{platform.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'frontiers'} onClose={() => setActiveModal(null)} title="Exploring New Frontiers / 新たな分野への挑戦">
        <div className="grid md:grid-cols-3 gap-8">
          {emergingTechProjects.map((project) => (
            <Card key={project.projectTitle} className="card-hover group flex flex-col" onClick={() => handleProjectClick(project.projectTitle)}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img  alt={project.image} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3 p-2 bg-white/90 rounded-full shadow-md">{project.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                <p className="text-sm text-blue-600 font-medium">{project.titleJp}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (<span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{tech}</span>))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={(e) => { e.stopPropagation(); handleProjectClick(project.projectTitle); }}><Github className="w-4 h-4 mr-2" /> Code</Button>
                    <Button size="sm" className="flex-1" onClick={(e) => { e.stopPropagation(); handleProjectClick(project.projectTitle); }}><ExternalLink className="w-4 h-4 mr-2" /> Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default AboutSection;