import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 180;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.15,
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

  const projects = [
    {
      title: "BookMyCineSeat",
      description: "A full-stack movie ticket booking application with real-time seat selection, show scheduling, and secure user login for booking management.",
      technologies: ["Spring Boot", "Spring MVC", "JPA", "MySQL", "REST APIs"],
      image: "/project1.jpg",
      github: "https://github.com/sahil-786-sahil/BookMyCineSeat",
      demo: null,
      date: "13 Aug 2025 - 23 Aug 2025",
    },
    {
      title: "FastPayment Feast",
      description: "A secure payment module integrating online payment APIs to handle order creation, signature verification, and payment success/failure flows.",
      technologies: ["Spring Boot", "Webhooks", "Razorpay", "REST"],
      image: "/project2.jpg",
      github: "https://github.com/sahil-786-sahil/FastPayment-Feast",
      demo: "https://paymentui786.netlify.app/",
      date: "9 Nov 2025 - 12 Nov 2025",
    },
    {
      title: "MyCloudVault Storage System",
      description: "A cloud-storage platform that allows users to upload, download, organize, and manage files with secure access control.",
      technologies: ["Spring Boot", "File Upload API", "JWT Security"],
      image: "/project3.jpg",
      github: "https://github.com/sahil-786-sahil/MyCloudVault-Storage-System",
      demo: null,
      date: "13 Nov 2025 - 15 Nov 2025",
    },
    {
      title: "Weather API",
      description: "Real-time weather application that fetches current weather data and forecasts using external weather APIs.",
      technologies: ["Spring Boot", "REST API", "Weather API", "JSON"],
      image: "/project4.jpg",
      github: "https://github.com/sahil-786-sahil/Weather_API",
      demo: null,
      date: "2025",
    },
    {
      title: "My Fitness Tracker",
      description: "A fitness tracking application to monitor workouts, set goals, and track progress over time.",
      technologies: ["Spring Boot", "MySQL", "REST API", "CRUD"],
      image: "/project5.jpg",
      github: "https://github.com/sahil-786-sahil/my_fitness",
      demo: null,
      date: "2025",
    }
  ];

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
    canvas: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 },
    container: { maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 },
    header: { textAlign: 'center', marginBottom: '4rem' },
    title: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' },
    titleGradient: { background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    subtitle: { color: '#9ca3af', fontSize: '1.125rem' },
    projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' },
    projectCard: { background: 'rgba(15, 23, 42, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(71, 85, 105, 0.5)', transition: 'all 0.5s' },
    imageContainer: { height: '16rem', overflow: 'hidden', background: '#1e293b', position: 'relative' },
    projectImage: { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'transform 0.5s' },
    placeholder: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '4rem', opacity: 0.5 },
    content: { padding: '1.5rem' },
    projectTitle: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' },
    date: { fontSize: '0.875rem', color: '#5eead4', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
    description: { color: '#9ca3af', marginBottom: '1rem' },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' },
    tag: { padding: '0.25rem 0.75rem', background: 'rgba(30, 41, 59, 0.7)', color: '#67e8f9', borderRadius: '9999px', fontSize: '0.75rem', border: '1px solid rgba(71, 85, 105, 0.5)', transition: 'all 0.3s' },
    buttons: { display: 'flex', gap: '1rem' },
    button: { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(30, 41, 59, 0.7)', borderRadius: '0.5rem', border: '1px solid rgba(71, 85, 105, 0.5)', transition: 'all 0.3s', color: 'white', textDecoration: 'none', cursor: 'pointer', fontSize: '0.875rem' },
    demoButton: { background: 'linear-gradient(to right, #14b8a6, #06b6d4)', border: 'none' },
  };

  return (
    <section style={styles.section}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}><span style={styles.titleGradient}>Featured Projects</span></h2>
          <p style={styles.subtitle}>Full-stack applications built with Spring Boot & React</p>
        </div>
        <div style={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} style={styles.projectCard} className="project-card">
              <div style={styles.imageContainer}>
                <img src={project.image} alt={project.title} style={styles.projectImage} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div style={{...styles.placeholder, display: 'none'}}>💻</div>
              </div>
              <div style={styles.content}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.date}><Calendar size={14} /> {project.date}</p>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.techTags}>
                  {project.technologies.map((tech, i) => (<span key={i} style={styles.tag} className="tech-tag">{tech}</span>))}
                </div>
                <div style={styles.buttons}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.button} className="project-btn"><Github size={20} /> Code</a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{...styles.button, ...styles.demoButton}} className="project-btn"><ExternalLink size={20} /> Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project-card:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(251, 191, 36, 0.6); border: 1px solid rgba(251, 191, 36, 0.5); }
        .project-card:hover img { transform: scale(1.1); }
        .tech-tag:hover { border-color: rgb(251, 191, 36); color: rgb(251, 191, 36); background: rgba(251, 191, 36, 0.1); transform: scale(1.1); }
        .project-btn:hover { transform: scale(1.1); box-shadow: 0 0 20px rgba(251, 191, 36, 0.8); border: 2px solid rgba(251, 191, 36, 0.8); }
      `}</style>
    </section>
  );
};

export default Projects;
