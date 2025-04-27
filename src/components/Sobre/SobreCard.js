import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function SobreCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá mundo, me chamo <span className="purple">Igor Régis </span>
            resido no <span className="purple"> Brasil</span>
            <br />Sou um júnior cursando Ciências da Computação na Universidade Estadual do Ceará (UECE)
            <br />
            <br />
            Além de codar, tenho algumas outras atividades que gosto de fazer
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar alguns jogos online
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler um pouco
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "O espírito humano precisa prevalecer sobre a tecnologia."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SobreCard;
