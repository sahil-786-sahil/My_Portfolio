import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 160; i++) {
      stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1.5, speed: Math.random() * 0.5 + 0.1, opacity: Math.random(), twinkleSpeed: Math.random() * 0.02 + 0.01 });
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
        if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) star.twinkleSpeed = -star.twinkleSpeed;
      });
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service_id: 'service_pisees4', template_id: 'template_5c7meal', user_id: '0HUFAU-gOig2OqPFS', template_params: { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_name: 'Sahil Khan' }})
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else throw new Error('Failed');
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please email me directly.' });
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    section: { minHeight: '100vh', padding: '5rem 1rem', background: 'linear-gradient(to bottom, #020617, #134e4a, #020617)', color: 'white', paddingTop: '6rem', position: 'relative', overflow: 'hidden' },
    canvas: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 },
    container: { maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 },
    header: { textAlign: 'center', marginBottom: '4rem' },
    title: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' },
    titleGradient: { background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' },
    infoSection: {},
    infoTitle: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #5eead4, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    infoText: { color: '#9ca3af', marginBottom: '2rem' },
    contactItems: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    contactItem: { display: 'flex', gap: '1rem', transition: 'all 0.3s' },
    iconBox: { padding: '0.75rem', background: 'linear-gradient(to bottom right, #2563eb, #14b8a6)', borderRadius: '0.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'transform 0.3s' },
    formCard: { background: 'rgba(15, 23, 42, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(94, 234, 212, 0.3)', transition: 'all 0.5s' },
    form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    label: { display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#5eead4' },
    input: { width: '100%', padding: '0.75rem 1rem', background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem', transition: 'all 0.3s' },
    textarea: { width: '100%', padding: '0.75rem 1rem', background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem', resize: 'none', minHeight: '120px', transition: 'all 0.3s' },
    button: { width: '100%', background: 'linear-gradient(to right, #2563eb, #14b8a6)', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: '600', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer', color: 'white', fontSize: '1rem' },
    statusBox: { padding: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  };

  return (
    <section style={styles.section}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}><span style={styles.titleGradient}>Get In Touch</span></h2>
          <p style={{color: '#9ca3af', fontSize: '1.125rem'}}>Have a project in mind? Let's work together!</p>
        </div>
        <div style={styles.grid}>
          <div style={styles.infoSection}>
            <h3 style={styles.infoTitle}>Let's talk about everything!</h3>
            <p style={styles.infoText}>Feel free to reach out if you want to collaborate on a project or discuss tech!</p>
            <div style={styles.contactItems}>
              <div style={styles.contactItem} className="contact-item">
                <div style={styles.iconBox}><Mail size={24} /></div>
                <div><h4 style={{fontWeight: '600', marginBottom: '0.25rem'}}>Email</h4><a href="mailto:sahilkhan9170786@gmail.com" style={{color: '#9ca3af', textDecoration: 'none'}}>sahilkhan9170786@gmail.com</a></div>
              </div>
              <div style={styles.contactItem} className="contact-item">
                <div style={styles.iconBox}><Phone size={24} /></div>
                <div><h4 style={{fontWeight: '600', marginBottom: '0.25rem'}}>Phone</h4><a href="tel:+919412666932" style={{color: '#9ca3af', textDecoration: 'none'}}>+91 9412666932</a></div>
              </div>
              <div style={styles.contactItem} className="contact-item">
                <div style={styles.iconBox}><MapPin size={24} /></div>
                <div><h4 style={{fontWeight: '600', marginBottom: '0.25rem'}}>Location</h4><p style={{color: '#9ca3af', margin: 0}}>Vrindavan, Mathura, India</p></div>
              </div>
            </div>
          </div>
          <div style={styles.formCard} className="form-card">
            <form onSubmit={handleSubmit} style={styles.form}>
              <div><label style={styles.label}>Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} className="form-input" placeholder="Your Name" /></div>
              <div><label style={styles.label}>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} className="form-input" placeholder="your.email@example.com" /></div>
              <div><label style={styles.label}>Subject *</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={styles.input} className="form-input" placeholder="What's this about?" /></div>
              <div><label style={styles.label}>Message *</label><textarea name="message" value={formData.message} onChange={handleChange} required style={styles.textarea} className="form-input" placeholder="Your message..."></textarea></div>
              {status.message && <div style={{...styles.statusBox, background: status.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: status.type === 'success' ? '#10b981' : '#ef4444', border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)'}` }}>{status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}<span>{status.message}</span></div>}
              <button type="submit" disabled={isLoading} style={styles.button} className="submit-btn">{isLoading ? <><div style={{width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>Sending...</> : <><Send size={20} />Send Message</>}</button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .contact-item:hover .iconBox { transform: scale(1.1); }
        .form-card:hover { box-shadow: 0 0 30px rgba(251, 191, 36, 0.6); border-color: rgba(251, 191, 36, 0.5); }
        .form-input:focus { border-color: rgb(251, 191, 36); box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1); outline: none; }
        .form-input:hover { border-color: rgba(251, 191, 36, 0.3); }
        .submit-btn:hover:not(:disabled) { transform: scale(1.05); box-shadow: 0 0 30px rgba(251, 191, 36, 0.8); border: 2px solid rgba(251, 191, 36, 0.8); }
      `}</style>
    </section>
  );
};

export default Contact;
