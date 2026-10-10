import React, { useState } from "react";
import "./Portfolio.css";
import algorithmVisualizer from "./images/algorithmVisualizer.PNG";
import expenseTracker from "./images/expenseTracker.PNG";
import pathfindingVisualizer from "./images/pathfindingVisualizer.PNG";
import chatApp from "./images/chatApp.PNG";
import ticketTracker from "./images/ticketTracker.PNG";
import poolAngel from "./images/poolAngel.PNG";

const skills = [
  { category: "Languages", items: ["C#", "Java", "JavaScript", "Python"] },
  { category: "Frameworks", items: ["React", "ASP.NET", ".NET", "Express", "Node.js"] },
  { category: "Data", items: ["MongoDB", "SQL", "Azure SQL"] },
];

const projects = [
  {
    name: "Ticket Tracker",
    image: ticketTracker,
    description: "Manage software tickets with comments, attachments, and status updates.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AngelMoreno24/Bug-Tracker",
    demo: "https://am-ticket-tracker.netlify.app",
  },
  {
    name: "Pool Angel",
    image: poolAngel,
    description: "A full-stack pool service operations platform for managing customers, properties, pools, recurring jobs, technician routes, service visits, and business reporting.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase Auth"],
    github: "https://github.com/AngelMoreno24/Pool-Angel",
    demo: "https://am-pool-angel.netlify.app/",
  },
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
  },
  {
    name: "Chat Application",
    image: chatApp,
    description: "A real-time chat app with multiple rooms and user authentication.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Azure SQL"],
    github: "https://github.com/AngelMoreno24/chat-website",
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
  const [activeHistoryTab, setActiveHistoryTab] = useState("experience");
  const isProjectsPage = window.location.pathname.replace(/\/$/, "") === "/projects";

  return (
    <div className="site-shell" data-theme={isDarkMode ? "dark" : "light"}>
      <header className="site-header">
        <nav className="top-nav" aria-label="Main navigation">
          <a href={isProjectsPage ? "/" : "#about"}>Home</a>
          <a href="/projects">Projects</a>
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
                <h1 id="projects-title">Projects</h1>
              </div>
              <a className="text-link view-more-link" href="/#about">Back to home <span aria-hidden="true">↗</span></a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
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

        </section>

        <section className="section-wrap history-section" aria-label="Experience and education">
          <div className="profile-tabs-frame">
            <div className="profile-tabs" role="tablist" aria-label="Experience and education">
              <button
                id="experience-tab"
                className="profile-tab"
                type="button"
                role="tab"
                aria-selected={activeHistoryTab === "experience"}
                aria-controls="history-panel"
                onClick={() => setActiveHistoryTab("experience")}
              >Experience</button>
              <button
                id="education-tab"
                className="profile-tab"
                type="button"
                role="tab"
                aria-selected={activeHistoryTab === "education"}
                aria-controls="history-panel"
                onClick={() => setActiveHistoryTab("education")}
              >Education</button>
            </div>
          </div>
          <div
            className="history-panel"
            id="history-panel"
            role="tabpanel"
            aria-labelledby={`${activeHistoryTab}-tab`}
            tabIndex="0"
          >
            {activeHistoryTab === "experience" ? (
              <div className="experience-list">
                {experience.map((entry) => (
                  <article className="experience-entry" key={entry.role}>
                    <div className="experience-heading">
                      <div className="experience-title-group">
                        <h2>{entry.role}</h2>
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
            ) : (
              <article className="education-entry">
                <div className="education-mark">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwOCPrdaLUxg8uoKcsydcqQOgWbhBPekdbWVnwp1IjQ&s=10" alt="Arizona State University" />
                </div>
                <div className="education-content">
                  <div className="education-heading">
                    <h2>Bachelor of Computer Science</h2>
                    <div className="experience-meta">August 2020 - May 2024</div>
                  </div>
                  <p>Arizona State University</p>
                  <p>Ira A. Fulton Schools of Engineering</p>
                  <ul className="education-highlights">
                    <li>4-time recipient of the Dean's Honor List</li>
                  </ul>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <h2 id="projects-title">Featured projects</h2>
            </div>
            <a className="text-link view-more-link" href="/projects">View more <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard project={project} key={project.name} />
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

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && <div className="project-image-link">
        <img className="project-image" src={project.image} alt={`${project.name} interface`} loading="lazy" />
      </div>}
      <div className="project-heading">
        <h3>{project.name}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        <TechList items={project.stack} />
        <div className="project-actions">
          {project.demo && <a className="project-action" href={project.demo} target="_blank" rel="noopener noreferrer">Website</a>}
          {project.github && <a className="project-action" href={project.github} target="_blank" rel="noopener noreferrer">Source</a>}
        </div>
      </div>
    </article>
  );
}

export default App;