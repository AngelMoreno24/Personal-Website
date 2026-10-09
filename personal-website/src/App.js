import React, { useState } from "react";
import "./Portfolio.css";
import algorithmVisualizer from "./images/algorithmVisualizer.PNG";
import expenseTracker from "./images/expenseTracker.PNG";
import pathfindingVisualizer from "./images/pathfindingVisualizer.PNG";
import chatApp from "./images/chatApp.PNG";
import ticketTracker from "./images/ticketTracker.PNG";

const skills = [
  { category: "Languages", items: ["C#", "Java", "JavaScript", "Python"] },
  { category: "Frameworks", items: ["React", "ASP.NET", ".NET", "Express", "Node.js"] },
  { category: "Data", items: ["MongoDB", "SQL", "Azure SQL"] },
];

const projects = [
  {
    name: "Pathfinding Visualizer",
    image: pathfindingVisualizer,
    description: "Explore pathfinding algorithms on an animated, interactive grid.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/AngelMoreno24/pathfinder-visualizer",
    demo: "https://pathfindingvizualizer.netlify.app/",
  },
  {
    name: "Algorithm Visualizer",
    image: algorithmVisualizer,
    description: "Interactive visualizations for common sorting and searching algorithms.",
    stack: ["React", "JavaScript", "Bootstrap"],
    github: "https://github.com/AngelMoreno24/AlgoVizualizer",
    demo: "https://am-algorithm-visualizer.netlify.app",
  },
  {
    name: "Expense Tracker",
    image: expenseTracker,
    description: "Track daily expenses and get a clearer view of spending habits.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AngelMoreno24/Expense-Tracker",
    demo: "https://gorgeous-churros-134386.netlify.app",
  },
  {
    name: "Chat Application",
    image: chatApp,
    description: "A real-time chat app with multiple rooms and user authentication.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Azure SQL"],
    github: "https://github.com/AngelMoreno24/chat-website",
    demo: "https://am-chat-application.netlify.app/home",
  },
  {
    name: "Ticket Tracker",
    image: ticketTracker,
    description: "Manage software tickets with comments, attachments, and status updates.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AngelMoreno24/Bug-Tracker",
    demo: "https://am-ticket-tracker.netlify.app",
  },
];

const experience = [
  {
    role: "Amazon Sortation Center Associate",
    organization: "Amazon Sortation Center",
    dates: "April 2026 - Present",
    highlights: [
      "Sort and scan packages using warehouse tracking systems to ensure accurate routing and shipment processing while adapting quickly to changing priorities and workloads.",
    ],
  },
  {
    role: "Full-Stack Developer Internship",
    organization: "Playtoon It",
    location: "Remote",
    dates: "December 2025 - May 2026",
    highlights: [
      "Developed REST API endpoints and server-side functionality using Node.js, Express, and PostgreSQL.",
      "Collaborated with developers through Git workflows, code reviews, and weekly meetings.",
      "Designed and enforced Role-Based Access Control (RBAC) using Next.js Middleware and Prisma to secure application routes and server-side operations.",
    ],
  },
  {
    role: "Technical Consultant",
    organization: "Independent Project (Pool Company)",
    dates: "Summer 2025",
    highlights: [
      "Designed a Google Sheets workflow to track pool job expenses and customer records.",
      "Implemented Google Sheets formulas to automate calculation of expenses, taxes, and profit.",
    ],
  },
  {
    role: "ASU Senior Capstone Project",
    organization: "General Dynamics",
    dates: "August 2023 - May 2024",
    highlights: [
      "Developed a demo application to test hardware via SCPI commands, reducing manual testing.",
      "Led backend development for SCPI command parsing, validation, and execution.",
      "Collaborated in Agile sprints, participating in planning, development, and project reviews.",
    ],
  },
];

function TechList({ items }) {
  return (
    <div className="tech-list">
      {items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isProjectsPage = window.location.pathname.replace(/\/$/, "") === "/projects";
  const sectionHref = (section) => isProjectsPage ? `/#${section}` : `#${section}`;

  return (
    <div className="site-shell" data-theme={isDarkMode ? "dark" : "light"}>
      <header className="site-header">
        <nav className="top-nav" aria-label="Main navigation">
          <a href={sectionHref("about")}>About</a>
          <a href={sectionHref("education")}>Education</a>
          <a href={sectionHref("experience")}>Experience</a>
          <a href={isProjectsPage ? "/projects" : "#projects"}>Projects</a>
          <a href={sectionHref("skills")}>Skills</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsDarkMode((darkMode) => !darkMode)}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span aria-hidden="true">{isDarkMode ? "☼" : "◐"}</span>
        </button>
      </header>

      <main id="top">
        {isProjectsPage ? (
          <section className="section-wrap projects-page" id="projects" aria-labelledby="projects-title">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SELECTED WORK</p>
                <h1 id="projects-title">Projects</h1>
              </div>
              <a className="text-link view-more-link" href="/#about">Back to home <span aria-hidden="true">↗</span></a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.name} />
              ))}
            </div>
          </section>
        ) : (
          <>
        <section className="hero-section" id="about" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="availability-dot" aria-hidden="true" />
              COMPUTER SCIENCE GRADUATE
              <span className="eyebrow-divider" aria-hidden="true">/</span>
              PHOENIX, AZ
            </p>
            <h1 id="intro-title">Angel Moreno<span>.</span></h1>
            <p className="hero-lede">Computer Science graduate focused on full-stack development, interactive tools, and thoughtful user experiences. I enjoy taking an idea from the first sketch through to a working product.</p>
            <div className="profile-skills" id="skills" aria-labelledby="profile-skills-title">
              <h2 id="profile-skills-title">Skills</h2>
              {skills.map((group) => (
                <div className="profile-skill-row" key={group.category}>
                  <h3>{group.category}</h3>
                  <TechList items={group.items} />
                </div>
              ))}
            </div>
            <div className="hero-links" aria-label="Resume and contact links">
              <a href="/Angel_Moreno_Resume.pdf" download="Angel_Moreno_Resume.pdf">
                <img src="/icons/resume.svg" alt="" aria-hidden="true" />Resume
              </a>
              <a href="https://www.linkedin.com/in/angel-moreno-1568b5327/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />LinkedIn
              </a>
              <a href="https://github.com/AngelMoreno24" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.svg" alt="" aria-hidden="true" />GitHub
              </a>
              <a href="mailto:angel.moreno8424@gmail.com">
                <img src="/icons/email.svg" alt="" aria-hidden="true" />Email
              </a>
            </div>
          </div>

          <div className="portrait-placeholder" role="img" aria-label="Portrait photo placeholder">
            <span className="portrait-symbol" aria-hidden="true">+</span>
            <span className="portrait-caption">PORTRAIT PHOTO</span>
          </div>
        </section>

        <section className="education-section" id="education" aria-labelledby="education-title">
          <div className="education-copy">
            <p className="section-kicker">FOUNDATION</p>
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-entry">
            <div className="education-mark" aria-hidden="true">BS / CS</div>
            <div>
              <h3>Bachelor of Computer Science</h3>
              <p>Arizona State University</p>
              <p>Ira A. Fulton Schools of Engineering</p>
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">WORK / EXPERIENCE</p>
              <h2 id="experience-title">Experience</h2>
            </div>
          </div>
          <div className="experience-list">
            {experience.map((entry) => (
              <article className="experience-entry" key={entry.role}>
                <div className="experience-heading">
                  <div className="experience-title-group">
                    <h3>{entry.role}</h3>
                    <p className="experience-organization">
                      {entry.organization}{entry.location ? ` · ${entry.location}` : ""}
                    </p>
                  </div>
                  <div className="experience-meta">{entry.dates}</div>
                </div>
                <ul className="experience-highlights">
                  {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2 id="projects-title">Featured projects</h2>
            </div>
            <a className="text-link view-more-link" href="/projects">View more <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Angel Moreno</span>
        <div className="footer-links">
          <a href="mailto:angel.moreno8424@gmail.com"><img src="/icons/email.svg" alt="" aria-hidden="true" />Email</a>
          <a href="https://github.com/AngelMoreno24" target="_blank" rel="noopener noreferrer"><img src="/icons/github.svg" alt="" aria-hidden="true" />GitHub</a>
          <a href="https://www.linkedin.com/in/angel-moreno-1568b5327/" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin.svg" alt="" aria-hidden="true" />LinkedIn</a>
          <a href="/Angel_Moreno_Resume.pdf" download="Angel_Moreno_Resume.pdf"><img src="/icons/resume.svg" alt="" aria-hidden="true" />Resume</a>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <a className="project-image-link" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} demo`}>
        <img className="project-image" src={project.image} alt={`${project.name} interface`} loading="lazy" />
      </a>
      <div className="project-heading">
        <span className="project-number">0{index + 1}</span>
        <h3>{project.name}</h3>
        <a className="round-arrow" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`}>↗</a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        <TechList items={project.stack} />
        <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export default App;