import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IssueCart from '../../CartIssues';
import grade from '../../../../Assets/img/grade enquiry.jpg';
import facility from '../../../../Assets/img/facility.jpg';
import materials from '../../../../Assets/img/course material.jpg';

function Cardhold() {
  const issueCardDetails = [
    {
      img: materials,
      category: "Report on Academic Related Issues",
      cardText: "Report Academic concerns, including course material, grades, and facilities.",
      route: "/studentacademicreport"
    },
    {
      img: grade,
      category: "Report on Infrastructure Related Issues",
      cardText: "Report Infrastructure concerns, including classroom, Laboratory, and Equipment.",
      route: "/studentinfrastructurereport" 
    },
    {
      img: facility,
      category: "Report on Administrative Related Issues",
      cardText: "Report academic concerns, including Enrollment, Registration, and Fees.",
      route: "/studentadminreport"
    }
  ];
  
 
  return (

    <div style={{ padding: '2rem' }}>
  <div className="row align-items-center">
    <div className="col text-center">
      <h2>RAISE NEW ISSUE</h2>
    </div>
  </div>

  <Container fluid className='table-responsive'>
    <div className="content-box mt-5">
      <Row xs={1} sm={2} md={3} className="justify-content-center">
        {issueCardDetails.map((issue, index) => (
          <Col key={index} className="mb-3">
            <IssueCart cateimg={issue.img} category={issue.category} cardtext={issue.cardText} btnname="Raise Issue" route={issue.route} />
          </Col>
        ))}
      </Row>
    </div>
  </Container>
</div>

  );
}

export default Cardhold;
