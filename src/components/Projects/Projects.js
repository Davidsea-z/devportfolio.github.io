import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import financialImg from "../../Assets/Projects/financial.png";
import bitcoinImg from "../../Assets/Projects/bitcoin.png";
import fluidImg from "../../Assets/Projects/fluid.png";
import geneticImg from "../../Assets/Projects/genetic.png";
import diffusionImg from "../../Assets/Projects/diffusion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialImg}
              isBlog={false}
              title="Financial Analytics Project"
              description="Comprehensive financial analysis project focusing on market trends, risk assessment, and portfolio optimization. Utilized Python for data analysis, statistical modeling, and visualization to derive meaningful insights from financial data."
              ghLink="https://github.com/Davidsea-z/Financial-Analytics-Midterm-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoinImg}
              isBlog={false}
              title="RL-based Bitcoin Trading Strategy"
              description="Developed an advanced cryptocurrency trading system using Reinforcement Learning algorithms. Implemented and optimized trading strategies using historical Bitcoin market data, featuring automated decision-making and risk management capabilities."
              ghLink="https://github.com/Davidsea-z/RL-on-trading-strategy-of-bitcoins"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fluidImg}
              isBlog={false}
              title="Fluid Saturation Model in Porous Media"
              description="Developed a mathematical model for simulating fluid saturation dynamics in porous media. Implemented numerical methods to solve partial differential equations, providing insights into fluid flow behavior in complex porous structures."
              ghLink="https://github.com/Davidsea-z/Fluid-Saturation-Model-in-Porous-Media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geneticImg}
              isBlog={false}
              title="Genetic Algorithm Implementation"
              description="Developed a comprehensive genetic algorithm framework demonstrating evolutionary computation principles. Implemented selection, crossover, and mutation operators to solve optimization problems, showcasing the power of bio-inspired computing techniques."
              ghLink="https://github.com/Davidsea-z/genetic_algorithm_example"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusionImg}
              isBlog={false}
              title="Diffusion Model for Generating Computer Mouse Design"
              description="Implemented a diffusion model for predicting computer mouse design. Applied deep learning techniques to model and generate realistic mouse movement patterns, demonstrating practical applications of generative AI in human-computer interaction."
              ghLink="https://github.com/Davidsea-z/Diffusion-Model-in-Computer-Mouse"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
