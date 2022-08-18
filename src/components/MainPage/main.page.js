import { Button } from 'react-bootstrap'
import React from 'react'
import { Container } from 'react-bootstrap'

const MainPage = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <Button variant="dark">See Community</Button>
        </div>
      </Container>
    </div>
  )
}

export default MainPage