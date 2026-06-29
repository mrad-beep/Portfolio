import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Tooltip } from "antd";
import {
  EnvironmentOutlined, MailOutlined, PhoneOutlined,
  GithubOutlined, LinkedinOutlined,
} from "@ant-design/icons";
import "./About.css";

const stats = [
  { label: "Internships", end: 3 },
  { label: "Projects", end: 3 },
  { label: "Technologies", end: 12 },
  { label: "CGPA", end: 8.06, decimal: true },
];

function useCounter(end, duration = 1800, decimal = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(decimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, decimal]);

  return count;
}

function StatCard({ label, end, decimal }) {
  const count = useCounter(end, 1600, decimal);
  return (
    <div className="about-stat glass-card">
      <span className="about-stat-val">{decimal ? count.toFixed(2) : count}+</span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

const info = [
  { icon: <EnvironmentOutlined />, label: "Location", value: "Jaipur, Rajasthan" },
  { icon: <MailOutlined />,        label: "Email",    value: "shrotriyamradul8@gmail.com" },
  { icon: <PhoneOutlined />,       label: "Phone",    value: "+91 70554 30678" },
];

export default function About({ isDark }) {
  return (
    <section id="about" className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>
      </div>

      <Row gutter={[40, 40]} align="middle">
        {/* Avatar */}
        <Col xs={24} md={8} className="fade-up fade-up-1">
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <span>MS</span>
            </div>
            <div className="about-social">
              <Tooltip title="GitHub">
                <a href="https://github.com/mrad-beep" target="_blank" rel="noreferrer" className="social-btn">
                  <GithubOutlined />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/mradul-shrotriya-b81a55257/" target="_blank" rel="noreferrer" className="social-btn">
                  <LinkedinOutlined />
                </a>
              </Tooltip>
              <Tooltip title="Email">
                <a href="mailto:shrotriyamradul8@gmail.com" className="social-btn">
                  <MailOutlined />
                </a>
              </Tooltip>
            </div>
          </div>
        </Col>

        {/* Bio */}
        <Col xs={24} md={16} className="fade-up fade-up-2">
          <span className="accent-tag">Professional Summary</span>
          <h3 className="about-heading">Mradul Shrotriya</h3>
          <p className="about-bio">
            Motivated and detail-oriented <strong>React.js Developer</strong> with a strong
            foundation in web development, Android app design, and data analytics.
            Experienced in building responsive, user-focused applications and interactive
            dashboards using <strong>React.js, Javascript, Manual Testing, and SQL</strong>.
          </p>
          <p className="about-bio">
            Adept at analysing data to generate actionable insights and applying
            problem-solving strategies to real-world challenges. Passionate about
            leveraging technology to develop scalable, efficient, and innovative digital
            solutions that drive business and user value.
          </p>

          {/* Info rows */}
          <div className="about-info-list">
            {info.map((item, i) => (
              <div key={i} className="about-info-item">
                <span className="about-info-icon">{item.icon}</span>
                <div>
                  <span className="about-info-label">{item.label}</span>
                  <span className="about-info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Animated Stats */}
      <div className="about-stats fade-up fade-up-3">
       {[
          { value: "3+", label: "Internships" },
          { value: "3+", label: "Projects Built" },
          { value: "8.06", label: "CGPA" },
          { value: "10+", label: "Tech Skills" },
        ].map((s, i) => (
          <div key={i} className="stat-box glass-card">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}