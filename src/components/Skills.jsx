import React, { useEffect, useRef } from 'react';
import { Code, Database, Wrench, Server, GitBranch, MessageSquare } from 'lucide-react';

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01
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

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code style={styles.icon} />,
      skills: ["Java", "C", "SQL", "JavaScript", "HTML/CSS"],
      color: "linear-gradient(to bottom right, #3b82f6, #06b6d4)"
    },
    {
      title: "Frameworks",
      icon: <Server style={styles.icon} />,
      skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "React.js", "Maven", "JUnit"],
      color: "linear-gradient(to bottom right, #14b8a6, #10b981)"
    },
    {
      title: "Developer Tools",
      icon: <Wrench style={styles.icon} />,
      skills: ["Postman", "Git", "GitHub", "VS Code", "IntelliJ", "Spring Initializer"],
      color: "linear-gradient(to bottom right, #06b6d4, #2563eb)"
    },
    {
      title: "Microservices & Messaging",
      icon: <MessageSquare style={styles.icon} />,
      skills: ["Apache Kafka", "Spring Cloud (Eureka, Open Feign)", "API Gateway"],
      color: "linear-gradient(to bottom right, #10b981, #14b8a6)"
    },
    {
      title: "Databases",
      icon: <Database style={styles.icon} />,
      skills: ["MySQL", "MongoDB"],
      color: "linear-gradient(to bottom right, #2563eb, #6366f1)"
    },
    {
      title: "Other Skills",
      icon: <GitBranch style={styles.icon} />,
      skills: ["OOPs", "Data Structures & Algorithms", "REST API Development", "SQL & Database Design", "Docker Basics", "Clean Code Practices", "Debugging & Performance Optimization"],
      color: "linear-gradient(to bottom right, #06b6d4, #14b8a6)"
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
            <span style={styles.titleGradient}>Technical Skills</span>
          </h2>
          <p style={styles.subtitle}>Technologies and tools I work with</p>
        </div>

        <div style={styles.cardsGrid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} style={styles.card} className="skill-card">
              <div style={styles.cardHeader}>
                <div style={{...styles.iconContainer, background: category.color}}>
                  {category.icon}
                </div>
                <h3 style={styles.cardTitle}>{category.title}</h3>
              </div>

              <div style={styles.skillsContainer}>
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} style={styles.skillTag} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.educationSection}>
          <div style={styles.educationCard} className="education-card">
            <h3 style={styles.educationTitle}>
              <span style={styles.titleGradient}>Education</span>
            </h3>
            <div style={styles.educationContent}>
              <h4 style={styles.schoolName}>GI Bajaj Group of Institution Mathura</h4>
              <p style={styles.degree}>Bachelor of Technology - Computer Science with AI-ML</p>
              <div style={styles.educationFooter}>
                <p style={styles.cgpa}>
                  <span style={styles.cgpaDot}></span>
                  CGPA: 8.2 (Till 4th Sem)
                </p>
                <p style={styles.year}>2023-2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(5deg); }
          66% { transform: translate(-15px, 15px) rotate(-5deg); }
        }
        @keyframes skillFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 25px) rotate(-8deg); }
          66% { transform: translate(18px, -18px) rotate(8deg); }
        }
        @keyframes skillFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, 20px) scale(1.05); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        
        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          border: 1px solid rgba(251, 191, 36, 0.5);
        }
        
        .skill-tag:hover {
          border-color: rgb(251, 191, 36);
          color: rgb(251, 191, 36);
          background: rgba(251, 191, 36, 0.1);
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        }
        
        .education-card:hover {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          border-color: rgba(251, 191, 36, 0.6);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    padding: '5rem 1rem',
    background: 'linear-gradient(to bottom, #020617, #1e3a8a, #020617)',
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
    top: '5rem',
    left: '2.5rem',
    width: '256px',
    height: '256px',
    background: '#3b82f6',
    opacity: 0.1,
    animation: 'skillFloat1 15s ease-in-out infinite',
  },
  orb2: {
    top: '10rem',
    right: '5rem',
    width: '320px',
    height: '320px',
    background: '#14b8a6',
    opacity: 0.1,
    animation: 'skillFloat2 18s ease-in-out infinite',
  },
  orb3: {
    bottom: '5rem',
    left: '33%',
    width: '288px',
    height: '288px',
    background: '#06b6d4',
    opacity: 0.1,
    animation: 'skillFloat3 12s ease-in-out infinite',
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(100,255,218,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.02) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
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
    marginTop: '1rem',
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
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    transition: 'all 0.5s',
    position: 'relative',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  iconContainer: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  },
  icon: {
    width: '32px',
    height: '32px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skillTag: {
    padding: '0.375rem 0.75rem',
    background: 'rgba(30, 41, 59, 0.7)',
    color: '#d1d5db',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    transition: 'all 0.3s',
    cursor: 'default',
  },
  educationSection: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  educationCard: {
    display: 'inline-block',
    background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.3))',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(94, 234, 212, 0.3)',
    transition: 'all 0.5s',
    position: 'relative',
  },
  educationTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  educationContent: {
    textAlign: 'left',
    maxWidth: '48rem',
  },
  schoolName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
  },
  degree: {
    color: '#9ca3af',
    marginBottom: '0.5rem',
  },
  educationFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  cgpa: {
    color: '#5eead4',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  cgpaDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    background: '#5eead4',
    borderRadius: '50%',
    animation: 'dotPulse 2s ease-in-out infinite',
  },
  year: {
    color: '#6b7280',
  },
};

export default Skills;
