import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import MainMenu from "./main-menu";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Image
                src="/images/logo/logo-white.png"
                alt={config.project.name}
              />
            </Link>
            <p>{config.project.description}</p>
          </Col>
          <Col>
            <h3>Quick Links</h3>

            <MainMenu className="flex-column" />

          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
