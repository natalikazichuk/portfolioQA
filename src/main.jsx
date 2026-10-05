import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import projects from './data/projects.json';
import skills from './data/skills.json';
import profile from './data/profile.json';

const projectLinks = {
  'veteran-job-portal': 'https://github.com/natalikazichuk/veteran-jobs-portal-testing',
  navkolo: 'https://github.com/natalikazichuk/portfolioQA2026/blob/main/docs/navkolo/README.md',
  guru99: 'https://github.com/natalikazichuk/portfolioQA2026/blob/main/docs/guru99/README.md',
  'snake-eye': 'https://github.com/natalikazichuk/Snake-Eye',
  schoolkingdoms: 'https://github.com/natalikazichuk/schoolkingdoms'
};

const vjpDocsLink = 'https://github.com/natalikazichuk/portfolioQA2026/blob/main/docs/vjp/README.md';

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
      <a className="brand" href="#">
        <span className="brand-mark">QA</span>
        <span>NK</span>
      </a>
      <nav aria-label="Main navigation">
        {view === 'home' ? <>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#evidence">Evidence</a>
          <a href="#about">About</a>
        </> : <a href="#">← Portfolio</a>}
      </nav>
      <div className="header-actions">
        <span className="availability"><i /> AVAILABLE</span>
        <a className="header-cta" href="#recruiter">Recruiter <span>↗</span></a>
      </div>
    </header>
  );
}

function Metric({value,label}) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function ProjectCard({p,index}) {
  const href = projectLinks[p.id];
  const style = p.image ? {'--shot': `url(${import.meta.env.BASE_URL}${p.image})`} : undefined;
  return (
    <a className={'project-card'+(p.featured?' featured':'')+(p.image?' has-shot':'')} style={style} href={href} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + p.title + ' project'}>
      <div className="project-top">
        <span className="project-number">0{index+1}</span>
        <span className="status">{p.status}</span>
      </div>
      <div className="project-icon">{p.icon}</div>
      <div className="project-content">
        <h3>{p.title}</h3>
        <p>{p.type}</p>
      </div>
      <div className="project-link">OPEN PROJECT <span>↗</span></div>
    </a>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> QA ENGINEER PORTFOLIO</div>
          <h1>Find bugs.<br /><em>Build quality.</em></h1>
          <p className="hero-lead">Manual QA · API Testing · AI / LLM Evaluation</p>
          <p className="hero-text">{profile.summary}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">EXPLORE PROJECTS <span>↗</span></a>
            <a className="btn btn-ghost" href="#recruiter">RECRUITER MODE · 60 SEC</a>
          </div>
          <div className="hero-proof">
            <span>✓ User stories</span><span>✓ Test cases</span><span>✓ Bug reports</span><span>✓ API checks</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-glow" />
          <div className="panel-head"><span>QA STATUS</span><b>LIVE</b></div>
          <div className="terminal">
            <div><span className="dot green" /> SYSTEM CHECK <small>PASS</small></div>
            <div><span className="dot cyan" /> API VALIDATION <small>PASS</small></div>
            <div><span className="dot gold" /> BUG HUNT <small>ACTIVE</small></div>
            <div><span className="dot purple" /> AI EVALUATION <small>READY</small></div>
          </div>
          <div className="panel-score"><strong>QA</strong><span>evidence-driven<br />testing mindset</span></div>
        </div>
      </section>

      <section className="metrics" aria-label="Portfolio metrics">
        <Metric value={projects.length} label="PRODUCTS TESTED" />
        <Metric value="100+" label="TEST CASES" />
        <Metric value="20+" label="ISSUES FOUND" />
        <Metric value="50+" label="API CHECKS" />
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <div><div className="eyebrow">01 / EXPERIENCE</div><h2>QA Projects</h2></div>
          <p>Hands-on testing across web applications, a business SaaS, a banking app, data projects and an educational platform.</p>
        </div>
        <div className="project-grid">{projects.map((p,i)=><ProjectCard p={p} index={i} key={p.id}/>)}</div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <div><div className="eyebrow">02 / CAPABILITIES</div><h2>QA Skills</h2></div>
          <p>From exploratory testing and test design to APIs and AI response evaluation.</p>
        </div>
        <div className="skills-grid">
          {skills.map((s)=><div className="skill-card" key={s.name}>
            <div className="skill-head"><span>{s.icon} {s.name}</span><b>{s.level}%</b></div>
            <div className="bar"><i style={{width:s.level+'%'}} /></div>
          </div>)}
        </div>
      </section>

      <section id="evidence" className="section evidence-section">
        <div className="evidence-card">
          <div className="evidence-copy">
            <div className="eyebrow">03 / PROOF OF WORK</div>
            <h2>One bug can change the whole story.</h2>
            <p>{profile.highlights[0]}</p>
            <div className="bug-row">
              <span className="severity">HIGH</span>
              <span>Guest → Application → Recruiter</span>
              <span className="verified">✓ FIX VERIFIED</span>
            </div>
          </div>
          <div className="bug-mark">BUG<br />FOUND</div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div><div className="eyebrow">04 / ABOUT</div><h2>Quality is not an accident.</h2></div>
        <div>
          <p>{profile.summary}</p>
          <div className="about-points">
            {profile.highlights.slice(1).map((h,i)=><div key={h}><span>0{i+1}</span><p>{h}</p></div>)}
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div><div className="eyebrow">READY TO TALK?</div><h2>Let's build better software.</h2></div>
        <a className="btn btn-primary" href="#recruiter">VIEW RECRUITER MODE <span>↗</span></a>
      </section>
    </>
  );
}

function Recruiter() {
  const best = projects.find(p=>p.featured)||projects[0];
  const github = 'https://github.com/natalikazichuk';
  const email = 'mailto:natalikazichuk@gmail.com';
  return <div className="recruiter-page">
    <div className="eyebrow">RECRUITER MODE · 60 SEC</div>
    <h1>{profile.name}<br /><em>{profile.role}</em></h1>
    <p className="hero-text">{profile.summary}</p>
    <div className="actions">
      <LinkBtn href={github}>GITHUB ↗</LinkBtn>
      <LinkBtn href={email} secondary>CONTACT</LinkBtn>
      <a className="btn btn-ghost" href="#">← FULL PORTFOLIO</a>
    </div>
    <div className="recruit-grid">
      <section><span className="eyebrow">KEY EVIDENCE</span><ul>{profile.highlights.map(h=><li key={h}>{h}</li>)}</ul></section>
      <section><span className="eyebrow">BEST CASE</span><h2>{best.icon} {best.title}</h2><p>{best.type}</p><a className="text-link" href={projectLinks[best.id]} target="_blank" rel="noopener noreferrer">Open case →</a>{best.id==='veteran-job-portal' && <> · <a className="text-link" href={vjpDocsLink} target="_blank" rel="noopener noreferrer">Test plan, cases &amp; RTM →</a></>}</section>
      <section><span className="eyebrow">TOOLS</span><div className="chips">{profile.tools.map(t=><span key={t}>{t}</span>)}</div></section>
    </div>
  </div>;
}

function App() {
  const view=useView();
  return <div className="site">
    <a className="skip" href="#content">Skip to content</a>
    <Header view={view}/>
    <main id="content">{view==='recruiter'?<Recruiter/>:<Home/>}</main>
    <footer><span>QA NK</span><span>Manual QA · API · AI Evaluation</span><span>Quality is not an accident.</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
