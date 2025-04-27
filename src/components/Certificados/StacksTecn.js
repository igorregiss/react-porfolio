import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiWordpress,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsswizardry,
  SiHtml5,
  SiPhp,
  SiMicrosoftsqlserver,
  SiMysql,
} from "react-icons/si";

function StacksTecn() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <h1 className="project-heading">
          MINHAS HABILIDADES <strong className="purple">PROFISSIONAIS </strong>
        </h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
    </Row>
  );
}

export default StacksTecn;
