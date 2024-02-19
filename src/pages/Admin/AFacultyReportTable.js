import React from 'react'
import AFacultyReportTitle from '../../Components/Carts/Admin/ACompliantTables.js/AFacultyReportTitle'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNav from '../../Layouts/Header/AdminNav'
import AFacultyTable from '../../Components/Carts/Admin/ACompliantTables.js/AFacultyTable'

function AFacultyReportTable() {
  return (
    <div>
          <AdminNav/>
        <div style={{paddingTop:'5rem'}}>
        <AFacultyReportTitle/>
        </div>

        
        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
      <AFacultyTable/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default AFacultyReportTable