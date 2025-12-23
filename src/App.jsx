import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, User, ExternalLink, Code, Briefcase, Send, Home, Award, Sparkles, Terminal, Zap } from 'lucide-react';

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "BookMyCineSeat",
    description: "A full-stack movie ticket booking application with real-time seat selection, show scheduling, and secure user login for booking management. Implemented end-to-end movie, theatre, and seat-booking workflow with admin controls and RESTful APIs.",
    technologies: ["Spring Boot", "Spring MVC", "JPA", "MySQL", "REST APIs", "Seat-Locking", "Authentication"],
    githubUrl: "https://github.com/sahil-786-sahil/BookMyCineSeat",
    liveUrl: null, // Add your live URL here when deployed
    featured: true,
    color: "from-purple-500 to-pink-500",
    date: "Aug 2025"
  },
  {
    id: 2,
    title: "FastPayment Feast",
    description: "A secure payment module integrating online payment APIs to handle order creation, signature verification, and payment success/failure flows. Implemented encrypted payment processing with webhook-based transaction status handling.",
    technologies: ["Spring Boot", "Webhooks", "Encryption", "Razorpay", "REST API", "Exception Handling"],
    githubUrl: "https://github.com/sahil-786-sahil/FastPayment-Feast",
    liveUrl: null,
    featured: true,
    color: "from-blue-500 to-cyan-500",
    date: "Nov 2025"
  },
  {
    id: 3,
    title: "MyCloudVault Storage System",
    description: "A cloud-storage platform that allows users to upload, download, organize, and manage files with secure access control. Built scalable file-management APIs supporting folder structure, metadata, and secure JWT authentication.",
    technologies: ["Spring Boot", "File Upload API", "JWT Security", "CRUD", "Local Storage"],
    githubUrl: "https://github.com/sahil-786-sahil/MyCloudVault-Storage-System",
    liveUrl: null,
    featured: true,
    color: "from-green-500 to-teal-500",
    date: "Nov 2025"
  },
  {
    id: 4,
    title: "Weather Forecast Application",
    description: "Developed a weather forecasting web application using Spring Boot REST APIs to fetch real-time weather data from a third-party Weather API. Designed a responsive user interface with clean separation between frontend and backend with RESTful architecture.",
    technologies: ["Spring Boot", "REST APIs", "HTML", "CSS", "JavaScript", "JSON"],
    githubUrl: "https://github.com/sahil-786-sahil/Weather_API",
    liveUrl: null,
    featured: false,
    color: "from-orange-500 to-red-500",
    date: "2025"
  },
  {
    id: 5,
    title: "My Fitness – Microservices Application",
    description: "Built a microservices-based fitness management system using Spring Boot, following scalable and modular architecture principles. Implemented inter-service communication and event-driven messaging using Apache Kafka with Spring Security authentication.",
    technologies: ["Spring Boot", "Microservices", "Apache Kafka", "Spring Security", "REST APIs", "MySQL"],
    githubUrl: "https://github.com/sahil-786-sahil/my_fitness",
    liveUrl: null,
    featured: false,
    color: "from-indigo-500 to-purple-500",
    date: "2025"
  }
];

// Skills Data
const skillsData = [
  { name: "Java", icon: "☕", color: "from-orange-600 to-red-600", level: "90%" },
  { name: "Spring Boot", icon: "🍃", color: "from-green-600 to-emerald-600", level: "80%" },
  { name: "Data Structures", icon: "🧮", color: "from-purple-600 to-pink-600", level: "85%" },
  { name: "SQL & Database", icon: "🗄️", color: "from-blue-600 to-cyan-600", level: "80%" },
  { name: "Git & GitHub", icon: "🔧", color: "from-gray-700 to-gray-900", level: "85%" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500", level: "75%" },
  { name: "React.js", icon: "⚛️", color: "from-cyan-500 to-blue-500", level: "70%" },
  { name: "REST APIs", icon: "🔌", color: "from-indigo-600 to-purple-600", level: "85%" }
];

// Navbar Component
const Navbar = ({ setCurrentView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Terminal className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sahil 
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                currentView === 'home' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Home size={18} />
              Home
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                currentView === 'projects' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Briefcase size={18} />
              Projects
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                currentView === 'contact' 
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Send size={18} />
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-3 ${
                currentView === 'home' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Home size={18} />
              Home
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-3 ${
                currentView === 'projects' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Briefcase size={18} />
              Projects
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-3 ${
                currentView === 'contact' 
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Send size={18} />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Profile Section */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <User size={80} className="text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                    Available for Work
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              SAHIL KHAN
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Java Full Stack Developer & Problem Solver
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Computer Science student at <span className="text-purple-400 font-semibold">GI Bajaj Group of Institution</span> specializing in{' '}
              <span className="text-pink-400 font-semibold">Spring Boot</span>,{' '}
              <span className="text-blue-400 font-semibold">Microservices</span>, and{' '}
              <span className="text-green-400 font-semibold">REST APIs</span>. Passionate about building scalable backend systems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setCurrentView('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              View My Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Get In Touch
              <Zap size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:border-purple-500"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-center font-semibold text-white text-sm mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white mb-2">650+</div>
              <div className="text-purple-200 font-semibold">DSA Problems</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-pink-200 font-semibold">Projects Built</div>
            </div>
             <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white mb-2">1697</div>
              <div className="text-pink-200 font-semibold">LeetCode Rating</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white mb-2">8.2</div>
              <div className="text-blue-200 font-semibold">CGPA</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-green-200 font-semibold">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Section
const Projects = ({ setCurrentView }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 mb-4">
              <Sparkles size={18} />
              <span className="font-semibold">My Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my latest work in backend development, microservices, and full-stack applications
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Featured Only
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                      <Code className="text-white" size={24} />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Award size={12} />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/70 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-blue-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <Github size={18} />
                    View Code
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentView('home')}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              <Home size={20} />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Section
const Contact = ({ setCurrentView }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', mobile: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      setStatus({ type: 'error', message: 'Please enter a valid 10-digit mobile number' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_pisees4',
          template_id: 'template_5c7meal',
          user_id: '0HUFAU-gOig2OqPFS',
          template_params: {
            from_name: formData.fullName,
            from_email: formData.email,
            from_mobile: formData.mobile,
            message: formData.message,
            to_email: 'sahilkhan9170786@gmail.com',
            to_mobile: '9412666932'
          }
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: '🎉 Thank you! Your message has been sent successfully. I will get back to you soon!' });
        setFormData({ fullName: '', email: '', mobile: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Sorry, there was an error sending your message. Please try again or contact me directly via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 top-1/4 right-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20 bottom-1/4 left-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 mb-4">
              <Send size={18} />
              <span className="font-semibold">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-gray-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Name-XYZ"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-200 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-bold text-gray-200 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="1234567890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-200 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-xl ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <a href="mailto:sahilkhan9170786@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                sahilkhan9170786@gmail.com
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">GitHub</h3>
              <a href="https://github.com/sahil-786-sahil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                @sahil-786-sahil
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Linkedin size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/sahil-khan-946667326" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                /in/sahil-khan-946667326
              </a>
            </div>

             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <a href="tel:+919412666932" className="text-gray-400 hover:text-green-400 transition-colors">
                +91 9412666932
              </a>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentView('home')}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              <Home size={20} />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="text-purple-400" size={20} />
            <span className="text-gray-400">© 2024 Sahil khan. All rights reserved.</span>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/sahil-786-sahil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sahil-khan-946667326"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sahilkhan9170786@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar setCurrentView={setCurrentView} currentView={currentView} />
      
      {currentView === 'home' && <Hero setCurrentView={setCurrentView} />}
      {currentView === 'projects' && <Projects setCurrentView={setCurrentView} />}
      {currentView === 'contact' && <Contact setCurrentView={setCurrentView} />}
      
      <Footer />
    </div>
  );
}
