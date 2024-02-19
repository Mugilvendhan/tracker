import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import TaskTable from '../../Components/Carts/Student/Task/Task'
import {  Col , Container, Row } from 'react-bootstrap'
import TaskTitle from '../../Components/Carts/Student/Task/TaskTitle'

function Tasks() {
  return (
    <div>

<Studentnav/>
        <div style={{paddingTop:'5rem'}}>
        <TaskTitle/>
        </div>

    <Container>
      <div className="content-box" style={{margin:'30px'}}>
      <Row className='justify-content-center'>
      <Col lg="12">
        <TaskTable/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default Tasks