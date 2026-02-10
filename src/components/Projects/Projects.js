import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import financialImg from "../../Assets/Projects/financial.png";
import bitcoinImg from "../../Assets/Projects/bitcoin.png";
import fluidImg from "../../Assets/Projects/fluid.png";
import geneticImg from "../../Assets/Projects/genetic.png";
import diffusionImg from "../../Assets/Projects/diffusion.png";

const PROJECTS = [
  {
    title: "Financial Analytics Project",
    description:
      "Comprehensive financial analysis project focusing on market trends, risk assessment, and portfolio optimization. Utilized Python for data analysis, statistical modeling, and visualization to derive meaningful insights from financial data.",
    imgPath: financialImg,
    imgAlt: "Financial analytics dashboard",
    ghLink: "https://github.com/Davidsea-z/Financial-Analytics-Midterm-Project",
    tags: ["Data Analytics", "Python", "Finance"],
  },
  {
    title: "RL-based Bitcoin Trading Strategy",
    description:
      "Developed an advanced cryptocurrency trading system using Reinforcement Learning algorithms. Implemented and optimized trading strategies using historical Bitcoin market data, featuring automated decision-making and risk management capabilities.",
    imgPath: bitcoinImg,
    imgAlt: "Reinforcement learning based bitcoin trading charts",
    ghLink: "https://github.com/Davidsea-z/RL-on-trading-strategy-of-bitcoins",
    tags: ["Reinforcement Learning", "Trading", "Python"],
  },
  {
    title: "Fluid Saturation Model in Porous Media",
    description:
      "Developed a mathematical model for simulating fluid saturation dynamics in porous media. Implemented numerical methods to solve partial differential equations, providing insights into fluid flow behavior in complex porous structures.",
    imgPath: fluidImg,
    imgAlt: "Fluid saturation visualization",
    ghLink: "https://github.com/Davidsea-z/Fluid-Saturation-Model-in-Porous-Media",
    tags: ["Numerical Methods", "PDEs", "Modeling"],
  },
  {
    title: "Genetic Algorithm Implementation",
    description:
      "Developed a comprehensive genetic algorithm framework demonstrating evolutionary computation principles. Implemented selection, crossover, and mutation operators to solve optimization problems, showcasing the power of bio-inspired computing techniques.",
    imgPath: geneticImg,
    imgAlt: "Genetic algorithm concept illustration",
    ghLink: "https://github.com/Davidsea-z/genetic_algorithm_example",
    tags: ["Optimization", "Algorithms", "Python"],
  },
  {
    title: "Diffusion Model for Generating Computer Mouse Design",
    description:
      "Implemented a diffusion model for predicting computer mouse design. Applied deep learning techniques to model and generate realistic mouse movement patterns, demonstrating practical applications of generative AI in human-computer interaction.",
    imgPath: diffusionImg,
    imgAlt: "Diffusion model generated mouse design",
    ghLink: "https://github.com/Davidsea-z/Diffusion-Model-in-Computer-Mouse",
    tags: ["Generative AI", "Deep Learning", "Design"],
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRenderParticles(true);
            obs.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container fluid className="project-section" ref={sectionRef}>
      {shouldRenderParticles && <Particle />}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="justify-content-center g-4" style={{ paddingBottom: "10px" }}>
          {PROJECTS.map((project) => (
            <Col
              key={project.title}
              xs={12}
              md={6}
              lg={4}
              xl={3}
              className="project-card"
            >
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
