import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import projects from './data/projects.json';
import skills from './data/skills.json';

function App(){return <main><header><span className="logo">QA NK</span><nav><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a></nav></header><section className="hero"><div className="badge">QA ENGINEER PORTFOLIO</div><h1>Find bugs.<br/>Build quality.</h1><p>Interactive QA portfolio by Natali.</p><div className="actions"><button>START QA QUEST</button><a className="secondary" href="#projects">VIEW PROJECTS</a></div></section><section id="projects"><h2>QA Quest</h2><div className="grid">{projects.map(p=><article className="card" key={p.id}><div className="icon">{p.icon}</div><h3>{p.title}</h3><p>{p.type}</p><span>{p.status}</span></article>)}</div></section><section id="skills"><h2>QA Lab</h2><div className="skills">{skills.map(s=><div className="skill" key={s.name}><b>{s.icon} {s.name}</b><div className="bar"><i style={{width:s.level+'%'}}/></div><small>{s.level}%</small></div>)}</div></section><section id="about"><h2>About</h2><p>I test products from the user's perspective and from the system's perspective — with focus on manual testing, API validation, bug reporting and AI response evaluation.</p></section><footer>QA NK · Quality is not an accident.</footer></main>}
createRoot(document.getElementById('root')).render(<App/>);
