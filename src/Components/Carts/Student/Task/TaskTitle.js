import React from 'react';
import { Container } from 'react-bootstrap';

function TaskTitle() {
  return (
   <Container>
     <div className="row align-items-center mb-0">
    <div className="col text-center  mb-0">
      <h2>Task Assigned</h2>
    </div>
    </div>
   </Container>
  );
}

export default TaskTitle;
