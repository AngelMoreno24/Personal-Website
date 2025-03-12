import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  // Define skills with colors
  const skills = {
    Languages: [
      { name: "C#", color: "#f34b7d" },
      { name: "Java", color: "#f89820" },
      { name: "JavaScript", color: "#c2bf1e" },
      { name: "Python", color: "#3776ab" },
    ],
    Technologies: [
      { name: "React", color: "#68a063" },
      { name: "ASP.NET", color: "#68217a" },
      { name: "Express", color: "#404040" },
      { name: "Node.js", color: "#68a063" },
      { name: ".NET", color: "#68217a" },
      { name: "ExpressJS", color: "#404040" },
    ],
    Databases: [
      { name: "MongoDB", color: "#68a063" },
      { name: "SQL", color: "#68217a" }, 
    ],
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Button variant="dark" onClick={() => setActiveSection("About")}>
            About
          </Button>
          <Button variant="dark" onClick={() => setActiveSection("Projects")}>
            Projects
          </Button>
          <Button variant="dark" onClick={() => setActiveSection("Contact")}>
            Contact
          </Button>
        </nav>
      </header>

      <main className="content">
        <div className="fixed-text">
          <h1>Angel Moreno</h1>
          <h3>Phoenix, Arizona</h3>
          
          <p>Email: angel.moreno8424@gmail.com</p>
          <p>Phone: 602-793-2114</p>

          <div className="social-buttons">
            <a
              href="https://github.com/AngelMoreno24"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn">
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
              className="social-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        <div className="static-section">
          {activeSection === "About" && (
            <div>
              <h2>About Me</h2>
              <p>My name is Angel Moreno, I am a software developer.</p>
              <p>Experienced in React, Node.js, and MySQL.</p>

              <h2>Skills</h2>
              {Object.keys(skills).map((category) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="skill-bubbles">
                    {skills[category].map((skill) => (
                      <span
                        key={skill.name}
                        className="skill-bubble"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "Projects" && (
            <div>
              <h2>Projects</h2>
              <ul>
                <li>Algorithm Visualizer</li>
                <li>Blog App with MySQL</li>
                <li>Portfolio Website</li>
              </ul>
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
