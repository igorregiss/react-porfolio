import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import myPerson from "../../Assets/MyPerson.png";

function Sobre() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={3} className="meuAvatar">
            <Tilt>
              <img src={myPerson} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="descricao-sobre-inicio">
            <h1 style={{ fontSize: "2.6em" }}>
              UM <span className="purple">POUCO SOBRE </span> MIM
            </h1>
            <p className="body-sobre-inicio">
              No meu ensino medio tive o prazer de ter um curso técnico em
              informática e me apaixonei por programação com o passar do tempo
              me perdi um pouco desse meu vinculo com códigos, mas com o passar
              do tempo voltei a programar e diante desses tempos que venho
              programando eu aprendi de pouco a pouco as principais linguagens
              utilizadas.
              <br />
              <br />
              Sou graduado em Licenciatura em Computação pela Universidade
              Estadual do Ceará (UECE).
              <br />
              <br />
              Atualmente estou atuando no mercado de trabalho como Freelancer,
              buscando a primeira vaga como desenvolvedor.
              <br />
              <br />
              Tenho habilidades com:
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, PHP, ReactJS e NodeJS
                </b>
                .
              </i>
              <br />
              <br />
              Minha área de interesse é voltada para o&nbsp;
              <i>
                <b className="purple">desenvolvimento WEB e Mobile&nbsp;</b>
              </i>
            </p>
          </Col>
        </Row>
        {/*
        <Stackstecn />

        <h1 className="project-heading">
          <strong className="purple">FERRAMENTAS</strong> QUE UTILIZO
        </h1>
        <Stacksferrament />

        <Github />
*/}
      </Container>
    </Container>
  );
}

export default Sobre;
