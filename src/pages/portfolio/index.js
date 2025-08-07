import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio-container">
          {dataportfolio.map((project, i) => {
            return (
              <Card key={i} className="project-card mb-4">
                <Row className="g-0">
                                     <Col md={4} className="project-image-container">
                     <img 
                       src={project.img} 
                       alt={project.title} 
                       className="project-image"
                     />
                   </Col>
                  <Col md={8}>
                    <Card.Body className="project-content">
                      <div className="project-header">
                        <Card.Title className="project-title">
                          {project.title}
                        </Card.Title>
                        <div className="project-meta">
                          <span className="organization">{project.organization}</span>
                          <span className="role">{project.role}</span>
                        </div>
                      </div>
                      
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>
                      
                                             <div className="technologies-section">
                         <h6>Technologies Used:</h6>
                         <div className="technologies-list">
                           {project.technologies && project.technologies.map((tech, index) => (
                             <Badge key={index} bg="secondary" className="tech-badge">
                               {tech}
                             </Badge>
                           ))}
                         </div>
                       </div>
                      
                      <div className="responsibilities-section">
                        <h6>Key Responsibilities:</h6>
                        <ul className="responsibilities-list">
                          {project.responsibilities.slice(0, 15).map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                          {project.responsibilities.length > 15 && (
                            <li className="more-items">
                              +{project.responsibilities.length - 15} more responsibilities
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="project-actions">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Project →
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
