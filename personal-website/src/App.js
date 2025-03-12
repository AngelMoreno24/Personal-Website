import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

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

        <div className="static-section">
          {activeSection === "About" && (
            <div>
              <h2>About Me</h2>
              <p>My name is Angel Moreno, I am a CS graduate.</p>
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