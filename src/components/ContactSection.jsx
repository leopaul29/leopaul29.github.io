import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "🚧 Contact Form Integration Coming Soon!",
      description: "This will send emails directly. Request this feature in your next prompt! 🚀",
      duration: 4000,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>Let's Connect</span>
                </CardTitle>
                <CardDescription>
                  Whether you're looking for a dedicated developer or want to discuss 
                  the Japanese tech scene, I'm always open to meaningful conversations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  専任の開発者をお探しの場合でも、日本の技術シーンについて話し合いたい場合でも、
                  私は常に有意義な会話を歓迎します。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={18} className="text-blue-600" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MessageCircle size={18} className="text-blue-600" />
                    <span>Available for remote collaboration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-xl font-semibold mb-3">
                Why Work Together? / なぜ一緒に働くのか？
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Passionate about Japanese work culture and values</li>
                <li>• Strong technical skills in modern web technologies</li>
                <li>• International perspective with local appreciation</li>
                <li>• Committed to continuous learning and improvement</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Send className="w-6 h-6 text-blue-600" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription>
                  Drop me a line and let's start a conversation about opportunities in Japan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                      <User size={16} />
                      <span>Name / お名前</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                      <Mail size={16} />
                      <span>Email / メールアドレス</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                      <MessageCircle size={16} />
                      <span>Message / メッセージ</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about the opportunity or project you have in mind..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea-field"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-primary group"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;