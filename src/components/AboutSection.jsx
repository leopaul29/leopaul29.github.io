import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Plane, Heart, Code, Globe, PenTool, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, Autoplay } from '@/components/ui/carousel';

const AboutSection = () => {
  const experiences = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Japan Explorer",
      titleJp: "日本探検家",
      description: "Traveled extensively across Japan, from bustling Tokyo to serene Kyoto temples.",
      descriptionJp: "東京の賑やかな街から京都の静寂な寺院まで、日本全国を広く旅行しました。"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Enthusiast",
      titleJp: "文化愛好家", 
      description: "Deep appreciation for Japanese culture, traditions, and way of life.",
      descriptionJp: "日本の文化、伝統、生き方に深い敬意を持っています。"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Passionate",
      titleJp: "技術愛好家",
      description: "Fascinated by Japan's innovation in technology and software development.",
      descriptionJp: "日本の技術革新とソフトウェア開発に魅力を感じています。"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Mindset",
      titleJp: "グローバル思考",
      description: "Bringing international perspective to Japanese tech industry.",
      descriptionJp: "日本の技術業界に国際的な視点をもたらします。"
    }
  ];

  const calligraphyImages = [
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/b297a3861414703e825ca230ecf2d9ad.jpg', alt: 'Calligraphy of Ai (Love)', meaning: '愛 (Ai) - Love' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/61a6683f26170c7bffeae0b98c517e81.jpg', alt: 'Calligraphy of Hanabi (Fireworks)', meaning: '花火 (Hanabi) - Fireworks' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/f284c23ac7d5cd8b489557e1898ef4cc.jpg', alt: 'Calligraphy of Chousen (Challenge)', meaning: '挑戦 (Chōsen) - Challenge' },
    { src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/cc411264-6655-4092-998d-dd32bbbb3ac6/e90425219ea64022fbc264f80c4e01d8.jpg', alt: 'Calligraphy of Yume (Dream)', meaning: '夢 (Yume) - Dream' }
  ];

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me / <span className="gradient-text">私について</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate developer with a deep love for Japan, seeking to contribute 
            to the innovative tech landscape while embracing the Japanese work culture and values.
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            日本への深い愛情を持つ情熱的な開発者として、革新的な技術環境に貢献し、
            日本の仕事文化と価値観を受け入れたいと考えています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="text-blue-600 mb-4">
                {exp.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-3">
                {exp.titleJp}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                {exp.description}
              </p>
              <p className="text-gray-500 text-xs">
                {exp.descriptionJp}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Journey to Japan / 日本への道のり
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  My fascination with Japan began during my first visit to Tokyo in 2019. 
                  The perfect blend of traditional culture and cutting-edge technology 
                  captured my imagination and sparked a desire to be part of this incredible ecosystem.
                </p>
                <p className="text-gray-500 text-sm">
                  2019年の初回東京訪問で日本への魅力が始まりました。伝統文化と最先端技術の
                  完璧な融合が私の想像力を掻き立て、この素晴らしいエコシステムの一部になりたいという
                  願望を呼び起こしました。
                </p>
                 <p>
                  I'm also an active member of the{' '}
                  <a href="https://community.welearn.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    WeLearn community
                  </a>
                  , connecting with fellow learners and sharing my passion for Japanese language and culture.
                </p>
                <p className="text-gray-500 text-sm">
                  また、<a href="https://community.welearn.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">WeLearnコミュニティ</a>の積極的なメンバーとして、仲間と繋がり、日本語と文化への情熱を共有しています。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img  
                  alt="Beautiful Japanese landscape with cherry blossoms"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                 src="https://images.unsplash.com/photo-1560951112-9be2f5e8a81d" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            My Hobbies / <span className="gradient-text">趣味</span>
          </h3>
          <p className="text-center text-gray-600 mb-8">Japanese Calligraphy (書道)</p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-600">
              <p>
                Beyond coding, I find joy and discipline in Japanese calligraphy (Shodō). 
                The art of balancing simplicity and complexity with each brush stroke mirrors the elegance I strive for in software development.
              </p>
              <p className="text-gray-500 text-sm">
                コーディング以外に、書道で喜びと規律を見出しています。一筆一筆の単純さと複雑さのバランスを取る芸術は、私がソフトウェア開発で目指す優雅さを反映しています。
              </p>
            </div>
            <div className="w-full max-w-md mx-auto">
              <Carousel
                plugins={[autoplay.current]}
                className="w-full"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {calligraphyImages.map((image, index) => (
                    <CarouselItem key={index} className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-contain rounded-lg"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.meaning}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;