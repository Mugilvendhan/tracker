import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import grade from '../../../Assets/img/grade enquiry.jpg'
import facility from '../../../Assets/img/facility.jpg'
import materials from '../../../Assets/img/course material.jpg'
import IssueCart from '../CartIssues';
function FRaiseIssue() {
    const FacultyissueRaise = [
      {
        img: materials,
        category: "Report on Academic Related Issues",
        cardText: "Report Academic concerns, including course material, grades, and facilities.",
        route: "/facademicform"
      },
      {
        img: grade,
        category: "Report on Infrastructure Related Issues",
        cardText: "Report Infrastructure concerns, including classroom, Laboratory, and Equipment.",
        route: "/finfraform" 
      },
      {
        img: facility,
        category: "Report on Administrative Related Issues",
        cardText: "Report academic concerns, including Enrollment, Registration, and Fees.",
        route: "/fadminform"
      }
      ];
    
      return (
        <div style={{ padding: '2rem' }}>
          <div className="row align-items-center">
            <div className="col text-center">
              <h2>Raise Your New Issues</h2>
            </div>
          </div>
    
          <Container className='align-item-center'>
        <div className="content-box mt-5 ">
          <Row>
          {FacultyissueRaise.map((issue, index) => (
           <Col key={index}>
             <IssueCart cateimg={issue.img} category={issue.category} cardtext={issue.cardText} btnname="Raise Issue" route={issue.route} />
           </Col>
))}

          </Row>
        </div>
      </Container>
        </div>
      );
    }

export default FRaiseIssue