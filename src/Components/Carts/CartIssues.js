import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function IssueCart({ cateimg, category, cardtext, btnname, route }) {
  return (
   <Container className='table-responsive'>
     <Card className="mb-3" style={{ minWidth: '15rem', maxWidth: '18rem'}}>
      <Card.Img variant="top" src={cateimg} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>{cardtext}</Card.Text>
        <Link to={route}>
          <Button variant="dark">{btnname}</Button>
        </Link>
      </Card.Body>
    </Card>
   </Container>
  );
}

export default IssueCart;
