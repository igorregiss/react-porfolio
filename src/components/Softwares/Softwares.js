import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Softwarescards from "./SoftwaresCards";
import Particle from "../Particle";
import visual from "../../Assets/Softwares/visual.png";
import psc6 from "../../Assets/Softwares/psc6.png";



function Softwares() {
  return (
    <Container fluid className="secao-projetos">
      <Particle />
      <Container>
        <h1 className="project-heading">
          PRINCIPAIS <strong className="purple">SOFTWARES </strong> UTILIZADOS
        </h1>
        <p style={{ color: "white" }}>
        Alguns softwares que utilizo frequentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="card-projetos">
            <Softwarescards
              imgPath={visual}
              isBlog={false}
              title="Visual Studio Code"
              description="O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows
              , Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado
              , realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.
              "
              dwLink="https://code.visualstudio.com/download"
            />
          </Col>


          <Col md={4} className="card-projetos">
            <Softwarescards
              imgPath={psc6}
              isBlog={false}
              title="Photoshop CS6 Portable"
              description="Adobe Photoshop CS6 é um software de edição de imagens
              , grandes editores utilizam este software para edições. Crie logo, recorte fotos
              , criar banners da forma que quiser, crie fontes 3D, tridimensional
              , vá até onde sua imaginação permitir, o photoshop lhe da isso
              ! Agora com o portable você pode levá-lo para onde quiser
              , basta extrair e pronto.
              "
              dwLink="https://mega.nz/#F!kKRBFZCB!UIvdP99pi-I1zJqZbKl0fw"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Softwares;
