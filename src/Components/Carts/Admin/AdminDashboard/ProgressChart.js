import React from 'react';
import {Card, Row, Col, Container } from 'react-bootstrap';
import chart from '../../../../Assets/img/piechart.png'

function ProgressChart() {
  return (
    <div>
       <Container>
       <div className="carousel-inner">
        <div className="carousel-item active">
          <Row className="justify-content-around">
            <Col className="mb-3 mx-5">
              <Card>
                <Card.Body className="text-center">
                  <img src={chart} alt="avatar" className="rounded img-fluid" style={{ width: '100%', maxWidth: '500rem' }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
          </Container>
        </div>



  );
}

export default ProgressChart;
