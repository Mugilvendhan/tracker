import React from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import ProgressCard from '../../Components/Carts/Admin/AdminDashboard/ProgressCard'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressChart from '../../Components/Carts/Admin/AdminDashboard/ProgressChart'
import ProgressGraph from '../../Components/Carts/Admin/AdminDashboard/ProgressGraph'


function AdminDashboard() {
  return (
    <div>
        <AdminNav/>
    
         <div className='align-content-center my-5 py-4'>
            <h2>Dashboard</h2>
         </div>


         <div className="content-box mt-3 py-3 mx-auto text-center align-content-center" style={{ maxWidth: '60rem'}}>
        <Container className="mx-auto">
        <ProgressCard/>
        </Container>
        </div>


              
        <div className="content-box mt-3 py-3 mx-auto text-center align-content-center" style={{ maxWidth: '60rem'}}>
            <ProgressGraph/>
  
        </div> 

        <div className="content-box mt-3 py-3 mx-auto text-center align-content-center" style={{ maxWidth: '60rem'}}>
        <Container className="mx-auto">

          <Row>
            <Col>
            <ProgressChart/>
            </Col>
            <Col>
            <ProgressChart/>
            </Col>
          </Row>
      
        </Container>
        </div>

  
        
    </div>
  )
}

export default AdminDashboard