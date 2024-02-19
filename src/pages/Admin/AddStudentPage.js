import React from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import AddUserStud from '../../Components/Carts/Admin/AddUserStud.js/AddStudTable'
import { Col, Container, Row } from 'react-bootstrap';
import AddButton from '../../Components/Carts/Admin/AddUserStud.js/AddButton';

function AddStudentPage() {
  return (
    <div>
        <AdminNav/>

        <Container className='my-4 pt-5'>
        <div className="container align-items-center ">
      <div className="col text-center">
        <h2>Students List</h2>
      </div>
    </div>
    </Container>

    <Container fluid style={{paddingRight:'5rem'}}>
    <Col className='lg-12 text-end'>
    <AddButton/>
    </Col>
    </Container>

        <Container fluid>
      <div className="content-box mt-1">
      
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <AddUserStud/>
        </Col>
    </Row>
    </div>
    </Container>
    </div>
  );
}

export default AddStudentPage