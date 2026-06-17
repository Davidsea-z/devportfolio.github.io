import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Online Business Meetings.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AnimatedBackground from "./AnimatedBackground";

function Home() {
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

  return (
    <section ref={sectionRef}>
      <Container fluid className="home-section" id="home">
        <AnimatedBackground />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> WANG HANWEI </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className={`img-fluid home-image ${isVisible ? 'fade-in-up' : ''}`}
                style={{
                  maxHeight: "450px",
                  transform: isVisible ? "scale(1.2)" : "scale(0.8)",
                  marginTop: "20px",
                  opacity: isVisible ? 1 : 0,
                  transition: "all 1s ease-out",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;