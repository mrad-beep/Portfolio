import React, { useState } from "react";
import { Tooltip, Progress } from "antd";
import {
  CodeOutlined, ToolOutlined, TeamOutlined,
} from "@ant-design/icons";
import "./Skills.css";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <CodeOutlined />,
    skills: [
      { name: "React.js",    level: 85 },
      { name: "JavaScript",  level: 80 },
      { name: "HTML5 / CSS", level: 88 },
      { name: "Java",        level: 72 },
      { name: "C",           level: 68 },
      { name: "REST APIs",   level: 78 },
      { name: "Python",      level: 70 },
      { name: "SQL / DBMS",  level: 75 },
      { name: "Manual Testing / Bug Lifecycle", level: 65 },
      { name: "SDLC / STLC", level: 68 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <ToolOutlined />,
    skills: [
      { name: "Git / GitHub",  level: 82 },
      { name: "VS Code",       level: 90 },
      { name: "MySQL",         level: 75 },
      { name: "Postman",       level: 78 },
      { name: "Power BI",      level: 70 },
      { name: "Docker",        level: 58 },
      { name: "Selenium",      level: 62 },
      { name: "Jira",          level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <TeamOutlined />,
    tags: [
      "Communication",
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Collaboration",
      "Adaptability",
      "Attention to Detail",
      "Time Management",
    ],
  },
];

function SkillBar({ name, level }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`skill-bar-item ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <Progress
        percent={level}
        showInfo={false}
        strokeColor={{ from: "var(--accent)", to: "var(--accent-gold)" }}
        trailColor="var(--border)"
        strokeWidth={6}
      />
    </div>
  );
}

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>

      {/* Tab Switcher */}
      <div className="skills-tabs fade-up fade-up-1">
        {skillCategories.map((cat, i) => (
          <button
            key={i}
            className={`skill-tab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            <span className="skill-tab-icon">{cat.icon}</span>
            {cat.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="skills-content fade-up fade-up-2">
        {skillCategories[activeTab].skills ? (
          <div className="skills-grid">
            {skillCategories[activeTab].skills.map((s, i) => (
              <SkillBar key={i} {...s} />
            ))}
          </div>
        ) : (
          <div className="soft-tags">
            {skillCategories[activeTab].tags.map((tag, i) => (
              <span key={i} className="soft-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* All tech stack pills (decorative bottom bar) */}
      <div className="tech-pills fade-up fade-up-3">
        {["React.js", "JavaScript", "Python", "Java", "SQL", "Git", "AntDesign", "Docker", "REST API", "HTML5", "CSS3", "Postman"].map((t, i) => (
          <span key={i} className="tech-pill">{t}</span>
        ))}
      </div>
    </section>
  );
}