import React, { useState } from 'react'
import StaffNav from '../../Layouts/Header/StaffNav'
import StaffTable from '../../Components/Carts/staff/StaffCompliants/StaffTable'
import { Col, Container, Row } from 'react-bootstrap'
import CompliantTitle from '../../Components/Carts/staff/StaffCompliants/CompliantTitle'
import StudSearchBar from '../../Components/Carts/staff/StaffCompliants/StudSearchBar'
function StaffCompliaints() {


  
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
        <StaffNav/>

     <Container className='my-4 pt-5'>
     <CompliantTitle/>
     </Container>



     <Container>
      <Row>
      <Col className='lg-12 text-end  mt-4' style={{paddingLeft:'5rem'}}>
        <StudSearchBar setSearchQuery={setSearchQuery} />
        </Col>
      </Row>
     </Container>
   
        <Container>
      
      <div className="content-box  mt-2" >
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <StaffTable searchQuery={searchQuery}/>    
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default StaffCompliaints