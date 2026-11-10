
import React, { useState } from "react";
import {
  Github, Linkedin, Mail, Menu, X, ArrowUpRight,
  Code, Brain, Database, Briefcase, GraduationCap,
  Download, Send, ExternalLink
} from "lucide-react";
import "./App.css";

const projects = [
  {
    title: "Bone Fracture Classification",
    category: "Deep Learning",
    description:
      "Developed an X-ray fracture classification system using Xception and ResNet50 ensemble models. Implemented YOLOv8 localization and Grad-CAM visualizations.",
    tech: ["Python", "TensorFlow", "CNN", "YOLOv8", "Flask"],
    github: "https://github.com/your-username"
  },
  {
    title: "CineQuest",
    category: "Frontend Development",
    description:
      "Created a responsive movie discovery application with popular, top-rated, upcoming and movie detail pages using TMDB API.",
    tech: ["React", "JavaScript", "CSS", "REST API"],
    github: "https://github.com/your-username"
  },
  {
    title: "Face Mask Detection",
    category: "Machine Learning",
    description:
      "Built a face mask detection application using CNN and OpenCV for image-based face mask classification.",
    tech: ["Python", "CNN", "OpenCV"],
    github: "https://github.com/your-username"
  },
  {
    title: "Image Captioning",
    category: "Generative AI",
    description:
      "Developed an image captioning workflow using BLIP and explored image generation using Stable Diffusion.",
    tech: ["Python", "BLIP", "Stable Diffusion"],
    github: "https://github.com/your-username"
  }
];

const skills = [
  "Python", "HTML5", "CSS3", "JavaScript",
  "React.js", "MySQL", "MongoDB", "TensorFlow",
  "PyTorch", "OpenCV", "Machine Learning",
  "Deep Learning", "NLP", "Git & GitHub"
];

function App() {
  const [menu, setMenu] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );

    window.location.href =
      `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenu(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">ARAVIND<span> MANNE.</span></a>

        <button className="menu-btn" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>

        <nav className={menu ? "nav-links show" : "nav-links"}>
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="resume-link" href="/resume.pdf" target="_blank">
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tag">HELLO, I'M</p>

          <h1>
            Aravind <span>Manne.</span>
          </h1>

          <h2>Full Stack Developer | AI & ML Enthusiast</h2>

          <p className="hero-description">
            I build responsive web applications and explore intelligent
            solutions using Python, Machine Learning and Deep Learning.
            I enjoy solving problems and turning ideas into useful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects <ArrowUpRight size={17} />
            </a>

            <a href="/resume.pdf" className="secondary-btn" target="_blank">
              <Download size={17} /> Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Aravind130904" target="_blank">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/aravind-manne-358b032a9/" target="_blank">
              <Linkedin />
            </a>
            <a href="mailto:mannearavind07@gmail.com">
              <Mail />
            </a>
          </div> 
        </div>

        <div className="hero-image">
          <div className="profile-circle">
    <img src="/profile.jpg" alt="Aravind Manne" />
  </div>
          <div className="floating-card">
            <Code size={18} /> Developer
          </div>
          <div className="floating-card second">
            <Brain size={18} /> AI / ML
          </div>
        </div>

        <a href="#about" className="scroll-down">SCROLL TO EXPLORE ↓</a>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="section-title">
          <p>01 / ABOUT ME</p>
          <h2>A little about me.</h2>
        </div>

        <div className="about-grid">
          <div>
            <h3>
              Passionate about building
              <span> meaningful digital experiences.</span>
            </h3>

            <p>
              I am a developer with a background in Artificial Intelligence
              and Machine Learning. I have experience working on frontend
              development, computer vision, deep learning and generative AI.
            </p>

            <p>
              I enjoy learning new technologies, developing practical
              applications and continuously improving my technical skills.
            </p>
          </div>

          <div className="education-card">
            <GraduationCap size={25} />
            <p>EDUCATION</p>
            <h3>B.Tech - Artificial Intelligence and Machine Learning</h3>
            <h4>Malla Reddy University</h4>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-title">
          <p>02 / MY TOOLKIT</p>
          <h2>Skills & Technologies.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <Code size={20} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-title">
          <p>03 / EXPERIENCE</p>
          <h2>My Journey.</h2>
        </div>

        <div className="experience-card">
          <Briefcase size={25} />
          <p>JAN 2026 - APR 2026</p>
          <h3>AI Prompt Engineer Intern</h3>
          <h4>Easy2Learn</h4>
          <p>
            Designed prompt engineering workflows for generative AI tools
            to create educational images, videos and audio using ChatGPT,
            Google Flow, Speechma and Google AI Studio.
          </p>
        </div>

        <div className="experience-card">
          <Briefcase size={25} />
          <p>TRAINING PROGRAM</p>
          <h3>Salesforce Training</h3>
          <h4>Centre of Excellence - NTT DATA</h4>
          <p>
            Worked with Salesforce objects, fields, approval processes,
            dashboards, lead assignment automation and email alerts.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-title">
          <p>04 / MY WORK</p>
          <h2>Featured Projects.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-top">
                <span>PROJECT 0{index + 1}</span>
                <Code size={22} />
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-list">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" className="project-link">
                Source Code <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="section-title">
          <p>05 / CONTACT</p>
          <h2>Let's connect.</h2>
          <p>Have an opportunity or project in mind? Let's talk.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <a href="mailto:your.email@example.com">
              <Mail /> your.email@example.com
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank">
              <Linkedin /> LinkedIn Profile
            </a>
            <a href="https://github.com/your-username" target="_blank">
              <Github /> GitHub Profile
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Your Name</label>
            <input
              required
              value={form.name}
              onChange={e => setForm({...form, name:e.target.value})}
              placeholder="Enter your name"
            />

            <label>Email Address</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={e => setForm({...form, email:e.target.value})}
              placeholder="Enter your email"
            />

            <label>Message</label>
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={e => setForm({...form, message:e.target.value})}
              placeholder="Write your message"
            />

            <button type="submit" className="primary-btn">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>ARAVIND<span>.</span></h3>
        <p>Designed & Built by Aravind Manne</p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
