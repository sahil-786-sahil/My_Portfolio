import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sahil-786-sahil', label: 'GitHub' },
    { icon: <Code2 size={20} />, href: 'https://leetcode.com/u/officialsahil____/', label: 'LeetCode' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sahil-khan-946667326/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sahilkhan9170786@gmail.com', label: 'Email' }
  ];

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Sahil Khan
            </h3>
            <p className="text-gray-400 mb-4">
              Java Full Stack Developer passionate about building scalable applications with Spring Boot and React.js.
            </p>
            <p className="text-gray-500 text-sm">
              📍 Vrindavan, Mathura, India
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>📧 sahilkhan9170786@gmail.com</p>
              <p>📱 +91 9412666932</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sahil Khan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> using Spring Boot & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;