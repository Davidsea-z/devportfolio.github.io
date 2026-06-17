import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJavascript1,
  DiReact,
  DiDocker,
} from "react-icons/di";
import {
  SiRstudio,
  SiMysql,
  SiCplusplus,
  SiMicrosoftoffice,
  SiTableau,
} from "react-icons/si";

function Techstack() {
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

  const techs = [
    { Icon: DiPython, name: "Python" },
    { Icon: SiCplusplus, name: "C++" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: SiRstudio, name: "R" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: DiReact, name: "React" },
    { Icon: DiGit, name: "Git" },
    { Icon: DiDocker, name: "Docker" },
    { Icon: SiTableau, name: "Tableau" },
    { Icon: SiMicrosoftoffice, name: "Office" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} ref={sectionRef}>
      {techs.map((tech, index) => (
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
          title={tech.name}
        >
          <tech.Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;