//Children Component
import React from "react";
import { Container } from "react-bootstrap"
import Collection from "./collection.albums";


const Albums = (props) => {
  return (
    <React.Fragment>
      <Container>
      <h1>Gallery</h1>
        <h3>{props.title}</h3>
        <i>{props.description}</i>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
