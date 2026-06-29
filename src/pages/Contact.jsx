import React, { useState } from "react";
import { Form, Input, Button, message, Row, Col } from "antd";
import {
  MailOutlined, PhoneOutlined, EnvironmentOutlined,
  GithubOutlined, LinkedinOutlined, SendOutlined, CheckCircleOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const { TextArea } = Input;

const contactInfo = [
  { icon: <MailOutlined />,        label: "Email",    value: "shrotriyamradul8@gmail.com", href: "mailto:shrotriyamradul8@gmail.com" },
  { icon: <PhoneOutlined />,       label: "Phone",    value: "+91 70554 30678",             href: "tel:+917055430678" },
  { icon: <EnvironmentOutlined />, label: "Location", value: "Jaipur, Rajasthan, India",   href: null },
];

const socials = [
  { icon: <GithubOutlined />,   label: "GitHub",   href: "https://github.com" },
  { icon: <LinkedinOutlined />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <MailOutlined />,     label: "Email",    href: "mailto:shrotriyamradul8@gmail.com" },
];

export default function Contact({ isDark }) {
  const [form] = Form.useForm();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (vals) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      form.resetFields();
      message.success("Message sent successfully!");
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="fade-up">
        <div className="accent-line" />
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's build something great together</p>
      </div>

      <Row gutter={[40, 40]} className="fade-up fade-up-1">
        {/* Left: Info */}
        <Col xs={24} md={10}>
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hello — my inbox is always open!
            </p>

            <div className="contact-cards">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-card glass-card">
                  <span className="contact-card-icon">{c.icon}</span>
                  <div>
                    <span className="contact-card-label">{c.label}</span>
                    {c.href
                      ? <a href={c.href} className="contact-card-value link">{c.value}</a>
                      : <span className="contact-card-value">{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social-row">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                   className="contact-social-btn" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Col>

        {/* Right: Form */}
        <Col xs={24} md={14}>
          <div className="contact-form-wrap glass-card">
            {sent ? (
              <div className="sent-state">
                <CheckCircleOutlined className="sent-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <Form form={form} layout="vertical" onFinish={onFinish} className="contact-form">
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input placeholder="Your name" className="contact-input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input placeholder="your@email.com" className="contact-input" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="What's this about?" className="contact-input" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="contact-input"
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  block
                  className="send-btn"
                >
                  Send Message
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
}