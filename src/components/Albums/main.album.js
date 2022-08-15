//Children Component
import React from "react";
import { Container } from "react-bootstrap"
import Collection from "./collection.albums";


const Albums = (props) => {
  return (
    <React.Fragment>
      <h1>Gallery</h1>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <i>{props.description}</i>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
