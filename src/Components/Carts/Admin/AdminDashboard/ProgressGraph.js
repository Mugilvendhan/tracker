import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import graph from '../../../../Assets/img/graph.png'

function ProgressGraph() {
  return (
    <div>
         <Container>
       <div className="carousel-inner">
        <div className="carousel-item active">
          <Row className="justify-content-around">
            <Col className="mb-3 mx-5">
              <Card>
                <Card.Body className="text-center">
                  <img src={graph} alt="avatar" className="rounded img-fluid" style={{ width: '100%', maxWidth: '' }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
          </Container>
    </div>
  )
}

export default ProgressGraph