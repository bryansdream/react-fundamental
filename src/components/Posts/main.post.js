import React from 'react'
import { Container } from "react-bootstrap"
import Premier from './premier.posts'

const Posts = (props) => {
  return (
    <React.Fragment>
        <h1>Community Threads</h1>
        <Container className="mt-2">
        <h3>{props.title}</h3>
        <i>{props.description}</i>
        <Premier />
      </Container>
    </React.Fragment>
  )
}

export default Posts