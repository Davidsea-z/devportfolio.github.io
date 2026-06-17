import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    setAlertVariant("success");
    setAlertMessage("Thank you for your message! I will get back to you soon.");
    setShowAlert(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Container fluid className="contact-section" ref={sectionRef}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col
            md={6}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <div className="contact-form-wrapper">
              <h3 style={{ color: "white", marginBottom: "20px" }}>
                Send a Message
              </h3>
              {showAlert && (
                <Alert
                  variant={alertVariant}
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {alertMessage}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="contact-btn">
                  <AiOutlineMail style={{ marginBottom: "2px" }} /> Send Message
                </Button>
              </Form>
            </div>
          </Col>

          <Col
            md={4}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            <div className="contact-info-wrapper">
              <h3 style={{ color: "white", marginBottom: "20px" }}>
                Contact Info
              </h3>
              <div className="contact-info-item">
                <AiOutlineMail className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <a href="mailto:hanwei.wang@example.com">
                    hanwei.wang@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <AiOutlineGithub className="contact-icon" />
                <div>
                  <h5>GitHub</h5>
                  <a
                    href="https://github.com/Davidsea-z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Davidsea-z
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <FaLinkedinIn className="contact-icon" />
                <div>
                  <h5>LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/hanwei-wang-997223329"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/hanwei-wang
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;