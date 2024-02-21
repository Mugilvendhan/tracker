import React from 'react'
import { Button, Card, Col,Row } from 'react-bootstrap'                     
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function ProgressCard() {


  const  {issuesList} = useSelector((state) => state.issues); 
const  {issuesListFaculty}  = useSelector((state) => state.issuesfaculty); 

  return (
    <div>
       <div className="carousel-inner">
      <div className="carousel-item active">
        <Row className="justify-content-around">
          <Col md={4} className="mb-3">
           
              <Card className="border-0" style={{ borderRadius: '30px' }}>
                <Card.Body className="text-center">
                  <p><i className='bx bxs-graduation' style={{ fontSize: '50px', height: '50px', backgroundColor: 'aqua', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
                  <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Student Reports</span></p>
                  
                  <p><span style={{ fontSize: 'medium', fontWeight:'400' }}>  {`Currently ${issuesList.length} Reports Raised`}</span></p>
                 {/*  <span style={{ fontSize: 'small' }}>more details</span> */}
                 <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white',fontSize: 'small' }}  as={Link} to='/adminstudenttable'>view</Button>

                </Card.Body>
              </Card>
         
          </Col>
          <Col md={4} className="mb-3">
           
              <Card className="border-0" style={{ borderRadius: '30px' }}>
                <Card.Body className="text-center">
                  <p><i className='bx bx-book-open' style={{ fontSize: '50px', height: '50px', backgroundColor: 'rgb(255, 149, 0)', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
                  <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Faculty Reports</span></p>
                  {/* <p><span style={{ fontSize: 'medium' }}>10+ Issues Processing currently</span></p> */}
                  {/* <span style={{ fontSize: 'small' }}>more details</span> */}
                  <p><span style={{ fontSize: 'medium' }}> </span>{`Currently ${issuesListFaculty.length} Reports Raised`}</p>
                
                 <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white',fontSize: 'small' }} as={Link} to="/adminfacultytable">view</Button>

                </Card.Body>
              </Card>
          
          </Col>
          
        </Row>
      </div>
    </div>
    </div>
  )
}

export default ProgressCard

