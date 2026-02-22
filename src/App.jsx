import { useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Link as LinkIcon,
  Monitor,
  Server,
  Database,
  Cloud,
  Code2,
  Cpu,
  Boxes,
  FileCode,
  Terminal,
  Coffee,
  ArrowRight
} from 'lucide-react';
import './index.css';

// Custom Hook for Scroll Reveal Animation
const useScrollReveal = () => {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRef = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return addToRef;
};

function App() {
  const revealRef = useScrollReveal();

  return (
    <>
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="container">
        <div className="profile-container fade-in">
          <div className="glass-profile-card" style={{ maxWidth: '800px', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="profile-image-wrapper" style={{ width: '140px', height: '140px', marginBottom: '2rem' }}>
              <img src="/src/assets/philemon.png" alt="Philemon Paul" className="profile-image" />
            </div>

            <h1 className="profile-name" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1rem', textAlign: 'center' }}>
              Hi, I'm <span className="highlight-name">Philemon Paul</span>.
            </h1>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'rgba(255,255,255,0.85)', fontWeight: 400, textAlign: 'center', marginBottom: '2rem' }}>
              An Aspiring Software Engineer.
            </h2>

            <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
              Crafting elegant, high-performance applications with a focus on modern user experiences and robust architectures.
            </p>

            <div className="profile-actions">
              <a href="#projects" className="action-btn">
                <FileCode size={18} /> Projects
              </a>
              <a href="mailto:pa.philemonpaul@gmail.com" className="action-btn">
                <Mail size={18} /> Email
              </a>
              <a href="https://www.linkedin.com/in/pphilemonpaul/" target="_blank" rel="noreferrer" className="action-btn">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/PhilemonPaul" target="_blank" rel="noreferrer" className="action-btn">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* --- TECHNOLOGIES & LANGUAGES SECTION --- */}
        <section id="tech-stack">
          <h2 ref={revealRef}>Languages & Tech Stack</h2>
          <div className="tech-grid">
            <div className="glass-pill" ref={revealRef}>
              <FileCode className="tech-icon" />
              <span className="tech-name">C++</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Coffee className="tech-icon" />
              <span className="tech-name">Java</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Terminal className="tech-icon" />
              <span className="tech-name">Python</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Cpu className="tech-icon" />
              <span className="tech-name">React</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Monitor className="tech-icon" />
              <span className="tech-name">Next.js</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Server className="tech-icon" />
              <span className="tech-name">Node.js</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Code2 className="tech-icon" />
              <span className="tech-name">Spring Boot</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Database className="tech-icon" />
              <span className="tech-name">PostgreSQL</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Boxes className="tech-icon" />
              <span className="tech-name">Docker</span>
            </div>
            <div className="glass-pill" ref={revealRef}>
              <Cloud className="tech-icon" />
              <span className="tech-name">AWS</span>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <h2 ref={revealRef}>Selected Works</h2>
          <div className="projects-grid">

            <div className="glass-card project-card" ref={revealRef}>
              <div className="project-image" style={{ background: 'linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)' }}></div>
              <div className="project-content">
                <h3 className="project-title">CloudOps Dashboard</h3>
                <p className="project-desc">
                  A high-performance analytics dashboard for monitoring containerized infrastructure.
                </p>
                <div className="tech-stack-badges">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#"><Github size={18} /> Code</a>
                  <a href="#"><ArrowRight size={18} /> Live Demo</a>
                </div>
              </div>
            </div>

            <div className="glass-card project-card" ref={revealRef}>
              <div className="project-image" style={{ background: 'linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)' }}></div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Core</h3>
                <p className="project-desc">
                  A headless e-commerce backend driving fast checkouts and real-time inventory updates.
                </p>
                <div className="tech-stack-badges">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">Spring Boot</span>
                  <span className="tech-badge">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#"><Github size={18} /> Code</a>
                  <a href="#"><ArrowRight size={18} /> Live Demo</a>
                </div>
              </div>
            </div>

            <div className="glass-card project-card" ref={revealRef}>
              <div className="project-image" style={{ background: 'linear-gradient(120deg, #fa709a 0%, #fee140 100%)' }}></div>
              <div className="project-content">
                <h3 className="project-title">Trading Engine</h3>
                <p className="project-desc">
                  Ultra low-latency matching engine built for high-frequency trading simulations.
                </p>
                <div className="tech-stack-badges">
                  <span className="tech-badge">C++</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">Redis</span>
                </div>
                <div className="project-links">
                  <a href="#"><Github size={18} /> Code</a>
                  <a href="#"><ArrowRight size={18} /> Live Demo</a>
                </div>
              </div>
            </div>

            <div className="glass-card project-card" ref={revealRef}>
              <div className="project-image" style={{ background: 'linear-gradient(120deg, #667eea 0%, #764ba2 100%)' }}></div>
              <div className="project-content">
                <h3 className="project-title">AI Content Pipeline</h3>
                <p className="project-desc">
                  An automated content generation pipeline integrating with top AI text models.
                </p>
                <div className="tech-stack-badges">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">LLMs</span>
                </div>
                <div className="project-links">
                  <a href="#"><Github size={18} /> Code</a>
                  <a href="#"><ArrowRight size={18} /> Live Demo</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default App;
