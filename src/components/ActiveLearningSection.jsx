import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, TerminalSquare, Trophy, Star, Box as Cube, BrainCircuit, Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ActiveLearningSection = () => {
  const { toast } = useToast();

  const platforms = [
    {
      name: 'TryHackMe',
      icon: <TerminalSquare className="w-8 h-8 text-red-500" />,
      score: 'Top 5%',
      description: 'Cybersecurity training',
      descriptionJp: 'サイバーセキュリティ',
      link: 'https://tryhackme.com'
    },
    {
      name: 'Frontend Mentor',
      icon: <Laptop className="w-8 h-8 text-blue-500" />,
      score: '15,000+ XP',
      description: 'Real-world UI challenges',
      descriptionJp: 'UIチャレンジ',
      link: 'https://www.frontendmentor.io'
    },
    {
      name: 'Codewars',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      score: '4 kyu',
      description: 'Coding katas',
      descriptionJp: 'コーディング課題',
      link: 'https://www.codewars.com'
    },
    {
      name: 'LeetCode',
      icon: <Star className="w-8 h-8 text-orange-500" />,
      score: '200+ Solved',
      description: 'Algorithm practice',
      descriptionJp: 'アルゴリズム練習',
      link: 'https://leetcode.com'
    }
  ];

  const emergingTechProjects = [
    {
      title: "Blockchain Development",
      titleJp: "ブロックチェーン開発",
      icon: <Cube className="w-10 h-10 text-purple-500" />,
      description: "After a 3-month course, I built a decentralized NFT marketplace on the Ethereum testnet, allowing users to mint and trade unique digital assets.",
      descriptionJp: "3ヶ月のコースを経て、イーサリアムのテストネット上で分散型NFTマーケットプレイスを構築しました。",
      projectTitle: "NFT Marketplace",
      tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
      image: "Digital art marketplace for NFTs with various creators"
    },
    {
      title: "AI Development",
      titleJp: "AI開発",
      icon: <BrainCircuit className="w-10 h-10 text-teal-500" />,
      description: "Following a 3-month AI course, I developed an image recognition model that can classify Japanese landmarks with high accuracy.",
      descriptionJp: "3ヶ月のAIコースに続き、日本のランドマークを高精度で分類できる画像認識モデルを開発しました。",
      projectTitle: "Landmark Recognition",
      tech: ["Python", "TensorFlow", "Keras", "Flask"],
      image: "Artificial intelligence recognizing landmarks on a map of Japan"
    }
  ];

  const handlePlatformClick = (platformName) => {
    toast({
      title: `Navigating to ${platformName}...`,
      description: "🚧 This link is a placeholder. You can request to add your actual profile links next! 🚀",
      duration: 4000
    });
  };
  
  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 GitHub Integration Coming Soon!",
      description: `This will link to the ${projectTitle} repository. Request this feature in your next prompt! 🚀`,
      duration: 4000,
    });
  };

  return (
    <section id="learning" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Active Learning / <span className="gradient-text">積極的な学習</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am always curious and eager to learn new technologies. Here are some platforms where I sharpen my skills and explore new frontiers.
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            常に好奇心旺盛で、新しい技術を学ぶことに意欲的です。ここでスキルを磨き、新たな分野を探求しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center cursor-pointer"
              onClick={() => handlePlatformClick(platform.name)}
            >
              <div className="flex justify-center mb-4">
                {platform.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{platform.name}</h3>
              <p className="text-2xl font-bold gradient-text mb-2">{platform.score}</p>
              <p className="text-sm text-gray-600">{platform.description}</p>
              <p className="text-xs text-gray-500">{platform.descriptionJp}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800">
            Exploring New Frontiers / <span className="gradient-text">新たな分野への挑戦</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {emergingTechProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group flex flex-col" onClick={() => handleProjectClick(project.projectTitle)}>
                 <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    alt={project.image}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full shadow-md">
                     {project.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                  <p className="text-md text-blue-600 font-medium">{project.titleJp}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <p className="text-gray-500 text-xs mb-6">{project.descriptionJp}</p>
                  
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-700 mb-2">Project: {project.projectTitle}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.projectTitle);
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.projectTitle);
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveLearningSection;