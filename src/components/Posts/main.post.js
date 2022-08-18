import React from 'react'
import { Container } from "react-bootstrap"
import Articles from './card.post'

const Posts = (props) => {
  return (
    <React.Fragment>
        <h1>Community Threads</h1>
        <Container className="mt-2">
        <h3>{props.title}</h3>
        <i>{props.description}</i>
        <Articles />
      </Container>
    </React.Fragment>
  )
}

export default Posts