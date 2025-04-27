import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Inicio2() {
  return (
    <Container fluid className="secao-sobre-inicio" id="sobre">
      <Container>
        <Row>
          <Col md={12} className="social-sobre-inicio">
            <h1>Me siga nas redes sociais</h1>
            <p>
              Esteja sempre <span className="purple">conectado </span>comigo nas redes sociais
            </p>
            <ul className="social-sobre-inicio-links">
              <li className="social-icones">
                <a
                  href="https://github.com/igorregiss"
                  target="_blank"
                  rel="noreferrer"
                  className="cor-icone  icones-social-inicio"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icones">
                <a
                  href="https://twitter.com/igorregiss"
                  target="_blank"
                  rel="noreferrer"
                  className="cor-icone  icones-social-inicio"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icones">
                <a
                  href="https://www.linkedin.com/in/igor-regis-979939237/"
                  target="_blank"
                  rel="noreferrer"
                  className="cor-icone  icones-social-inicio"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icones">
                <a
                  href="https://www.instagram.com/igorregiss"
                  target="_blank"
                  rel="noreferrer"
                  className="cor-icone icones-social-inicio"
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
export default Inicio2;
