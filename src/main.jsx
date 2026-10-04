import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import projects from './data/projects.json';
import skills from './data/skills.json';
import profile from './data/profile.json';

const getView = () => (window.location.hash === '#recruiter' ? 'recruiter' : 'home');

function useView() {
  const [view, setView] = useState(getView);
  useEffect(() => {
    const onChange = () => setView(getView());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  useEffect(() => {
    if (view === 'recruiter') window.scrollTo(0, 0);
  }, [view]);
  return view;
}

// Renders nothing when the URL is not set, so the site never ships a dead link.
function LinkBtn({ href, secondary, children }) {
  if (!href) return null;
  const external = /^https?:/.test(href);
  return (
    <a
      className={secondary ? 'secondary' : 'primary'}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

function Header({ view }) {
  return (
    <header>
      <span className="logo">QA NK</span>
      <nav aria-label="Main">
        {view === 'home' ? (
          <>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#recruiter">Recruiter Mode</a>
          </>
        ) : (
          <a href="#">Full portfolio</a>
        )}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="badge">QA ENGINEER PORTFOLIO</div>
        <h1>Find bugs.<br />Build quality.</h1>
        <p>Interactive QA portfolio by {profile.name}.</p>
        <div className="actions">
          <a className="primary" href="#projects">START QA QUEST</a>
          <a className="secondary" href="#recruiter">RECRUITER MODE · 60 SEC</a>
        </div>
      </section>

      <section id="projects">
        <h2>QA Quest</h2>
        <div className="grid">
          {projects.map((p) => (
            <article className="card" key={p.id}>
              <div className="icon" aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.type}</p>
              <span>{p.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <b><span aria-hidden="true">{s.icon}</span> {s.name}</b>
              <div className="bar" role="presentation"><i style={{ width: s.level + '%' }} /></div>
              <small>{s.level}%</small>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>{profile.summary}</p>
      </section>
    </>
  );
}

function Recruiter() {
  const best = projects.find((p) => p.featured) || projects[0];
  const { cv, github, email } = profile.links;
  const missing = !cv && !github && !email;
  return (
    <div className="rm">
      <div className="badge">RECRUITER MODE</div>
      <h1>{profile.name}<br />{profile.role}</h1>
      <p className="lead">{profile.summary}</p>

      <div className="actions">
        <LinkBtn href={cv}>VIEW CV</LinkBtn>
        <LinkBtn href={github} secondary>GITHUB</LinkBtn>
        <LinkBtn href={email && 'mailto:' + email} secondary>CONTACT</LinkBtn>
      </div>
      {missing && import.meta.env.DEV && (
        <p className="hint">Dev note: add cv / github / email in src/data/profile.json. Buttons stay hidden until set.</p>
      )}

      <section>
        <h2>Key evidence</h2>
        <ul>{profile.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
      </section>
      <section>
        <h2>Best case</h2>
        <p>{best.icon} {best.title} · {best.type}</p>
      </section>
      <section>
        <h2>Core skills</h2>
        <ul className="chips">{skills.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
      </section>
      <section>
        <h2>Tools</h2>
        <ul className="chips">{profile.tools.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>
    </div>
  );
}

function App() {
  const view = useView();
  return (
    <div className="wrap">
      <a className="skip" href="#content">Skip to content</a>
      <Header view={view} />
      <main id="content">{view === 'recruiter' ? <Recruiter /> : <Home />}</main>
      <footer>QA NK · Quality is not an accident.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
