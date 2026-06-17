import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiMacos,
  SiLatex,
  SiAnaconda,
  SiOpenai,
} from "react-icons/si";
import { FaRobot, FaBrain } from "react-icons/fa";

function Toolstack() {
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

  const tools = [
    { Icon: SiVisualstudiocode, name: "VS Code" },
    { Icon: SiJupyter, name: "Jupyter" },
    { Icon: SiAnaconda, name: "Anaconda" },
    { Icon: SiLatex, name: "LaTeX" },
    { Icon: SiMacos, name: "macOS" },
    { Icon: FaBrain, name: "Claude Code" },
    { Icon: FaRobot, name: "Cursor" },
    { Icon: SiOpenai, name: "Codex" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} ref={sectionRef}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.5s ease-out ${index * 0.05}s`,
          }}
          title={tool.name}
        >
          <tool.Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;