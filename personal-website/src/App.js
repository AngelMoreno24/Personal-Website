import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="container">
      <header className="header">Fixed Header</header>

      <main className="content">
        <div className="fixed-text">
          
          <h1>Angel Moreno</h1>
          <h3>Phoenix, Arizona</h3> 

          <div className="social-buttons">
            {/* GitHub Button */}
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

            {/* LinkedIn Button */}
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
        <div className="scrollable-section">
          {Array(50).fill("This is a scrollable section. ").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </main>

      <footer className="footer">Fixed Footer</footer>
    </div>
  );
}

export default App;