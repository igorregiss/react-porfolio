import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjetosCards(props) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHover(false);
    }, 500); // define o delay de 0.5s para fechar novamente
  };

  return (
    <Card
      className="visualizar-card-projetos"
      onMouseEnter={toggleHover}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {hover && (
            <p>
              {props.description}
            </p>
          )}
        </Card.Text>
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;
            {props.isBlog ? "Blog" : "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjetosCards;