import React from "react";
import { Card } from "react-bootstrap";

const Tarjeta = (props) => (
 <div className= "d-flex justify-content-center">
 <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.imagenUrl} />
    <Card.Body>
      <Card.Title>{props.titulo}</Card.Title>
      <Card.Text>{props.descripcion}</Card.Text>
    </Card.Body>
  </Card>
  </div>
);

export default Tarjeta;
