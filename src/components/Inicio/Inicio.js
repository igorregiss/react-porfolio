import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/my-avatar.webp";
import Particle from "../Particle";
import Codebox from "../Codebox"
import Inicio2 from "./Inicio2";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Inicio() {
  return (
    <section>
          <Container fluid className="secao-sobre-inicio" id="sobre">
        <Particle />
        <Container className="content-inicio">
          <Row>
            <Col md={12} className="header-inicio">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                &nbsp;Hello World!{" "}
              </h1>

              <h1 className="heading-nome">
                Me chamo
                <strong className="principal-nome"> Igor Régis </strong>
                e sou um<strong className="principal-nome"> desenvolvedor WEB </strong>
                </h1>

                <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso."{" "}
          </p><footer className="blockquote-footer">Bill Gates</footer>
      <Codebox />

            </Col>


          <Col md={12} className="social-sobre-inicio">
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
    </section>
  );
}

export default Inicio;
