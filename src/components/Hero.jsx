import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Sparkles } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 300;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.03 + 0.01
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
        <div style={styles.imageContainer}>
          <div style={styles.imageGlow}></div>
          <img 
            src="/profile.jpg" 
            alt="Sahil Khan" 
            style={styles.image}
          />
          <div style={styles.sparkle}>
            <Sparkles style={styles.sparkleIcon} />
          </div>
        </div>
        
        <h1 style={styles.title}>
          <span style={styles.titleGradient}>Sahil Khan</span>
        </h1>
        
        <p style={styles.subtitle}>Java Full Stack Developer</p>
        
        <p style={styles.description}>
          Passionate about building scalable web applications with Spring Boot & React.js. 
          LeetCode enthusiast with 650+ DSA problems solved.
        </p>
        
        <div style={styles.buttonContainer}>
          <button onClick={() => onNavigate('contact')} style={styles.primaryButton} className="hero-btn">
            <span style={styles.btnText}>Get In Touch</span>
            <ArrowRight size={20} style={styles.btnIcon} />
          </button>
          <a href="/resume.pdf" download style={styles.secondaryButton} className="hero-btn">
            <Download size={20} style={styles.btnIcon} />
            <span style={styles.btnText}>Resume</span>
          </a>
        </div>

        <div style={styles.cardsContainer}>
          <button onClick={() => onNavigate('skills')} style={styles.card} className="hero-card">
            <div style={styles.cardEmoji}>💻</div>
            <div style={styles.cardTitle}>Skills</div>
            <div style={styles.cardSubtitle}>My Expertise</div>
          </button>

          <button onClick={() => onNavigate('achievements')} style={styles.card} className="hero-card">
            <div style={styles.cardEmoji}>🏆</div>
            <div style={styles.cardTitle}>Achievements</div>
            <div style={styles.cardSubtitle}>Milestones</div>
          </button>

          <button onClick={() => onNavigate('projects')} style={styles.card} className="hero-card">
            <div style={styles.cardEmoji}>🚀</div>
            <div style={styles.cardTitle}>Projects</div>
            <div style={styles.cardSubtitle}>My Work</div>
          </button>

          <button onClick={() => onNavigate('contact')} style={styles.card} className="hero-card">
            <div style={styles.cardEmoji}>📧</div>
            <div style={styles.cardTitle}>Contact</div>
            <div style={styles.cardSubtitle}>Let's Talk</div>
          </button>
        </div>
        
        <div style={styles.socialContainer}>
          <a href="https://github.com/sahil-786-sahil" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <Github size={28} />
          </a>
          <a href="https://leetcode.com/u/officialsahil____/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <Code2 size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sahil-khan-946667326/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <Linkedin size={28} />
          </a>
          <a href="mailto:sahilkhan9170786@gmail.com" style={styles.socialIcon} className="social-icon">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, 30px) scale(1.1); }
        }
        @keyframes sparkleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.4);
          border: 2px solid rgba(251, 191, 36, 0.8);
        }
        
        .hero-card:hover {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          border: 1px solid rgba(251, 191, 36, 0.5);
        }
        
        .social-icon:hover {
          transform: scale(1.25);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
          border: 2px solid rgba(251, 191, 36, 0.8);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #020617, #1e3a8a, #134e4a)',
    color: 'white',
    padding: '2rem 1rem',
    paddingTop: '5rem',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
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
    opacity: 0.2,
    animation: 'heroFloat1 20s ease-in-out infinite',
  },
  orb2: {
    top: '33%',
    right: '25%',
    width: '384px',
    height: '384px',
    background: '#14b8a6',
    opacity: 0.2,
    animation: 'heroFloat2 18s ease-in-out infinite',
  },
  orb3: {
    bottom: '25%',
    left: '50%',
    width: '384px',
    height: '384px',
    background: '#06b6d4',
    opacity: 0.2,
    animation: 'heroFloat3 15s ease-in-out infinite',
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    zIndex: 0,
  },
  container: {
    maxWidth: '1152px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    padding: '0 1rem',
  },
  imageContainer: {
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block',
    animation: 'fadeInScale 0.8s ease-out',
  },
  imageGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #3b82f6, #14b8a6)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    opacity: 0.5,
  },
  image: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '4px solid #5eead4',
    boxShadow: '0 0 40px rgba(94, 234, 212, 0.5)',
    position: 'relative',
    zIndex: 10,
    transition: 'transform 0.5s',
  },
  sparkle: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    zIndex: 20,
    animation: 'sparkleRotate 8s linear infinite',
  },
  sparkleIcon: {
    width: '32px',
    height: '32px',
    color: '#5eead4',
  },
  title: {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'fadeInUp 0.6s ease-out 0.3s backwards',
  },
  titleGradient: {
    background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: '#5eead4',
    marginBottom: '1.5rem',
    fontWeight: '600',
    animation: 'fadeInUp 0.6s ease-out 0.4s backwards',
  },
  description: {
    fontSize: '1.125rem',
    color: '#d1d5db',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
    animation: 'fadeInUp 0.6s ease-out 0.5s backwards',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '3rem',
    animation: 'fadeInUp 0.6s ease-out 0.6s backwards',
  },
  primaryButton: {
    background: 'linear-gradient(to right, #2563eb, #14b8a6)',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    transition: 'all 0.3s',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    fontSize: '1rem',
  },
  secondaryButton: {
    background: 'transparent',
    border: '2px solid #14b8a6',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  btnText: {
    position: 'relative',
    zIndex: 10,
  },
  btnIcon: {
    position: 'relative',
    zIndex: 10,
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1rem',
    marginBottom: '3rem',
    maxWidth: '64rem',
    margin: '0 auto 3rem',
    animation: 'fadeInUp 0.6s ease-out 0.7s backwards',
  },
  card: {
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid #334155',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    transition: 'all 0.3s',
    cursor: 'pointer',
    color: 'white',
  },
  cardEmoji: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  cardTitle: {
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.25rem',
  },
  cardSubtitle: {
    fontSize: '0.875rem',
    color: '#9ca3af',
  },
  socialContainer: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    animation: 'fadeInUp 0.6s ease-out 0.8s backwards',
  },
  socialIcon: {
    padding: '0.75rem',
    background: 'rgba(15, 23, 42, 0.7)',
    borderRadius: '50%',
    transition: 'all 0.3s',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
  },
};

export default Hero;
