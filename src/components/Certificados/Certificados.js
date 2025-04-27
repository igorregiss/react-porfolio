import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import c01 from "../../Assets/01.pdf";
import c02 from "../../Assets/02.pdf";
import c03 from "../../Assets/03.pdf";
import c04 from "../../Assets/04.pdf";
import c05 from "../../Assets/05.pdf";
import c06 from "../../Assets/06.pdf";
import c07 from "../../Assets/07.pdf";
import c08 from "../../Assets/08.pdf";
import c09 from "../../Assets/09.pdf";
import c10 from "../../Assets/10.pdf";
import c11 from "../../Assets/11.pdf";
import c12 from "../../Assets/12.pdf";
import c13 from "../../Assets/13.pdf";
import c14 from "../../Assets/14.pdf";
import c15 from "../../Assets/15.pdf";
import c16 from "../../Assets/16.pdf";
import c17 from "../../Assets/17.pdf";
import c18 from "../../Assets/18.pdf";
import c19 from "../../Assets/19.pdf";

function Certificados() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row><Col md={12} className="descricao-sobre-inicio">
            <h1 style={{ fontSize: "2.6em" }}>
              MEUS <span className="purple">CERTIFICADOS</span>
            </h1>
            <p className="body-sobre-inicio">      Técnico em Informática      </p>
            <Document file={c01} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Trilha Conectar do Discover      </p>
            <Document file={c02} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      DESCOMPLICA A PESQUISA: ELABORAÇÃO DO PROJETO PARA O TCC      </p>
            <Document file={c03} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Trilha Fundamentar do Discover      </p>
            <Document file={c04} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">       Trilha Especializar do Discover      </p>
            <Document file={c05} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Project Management Essentials Certified - PME      </p>
            <Document file={c06} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Trabalhando em Equipes Ágeis      </p>
            <Document file={c07} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Descubra a Nuvem      </p>
            <Document file={c08} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Bootcamps DIO: Educação Gratuita e Empregabilidade Juntas!      </p>
            <Document file={c09} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Ouvinte na XXVIII Semana Universitária da UECE      </p>
            <Document file={c10} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">       A EXPERIMENTAÇÃO NO ENSINO DE FÍSICA COM A UTILIZAÇÃO DO ARDUÍNO      </p>
            <Document file={c11} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Educacao Em Nuvem Vantagens E Desafios da Utilizacao De Plataform as Baseadas Em Cloud Computing      </p>
            <Document file={c12} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Educacao Inclusiva E Neurodiversidade Estrategias Pedagogicas Para A Inclusao De Alunos Com Disturbios De Aprendizagem      </p>
            <Document file={c13} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Educacao para a Cidadania Global Formacao de Professores para a Implem entacao dos Objetivos de Desenvolvim ento Sustentavel ODS      </p>
            <Document file={c14} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      A Intersecao Entre Educacao E Saude Mental Estrategias Para Apoiar Alunos Com Transto rnos De Ansiedade E Depressao Nas Escolas      </p>
            <Document file={c15} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      O Impacto das Redes Sociais na Construcao do Conhecimento Um Estudo sobre Aprendizagem Informal      </p>
            <Document file={c16} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      Inovações Educacionais e Inclusivas: Tecnologia, Mentoria e Abordagens Interdisciplinares na Formação e Aprendizagem      </p>
            <Document file={c17} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">       LATEX & GIT: KIT DE SOBREVIVÊNCIA EM COMPUTAÇÃO PARA A PRODUÇÃO ACADÊMICA E COLABORAÇÃO EM EQUIPE      </p>
            <Document file={c18} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>

            <p className="body-sobre-inicio">      o NLW Pocket: Mobile - React Native da Rocketseat      </p>
            <Document file={c19} className="d-flex justify-content-center">
            <Page pageNumber={1} />
            </Document>
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

export default Certificados;
