import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, BrainCircuit, BookOpen, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {emergingTechProjects, experiences, platforms} from "@/content/about.jsx";
import shodaKohoUkiyo from "/images/shoda-koho-pine-tree-fireworks.jpg";
import calligraphyImage from "/images/calligraphie-leo.jpg";
import {handleClickProjectsGithub} from "@/content/contactLinks.jsx";

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me / <span className="gradient-text">私について</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">A passionate developer with a deep love for Japan, seeking to contribute to the innovative tech landscape while embracing the Japanese work culture and values.</p>
            <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">日本の文化と価値観を尊重し、革新的なIT環境への貢献を目指す、情熱的な開発者です。</p>
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
                    2019年にはワーキングホリデーで再来日しました。そこで3か月間日本語を学び、書道に魅了されたほか、岡山近郊の農場で働くなど、多岐にわたる経験を積みました。                  </p>
                  <p className="text-gray-500 text-sm">
                    現在は、これまでの技術力と文化的経験を融合させ、日本で意義あるプロジェクトに取り組み、長期的なキャリアを築くことを目指しています。                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 italic text-gray-700">
                  “From ninja villages to calligraphy studios — building tech with a cultural soul.”
                  <span className="text-gray-500 text-sm">忍者の里から書道の工房まで――文化の精神を持つ技術を創造する。</span>
                </div>

              </div>
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <img alt="Shoda Koho Ukiyo - pine tree fireworks" className="w-64 m-auto"
                      src={shodaKohoUkiyo} />
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
            <p className="text-gray-500 text-sm">コーディングの傍ら、書道に喜びと規律を見出しています。筆遣いにおけるシンプルさと複雑さのバランスを取る芸術性は、私がソフトウェア開発で追求する美しさそのものです。</p>
          </div>
          <div className="w-full max-w-md mx-auto px-10">
            <img src={calligraphyImage} alt="calligraphy Leo" className="w-full h-64 object-contain rounded-lg bg-gray-100" />
          </div>
        </div>
        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Community Involvement</h3>
          <p className="text-gray-600">I'm an active member of the 🦊 <a href="https://community.welearn.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">WeLearn community</a>, connecting with fellow learners and sharing my passion for Japanese language and culture.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'learning'} onClose={() => setActiveModal(null)} title="Active Learning Platforms / 積極的な学習">
        <p className="text-gray-600 mb-8 text-center">I am always curious and eager to learn new technologies. Here are some platforms where I sharpen my skills.</p>
        <p className="text-gray-500 text-sm mb-8 text-center">私は常に好奇心と探究心を持って、新しい技術を学ぶことに意欲的です。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <motion.div 
              key={platform.name} 
              whileHover={{ y: -3, scale: 1.03 }} 
              className="bg-gray-50 p-4 rounded-lg border text-center cursor-pointer flex flex-col items-center justify-center h-32" 
              onClick={() => window.open(platform.url, '_blank')}
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
            <Card key={project.projectTitle} className="card-hover group flex flex-col">
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
                        onClick={(e) => {
                          handleClickProjectsGithub();
                          e.stopPropagation()
                        }}
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