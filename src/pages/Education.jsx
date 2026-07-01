import React, { useState } from "react";
import { ReadOutlined, TrophyOutlined } from "@ant-design/icons";
import "./Education.css";

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Poornima College of Engineering, Jaipur",
    year: "2022 – 2026",
    score: "CGPA: 8.06",
    scoreType: "cgpa",
    icon: "🎓",
    current: true,
    desc: "Completed a Bachelor's in Information Technology with a focus on software development, data structures, algorithms, and modern web technologies.",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Kendriya Vidyalaya O.E.F Hazratpur",
    year: "2022",
    score: "65%",
    scoreType: "percent",
    icon: "📘",
    current: false,
    desc: "Completed senior secondary education with Science stream including Physics, Chemistry, Mathematics and Computer Science.",
  },
  {
    degree: "Class X",
    institution: "TinyTots Eng. Medium School, Tundla",
    year: "2020",
    score: "64%",
    scoreType: "percent",
    icon: "📗",
    current: false,
    desc: "Completed foundational secondary education with strong performance in Mathematics and Science.",
  },
];

function ScoreRing({ score, type }) {
  const value = type === "cgpa" ? (parseFloat(score.replace("CGPA: ", "")) / 10) * 100 : parseFloat(score);
  const r = 30, circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <section id="education" className="score-ring">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="var(--border)" strokeWidth="5" />
        <circle
          cx="40" cy="40" r={r} fill="none"
          stroke="var(--accent)" strokeWidth="5"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div className="score-ring-text">
        <span className="score-val">{score.replace("CGPA: ", "")}</span>
        <span className="score-type">{type === "cgpa" ? "CGPA" : ""}</span>
      </div>
    </section>
  );
}

export default function Education({ isDark }) {
  const [active, setActive] = useState(0);

  return (
    <div className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>
      </div>

      <div className="edu-layout fade-up fade-up-1">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`edu-card glass-card ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="edu-card-inner">
              <div className="edu-left">
                <span className="edu-emoji">{edu.icon}</span>
                <div>
                  <div className="edu-year-badge">{edu.year}</div>
                  {edu.current && <span className="accent-tag" style={{ marginTop: 6, display: "inline-block" }}>Current</span>}
                </div>
              </div>
              <div className="edu-center">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-inst">{edu.institution}</p>
                {active === i && (
                  <p className="edu-desc">{edu.desc}</p>
                )}
              </div>
              <div className="edu-right">
                <ScoreRing score={edu.score} type={edu.scoreType} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline decorative */}
      <div className="edu-timeline fade-up fade-up-2">
        {education.map((e, i) => (
          <div key={i} className="edu-tl-item">
            <div className="edu-tl-dot" style={{ background: e.current ? "var(--accent)" : "var(--border)" }} />
            {i < education.length - 1 && <div className="edu-tl-line" />}
            <div className="edu-tl-text">
              <span className="edu-tl-year">{e.year}</span>
              <span className="edu-tl-label">{e.institution.split(",")[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}