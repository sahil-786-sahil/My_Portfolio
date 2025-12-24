import React from 'react';
import { Award, Trophy, Star, Target, Code2, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "LeetCode Expert",
      description: "Peak Rating: 1697 | Solved 650+ DSA problems across multiple platforms",
      date: "2024-2025",
      link: "https://leetcode.com/u/officialsahil____/",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "CodeSumit 2.0 Winner",
      description: "Ranked 11th out of 618 participants at D.Y. Patil RAIT",
      date: "2024",
      link: null,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Codeforces Max Status",
      description: "Attained Max status with a peak rating of 879",
      date: "2024",
      link: "https://codeforces.com/profile/officialsahil",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Java Certification",
      description: "Java Programming Certification by IIT Kharagpur (NPTEL)",
      date: "2024",
      link: "https://nptel.ac.in/",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Medal className="w-12 h-12" />,
      title: "Top 4 Coder",
      description: "Ranked within Top 4 Coders at college level for competitive programming",
      date: "2024",
      link: null,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Open Source Contributor",
      description: "Contributed bug fixes and features to Java & Spring Boot projects",
      date: "2024-2025",
      link: "https://github.com/sahil-786-sahil",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Milestones that define my coding journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <div 
              key={idx}
              className="group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className={`inline-block p-4 bg-gradient-to-br ${achievement.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 mb-4 min-h-[48px]">{achievement.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400 font-semibold">{achievement.date}</span>
                  {achievement.link && (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="text-center animate-fadeInUp animation-delay-600">
          <div className="inline-flex flex-wrap justify-center gap-8 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="text-center px-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                650+
              </div>
              <div className="text-gray-400">Problems Solved</div>
            </div>
            
            <div className="text-center px-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            
            <div className="text-center px-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-2">
                1697
              </div>
              <div className="text-gray-400">LeetCode Rating</div>
            </div>

            <div className="text-center px-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                8.2
              </div>
              <div className="text-gray-400">CGPA</div>
            </div>
          </div>
        </div>

        {/* LeetCode Profile Card */}
        <div className="mt-12 text-center animate-fadeInUp animation-delay-800">
          <a 
            href="https://leetcode.com/u/officialsahil____/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
              <div className="flex items-center gap-4 text-white">
                <Code2 size={40} />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">LeetCode Profile</h3>
                  <p className="text-yellow-100">Click to view my coding journey →</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;