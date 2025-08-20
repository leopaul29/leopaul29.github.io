import {
    BarChart, Bot, Box as Cube, Brain,
    Code, Gamepad2,
    Globe,
    Heart,
    Laptop,
    Plane,
    Star,
    TerminalSquare,
    Trophy
} from "lucide-react";
import React from "react";
import RobotBattleImg from "/images/robotbattle.png"
import JardiBotImg from "/images/jardibot.jpg"
import BlockchainImg from "/images/blockchain.jpg";

export const experiences = [
    { icon: <Plane className="w-6 h-6" />, title: "Japan Explorer", titleJp: "日本探求者", description: "Traveled extensively across Japan, from bustling Tokyo to serene Kyoto temples.", descriptionJp: "賑やかな東京から静寂な古都・京都まで、日本各地を幅広く巡りました。" },
    { icon: <Heart className="w-6 h-6" />, title: "Cultural Enthusiast", titleJp: "文化愛好家", description: "Deep appreciation for Japanese culture, traditions, and way of life.", descriptionJp: "日本の文化、伝統、そして生活様式を深く尊重しています。" },
    { icon: <Code className="w-6 h-6" />, title: "Tech Passionate", titleJp: "技術愛好家", description: "Fascinated by Japan's innovation in technology and software development.", descriptionJp: "日本の技術革新やソフトウェア開発に強い関心を持っています。" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Mindset", titleJp: "グローバルな視点", description: "Bringing international perspective to Japanese tech industry.", descriptionJp: "日本のIT業界に国際的な視点と経験をもたらします。" }
];

export const platforms = [
    { name: 'TryHackMe', icon: <TerminalSquare className="w-6 h-6 text-red-500" />, description: 'Cybersecurity training', url: 'https://tryhackme.com/p/K33f1mof0B' },
    { name: 'Frontend Mentor', icon: <Laptop className="w-6 h-6 text-blue-500" />, description: 'Real-world UI challenges', url: 'https://www.frontendmentor.io/profile/leopaul29'},
    // { name: 'Codewars', icon: <Trophy className="w-6 h-6 text-yellow-500" />, description: 'Coding katas' },
    { name: 'Pluralsight', icon: <Trophy className="w-6 h-6 text-yellow-500" />, description: 'Knowledge skills', url: 'https://app.pluralsight.com/profile/lpmartin' },
    { name: 'LeetCode', icon: <Star className="w-6 h-6 text-orange-500" />, description: 'Algorithm practice', url: 'https://leetcode.com/u/user9456pv/' },
    // { name: 'HackerRank', icon: <Puzzle className="w-6 h-6 text-green-500" />, description: 'Problem solving' },
    { name: 'Kaggle', icon: <BarChart className="w-6 h-6 text-sky-500" />, description: 'Data Science competitions', url: 'https://www.kaggle.com/leopaul29' },
    // { name: 'Secure Code Warrior', icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />, description: 'Secure coding skills' },
    { name: 'Global Game Jam', icon: <Bot className="w-6 h-6 text-yellow-400" />, description: 'Gaming contest', url: 'https://v3.globalgamejam.org/users/yrladd' },
    // global game jam profile
];

export const emergingTechProjects = [
    {
        title: "RobotBattle",
        titleJp: "ロボットバトル",
        icon: <Gamepad2 className="w-10 h-10 text-yellow-400" />,
        description: "Created during the 2020 Global Game Jam in Okinawa, RobotBattle is a 2D strategy game where players control robots that can attack and repair themselves, balancing offense and defense under a limited energy system.",
        descriptionJp: "2020年の沖縄グローバルゲームジャムで制作。攻撃と修理を駆使し、限られたエネルギーで攻守のバランスを取る2D戦略ゲームです。",
        projectTitle: "RobotBattle",
        tech: ["Unity", "C#"],
        imageAlt: "2D strategy game featuring robot battles with attack and repair mechanics",
        imageUrl: RobotBattleImg,
        githubUrl:"https://github.com/leopaul29/RobotBattle",
        detailUrl:"https://v3.globalgamejam.org/2020/games/robotbattle-1"
    },
    {
        title: "Blockchain Development",
        titleJp: "ブロックチェーン開発",
        icon: <Cube className="w-10 h-10 text-purple-500" />,
        description: "After a 3-month course, I built a Blockchain-based platform to support eco-projects through transparent funding, secure smart contracts, and community-driven sustainable development.",
        descriptionJp: "3ヶ月間のコース受講後、ブロックチェーン技術を活用し、透明性の高い資金調達と安全なスマートコントラクトによって、持続可能な環境プロジェクトを支援するプラットフォームを開発しました。",
        projectTitle: "Alyra Coup de Pousse",
        tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
        imageAlt: "Blockchain eco-project funding platform",
        githubUrl: "https://github.com/leopaul29/Alyra-Coup-de-pousse",
        imageUrl: BlockchainImg,
        detailUrl: "https://www.loom.com/share/c29c2e0411a740faa0dca0351573aefc?sid=972d58c4-4925-4b24-91b5-ee8e56cfb614"
    },
    {
        title: "AI Development",
        titleJp: "AI開発",
        icon: <Brain className="w-10 h-10 text-green-500"/>,
        description: "After a 3-month course, I created an AI-powered gardening assistant using machine and deep learning to recognize plants, predict needs, and optimize care automatically.",
        descriptionJp: "3ヶ月間のコース受講後、機械学習と深層学習を用いて、植物の識別・必要予測・最適なケアの自動化を可能にするAI園芸アシスタントを開発しました。",
        projectTitle: "Alyra Jardibot",
        tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
        imageAlt: "AI assistant for smart gardening",
        githubUrl: "https://github.com/leopaul29/Alyra-Jardibot",
        imageUrl: JardiBotImg
    }
];