import React, { useState } from "react";
import { GithubOutlined, LinkOutlined, AppstoreOutlined } from "@ant-design/icons";
import "./Projects.css";

const allProjects = [
  {
    title: "No-Code Dynamic Form Builder",
    desc: "A web application enabling admins to create and customise dynamic forms without any programming knowledge.",
    tags: ["React.js", "Database", "UI/UX", "Dark/Light Mode"],
    category: "Web App",
    emoji: "🧩",
    color: "#5eead4",
    points: [
      "Support for multiple input types (text, dropdowns, checkboxes, radio buttons).",
      "Intuitive UI/UX for form creation, editing, duplication, and deletion.",
      "Dark/light theme toggle and real-time data capture via database integration.",
      "Admin panel to view, analyse, and manage submitted form data.",
    ],
  },
  {
    title: "To-Do List Web Application",
    desc: "A fully functional task management app built with React.js and Bootstrap for a responsive, modern UI.",
    tags: ["React.js", "Bootstrap", "JavaScript"],
    category: "Web App",
    emoji: "✅",
    color: "#c9a84c",
    points: [
      "Add, edit, and delete tasks dynamically with visual completion indicators.",
      "Modular architecture for scalability and seamless UX across all devices.",
    ],
  },
  {
    title: "Weather Bug Web Application",
    desc: "A real-time weather forecasting platform using third-party APIs for accurate, fast weather data.",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    category: "Web App",
    emoji: "🌤️",
    color: "#818cf8",
    points: [
      "Displays temperature, humidity, and multi-day forecasts.",
      "Optimised API integration for fast response time and data accuracy across devices.",
    ],
  },
];

const categories = ["All", "Web App", "Dashboard"];

export default function Projects({ isDark }) {
  const [filter, setFilter] = useState("All");
  const [flipped, setFlipped] = useState({});

  const filtered = filter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  const toggleFlip = id => setFlipped(f => ({ ...f, [id]: !f[id] }));

  return (
    <section id="projects" className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built with passion</p>
      </div>

      {/* Filter buttons */}
      <div className="proj-filters fade-up fade-up-1">
        {categories.map(cat => (
          <button
            key={cat}
            className={`proj-filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="proj-grid fade-up fade-up-2">
        {filtered.map((proj, i) => (
          <div
            key={i}
            className={`proj-card-wrap ${flipped[i] ? "flipped" : ""}`}
            onClick={() => toggleFlip(i)}
          >
            {/* Front */}
            <div className="proj-face proj-front glass-card" style={{ "--proj-color": proj.color }}>
              <div className="proj-emoji">{proj.emoji}</div>
              <span className="proj-category accent-tag">{proj.category}</span>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-tags">
                {proj.tags.map((t, j) => (
                  <span key={j} className="proj-tag">{t}</span>
                ))}
              </div>
              <div className="proj-flip-hint">Click to see details →</div>
            </div>

            {/* Back */}
            <div className="proj-face proj-back glass-card" style={{ "--proj-color": proj.color }}>
              <h3 className="proj-title" style={{ color: proj.color }}>{proj.title}</h3>
              <ul className="proj-bullets">
                {proj.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="proj-actions">
                <a href="https://github.com/mrad-beep?tab=repositories" target="_blank" rel="noreferrer" className="proj-btn"
                   onClick={e => e.stopPropagation()}>
                  <GithubOutlined /> GitHub
                </a>
              </div>
              <div className="proj-flip-hint">← Click to go back</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}