import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={{
      ...styles.nav,
      ...(scrolled ? styles.navScrolled : {}),
    }}>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <button
            onClick={() => handleNavClick('home')}
            style={styles.logo}
            className="nav-logo"
          >
            <span style={styles.logoText}>Sahil Khan</span>
          </button>

          <div style={isMobile ? styles.desktopNavHidden : styles.desktopNav}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === link.id ? styles.navLinkActive : {}),
                }}
                className="nav-link"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={isMobile ? {...styles.menuButton, ...styles.menuButtonVisible} : styles.menuButton}
            className="menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div style={styles.mobileNav}>
            <div style={styles.mobileNavInner}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    ...styles.mobileNavLink,
                    ...(activeSection === link.id ? styles.mobileNavLinkActive : {}),
                  }}
                  className="mobile-nav-link"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
        }
        
        .nav-link:hover {
          color: #5eead4;
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
          border: 2px solid rgba(251, 191, 36, 0.5);
        }
        
        .menu-btn:hover {
          background: rgba(94, 234, 212, 0.2);
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
        }
        
        .mobile-nav-link:hover {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
        }
      `}</style>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.5s',
    background: 'rgba(2, 6, 23, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  navScrolled: {
    background: 'rgba(2, 6, 23, 0.95)',
    boxShadow: '0 4px 20px rgba(20, 184, 166, 0.15)',
    borderBottom: '1px solid rgba(94, 234, 212, 0.2)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  logoText: {
    background: 'linear-gradient(to right, #60a5fa, #5eead4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
  },
  desktopNavHidden: {
    display: 'none',
  },
  navLink: {
    position: 'relative',
    transition: 'all 0.3s',
    fontWeight: '500',
    background: 'none',
    border: '2px solid transparent',
    cursor: 'pointer',
    color: '#d1d5db',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
  },
  navLinkActive: {
    color: '#5eead4',
    background: 'rgba(94, 234, 212, 0.1)',
    borderColor: 'rgba(94, 234, 212, 0.3)',
  },
  menuButton: {
    display: 'none',
    color: 'white',
    transition: 'all 0.3s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '0.5rem',
  },
  menuButtonVisible: {
    display: 'block',
  },
  mobileNav: {
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(94, 234, 212, 0.2)',
  },
  mobileNavInner: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  mobileNavLink: {
    width: '100%',
    textAlign: 'left',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s',
    background: 'none',
    border: '1px solid transparent',
    cursor: 'pointer',
    color: '#d1d5db',
    fontSize: '1rem',
  },
  mobileNavLinkActive: {
    color: '#5eead4',
    background: 'rgba(94, 234, 212, 0.2)',
    border: '1px solid rgba(94, 234, 212, 0.3)',
  },
};

// Add media query support
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    styles.desktopNav.display = 'none';
    styles.menuButton.display = 'block';
  }
}

export default Navbar;
