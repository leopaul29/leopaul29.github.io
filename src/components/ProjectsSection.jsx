import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {projects} from "@/content/projects.jsx";
import {myGithub} from "@/content/contactLinks.jsx";

const ProjectsSection = () => {
  const { toast } = useToast();

  // const handleProjectClick = (projectTitle) => {
  //   toast({
  //     title: "🚧 GitHub Integration Coming Soon!",
  //     description: "This will connect to your actual GitHub repositories. Request this feature in your next prompt! 🚀",
  //     duration: 4000,
  //   });
  // };

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
              <Card
                  className="h-full card-hover group"
                  // cursor-pointer"
                  // onClick={() => handleProjectClick(project.title)}
              >
                {/* Image agrandie */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                      alt={project.image}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      src={project.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay avec lien GitHub */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/90 p-2 rounded-full"
                        onClick={(e) => e.stopPropagation()} // évite de déclencher le clic global
                    >
                      <Github size={16} className="text-gray-700" />
                    </motion.a>
                  </div>
                </div>

                {/* Titre + Description */}
                <CardHeader>
                  <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium">{project.titleJp}</p>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500">{project.descriptionJp}</p>
                </CardHeader>

                {/* Technologies */}
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
          {tech}
        </span>
                    ))}
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
            onClick={() => window.open(myGithub, '_blank')}
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