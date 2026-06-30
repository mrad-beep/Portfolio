import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Tooltip, Drawer, Button } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  ThunderboltOutlined,
  ProjectOutlined,
  ReadOutlined,
  MailOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

import "./Navbar.css";

const navItems = [
  { label: "Home", to: "home", icon: <HomeOutlined /> },
  { label: "About", to: "about", icon: <UserOutlined /> },
  { label: "Skills", to: "skills", icon: <ThunderboltOutlined /> },
  { label: "Experience", to: "experience", icon: <HistoryOutlined /> },
  { label: "Education", to: "education", icon: <ReadOutlined /> },
  { label: "Projects", to: "projects", icon: <ProjectOutlined /> },
  { label: "Contact", to: "contact", icon: <MailOutlined /> },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isDark ? "dark" : "light"
      }`}
    >
      <div className="nav-inner">
        {/* Logo */}

        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="nav-logo"
          style={{ cursor: "pointer" }}
        >
          MS<span className="logo-dot">.</span>
        </Link>

        {/* Desktop Menu */}

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="/Mradul_Shrotriya_webdev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Right Side */}

        <div className="nav-right">
          <Tooltip title={isDark ? "Light Mode" : "Dark Mode"}>
            <div
              className="theme-toggle"
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            >
              {isDark ? <SunOutlined /> : <MoonOutlined />}
            </div>
          </Tooltip>

          <Button
            type="text"
            icon={<MenuOutlined />}
            className="menu-btn"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Drawer */}

      <Drawer
        title="Menu"
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ul className="drawer-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className="drawer-link"
                onClick={() => setDrawerOpen(false)}
              >
                {item.icon}
                <span style={{ marginLeft: "10px" }}>{item.label}</span>
              </Link>
            </li>
          ))}

          <li>
            <a
              href="/Mradul_Shrotriya_webdev_digital.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-link"
              onClick={() => setDrawerOpen(false)}
            >
              📄 <span style={{ marginLeft: "10px" }}>Resume</span>
            </a>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
}
