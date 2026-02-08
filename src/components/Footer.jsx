import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sahil-786-sahil', label: 'GitHub' },
    { icon: <Code2 size={20} />, href: 'https://leetcode.com/u/officialsahil____/', label: 'LeetCode' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sahil-khan-946667326/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sahilkhan9170786@gmail.com', label: 'Email' }
  ];

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const styles = {
    footer: { background: 'linear-gradient(to bottom, #020617, #000000)', color: 'white', borderTop: '1px solid rgba(94, 234, 212, 0.2)', position: 'relative', overflow: 'hidden' },
    grid: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(100,255,218,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.01) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem', position: 'relative', zIndex: 10 },
    gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' },
    section: {},
    logo: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', display: 'inline-block' },
    logoGradient: { background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    description: { color: '#9ca3af', marginBottom: '1rem', fontSize: '0.875rem' },
    location: { color: '#6b7280', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
    locationDot: { display: 'inline-block', width: '8px', height: '8px', background: '#5eead4', borderRadius: '50%' },
    sectionTitle: { fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#5eead4' },
    linksList: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    link: { color: '#9ca3af', textDecoration: 'none', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', background: 'none', border: 'none', fontSize: '1rem', padding: '0' },
    socialGrid: { display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' },
    socialIcon: { padding: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '0.5rem', transition: 'all 0.3s', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid transparent', textDecoration: 'none' },
    contactInfo: { display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem' },
    contactItem: { color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s' },
    divider: { borderTop: '1px solid rgba(94, 234, 212, 0.2)', paddingTop: '2rem' },
    bottomGrid: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' },
    copyright: { color: '#9ca3af', fontSize: '0.875rem' },
    madeWith: { color: '#9ca3af', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
    heart: { color: '#ef4444' },
    highlight: { color: '#5eead4', fontWeight: '600' },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.grid}></div>
      <div style={styles.container}>
        <div style={styles.gridContainer}>
          <div style={styles.section}>
            <div style={styles.logo}><span style={styles.logoGradient}>Sahil Khan</span></div>
            <p style={styles.description}>Java Full Stack Developer passionate about building scalable applications with Spring Boot and React.js.</p>
            <p style={styles.location}><span style={styles.locationDot}></span>Vrindavan, Mathura, India</p>
          </div>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.linksList}>
              {footerLinks.map((link) => (
                <button key={link.id} onClick={() => handleNavClick(link.id)} style={styles.link} className="footer-link">{link.name}</button>
              ))}
            </div>
          </div>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Connect With Me</h4>
            <div style={styles.socialGrid}>
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="footer-social" aria-label={social.label}>{social.icon}</a>
              ))}
            </div>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem} className="footer-contact"><Mail size={14} /> sahilkhan9170786@gmail.com</div>
              <div style={styles.contactItem} className="footer-contact">📱 +91 9412666932</div>
            </div>
          </div>
        </div>
        <div style={styles.divider}>
          <div style={styles.bottomGrid}>
            <p style={styles.copyright}>© {currentYear} Sahil Khan. All rights reserved.</p>
            <p style={styles.madeWith}>Made with <Heart size={16} style={styles.heart} className="heart-icon" /> using <span style={styles.highlight}>Spring Boot & React</span></p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-link:hover { color: #5eead4; transform: translateX(5px); }
        .footer-social:hover { transform: scale(1.25); background: rgba(94, 234, 212, 0.2); border-color: rgba(251, 191, 36, 0.8); box-shadow: 0 0 15px rgba(251, 191, 36, 0.6); }
        .footer-contact:hover { color: #5eead4; transform: translateX(5px); }
        .heart-icon { animation: heartbeat 1.5s ease-in-out infinite; }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 25% { transform: scale(1.2); } 50% { transform: scale(1); } 75% { transform: scale(1.1); } }
      `}</style>
    </footer>
  );
};

export default Footer;
