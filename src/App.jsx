import React, { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [typedText, setTypedText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const canvasRef = useRef(null);
  const matrixRef = useRef(null);

  const fullText = "Security Researcher & Full Stack Developer";

  // Typewriter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeIndex < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(typeIndex));
        setTypeIndex((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typeIndex, fullText]);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i]);

        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 20;
      }
    };

    const interval = setInterval(draw, 50);
    matrixRef.current = interval;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Devetly",
      description:
        "Full Stack web application with modern UI/UX design and advanced functionality.",
      link: "https://devetly.vercel.app/",
      type: "live",
    },
    {
      title: "Syno Films",
      description:
        "Film discovery platform with React and Firebase backend integration.",
      link: "https://synofilms-e2b37.web.app/",
      type: "live",
    },
    {
      title: "Syno Sites",
      description:
        "Portfolio website template with modern design and responsive layout.",
      link: "https://syno-sites.vercel.app/",
      type: "live",
    },
  ];

  const securityProjects = [
    {
      title: "PortScanner",
      description:
        "Advanced network port scanning tool with multiple scanning techniques and reporting features.",
      link: "https://github.com/photomanai/PortScanner",
      type: "github",
    },
    {
      title: "MacChanger",
      description:
        "Network security tool for MAC address manipulation and network anonymization.",
      link: "https://github.com/photomanai/MacChanger",
      type: "github",
    },
  ];

  const skillCategories = [
    {
      title: "🔒 Cybersecurity",
      skills: [
        "Web Penetration Testing",
        "OWASP Top 10",
        "Linux Server Management",
        "Security Tool Development",
        "CTF Competitions",
        "Network Security",
      ],
      pulse: true,
    },
    {
      title: "⚙️ Programming",
      skills: [
        "Python",
        "Node.js & Express.js",
        "React & React Native",
        "Redux",
        "HTML, CSS, JavaScript",
        "SASS, Bootstrap, Material-UI",
      ],
      pulse: false,
    },
    {
      title: "🗄️ Database",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      pulse: false,
    },
    {
      title: "🔧 Security Tools",
      skills: [
        "Nmap",
        "Nikto",
        "Burp Suite",
        "Wireshark",
        "Custom Tool Development",
      ],
      pulse: true,
    },
  ];

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.matrixCanvas} />

      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              style={styles.navLink}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              style={styles.navLink}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              style={styles.navLink}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              style={styles.navLink}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* About Section */}
      <div style={styles.terminalWindow}>
        <div style={styles.terminalHeader}>
          <div style={styles.terminalButtons}>
            <div style={{ ...styles.btn, ...styles.btnClose }}></div>
            <div style={{ ...styles.btn, ...styles.btnMinimize }}></div>
            <div style={{ ...styles.btn, ...styles.btnMaximize }}></div>
          </div>
          <div style={styles.terminalTitle}>adil@security:~$ whoami</div>
        </div>

        <section id="about" style={styles.section}>
          <h1 style={{ ...styles.h1, ...styles.glitch }}>Adil Abdulkerim</h1>
          <div style={{ ...styles.subtitle, ...styles.typing }}>
            {typedText}
            <span style={styles.cursor}>|</span>
          </div>

          <p style={styles.aboutText}>
            I work on Web Pentesting and develop my own security tools as I
            advance myself as a Security Researcher. I have experience with
            OWASP Top 10, Linux-based server management, and expertise in Full
            Stack development.
          </p>
        </section>
      </div>

      {/* Projects Section */}
      <div style={styles.terminalWindow}>
        <div style={styles.terminalHeader}>
          <div style={styles.terminalButtons}>
            <div style={{ ...styles.btn, ...styles.btnClose }}></div>
            <div style={{ ...styles.btn, ...styles.btnMinimize }}></div>
            <div style={{ ...styles.btn, ...styles.btnMaximize }}></div>
          </div>
          <div style={styles.terminalTitle}>adil@security:~$ ls projects/</div>
        </div>

        <section id="projects" style={styles.section}>
          <h2 style={styles.h2}>🚀 Published Projects</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <h2 style={{ ...styles.h2, marginTop: "50px" }}>
            🛡️ Cybersecurity Projects
          </h2>
          <div style={styles.projectsGrid}>
            {securityProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div style={styles.githubLink}>
            <a
              href="https://github.com/photomanai"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.projectLink}
            >
              View All Projects on GitHub →
            </a>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <div style={styles.terminalWindow}>
        <div style={styles.terminalHeader}>
          <div style={styles.terminalButtons}>
            <div style={{ ...styles.btn, ...styles.btnClose }}></div>
            <div style={{ ...styles.btn, ...styles.btnMinimize }}></div>
            <div style={{ ...styles.btn, ...styles.btnMaximize }}></div>
          </div>
          <div style={styles.terminalTitle}>
            adil@security:~$ cat skills.txt
          </div>
        </div>

        <section id="skills" style={styles.section}>
          <h2 style={styles.h2}>💻 Technical Skills</h2>
          <div style={styles.skillsContainer}>
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div style={styles.terminalWindow}>
        <div style={styles.terminalHeader}>
          <div style={styles.terminalButtons}>
            <div style={{ ...styles.btn, ...styles.btnClose }}></div>
            <div style={{ ...styles.btn, ...styles.btnMinimize }}></div>
            <div style={{ ...styles.btn, ...styles.btnMaximize }}></div>
          </div>
          <div style={styles.terminalTitle}>
            adil@security:~$ cat contact.txt
          </div>
        </div>

        <section id="contact" style={styles.section}>
          <h2 style={styles.h2}>📬 Get In Touch</h2>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <h3 style={styles.contactTitle}>📧 Email</h3>
              <a
                href="mailto:adilabdulkerimov68@gmail.com"
                style={styles.contactLink}
              >
                adilabdulkerimov68@gmail.com
              </a>
            </div>

            <div style={styles.contactItem}>
              <h3 style={styles.contactTitle}>💼 LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/adil-abdulkerimov-881864312/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLink}
              >
                Connect with me
              </a>
            </div>

            <div style={styles.contactItem}>
              <h3 style={styles.contactTitle}>💻 GitHub</h3>
              <a
                href="https://github.com/photomanai"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLink}
              >
                @photomanai
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.projectCard,
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 30px rgba(0, 255, 0, 0.3)" : "none",
        borderColor: isHovered ? "#ffffff" : "#00ff00",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.projectTitle}>{project.title}</h3>
      <p style={styles.projectDescription}>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.projectLink}
      >
        {project.type === "live" ? "View Live →" : "GitHub →"}
      </a>
    </div>
  );
};

const SkillCategory = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.skillCategory,
        ...(category.pulse ? styles.pulse : {}),
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 0 20px rgba(0, 255, 0, 0.3)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.skillCategoryTitle}>{category.title}</h3>
      {category.skills.map((skill, index) => (
        <div key={index} style={styles.skillItem}>
          {skill}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Courier New', monospace",
    background: "#0a0a0a",
    color: "#00ff00",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  matrixCanvas: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.1,
    pointerEvents: "none",
  },

  nav: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    background: "rgba(0, 20, 0, 0.9)",
    border: "1px solid #00ff00",
    borderRadius: "5px",
    padding: "10px",
    backdropFilter: "blur(10px)",
  },

  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },

  navLink: {
    color: "#00ff00",
    background: "none",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s",
    ":hover": {
      color: "#ffffff",
      textShadow: "0 0 10px #00ff00",
    },
  },

  terminalWindow: {
    background: "rgba(0, 20, 0, 0.9)",
    border: "2px solid #00ff00",
    borderRadius: "10px",
    margin: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)",
  },

  terminalHeader: {
    background: "#1a1a1a",
    padding: "10px 20px",
    borderBottom: "1px solid #00ff00",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px 8px 0 0",
  },

  terminalButtons: {
    display: "flex",
    gap: "8px",
    marginRight: "15px",
  },

  btn: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },

  btnClose: { background: "#ff5555" },
  btnMinimize: { background: "#ffaa00" },
  btnMaximize: { background: "#00ff00" },

  terminalTitle: {
    color: "#00ff00",
    fontSize: "14px",
  },

  section: {
    padding: "40px",
  },

  h1: {
    color: "#ffffff",
    textShadow: "0 0 10px #00ff00",
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "10px",
    margin: 0,
  },

  h2: {
    color: "#ffffff",
    textShadow: "0 0 10px #00ff00",
    marginBottom: "20px",
    fontSize: "1.8rem",
  },

  glitch: {
    animation: "glitch 2s infinite",
  },

  subtitle: {
    textAlign: "center",
    color: "#00ff00",
    fontSize: "1.2rem",
    marginBottom: "40px",
    minHeight: "30px",
  },

  typing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cursor: {
    animation: "blink 1s infinite",
  },

  aboutText: {
    textAlign: "center",
    lineHeight: 1.8,
    maxWidth: "800px",
    margin: "0 auto",
    color: "#00ff00",
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  projectCard: {
    background: "rgba(0, 40, 0, 0.6)",
    border: "1px solid #00ff00",
    borderRadius: "10px",
    padding: "20px",
    transition: "all 0.3s",
    position: "relative",
    overflow: "hidden",
  },

  projectTitle: {
    color: "#ffffff",
    marginBottom: "10px",
    fontSize: "1.2rem",
  },

  projectDescription: {
    color: "#00ff00",
    marginBottom: "15px",
    lineHeight: 1.6,
  },

  projectLink: {
    display: "inline-block",
    color: "#00ff00",
    textDecoration: "none",
    padding: "8px 15px",
    border: "1px solid #00ff00",
    borderRadius: "3px",
    transition: "all 0.3s",
    ":hover": {
      background: "#00ff00",
      color: "#000000",
    },
  },

  githubLink: {
    textAlign: "center",
    marginTop: "30px",
  },

  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },

  skillCategory: {
    background: "rgba(0, 40, 0, 0.6)",
    border: "1px solid #00ff00",
    borderRadius: "10px",
    padding: "20px",
    transition: "all 0.3s",
  },

  pulse: {
    animation: "pulse 2s infinite",
  },

  skillCategoryTitle: {
    color: "#ffffff",
    marginBottom: "15px",
    textAlign: "center",
    fontSize: "1.1rem",
  },

  skillItem: {
    margin: "8px 0",
    padding: "8px 12px",
    background: "rgba(0, 255, 0, 0.1)",
    borderLeft: "3px solid #00ff00",
    borderRadius: "3px",
    fontSize: "14px",
  },

  contactInfo: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  contactItem: {
    textAlign: "center",
    padding: "20px",
    background: "rgba(0, 40, 0, 0.6)",
    border: "1px solid #00ff00",
    borderRadius: "10px",
    minWidth: "200px",
    transition: "all 0.3s",
  },

  contactTitle: {
    color: "#ffffff",
    marginBottom: "10px",
    fontSize: "1.1rem",
  },

  contactLink: {
    color: "#00ff00",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
};

// CSS animations would be added via a style tag or CSS file
const cssAnimations = `
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  nav {
    position: relative !important;
    margin: 20px !important;
    top: 0 !important;
    right: 0 !important;
  }
  
  nav ul {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .projects-grid {
    grid-template-columns: 1fr !important;
  }
  
  .skills-container {
    grid-template-columns: 1fr !important;
  }
  
  .contact-info {
    flex-direction: column !important;
    align-items: center !important;
  }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #00ff00;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
`;

// Add CSS to head
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = cssAnimations;
  document.head.appendChild(styleElement);
}

export default Portfolio;
