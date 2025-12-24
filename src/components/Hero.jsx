import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2 } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fadeInDown">
          <img 
            src="/profile.jpg" 
            alt="Sahil Khan" 
            className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 shadow-2xl shadow-purple-500/50 hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-fadeInUp">
          Hi, I'm Sahil Khan
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-6 animate-fadeInUp animation-delay-200 font-semibold">
          Java Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-400">
          Passionate about building scalable web applications with Spring Boot & React.js. 
          LeetCode enthusiast with 650+ DSA problems solved.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fadeInUp animation-delay-600">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight size={20} />
          </button>
          <a 
            href="/resume.pdf" 
            download
            className="bg-transparent border-2 border-purple-600 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Resume
          </a>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto animate-fadeInUp animation-delay-800">
          <button
            onClick={() => onNavigate('skills')}
            className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 border border-slate-700 hover:border-purple-500 p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">💻</div>
            <div className="font-semibold text-white">Skills</div>
            <div className="text-sm text-gray-400">My Expertise</div>
          </button>

          <button
            onClick={() => onNavigate('achievements')}
            className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 border border-slate-700 hover:border-yellow-500 p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">🏆</div>
            <div className="font-semibold text-white">Achievements</div>
            <div className="text-sm text-gray-400">Milestones</div>
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 border border-slate-700 hover:border-blue-500 p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">🚀</div>
            <div className="font-semibold text-white">Projects</div>
            <div className="text-sm text-gray-400">My Work</div>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 border border-slate-700 hover:border-green-500 p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">📧</div>
            <div className="font-semibold text-white">Contact</div>
            <div className="text-sm text-gray-400">Let's Talk</div>
          </button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fadeInUp animation-delay-1000">
          <a 
            href="https://github.com/sahil-786-sahil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://leetcode.com/u/officialsahil____/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-yellow-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
          >
            <Code2 size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sahil-khan-946667326/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:sahilkhan9170786@gmail.com"
            className="p-3 bg-slate-800 hover:bg-pink-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;