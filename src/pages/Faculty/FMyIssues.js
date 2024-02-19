import React from 'react'
import Facultynav from '../../Layouts/Header/FacultyNav'
import FIssueTitle from '../../Components/Carts/Faculty/FMyIssue.js/FIssueTitle'
import { Col, Container, Row } from 'react-bootstrap'
import FIssueTable from '../../Components/Carts/Faculty/FMyIssue.js/FIssueTable'

function FMyIssues() {
  return (
    <div>
         <Facultynav/>
        <div style={{paddingTop:'5rem'}}>
        <FIssueTitle/>
        </div>
        
        <Container>
      <div className="content-box">
      <Row className='justify-content-center'>
      <Col lg="12">
        <FIssueTable/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  )
}

export default FMyIssues