import React, { useState } from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import AStudentTable from '../../Components/Carts/Admin/ACompliantTables.js/AStudentTable'
import AStudentReportTitle from '../../Components/Carts/Admin/ACompliantTables.js/AStudentReportTitle'
import { Col, Container, Row } from 'react-bootstrap'
import StudSearchBar from '../../Components/Carts/staff/StaffCompliants/StudSearchBar'

function AStudentReportTable() {


  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div>
        <AdminNav/>
        <div style={{paddingTop:'5rem'}}>
        <AStudentReportTitle/>
        </div>




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
      <AStudentTable  searchQuery={searchQuery}/>
        </Col>
    </Row>
    </div>
    </Container>
       
    </div>
  )
}

export default AStudentReportTable