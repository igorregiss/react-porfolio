import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { IoIosCloudDownload } from "react-icons/io";

function SoftwaresCards(props) {
  return (
    <Card className="visualizar-card-projetos">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.dwLink && (
  <Button variant="primary" href={props.dwLink} target="_blank">
  <IoIosCloudDownload /> &nbsp;
  {props.isBlog ? "Blog" : "Download"}
</Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default SoftwaresCards;
