import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Eram from "./eram.png"

const NAV_LINKS = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Contact'];

const SKILLS = [
  { name: 'A+CCA', icon: '🖥️', desc: 'Computer Hardware & Applications' },
  { name: 'MS Excel', icon: '📈', desc: 'Data & Spreadsheet Management' },
  { name: 'MS Word', icon: '📝', desc: 'Document Creation & Formatting' },
  { name: 'Spreadsheet', icon: '📊', desc: 'Data Organisation & Analysis' },
  { name: 'Slide Presentation', icon: '📽️', desc: 'Visual Storytelling & Decks' },
];

const EDU = [
  {
    num: '01',
    degree: 'Graduation',
    course: 'Commerce (Honours)',
    institution: 'Harimohan Ghose College',
    location: 'Kolkata',
    icon: '🎓',
    color: 'var(--blush)',
  },
  {
    num: '02',
    degree: 'Higher Secondary — Class 12',
    course: 'Commerce Stream · 76%',
    institution: 'G.R.K.C. Mills High School',
    location: 'Kolkata',
    icon: '📚',
    color: 'var(--lavender)',
  },
  {
    num: '03',
    degree: 'Diploma in Computer Applications',
    course: 'Computer Applications',
    institution: 'Anudip Foundation',
    location: 'Govt. of West Bengal Registered',
    icon: '💻',
    color: 'var(--gold)',
  },
];

const TICKER_ITEMS = [
  'Commerce Graduate',
  'Computer Applications',
  'AI Enthusiast',
  'Kolkata, India',
  'Lifelong Learner',
  'Digital Skills',
  'Future Ready',
  'MS Office',
  'Aspiring AI Professional',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="ep-root">

      {/* ── NOISE OVERLAY ── */}
      <div className="ep-noise" aria-hidden="true" />

      {/* ── NAV ── */}
      <nav className={`ep-nav${scrolled ? ' ep-nav--scrolled' : ''}`} aria-label="Main navigation">
        <button className="ep-logo" onClick={() => scrollTo('home')}>
          <span className="ep-logo-e">E</span>RAM NAUSHAD
        </button>
        <ul className="ep-nav-links" role="list">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={activeSection === l.toLowerCase() ? 'ep-nav-active' : ''}
              >
                {l}
                <span className="ep-nav-dot" />
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`ep-hamburger${menuOpen ? ' ep-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`ep-mobile-menu${menuOpen ? ' ep-mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="ep-mobile-menu-bg" aria-hidden="true" />
        {NAV_LINKS.map((l, i) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{ '--i': i }}
            className={activeSection === l.toLowerCase() ? 'ep-mob-active' : ''}
          >
            <span className="ep-mob-num">0{i + 1}</span>
            {l}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="home" className="ep-hero" ref={heroRef}>
        {/* Animated orbs */}
        <div className="ep-orb ep-orb--1" aria-hidden="true" />
        <div className="ep-orb ep-orb--2" aria-hidden="true" />
        <div className="ep-orb ep-orb--3" aria-hidden="true" />
        <div className="ep-grid-lines" aria-hidden="true" />

        <div className="ep-hero-inner">
          <div className="ep-hero-content">
            <div className="ep-eyebrow-wrap">
              <span className="ep-eyebrow-dot" />
              <span className="ep-eyebrow">STUDENT · FUTURE AI ENTHUSIAST</span>
            </div>

            <h1 className="ep-hero-heading">
              <span className="ep-hero-hello">Hello, I'm</span>
              <span className="ep-hero-name">Eram<br />Naushad.</span>
            </h1>

            <p className="ep-hero-sub">
              A commerce student with a foundation in computer applications,
              eager to explore artificial intelligence and build meaningful digital skills.
            </p>

            <div className="ep-hero-btns">
              <button className="ep-btn ep-btn--primary" onClick={() => scrollTo('about')}>
                <span>Explore My Journey</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="ep-btn ep-btn--ghost" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
            </div>

            <div className="ep-hero-meta">
              <span className="ep-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                Kolkata, India
              </span>
              <span className="ep-hero-divider">·</span>
              <span className="ep-avail">
                <span className="ep-avail-dot" />
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Image side */}
          <div className="ep-hero-visual">
            <div className="ep-img-ring ep-img-ring--outer" aria-hidden="true" />
            <div className="ep-img-ring ep-img-ring--inner" aria-hidden="true" />
            <div className="ep-hero-frame">
              <img
                src={Eram}
                alt="Eram Naushad — student and aspiring AI enthusiast"
                className="ep-hero-img"
                onError={(e) => { e.target.style.background = 'var(--plum-light)'; e.target.src = ''; }}
              />
              <div className="ep-img-overlay" aria-hidden="true" />
            </div>
            {/* Floating cards */}
            <div className="ep-float-card ep-float-card--1">
              <span className="ep-fc-icon">✦</span>
              <div>
                <p className="ep-fc-title">Commerce</p>
                <p className="ep-fc-sub">Honours Graduate</p>
              </div>
            </div>
            <div className="ep-float-card ep-float-card--2">
              <span className="ep-fc-icon">🤖</span>
              <div>
                <p className="ep-fc-title">AI Aspirant</p>
                <p className="ep-fc-sub">Future Ready</p>
              </div>
            </div>
            <div className="ep-float-card ep-float-card--3">
              <span className="ep-fc-icon">💻</span>
              <div>
                <p className="ep-fc-title">Diploma</p>
                <p className="ep-fc-sub">Computer Applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="ep-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="ep-scroll-line" />
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ep-ticker" aria-hidden="true">
        <div className="ep-ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ep-ticker-item">
              {item} <span className="ep-ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="ep-section ep-about">
        <div className="ep-about-bg-text" aria-hidden="true">ABOUT</div>
        <div className="ep-section-inner ep-about-grid">
          <div className="ep-about-left">
            <span className="ep-section-label">
              <span className="ep-label-line" />
              A LITTLE ABOUT ME
            </span>
            <h2 className="ep-section-heading">
              Curious mind.<br />
              <em>Growing</em> ambitions.
            </h2>
            <p className="ep-body-text">
              I am Eram Naushad, a student with a background in commerce and computer
              applications. I enjoy learning new things, improving my computer skills,
              and exploring how technology can shape the future.
            </p>
            <p className="ep-body-text" style={{ marginTop: '1rem' }}>
              My goal is to begin my journey in artificial intelligence, continue
              learning, and develop practical skills that help me grow professionally.
            </p>

            <div className="ep-stat-row">
              <div className="ep-stat">
                <span className="ep-stat-num">3+</span>
                <span className="ep-stat-label">Qualifications</span>
              </div>
              <div className="ep-stat-divider" />
              <div className="ep-stat">
                <span className="ep-stat-num">5+</span>
                <span className="ep-stat-label">Computer Skills</span>
              </div>
              <div className="ep-stat-divider" />
              <div className="ep-stat">
                <span className="ep-stat-num">3</span>
                <span className="ep-stat-label">Languages</span>
              </div>
            </div>

            <div className="ep-highlights">
              {['Commerce Background', 'Computer Applications Diploma', 'Aspiring AI Learner'].map((h) => (
                <div key={h} className="ep-highlight-chip">
                  <span className="ep-chip-dot" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="ep-about-right">
            <div className="ep-about-card">
              <div className="ep-about-card-accent" aria-hidden="true" />
              <blockquote className="ep-about-quote">
                "Learning is not attained by chance, it must be sought for with ardour and attended to with diligence."
              </blockquote>
              <div className="ep-about-card-footer">
                <div className="ep-about-avatar">EN</div>
                <div>
                  <p className="ep-about-name">Eram Naushad</p>
                  <p className="ep-about-role">Student · Kolkata</p>
                </div>
              </div>
            </div>
            <div className="ep-about-deco-grid" aria-hidden="true">
              <div className="ep-deco-sq ep-deco-sq--1" />
              <div className="ep-deco-sq ep-deco-sq--2" />
              <div className="ep-deco-sq ep-deco-sq--3" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════ */}
      <section id="education" className="ep-section ep-education">
        <div className="ep-edu-orb" aria-hidden="true" />
        <div className="ep-section-inner">
          <span className="ep-section-label ep-section-label--light">
            <span className="ep-label-line ep-label-line--light" />
            ACADEMIC JOURNEY
          </span>
          <h2 className="ep-section-heading ep-section-heading--light">
            My Education<br /><em>Path.</em>
          </h2>

          <div className="ep-edu-list">
            {EDU.map((e, i) => (
              <div key={e.num} className="ep-edu-item" style={{ '--accent': e.color }}>
                <div className="ep-edu-num">{e.num}</div>
                <div className="ep-edu-connector" aria-hidden="true">
                  <div className="ep-edu-line" />
                  <div className="ep-edu-dot" />
                </div>
                <div className="ep-edu-card">
                  <div className="ep-edu-card-top">
                    <span className="ep-edu-icon-wrap">{e.icon}</span>
                    <span className="ep-edu-badge">{e.degree}</span>
                  </div>
                  <h3 className="ep-edu-course">{e.course}</h3>
                  <p className="ep-edu-inst">{e.institution}</p>
                  <p className="ep-edu-loc">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                    {e.location}
                  </p>
                  <div className="ep-edu-card-glow" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS
      ══════════════════════════════════════ */}
      <section id="skills" className="ep-section ep-skills">
        <div className="ep-skills-bg-text" aria-hidden="true">SKILLS</div>
        <div className="ep-section-inner">
          <span className="ep-section-label">
            <span className="ep-label-line" />
            COMPUTER SKILLS
          </span>
          <h2 className="ep-section-heading">
            Tools I<br /><em>Master.</em>
          </h2>
          <p className="ep-skills-sub">
            Building a strong foundation in computer applications and digital
            productivity tools while continuing to learn and grow.
          </p>

          <div className="ep-skills-grid">
            {SKILLS.map((s, i) => (
              <div key={s.name} className="ep-skill-card" style={{ '--delay': `${i * 0.08}s` }}>
                <div className="ep-skill-icon-wrap">{s.icon}</div>
                <h3 className="ep-skill-name">{s.name}</h3>
                <p className="ep-skill-desc">{s.desc}</p>
                <div className="ep-skill-bar">
                  <div className="ep-skill-bar-fill" />
                </div>
                <div className="ep-skill-card-glow" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="ep-lang-section">
            <h3 className="ep-lang-heading">
              <span className="ep-label-line" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.75rem' }} />
              Languages I Speak
            </h3>
            <div className="ep-lang-cards">
              {[
                { lang: 'English', flag: '🇬🇧' },
                { lang: 'Hindi', flag: '🇮🇳' },
                { lang: 'Urdu', flag: '🌙' },
              ].map((l) => (
                <div key={l.lang} className="ep-lang-card">
                  <span className="ep-lang-flag">{l.flag}</span>
                  <span className="ep-lang-name">{l.lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════ */}
      <section id="experience" className="ep-section ep-experience">
        <div className="ep-exp-orb" aria-hidden="true" />
        <div className="ep-section-inner">
          <span className="ep-section-label ep-section-label--light">
            <span className="ep-label-line ep-label-line--light" />
            WORK HISTORY
          </span>
          <h2 className="ep-section-heading ep-section-heading--light">
            Professional<br /><em>Experience.</em>
          </h2>

          <div className="ep-exp-timeline">
            <div className="ep-exp-tl-line" aria-hidden="true" />
            <div className="ep-exp-entry">
              <div className="ep-exp-tl-dot" aria-hidden="true">
                <div className="ep-exp-tl-dot-inner" />
              </div>
              <div className="ep-exp-card">
                <div className="ep-exp-card-header">
                  <div className="ep-exp-period-badge">2023 – 2024</div>
                  <div className="ep-exp-status">Completed</div>
                </div>
                <h3 className="ep-exp-org">INTELLIGENT MANAGAEMENT<br />Pvt. Ltd.</h3>
                <p className="ep-exp-note">
                  Gained professional exposure and hands-on practical experience
                  in a corporate environment during this period. Details available upon request.
                </p>
                <div className="ep-exp-tags">
                  <span>Professional Exposure</span>
                  <span>Corporate Environment</span>
                  <span>Practical Experience</span>
                </div>
                <div className="ep-exp-card-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AI ASPIRATIONS
      ══════════════════════════════════════ */}
      <section className="ep-section ep-ai">
        <div className="ep-ai-orb ep-ai-orb--1" aria-hidden="true" />
        <div className="ep-ai-orb ep-ai-orb--2" aria-hidden="true" />
        <div className="ep-section-inner ep-ai-inner">
          <span className="ep-section-label ep-section-label--light">
            <span className="ep-label-line ep-label-line--light" />
            WHAT'S NEXT
          </span>
          <h2 className="ep-ai-heading">
            My next chapter:<br />
            <span className="ep-ai-heading-accent">Exploring AI.</span>
          </h2>
          <p className="ep-ai-body">
            I am eager to start learning about artificial intelligence and discover
            how technology can solve real-world problems. I believe in continuous
            learning, developing new skills, and growing step by step.
          </p>
          <div className="ep-ai-grid">
            {[
              { icon: '🧠', title: 'Machine Learning', desc: 'Understanding how machines learn from data' },
              { icon: '📊', title: 'Data Literacy', desc: 'Reading and interpreting data meaningfully' },
              { icon: '🤖', title: 'AI Tools', desc: 'Exploring modern AI-powered applications' },
              { icon: '💡', title: 'Problem Solving', desc: 'Applying technology to real-world challenges' },
            ].map((item) => (
              <div key={item.title} className="ep-ai-card">
                <span className="ep-ai-card-icon">{item.icon}</span>
                <h3 className="ep-ai-card-title">{item.title}</h3>
                <p className="ep-ai-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="ep-section ep-contact">
        <div className="ep-contact-bg-text" aria-hidden="true">HELLO</div>
        <div className="ep-section-inner ep-contact-inner">
          <span className="ep-section-label">
            <span className="ep-label-line" />
            GET IN TOUCH
          </span>
          <h2 className="ep-contact-heading">
            Let's<br /><em>connect.</em>
          </h2>
          <p className="ep-contact-sub">
            I'm always interested in learning, growing, and connecting with new opportunities.
            Feel free to reach out — I'd love to hear from you.
          </p>

          <div className="ep-contact-grid">
            <a href="mailto:eramnaushad35@gmail.com" className="ep-contact-card" aria-label="Send email to Eram">
              <div className="ep-contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>
              </div>
              <div>
                <p className="ep-contact-card-label">Email</p>
                <p className="ep-contact-card-value">eramnaushad35@gmail.com</p>
              </div>
              <div className="ep-contact-arrow">→</div>
            </a>

            <a href="tel:9748671446" className="ep-contact-card" aria-label="Call Eram">
              <div className="ep-contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="ep-contact-card-label">Phone</p>
                <p className="ep-contact-card-value">9748671446</p>
              </div>
              <div className="ep-contact-arrow">→</div>
            </a>

            <div className="ep-contact-card ep-contact-card--addr">
              <div className="ep-contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </div>
              <div>
                <p className="ep-contact-card-label">Address</p>
                <p className="ep-contact-card-value">R50/5/B Karbala Lane, Garden Reach,<br />Kolkata 700024</p>
              </div>
            </div>
          </div>

          <a href="mailto:eramnaushad35@gmail.com" className="ep-btn ep-btn--primary ep-contact-cta">
            <span>Send Me an Email</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ep-footer">
        <div className="ep-footer-inner">
          <div className="ep-footer-top">
            <div className="ep-footer-brand">
              <p className="ep-footer-name">ERAM NAUSHAD</p>
              <p className="ep-footer-role">Student · Aspiring AI Learner</p>
            </div>
            <nav className="ep-footer-nav" aria-label="Footer navigation">
              {NAV_LINKS.map((l) => (
                <button key={l} onClick={() => scrollTo(l)}>{l}</button>
              ))}
            </nav>
          </div>
          <div className="ep-footer-line" aria-hidden="true" />
          <div className="ep-footer-bottom">
            <span>© {new Date().getFullYear()} Eram Naushad. All rights reserved.</span>
            <button className="ep-back-top" onClick={() => scrollTo('home')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              Back to Top
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
