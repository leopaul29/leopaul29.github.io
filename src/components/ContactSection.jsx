import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {contactLinks} from "@/content/contactLinks.jsx";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch / <span className="gradient-text">お問い合わせ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities in Japan or collaborate on exciting projects? 
            I'd love to hear from you!
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            日本での機会について話し合ったり、エキサイティングなプロジェクトで協力したりする準備はできていますか？
            ぜひお聞かせください！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-t-4 border-blue-600">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-800">
                Let's Connect / 繋がりましょう
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're looking for a dedicated developer or want to discuss the Japanese tech scene, I'm always open to meaningful conversations. Feel free to reach out through any of these platforms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 rounded-lg card-hover border"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{link.label}</p>
                      <p className="text-sm text-gray-600 truncate">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
