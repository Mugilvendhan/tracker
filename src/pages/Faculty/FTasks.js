import React from 'react'
import Facultynav from '../../Layouts/Header/FacultyNav'
import FTaskTitle from '../../Components/Carts/Faculty/FTask/FTaskTitle'
import { Col, Container, Row } from 'react-bootstrap'
import FTaskTable from '../../Components/Carts/Faculty/FTask/FTaskTable'
import FTaskForm from '../../Components/Carts/Faculty/FTask/FTaskForm'

function FTasks() {
  return (
   
         <div>

<Facultynav/>
        <div style={{paddingTop:'5rem'}}>
        <FTaskTitle/>
        </div>
        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <FTaskForm/>
        </Col>
    </Row>
    </div>
    </Container>
    <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <FTaskTable/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
 
  )
}

export default FTasks