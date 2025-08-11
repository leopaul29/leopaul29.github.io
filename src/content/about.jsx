import {
    BarChart, Bot, Box as Cube, Brain,
    Code, Gamepad2,
    Globe,
    Heart,
    Laptop,
    Plane,
    Puzzle,
    ShieldCheck,
    Star,
    TerminalSquare,
    Trophy
} from "lucide-react";
import React from "react";

export const experiences = [
    { icon: <Plane className="w-6 h-6" />, title: "Japan Explorer", titleJp: "日本探検家", description: "Traveled extensively across Japan, from bustling Tokyo to serene Kyoto temples.", descriptionJp: "東京の賑やかな街から京都の静寂な寺院まで、日本全国を広く旅行しました。" },
    { icon: <Heart className="w-6 h-6" />, title: "Cultural Enthusiast", titleJp: "文化愛好家", description: "Deep appreciation for Japanese culture, traditions, and way of life.", descriptionJp: "日本の文化、伝統、生き方に深い敬意を持っています。" },
    { icon: <Code className="w-6 h-6" />, title: "Tech Passionate", titleJp: "技術愛好家", description: "Fascinated by Japan's innovation in technology and software development.", descriptionJp: "日本の技術革新とソフトウェア開発に魅力を感じています。" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Mindset", titleJp: "グローバル思考", description: "Bringing international perspective to Japanese tech industry.", descriptionJp: "日本の技術業界に国際的な視点をもたらします。" }
];

export const calligraphyImages = [
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/b297a3861414703e825ca230ecf2d9ad.jpg', alt: 'Calligraphy of Ai (Love)', meaning: '愛 (Ai) - Love' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/61a6683f26170c7bffeae0b98c517e81.jpg', alt: 'Calligraphy of Hanabi (Fireworks)', meaning: '花火 (Hanabi) - Fireworks' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/f284c23ac7d5cd8b489557e1898ef4cc.jpg', alt: 'Calligraphy of Chousen (Challenge)', meaning: '挑戦 (Chōsen) - Challenge' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/e90425219ea64022fbc264f80c4e01d8.jpg', alt: 'Calligraphy of Yume (Dream)', meaning: '夢 (Yume) - Dream' }
];

export const platforms = [
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

export const emergingTechProjects = [
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