import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import algorithmVisualizer from './images/algorithmVisualizer.PNG'
import expenseTracker from './images/expenseTracker.PNG'
import workoutTracker from './images/workoutTracker.PNG'

function App() {
  const [activeSection, setActiveSection] = useState("About");

  // Define skills with unique colors
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
      { name: "ExpressJS", color: "#212121" },
    ],
    Databases: [
      { name: "MongoDB", color: "#47a248" },
      { name: "SQL", color: "#00758f" },
    ],
  };
  const projects = [
    {
      name: "Algorithm Visualizer",
      link: "https://incandescent-kleicha-6e7f46.netlify.app",
      img: algorithmVisualizer,
    },
    {
      name: "ExpenseTracker",
      link: "https://gorgeous-churros-134386.netlify.app",
      img: expenseTracker,
    },
    {
      name: "Workout Tracker",
      link: "https://your-portfolio-site.com",
      img: workoutTracker,
    },
  ];
  return (
    <div className="container">
      <main className="content">
        {/* Left Side (Fixed Info) */}
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
          </div>
        </div>

        {/* Right Side (Switchable Content) */}
        <div className="static-section">
          {/* Moved Navbar here */}
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
            <Button
              variant="dark"
              className={activeSection === "Contact" ? "active-btn" : ""}
              onClick={() => setActiveSection("Contact")}
            >
              Contact
            </Button>
          </div>

          {/* Content Below Navbar */}
          {activeSection === "About" && (
            <div>
              <h2>About Me</h2>
              <p>My name is Angel Moreno, I am a CS graduate with experience
                in React, Node.js.</p>

              <h2>Skills</h2>
              {Object.keys(skills).map((category) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="skill-bubbles">
                    {skills[category].map((skill) => (
                      <span
                        key={skill.name}
                        className="skill-bubble"
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
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="project-img"
                    />
                    <p>{project.name}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeSection === "Contact" && (
            <div>
              <h2>Contact</h2>
              <p>Email: angel.moreno8424@gmail.com</p>
              <p>Phone: 602-793-2114</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">Fixed Footer</footer>
    </div>
  );
}

export default App;