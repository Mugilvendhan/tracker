import React from 'react'
import StaffNav from '../../Layouts/Header/StaffNav'
import StaffTable from '../../Components/Carts/staff/StaffCompliants/StaffTable'
import { Col, Container, Row } from 'react-bootstrap'
import CompliantTitle from '../../Components/Carts/staff/StaffCompliants/CompliantTitle'
function StaffCompliaints() {
  return (
    <div>
        <StaffNav/>

     <Container className='my-4 pt-5'>
     <CompliantTitle/>
     </Container>

        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <StaffTable/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default StaffCompliaints