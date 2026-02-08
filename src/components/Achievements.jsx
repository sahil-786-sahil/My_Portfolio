import React, { useEffect, useRef } from 'react';
import { Award, Trophy, Star, Target, Code2, Medal } from 'lucide-react';

const Achievements = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.6 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.025 + 0.01
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2);
        gradient.addColorStop(0, `rgba(100, 255, 218, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(100, 255, 218, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const achievements = [
    {
      icon: <Code2 style={styles.icon} />,
      title: "LeetCode Expert",
      description: "Peak Rating: 1697 | Solved 650+ DSA problems across multiple platforms",
      date: "2024-2025",
      link: "https://leetcode.com/u/officialsahil____/",
      color: "linear-gradient(to bottom right, #3b82f6, #06b6d4)"
    },
    {
      icon: <Trophy style={styles.icon} />,
      title: "CodeSumit 2.0 Winner",
      description: "Ranked 11th out of 618 participants at D.Y. Patil RAIT",
      date: "2024",
      link: null,
      color: "linear-gradient(to bottom right, #14b8a6, #10b981)"
    },
    {
      icon: <Star style={styles.icon} />,
      title: "Codeforces Max Status",
      description: "Attained Max status with a peak rating of 879",
      date: "2024",
      link: "https://codeforces.com/profile/officialsahil",
      color: "linear-gradient(to bottom right, #06b6d4, #2563eb)"
    },
    {
      icon: <Award style={styles.icon} />,
      title: "Java Certification",
      description: "Java Programming Certification by IIT Kharagpur (NPTEL)",
      date: "2024",
      link: "https://nptel.ac.in/",
      color: "linear-gradient(to bottom right, #10b981, #14b8a6)"
    },
    {
      icon: <Medal style={styles.icon} />,
      title: "Top 4 Coder",
      description: "Ranked within Top 4 Coders at college level for competitive programming",
      date: "2024",
      link: null,
      color: "linear-gradient(to bottom right, #2563eb, #6366f1)"
    },
    {
      icon: <Target style={styles.icon} />,
      title: "Open Source Contributor",
      description: "Contributed bug fixes and features to Java & Spring Boot projects",
      date: "2024-2025",
      link: "https://github.com/sahil-786-sahil",
      color: "linear-gradient(to bottom right, #14b8a6, #06b6d4)"
    }
  ];

  return (
    <section style={styles.section}>
      <canvas ref={canvasRef} style={styles.canvas} />

      <div style={styles.orbContainer}>
        <div style={{...styles.orb, ...styles.orb1}}></div>
        <div style={{...styles.orb, ...styles.orb2}}></div>
        <div style={{...styles.orb, ...styles.orb3}}></div>
      </div>

      <div style={styles.grid}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            <span style={styles.titleGradient}>Achievements & Certifications</span>
          </h2>
          <p style={styles.subtitle}>Milestones that define my coding journey</p>
        </div>

        <div style={styles.cardsGrid}>
          {achievements.map((achievement, idx) => (
            <div key={idx} style={styles.card} className="achievement-card">
              <div style={{...styles.iconContainer, background: achievement.color}}>
                {achievement.icon}
              </div>
              
              <h3 style={styles.cardTitle}>{achievement.title}</h3>
              <p style={styles.cardDescription}>{achievement.description}</p>
              
              <div style={styles.cardFooter}>
                <span style={styles.date}>
                  <span style={styles.dateDot}></span>
                  {achievement.date}
                </span>
                {achievement.link && (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={styles.viewLink} className="view-link">
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.statsSection}>
          <div style={styles.statsContainer} className="stats-container">
            <div style={styles.statItem} className="stat-item">
              <div style={styles.statNumber}>650+</div>
              <div style={styles.statLabel}>Problems Solved</div>
            </div>
            
            <div style={styles.statItem} className="stat-item">
              <div style={styles.statNumber}>5+</div>
              <div style={styles.statLabel}>Projects Built</div>
            </div>
            
            <div style={styles.statItem} className="stat-item">
              <div style={styles.statNumber}>1697</div>
              <div style={styles.statLabel}>LeetCode Rating</div>
            </div>

            <div style={styles.statItem} className="stat-item">
              <div style={styles.statNumber}>8.2</div>
              <div style={styles.statLabel}>CGPA</div>
            </div>
          </div>
        </div>

        <div style={styles.leetcodeSection}>
          <a href="https://leetcode.com/u/officialsahil____/" target="_blank" rel="noopener noreferrer" style={styles.leetcodeLink} className="leetcode-link">
            <div style={styles.leetcodeCard}>
              <Code2 size={40} />
              <div style={styles.leetcodeContent}>
                <h3 style={styles.leetcodeTitle}>LeetCode Profile</h3>
                <p style={styles.leetcodeSubtitle}>Click to view my coding journey →</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes achievementFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(5deg); }
          66% { transform: translate(-15px, 15px) rotate(-5deg); }
        }
        @keyframes achievementFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 25px) rotate(-8deg); }
          66% { transform: translate(18px, -18px) rotate(8deg); }
        }
        @keyframes achievementFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, 20px) scale(1.05); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        
        .achievement-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          border: 1px solid rgba(251, 191, 36, 0.5);
        }
        
        .view-link:hover {
          color: #fbbf24;
        }
        
        .stats-container:hover {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          border-color: rgba(251, 191, 36, 0.6);
        }
        
        .stat-item:hover .stat-number {
          transform: scale(1.1);
          background: linear-gradient(to right, rgb(251, 191, 36), rgb(234, 179, 8));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .leetcode-link:hover .leetcode-card {
          box-shadow: 0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(20, 184, 166, 0.3);
          border: 2px solid rgba(251, 191, 36, 0.8);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    padding: '5rem 1rem',
    background: 'linear-gradient(to bottom, #020617, #134e4a, #020617)',
    color: 'white',
    paddingTop: '6rem',
    position: 'relative',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  orbContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    mixBlendMode: 'multiply',
  },
  orb1: {
    top: '25%',
    left: '25%',
    width: '384px',
    height: '384px',
    background: '#3b82f6',
    opacity: 0.15,
    animation: 'achievementFloat1 15s ease-in-out infinite',
  },
  orb2: {
    top: '50%',
    right: '25%',
    width: '384px',
    height: '384px',
    background: '#14b8a6',
    opacity: 0.15,
    animation: 'achievementFloat2 18s ease-in-out infinite',
  },
  orb3: {
    bottom: '25%',
    left: '50%',
    width: '384px',
    height: '384px',
    background: '#06b6d4',
    opacity: 0.15,
    animation: 'achievementFloat3 12s ease-in-out infinite',
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(100,255,218,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.02) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    zIndex: 0,
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  titleGradient: {
    background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '1.125rem',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  card: {
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    transition: 'all 0.5s',
    position: 'relative',
  },
  iconContainer: {
    display: 'inline-block',
    padding: '1rem',
    borderRadius: '0.75rem',
    marginBottom: '1rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  },
  icon: {
    width: '48px',
    height: '48px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    color: '#9ca3af',
    marginBottom: '1rem',
    minHeight: '48px',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: '0.875rem',
    color: '#5eead4',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  dateDot: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    background: '#5eead4',
    borderRadius: '50%',
    animation: 'dotPulse 2s ease-in-out infinite',
  },
  viewLink: {
    fontSize: '0.875rem',
    color: '#67e8f9',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  statsSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  statsContainer: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(94, 234, 212, 0.3)',
    transition: 'all 0.5s',
  },
  statItem: {
    textAlign: 'center',
    padding: '0 1rem',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    background: 'linear-gradient(to right, #60a5fa, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'all 0.3s',
  },
  statLabel: {
    color: '#9ca3af',
  },
  leetcodeSection: {
    textAlign: 'center',
  },
  leetcodeLink: {
    display: 'inline-block',
    textDecoration: 'none',
  },
  leetcodeCard: {
    background: 'linear-gradient(to right, #2563eb, #14b8a6)',
    padding: '1.5rem',
    borderRadius: '1rem',
    transition: 'all 0.5s',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: 'white',
    boxShadow: '0 10px 40px rgba(20, 184, 166, 0.3)',
    border: '2px solid transparent',
  },
  leetcodeContent: {
    textAlign: 'left',
  },
  leetcodeTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem',
  },
  leetcodeSubtitle: {
    color: '#bfdbfe',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

export default Achievements;
