import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BookMyCineSeat",
      description: "A full-stack movie ticket booking application with real-time seat selection, show scheduling, and secure user login for booking management.",
      fullDescription: "Implemented end-to-end movie, theatre, and seat-booking workflow with admin controls and RESTful APIs.",
      technologies: ["Spring Boot", "Spring MVC", "JPA", "MySQL", "REST APIs", "Seat-Locking", "Authentication"],
      image: "/project1.jpg",
      github: "https://github.com/sahil-786-sahil/BookMyCineSeat",
      demo: null, // No live demo link provided
      date: "13 Aug 2025 - 23 Aug 2025",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "FastPayment Feast",
      description: "A secure payment module integrating online payment APIs to handle order creation, signature verification, and payment success/failure flows.",
      fullDescription: "Implemented encrypted payment processing with webhook-based transaction status handling.",
      technologies: ["Spring Boot", "Webhooks", "Encryption", "REST", "Razorpay", "Exception Handling"],
      image: "/project2.jpg",
      github: "https://github.com/sahil-786-sahil/FastPayment-Feast",
      demo: "https://paymentui786.netlify.app/",
      date: "9 Nov 2025 - 12 Nov 2025",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "MyCloudVault Storage System",
      description: "A cloud-storage platform that allows users to upload, download, organize, and manage files with secure access control.",
      fullDescription: "Built scalable file-management APIs supporting folder structure, metadata, and secure JWT authentication.",
      technologies: ["Spring Boot", "File Upload API", "JWT Security", "CRUD", "Local Storage"],
      image: "/project3.jpg",
      github: "https://github.com/sahil-786-sahil/MyCloudVault-Storage-System",
      demo: null,
      date: "13 Nov 2025 - 15 Nov 2025",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Weather API",
      description: "Real-time weather application that fetches current weather data and forecasts using external weather APIs.",
      fullDescription: "Integrated weather API with responsive frontend to display weather information dynamically.",
      technologies: ["Spring Boot", "REST API", "Weather API", "JSON", "HTTP Client"],
      image: "/project4.jpg",
      github: "https://github.com/sahil-786-sahil/Weather_API",
      demo: null,
      date: "2025",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "My Fitness Tracker",
      description: "A fitness tracking application to monitor workouts, set goals, and track progress over time.",
      fullDescription: "Built with modern web technologies to help users maintain their fitness journey.",
      technologies: ["Spring Boot", "MySQL", "REST API", "CRUD Operations"],
      image: "/project5.jpg",
      github: "https://github.com/sahil-786-sahil/my_fitness",
      demo: null,
      date: "2025",
      color: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-slate-800 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Full-stack applications built with Spring Boot & React
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.project-placeholder').style.display = 'flex';
                  }}
                />
                <div className="project-placeholder hidden absolute inset-0 items-center justify-center">
                  <div className="text-6xl opacity-50">💻</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={14} />
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <p className="text-gray-500 text-sm mb-4">{project.fullDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 bg-slate-800 text-purple-400 rounded-full text-xs border border-slate-700 hover:border-purple-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all transform hover:scale-105"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all transform hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-16 animate-fadeInUp animation-delay-600">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Open Source Experience
          </h3>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">▸</span>
                <span>Contributed bug fixes and minor feature enhancements to Java and Spring Boot–based open-source projects.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">▸</span>
                <span>Debugged backend issues including null pointer exceptions, validation failures, and REST API inconsistencies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">▸</span>
                <span>Collaborated using Git workflows (forking, branching, pull requests, code reviews).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">▸</span>
                <span>Followed clean code principles and standard contribution guidelines.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;