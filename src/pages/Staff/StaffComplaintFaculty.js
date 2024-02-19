import React from 'react'
import StaffNav from '../../Layouts/Header/StaffNav'
import { Col, Container, Row } from 'react-bootstrap'
import StaffTableFaculty from '../../Components/Carts/staff/StaffCompliants/StaffTableFaculty'
import CompliantFaculty from '../../Components/Carts/staff/StaffCompliants/CompliantFaculty'

function StaffComplaintFaculty() {
  return (
    <div>

<StaffNav/>

<Container className='my-4 pt-5'>
<CompliantFaculty/>
</Container>

   <Container>
 <div className="content-box">
 <Row className='justify-content-center'>
 <Col lg="12">
 
   <StaffTableFaculty/>
   </Col>
</Row>
</div>
</Container>
    </div>
  )
}

export default StaffComplaintFaculty