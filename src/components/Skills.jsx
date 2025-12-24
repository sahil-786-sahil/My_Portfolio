import React from 'react';
import { Code, Database, Wrench, Server, GitBranch, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java", "C", "SQL", "JavaScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "React.js", "Maven", "JUnit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Postman", "Git", "GitHub", "VS Code", "IntelliJ", "Spring Initializer"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Microservices & Messaging",
      icon: <MessageSquare className="w-8 h-8" />,
      skills: ["Apache Kafka", "Spring Cloud (Eureka, Open Feign)", "API Gateway"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "MongoDB"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Other Skills",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["OOPs", "Data Structures & Algorithms", "REST API Development", "SQL & Database Design", "Docker Basics", "Clean Code Practices", "Debugging & Performance Optimization"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 bg-slate-900 text-gray-300 rounded-full text-sm border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 text-center animate-fadeInUp animation-delay-600">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="text-left max-w-2xl">
              <h4 className="text-xl font-semibold text-white mb-2">
                GI Bajaj Group of Institution Mathura
              </h4>
              <p className="text-gray-400 mb-1">
                Bachelor of Technology - Computer Science with AI-ML
              </p>
              <div className="flex justify-between items-center">
                <p className="text-purple-400 font-semibold">CGPA: 8.2 (Till 4th Sem)</p>
                <p className="text-gray-500">2023-2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;