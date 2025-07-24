
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "E-Commerce Platform",
      titleJp: "Eコマースプラットフォーム",
      description: "Full-stack e-commerce solution built with React and Spring Boot",
      descriptionJp: "ReactとSpring Bootで構築されたフルスタックEコマースソリューション",
      tech: ["React", "Spring Boot", "PostgreSQL", "TailwindCSS"],
      stars: 42,
      forks: 12,
      image: "Modern e-commerce website interface with clean design"
    },
    {
      title: "Task Management App",
      titleJp: "タスク管理アプリ",
      description: "Collaborative task management with real-time updates using Angular",
      descriptionJp: "Angularを使用したリアルタイム更新機能付きの協働タスク管理",
      tech: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      stars: 28,
      forks: 8,
      image: "Clean task management dashboard with kanban boards"
    },
    {
      title: "Weather Dashboard",
      titleJp: "天気ダッシュボード",
      description: "Beautiful weather app with location-based forecasts",
      descriptionJp: "位置ベースの予報機能付きの美しい天気アプリ",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      stars: 35,
      forks: 15,
      image: "Modern weather dashboard with charts and forecasts"
    },
    {
      title: "Portfolio Website",
      titleJp: "ポートフォリオサイト",
      description: "Responsive portfolio built with modern web technologies",
      descriptionJp: "モダンなウェブ技術で構築されたレスポンシブポートフォリオ",
      tech: ["React", "Framer Motion", "TailwindCSS", "Vite"],
      stars: 18,
      forks: 6,
      image: "Sleek portfolio website with smooth animations"
    }
  ];

  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 GitHub Integration Coming Soon!",
      description: "This will connect to your actual GitHub repositories. Request this feature in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects / <span className="gradient-text">主要プロジェクト</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating expertise in modern web technologies 
            and clean, maintainable code practices.
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            モダンなウェブ技術とクリーンで保守可能なコード実践の専門知識を示す最近の作品集です。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group cursor-pointer" onClick={() => handleProjectClick(project.title)}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img  
                    alt={project.image}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 p-2 rounded-full"
                    >
                      <Github size={16} className="text-gray-700" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 p-2 rounded-full"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </motion.div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">{project.titleJp}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500">
                    {project.descriptionJp}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
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
                        handleProjectClick(project.title);
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.title);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="btn-secondary"
            onClick={() => {
              toast({
                title: "🚧 GitHub Integration Coming Soon!",
                description: "This will show all your GitHub repositories. Request this feature in your next prompt! 🚀",
                duration: 4000,
              });
            }}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
