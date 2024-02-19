import React from 'react'
import Studentnav from '../../Layouts/Header/StudentNav'
import ReportedIssueTitle from '../../Components/Carts/Student/MyIssue/Title'
import ReportTable from '../../Components/Carts/Student/MyIssue/ReportIssueTable.js'
import { Col, Container, Row } from 'react-bootstrap'

function MyIssues() {
  return (
    <div className='MyIssues'>
        <Studentnav/>
        <div style={{paddingTop:'5rem'}}>
        <ReportedIssueTitle/>
        </div>
        
        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
        <ReportTable/>
        </Col>
    </Row>
    </div>
    </Container>
        
    </div>
  )
}

export default MyIssues