import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  Heart,
  Code,
  Globe,
  PenTool,
  Brain,
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
    { title: "RobotBattle",
      titleJp: "ロボットバトル",
      icon: <Gamepad2 className="w-10 h-10 text-yellow-400" />,
      description: "Created during the 2020 Global Game Jam in Okinawa, RobotBattle is a 2D strategy game where players control robots that can attack and repair themselves, balancing offense and defense under a limited energy system.",
      descriptionJp: "2020年の沖縄グローバルゲームジャムで制作したロボットバトルは、攻撃と修理を駆使し、限られたエネルギーで戦う2D戦略ゲームです。",
      projectTitle: "RobotBattle",
      tech: ["Unity", "C#"],
      imageAlt: "2D strategy game featuring robot battles with attack and repair mechanics",
      imageUrl: "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2020/02/258421/shot.png?itok=9QoMBiAc&timestamp=1580627358",
      githubUrl:"https://github.com/leopaul29/RobotBattle",
      detailUrl:"https://v3.globalgamejam.org/2020/games/robotbattle-1"
    },
    {
      title: "Blockchain Development",
      titleJp: "ブロックチェーン開発",
      icon: <Cube className="w-10 h-10 text-purple-500" />,
      description: "After a 3-month course, I built a Blockchain-based platform to support eco-projects through transparent funding, secure smart contracts, and community-driven sustainable development.",
      descriptionJp: "3ヶ月のコースを経て、ブロックチェーン技術を活用し、透明な資金調達と安全なスマートコントラクトで持続可能な環境プロジェクトを支援するプラットフォーム。",
      projectTitle: "Alyra Coup de Pousse",
      tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
      imageAlt: "Blockchain eco-project funding platform",
      githubUrl: "https://github.com/leopaul29/Alyra-Coup-de-pousse",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      detailUrl: "https://www.loom.com/share/c29c2e0411a740faa0dca0351573aefc?sid=972d58c4-4925-4b24-91b5-ee8e56cfb614"
    },
    {
      title: "AI Development",
      titleJp: "AI開発",
      icon: <Brain className="w-10 h-10 text-green-500"/>,
      description: "After a 3-month course, I created an AI-powered gardening assistant using machine and deep learning to recognize plants, predict needs, and optimize care automatically.",
      descriptionJp: "3ヶ月のコースを経て、機械学習と深層学習を活用し、植物識別・必要予測・ケア最適化を自動で行うAI園芸アシスタントを開発。",
      projectTitle: "Alyra Jardibot",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
      imageAlt: "AI assistant for smart gardening",
      githubUrl: "https://github.com/leopaul29/Alyra-Jardibot",
      imageUrl: "https://images.unsplash.com/photo-1640367169401-534dec442631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  My Journey to Japan / 日本への道のり
                </h3>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p>
                    My journey with Japan began in 2016 in Kōka, Shiga Prefecture — a quiet village known as the home of the ninja.
                  </p>
                  <p>
                    I returned in 2019 for a one-year Working Holiday, where I deepened my connection to the culture through three months of Japanese studies, discovered my passion for calligraphy, and worked on a farm near Okayama. Along the way, I met inspiring people who shaped my vision of life and work in Japan.
                  </p>
                  <p>
                    Today, I aim to blend my technical skills with my cultural experience to build meaningful projects and a lasting career in Japan.
                  </p>
                  <p className="text-gray-500 text-sm">
                    日本との出会いは2016年、忍者の里として知られる滋賀県甲賀市から始まりました。
                  </p>
                  <p className="text-gray-500 text-sm">
                    2019年には1年間のワーキングホリデーで再び来日。新型コロナウイルスの影響を受けながらも、日本文化への探求は止まりませんでした。3か月間の日本語学習で書道に魅了され、岡山近郊の農場で1か月働くなど、多様な経験を積みました。
                  </p>
                  <p className="text-gray-500 text-sm">
                    現在は、技術力と文化的経験を融合させ、日本で価値あるプロジェクトと長期的なキャリアを築くことを目指しています。
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 italic text-gray-700">
                  “From ninja villages to calligraphy studios — building tech with a cultural soul.”
                  <span className="text-gray-500 text-sm">忍者の里から書道の工房まで——文化の心を持つ技術を創造する。</span>
                </div>

              </div>
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <img className="w-64 m-auto"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2F32%2F3b%2Fee%2F323bee20461c3e40a733d3d1f4031ca1--pine-tree-fireworks.jpg&f=1&nofb=1&ipt=26c2c581a4a617b396b06d659ee41d1320d78a1a68db9db2908d0b9656441a3a"/>
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
                <img  alt={project.image} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={project.imageUrl} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3 p-2 bg-white/90 rounded-full shadow-md">{project.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                <p className="text-sm text-blue-600 font-medium">{project.titleJp}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <p className="text-gray-500 text-sm">{project.descriptionJp}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (<span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{tech}</span>))}
                  </div>
                  <div className="flex space-x-2">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition"
                        onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                    {project.detailUrl && (
                      <a
                      href={project.detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Details
                  </a>
                      )}
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