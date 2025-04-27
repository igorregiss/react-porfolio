import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Projetoscards from "./ProjetosCards";
import Particle from "../Particle";
import azewclehord from "../../Assets/Projects/projeto1.webp";
import blog from "../../Assets/Projects/blogs.png";
import netflix from "../../Assets/Projects/netflix.png";
import livrocaixa from "../../Assets/Projects/livrocaixa.png";
import chuva from "../../Assets/Projects/chuva.png";
import finances from "../../Assets/Projects/finances.png";
import chamados from "../../Assets/Projects/chamados.png";
import biblioteca from "../../Assets/Projects/biblioteca.png";
import b99 from "../../Assets/Projects/b99.png";
import Stackstecn from "../Sobre/StacksTecn";
import Github from "../Sobre/Github";
import bibliotecadigital from "../../Assets/Projects/bibliotecadigital.png";
import digitalspace from "../../Assets/Projects/astronomia.png";
import sigbare from "../../Assets/Projects/sigbare.png";




import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // importa os ícones das setas

function Projetos() {
  return (
    <Container fluid className="secao-projetos">
      <Particle />
      
      <Container>
        <h1 className="project-heading">
          MEUS <strong className="purple">PROJETOS </strong> RECENTES
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Carousel
          className="carousel-projetos carousel-control-container" // adiciona a classe carousel-control-container
          prevIcon={<BsChevronLeft className="carousel-icon" />}
          nextIcon={<BsChevronRight className="carousel-icon" />}
       indicators={false}
        >
          <Carousel.Item>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             

            <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={azewclehord}
              isBlog={false}
              title="Azewclehord Celulares"
              description="Neste trabalho realizei a criação de um protótipo de uma loja de celulares para uma avaliação prática acadêmica. 
              A avaliação atendeu todos os requisitos solicitado, seguindo ainda um visual moderno e simples, para uma interação mais rápida do usuário, 
              recebendo nota máxima. 
              "
              // ghLink="https://github.com/igorregis"
              demoLink="https://www.figma.com/proto/G8lqAlrTkzTmphAtnWhK09/Untitled?node-id=1-3&starting-point-node-id=1%3A3"
            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={blog}
              isBlog={false}
              title="Blog de Artigos"
              description="Neste projeto tive o objetivo de criar um blog em PHP para complementar meu portfolio, e brevemente recria-lo em ReactJS. O projeto
              é simples e serviu também como um aprendizado e prática na linguagem de PHP.
              "
               //ghLink="https://github.com/igorregiss/BLOG-EM-PHP"
                demoLink="https://www.igorregis.tech/blog"
            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={netflix}
              isBlog={false}
              title="Pagina inicial Netflix em HTML e CSS"
              description="Em busca de praticar o meu conhecimento em HTML e CSS eu fiz um clone da pagina inicial da NetFlix, 
              tentei criar essa pagina no menor tempo possível, para avaliar minha capacidade em criar uma pagina em pouco tempo de prazo. 
              "
               ghLink="https://github.com/igorregiss/Clone-Netflix"
               demoLink="https://www.igorregis.tech/demos/clone-netflix"

            />
          </Col>

            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              
            <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={livrocaixa}
              isBlog={false}
              title="Livro Caixa em PHP"
              description="Este projeto fiz com o propósito de me auxiliar na organização financeira, porém ao decorrer do desenvolvimento
              eu comecei a gostar mais desse projeto e resolvi repassa-lo para que outras pessoas possam utiliza-lo. 
              "
               ghLink="https://github.com/igorregiss/Livro-Caixa-em-PHP"
               demoLink="https://www.igorregis.tech/demos/livrocaixa"

               

            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={chuva}
              isBlog={false}
              title="Exercicio processo seletivo ChuvaNET"
              description="Exercicio para o processo seletivo da empresa ChuvaNET, onde tinha como objetivo recriar com responsividade, uma pagina disponibilizada no Figma."
               ghLink="https://github.com/igorregiss/Exercicio-ChuvaNet"
               demoLink="https://www.igorregis.tech/demos/chuva"

            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={finances}
              isBlog={false}
              title="Controle Financeiro para empresa pequena"
              description="Projeto realizado para a empresa a qual sou funcionário para um controle financeiro melhor, podendo controlar contas a pagar, contas pagas, contas pendentes e saldo final diante de cada mês, podendo agendar boletos e cadastrar fornecedores."
              demoLink="https://www.igorregis.tech/finances"

            />
          </Col>


              
            </Row>
          </Carousel.Item>

{/* Fim carrousel */}
  {/* Inicio carrousel */}

          <Carousel.Item>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              
            <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={chamados}
              isBlog={false}
              title="Sistema de chamados"
              description="Projeto em ReactJS e Firebase criado no curso SujeitoProgramador. O sistema permite registrar chamados, clientes e se cadastrar."
              ghLink="https://github.com/igorregiss/"
              demoLink="https://www.igorregis.tech"

            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={biblioteca}
              isBlog={false}
              title="Controle Bibliotecário"
              description="Projeto feito para fins acadêmicos, nesse projeto permite você controlar a entrega e empréstimos de livros, os alunos, dentre outros recursos administrativos."
              ghLink="https://github.com/igorregiss/CONTROLE-BIBLIOTECARIO"
             // demoLink="https://www.igorregis.tech"

            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={b99}
              isBlog={false}
              title="Site Brooklyn Nine-Nine"
              description="Site feito para disciplina de desenvolvimento WEB afim de praticar conhecimentos em HTML e CSS."
              ghLink="https://github.com/igorregiss/DISCIPLINA-DESENVOLVIMENTO-WEB/tree/main/atividade-b99"
             demoLink="https://igorregis.tech/brooklyn99/index.html"

            />
          </Col>
            </Row>
          </Carousel.Item>

{/* Fim carrousel */}
  {/* Inicio carrousel */}

          <Carousel.Item>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              
            <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={bibliotecadigital}
              isBlog={false}
              title="Biblioteca Digital"
              description="Biblioteca Digital com disponibilidade para download de e-books, leitura online, áudio-book, jogos e vídeos aulas. Projeto em desenvolvimento na disciplina de Software Educativo."
              demoLink="https://www.igorregis.tech/"

            />
          </Col>

          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={digitalspace}
              isBlog={false}
              title="DigitalSpace - Astronomia Online"
              description="Plataforma de ensino a astronomia de forma divetida."
              demoLink="https://www.igorregis.tech/"

            />
          </Col>
         
          <Col md={4} className="card-projetos">
            <Projetoscards
              imgPath={sigbare}
              isBlog={false}
              title="SIGBARE - Biblioteca ONLINE"
              description="Repositório dos livros disponíveis na Biblioteca Municipal de Mombaça. Através da plataforma, é possível fazer reservas de livros e baixar acervos que estejam disponíveis."
              demoLink="https://www.igorregis.tech/sigbare"

            />
          </Col>
            </Row>
          </Carousel.Item>

{/* Fim carrousel */}

        </Carousel>
      </Container>

      <span className="about-section">
        <Stackstecn />
        </span>

        <span className="about-section">
        <Github />
        </span>



        </Container>
        
  );
}

export default Projetos;