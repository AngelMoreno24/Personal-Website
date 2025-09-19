import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import algorithmVisualizer from './images/algorithmVisualizer.PNG';
import expenseTracker from './images/expenseTracker.PNG';
import workoutTracker from './images/workoutTracker.PNG';
import pathfindingVisualizer from './images/pathfindingVisualizer.PNG';
import chatApplication from './images/chatApplication.png';
import ticketTracker from './images/ticketTracker.PNG';

function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = {
    Languages: [
      { name: "C#", color: "#9b4f96" },
      { name: "Java", color: "#f89820" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "Python", color: "#306998" },
    ],
    Technologies: [
      { name: "React", color: "#61dafb" },
      { name: "ASP.NET", color: "#512bd4" },
      { name: "Express", color: "#353535" },
      { name: "Node.js", color: "#3c873a" },
      { name: ".NET", color: "#512bd4" },
    ],
    Databases: [
      { name: "MongoDB", color: "#47a248" },
      { name: "SQL", color: "#00758f" },
    ],
  };

  // tech color mapping
  const techColors = {
    React: "#61dafb",
    JavaScript: "#f7df1e",
    CSS: "#264de4",
    Bootstrap: "#7952b3",
    "Node.js": "#3c873a",
    Express: "#353535",
    MongoDB: "#47a248",
    "Socket.IO": "#010101",
    "Azure SQL": "#0078d4",
  };

  const projects = [
    {
      name: "Pathfinding Visualizer",
      img: pathfindingVisualizer,
      description: "Visualize algorithms for pathfinding on a grid with animations.",
      stack: ["React", "JavaScript", "CSS"],
      github: "https://github.com/AngelMoreno24/pathfinder-visualizer",
      demo: "https://pathfindingvizualizer.netlify.app/",
    },
    {
      name: "Algorithm Visualizer",
      img: algorithmVisualizer,
      description: "Interactive visualizations for common sorting and searching algorithms.",
      stack: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/AngelMoreno24/AlgoVizualizer",
      demo: "https://incandescent-kleicha-6e7f46.netlify.app",
    },
    {
      name: "Expense Tracker",
      img: expenseTracker,
      description: "Track daily expenses and visualize spending habits.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/AngelMoreno24/Expense-Tracker",
      demo: "https://gorgeous-churros-134386.netlify.app",
    },
    {
      name: "Chat Application",
      img: chatApplication,
      description: "Real-time chat app with multiple rooms and user authentication.",
      stack: ["Node.js", "Express", "React", "Socket.IO", "Azure SQL"],
      github: "https://github.com/AngelMoreno24/chat-website",
      demo: "https://am-chat-application.netlify.app/home",
    },
    {
      name: "Ticket Tracker",
      img: ticketTracker,
      description: "Track software tickets with comments, attachments, and status updates.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/AngelMoreno24/Bug-Tracker",
      demo: "https://am-ticket-tracker.netlify.app",
    },
  ];

  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);



  const darkenColor = (hex, percent) => {
    const num = parseInt(hex.replace("#",""),16),
          amt = Math.round(2.55 * percent * 100),
          R = (num >> 16) - amt,
          G = ((num >> 8) & 0x00FF) - amt,
          B = (num & 0x0000FF) - amt;
    return "#" + (
      0x1000000 + 
      (R<0?0:R>255?255:R)*0x10000 + 
      (G<0?0:G>255?255:G)*0x100 + 
      (B<0?0:B>255?255:B)
    ).toString(16).slice(1);
  };


  return (
    <div className="container">
      <main className="content">
        {/* Left Side */}
        <div className="fixed-text">
          <h1>Angel Moreno</h1>
          <h3>Phoenix, Arizona</h3>
          <p>angel.moreno8424@gmail.com</p>
          <p>602-793-2114</p>

          <div className="social-buttons">
            <a
              href="https://github.com/AngelMoreno24"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="social-icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/angel-moreno-1568b5327/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>

            <a
              href="/Angel_Moreno_Resume.pdf"
              download="Angel_Moreno_Resume.pdf"
              className="resume-btn"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="static-section">
          <div className="section-nav">
            <Button
              variant="dark"
              className={activeSection === "About" ? "active-btn" : ""}
              onClick={() => setActiveSection("About")}
            >
              About
            </Button>
            <Button
              variant="dark"
              className={activeSection === "Projects" ? "active-btn" : ""}
              onClick={() => setActiveSection("Projects")}
            >
              Projects
            </Button>
          </div>

          {activeSection === "About" && (
            <div>
              <h2>About Me</h2>
              <p>
                Highly motivated Computer Science graduate skilled in software engineering principles.
                Seeking a role where I can grow and learn from experienced team members while contributing current skills.
              </p>

              <h2>Skills</h2>
              {Object.keys(skills).map((category) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="skill-bubbles">
                    {skills[category].map((skill) => (
                      <span
                        key={skill.name}
                        className="skill-bubble"
                        style={{ backgroundColor: skill.color, color: "#fff" }}
                        data-skill={skill.name}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <h2>Education</h2>
              <div className="education-section">
                <img
                  src="https://www.crwflags.com/fotw/images/u/us_u_azs.gif"
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="education-text">
                  <p><strong>Bachelor of Computer Science</strong></p>
                  <p>Arizona State University</p>
                  <p>Ira A. Fulton Schools of Engineering</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === "Projects" && (
            <div>
              <h2>Projects</h2>
              <div className="project-grid">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="project-card"
                    onClick={() => openProjectModal(project)}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="project-img"
                    />
                    <p>{project.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProjectModal}>×</button>
            <img src={selectedProject.img} alt={selectedProject.name} className="modal-img" />
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>

            <h3>Tech Stack</h3>
            <div className="stack-list">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="skill-bubble"
                  data-skill={tech}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-links">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="resume-btn-github">
                GitHub
              </a>
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="resume-btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;