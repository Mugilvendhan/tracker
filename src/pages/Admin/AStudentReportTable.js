import React from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import AStudentTable from '../../Components/Carts/Admin/ACompliantTables.js/AStudentTable'
import AStudentReportTitle from '../../Components/Carts/Admin/ACompliantTables.js/AStudentReportTitle'
import { Col, Container, Row } from 'react-bootstrap'

function AStudentReportTable() {
  return (
    <div>
        <AdminNav/>
        <div style={{paddingTop:'5rem'}}>
        <AStudentReportTitle/>
        </div>

        
        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
      <AStudentTable/>
        </Col>
    </Row>
    </div>
    </Container>
       
    </div>
  )
}

export default AStudentReportTable