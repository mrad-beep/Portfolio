import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { Button, Tooltip } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  DownloadOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./Home.css";

const roles = [
  "React.js Developer",
  "Frontend Engineer",
  "Data Enthusiast",
  "Problem Solver",
];

export default function Home({ isDark }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, roleIndex]);

  return (
    <>
      <div className="home-page" id="home">
        {/* Background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="home-content">
          <div className="home-left fade-up">
            <span className="accent-tag fade-up fade-up-1">
              Available for opportunities
            </span>

            <h1 className="home-name fade-up fade-up-2">
              Hi, I'm <span className="name-highlight">Mradul</span>
              <br />
              Shrotriya
            </h1>

            <h2 className="home-role fade-up fade-up-3">
              <span className="typed-text">{displayed}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="home-bio fade-up fade-up-4">
              Motivated React.js Developer with a strong foundation in web
              development, data analytics, and building responsive, user-focused
              applications. Passionate about scalable, efficient digital
              solutions.
            </p>

            <div className="home-actions fade-up fade-up-4">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  View My Work
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={1000} offset={-80}>
                <Button size="large" className="btn-outline">
                  Contact Me
                </Button>
              </Link>
            </div>
            

            <div className="social-links fade-up fade-up-4">
              <Tooltip title="GitHub">
                <a
                  href="https://github.com/mrad-beep"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <GithubOutlined />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/mradul-shrotriya-b81a55257/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <LinkedinOutlined />
                </a>
              </Tooltip>
              <Tooltip title="Email">
                <a
                  href="mailto:shrotriyamradul8@gmail.com"
                  className="social-btn"
                >
                  <MailOutlined />
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Avatar / Illustration */}
          <div className="home-right fade-up fade-up-2">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-initials">MS</span>
              </div>
              <div className="ring-badge ring-top">React.js</div>
              <div className="ring-badge ring-right">Testing</div>
              <div className="ring-badge ring-bottom">JavaScript</div>
              <div className="ring-badge ring-left">SQL</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="home-stats fade-up">
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
      </div>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
