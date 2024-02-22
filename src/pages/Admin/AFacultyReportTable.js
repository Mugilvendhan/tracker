import React, { useState } from 'react'
import AFacultyReportTitle from '../../Components/Carts/Admin/ACompliantTables.js/AFacultyReportTitle'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNav from '../../Layouts/Header/AdminNav'
import AFacultyTable from '../../Components/Carts/Admin/ACompliantTables.js/AFacultyTable'
import StudSearchBar from '../../Components/Carts/staff/StaffCompliants/StudSearchBar'

function AFacultyReportTable() {



  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
          <AdminNav/>
        <div style={{paddingTop:'5rem'}}>
        <AFacultyReportTitle/>
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
      <AFacultyTable searchQuery={searchQuery}/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default AFacultyReportTable