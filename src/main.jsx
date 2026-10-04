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
  useEffect(() => window.scrollTo(0, 0), [view]);
  return view;
}

function LinkBtn({ href, secondary, children }) {
  if (!href) return null;
  const external = /^https?:/.test(href);
  return <a className={secondary ? 'btn btn-ghost' : 'btn btn-primary'} href={href} {...(external ? {target:'_blank',rel:'noopener noreferrer'} : {})}>{children}</a>;
}

function Header({ view }) {
  return (
    <header className="topbar">
      <a className="brand" href="#"><span className="brand-mark">QA</span><span>NK</span></a>
      <nav aria-label="Main navigation">
        {view === 'home' ? <>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#evidence">Evidence</a>
          <a href="#recruiter">Recruiter</a>
        </> : <a href="#">← Full portfolio</a>}
      </nav>
      <span className="availability"><i /> AVAILABLE</span>
    </header>
  );
}

function Metric({value,label}) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function ProjectCard({p,index}) {
  return (
    <article className="project-card">
      <div className="project-top"><span className="project-number">0{index+1}</span><span className="status">{p.status}</span></div>
      <div className="project-icon">{p.icon}</div>
      <h3>{p.title}</h3>
      <p>{p.type}</p>
      <div className="project-link">VIEW CASE <span>→</span></div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> QA ENGINEER PORTFOLIO</div>
          <h1>Find bugs.<br /><em>Build quality.</em></h1>
          <p className="hero-lead">Manual QA · API Testing · AI Evaluation</p>
          <p className="hero-text">I test products from the user's perspective and from the system's perspective — with real test cases, bug reports and measurable evidence.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">START QA QUEST <span>↗</span></a>
            <a className="btn btn-ghost" href="#recruiter">RECRUITER MODE · 60 SEC</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-head"><span>QA STATUS</span><b>LIVE</b></div>
          <div className="terminal">
            <div><span className="dot green" /> SYSTEM CHECK</div>
            <div><span className="dot cyan" /> API VALIDATION</div>
            <div><span className="dot gold" /> BUG HUNT</div>
            <div><span className="dot purple" /> AI EVALUATION</div>
          </div>
          <div className="panel-score"><strong>100%</strong><span>quality mindset</span></div>
        </div>
      </section>

      <section className="metrics">
        <Metric value="3+" label="PROJECTS" />
        <Metric value="100+" label="TEST CASES" />
        <Metric value="20+" label="BUGS FOUND" />
        <Metric value="50+" label="API TESTS" />
      </section>

      <section id="projects" className="section">
        <div className="section-heading"><div><div className="eyebrow">01 / EXPERIENCE</div><h2>QA Quest</h2></div><p>Real projects. Real testing. Real evidence.</p></div>
        <div className="project-grid">{projects.map((p,i)=><ProjectCard p={p} index={i} key={p.id}/>)}</div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading"><div><div className="eyebrow">02 / CAPABILITIES</div><h2>QA Skills</h2></div><p>My testing toolkit, from exploratory work to API and AI evaluation.</p></div>
        <div className="skills-grid">
          {skills.map((s)=><div className="skill-card" key={s.name}><div className="skill-head"><span>{s.icon} {s.name}</span><b>{s.level}%</b></div><div className="bar"><i style={{width:s.level+'%'}} /></div></div>)}
        </div>
      </section>

      <section id="evidence" className="section evidence-section">
        <div className="evidence-card">
          <div className="eyebrow">03 / PROOF OF WORK</div>
          <h2>One bug can change the whole story.</h2>
          <p>{profile.highlights[0]}</p>
          <div className="bug-row"><span className="severity">HIGH</span><span>Guest → Application → Recruiter</span><span className="verified">✓ FIX VERIFIED</span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div><div className="eyebrow">04 / ABOUT</div><h2>Quality is not an accident.</h2></div>
        <p>{profile.summary}</p>
      </section>
    </>
  );
}

function Recruiter() {
  const best = projects.find(p=>p.featured)||projects[0];
  const {cv,github,email}=profile.links;
  return <div className="recruiter-page">
    <div className="eyebrow">RECRUITER MODE · 60 SEC</div>
    <h1>{profile.name}<br /><em>{profile.role}</em></h1>
    <p className="hero-text">{profile.summary}</p>
    <div className="actions"><LinkBtn href={cv}>VIEW CV</LinkBtn><LinkBtn href={github} secondary>GITHUB</LinkBtn><LinkBtn href={email&&'mailto:'+email} secondary>CONTACT</LinkBtn></div>
    <div className="recruit-grid">
      <section><span className="eyebrow">KEY EVIDENCE</span><ul>{profile.highlights.map(h=><li key={h}>{h}</li>)}</ul></section>
      <section><span className="eyebrow">BEST CASE</span><h2>{best.icon} {best.title}</h2><p>{best.type}</p></section>
      <section><span className="eyebrow">TOOLS</span><div className="chips">{profile.tools.map(t=><span key={t}>{t}</span>)}</div></section>
    </div>
  </div>;
}

function App() {
  const view=useView();
  return <div className="site"><a className="skip" href="#content">Skip to content</a><Header view={view}/><main id="content">{view==='recruiter'?<Recruiter/>:<Home/>}</main><footer><span>QA NK</span><span>Manual QA · API · AI Evaluation</span><span>Quality is not an accident.</span></footer></div>;
}

createRoot(document.getElementById('root')).render(<App />);
