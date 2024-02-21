import React, { useState } from 'react'
import StaffNav from '../../Layouts/Header/StaffNav'
import { Col, Container, Row } from 'react-bootstrap'
import StaffTableFaculty from '../../Components/Carts/staff/StaffCompliants/StaffTableFaculty'
import CompliantFaculty from '../../Components/Carts/staff/StaffCompliants/CompliantFaculty'
import StudSearchBar from '../../Components/Carts/staff/StaffCompliants/StudSearchBar'

function StaffComplaintFaculty() {


  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>

<StaffNav/>

<Container className='my-4 pt-5'>
<CompliantFaculty/>
</Container>



<Container>
      <Row>
      <Col className='lg-12 text-end  mt-4' style={{paddingLeft:'5rem'}}>
        <StudSearchBar setSearchQuery={setSearchQuery} />
        </Col>
      </Row>
     </Container>

   <Container>
 <div className="content-box mt-2">
 <Row className='justify-content-center'>
 <Col lg="12">
 
   <StaffTableFaculty  searchQuery={searchQuery}/>
   </Col>
</Row>
</div>
</Container>
    </div>
  )
}

export default StaffComplaintFaculty