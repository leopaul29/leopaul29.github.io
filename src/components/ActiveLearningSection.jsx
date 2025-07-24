import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, TerminalSquare, Trophy, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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

  const handlePlatformClick = (platformName, link) => {
    toast({
      title: `Navigating to ${platformName}...`,
      description: "🚧 This link is a placeholder. You can request to add your actual profile links next! 🚀",
      duration: 4000
    });
    // In a real scenario, you would use: window.open(link, '_blank');
  };

  return (
    <section id="learning" className="py-20 px-4">
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
            I am always curious and eager to learn new technologies. Here are some platforms where I sharpen my skills.
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            常に好奇心旺盛で、新しい技術を学ぶことに意欲的です。ここでスキルを磨いています。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center cursor-pointer"
              onClick={() => handlePlatformClick(platform.name, platform.link)}
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
      </div>
    </section>
  );
};

export default ActiveLearningSection;