import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  imgAlt,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
  tags = [],
}) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={imgAlt || `${title} preview`}
        loading="lazy"
        className="project-card-img"
      />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{title}</Card.Title>
        <Card.Text className="project-card-description">
          {description}
        </Card.Text>

        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="project-card-tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="project-card-actions">
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            className="project-card-btn"
          >
            <BsGithub aria-hidden="true" />
            <span>{isBlog ? "Blog" : "GitHub"}</span>
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="outline-light"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn"
            >
              <CgWebsite aria-hidden="true" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
