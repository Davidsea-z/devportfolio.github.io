import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Businessman.png";  // 更新图片路径
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate mathematics student at CUHK with a focus on Data Science and Machine Learning 
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Python, R, and MATLAB </b>
              </i>
              <br />
              <br />
              My research interests are in &nbsp;
              <i>
                <b className="purple">Machine Learning, Data Analysis </b> and {" "}
                <b className="purple">
                  Financial Mathematics
                </b>
              </i>
              <br />
              <br />
              I am also passionate about
              <i>
                <b className="purple">
                  {" "}
                  applying mathematical modeling
                </b>
              </i>
              &nbsp;to solve real-world problems using
              <i>
                <b className="purple"> Python</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> R and MATLAB</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  width: "100%",
                  margin: "auto",
                  display: "block",
                  marginTop: "100px"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Davidsea-z"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" style={{ display: 'none' }}>
                <a
                  href="https://x.com/davidwang318"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hanwei-wang-997223329"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/davidsea_318/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
