import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const [activeSection, setActiveSection] = useState("About");

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
              <p>Software developer with experience in React, Node.js, and MySQL.</p>
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
              <p>Email: angel.moreno@example.com</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">Fixed Footer</footer>
    </div>
  );
}

export default App;
