import React, { useState } from "react";
import { Timeline, Tag } from "antd";
import {
  CodeOutlined, BarChartOutlined, GlobalOutlined,
} from "@ant-design/icons";
import "./Experience.css";

const experiences = [
  {
    id: 0,
    role: "React.js Developer Intern",
    company: "CyberFrat",
    duration: "May 2025 – Present",
    type: "Current",
    icon: <CodeOutlined />,
    color: "#5eead4",
    tags: ["React.js", "REST API", "Agile", "UI Components"],
    points: [
      "Developing scalable and responsive web applications using React.js and modern frontend technologies.",
      "Building reusable UI components and implementing state management for seamless user experiences.",
      "Collaborating with the development team on feature implementation, code reviews, and agile workflows.",
      "Integrating RESTful APIs and ensuring cross-browser compatibility and performance optimisation.",
    ],
  },
  {
    id: 1,
    role: "Data Scientist Intern",
    company: "Data Play",
    duration: "July 2024 – August 2024",
    type: "Completed",
    icon: <BarChartOutlined />,
    color: "#c9a84c",
    tags: ["Power BI", "Python", "Statistics", "Excel"],
    points: [
      "Worked on multiple real-world data analysis projects involving Probability, Statistics, and Excel.",
      "Built visual dashboards in Power BI to represent data insights clearly and effectively.",
      "Strengthened skills in data cleaning, data visualisation, and report generation.",
      "Enhanced problem-solving through practical exposure to analytical case studies.",
    ],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "InternPay",
    duration: "August 2023",
    type: "Completed",
    icon: <GlobalOutlined />,
    color: "#818cf8",
    tags: ["HTML", "CSS", "JavaScript", "Debugging"],
    points: [
      "Developed and optimised responsive websites using HTML, CSS, and JavaScript.",
      "Worked on both frontend and backend modules to enhance functionality and user experience.",
      "Implemented debugging practices and ensured cross-browser compatibility.",
      "Strengthened technical collaboration skills by working in a virtual team environment.",
    ],
  },
];

export default function Experience({ isDark }) {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>
      </div>

      <div className="exp-layout fade-up fade-up-1">
        {/* Left: clickable list */}
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-item glass-card ${active === exp.id ? "active" : ""}`}
              onClick={() => setActive(active === exp.id ? null : exp.id)}
              style={{ "--item-color": exp.color }}
            >
              <div className="exp-item-top">
                <span className="exp-icon" style={{ color: exp.color, background: `${exp.color}22` }}>
                  {exp.icon}
                </span>
                <div className="exp-meta">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className={`exp-badge ${exp.type === "Current" ? "current" : ""}`}>
                  {exp.type}
                </span>
              </div>

              <div className="exp-duration">{exp.duration}</div>

              {/* Expandable bullets */}
              <div className={`exp-detail ${active === exp.id ? "open" : ""}`}>
                <div className="exp-tags">
                  {exp.tags.map((t, j) => (
                    <span key={j} className="accent-tag">{t}</span>
                  ))}
                </div>
                <ul className="exp-bullets">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-toggle">
                {active === exp.id ? "▲ Show less" : "▼ Show details"}
              </div>
            </div>
          ))}
        </div>

        {/* Right: timeline visual */}
        <div className="exp-timeline-wrap">
          <Timeline
            mode="left"
            items={experiences.map(exp => ({
              color: exp.color,
              label: <span className="tl-label">{exp.duration}</span>,
              children: (
                <div className="tl-content">
                  <strong>{exp.role}</strong>
                  <span className="tl-company">@ {exp.company}</span>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}