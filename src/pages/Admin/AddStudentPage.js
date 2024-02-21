import React, { useState } from 'react'
import AdminNav from '../../Layouts/Header/AdminNav'
import AddUserStud from '../../Components/Carts/Admin/AddUserStud.js/AddStudTable'
import { Col, Container, Row } from 'react-bootstrap';
import AddButton from '../../Components/Carts/Admin/AddUserStud.js/AddButton';
import SearchBar from '../../Components/Carts/Admin/AddUserStud.js/SearchBar';

function AddStudentPage() {


  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
        <AdminNav/>

      <Container fluid>
      <Container className='my-4 pt-5'>
        <div className="container align-items-center ">
      <div className="col text-center">    
        <h2>USERS LIST</h2>
      </div>
    </div>
    </Container>


    <Row>



    <Col className='text-start' style={{paddingLeft:'5rem'}} >
      <Container>
      <SearchBar setSearchQuery={setSearchQuery} />
      </Container>
   
      </Col>
      <Col>
      <Container fluid style={{paddingRight:'5rem'}}>
    <Col className='lg-12 text-end'>
    <AddButton/>
    </Col>
    </Container>

      </Col>


     
    </Row>

   


  
        <Container fluid>
      <div className="content-box mt-1">
      
      <Row className='justify-content-center'>
      <Col lg="12">
      
        <AddUserStud  searchQuery={searchQuery}/>
        </Col>
    </Row>
    </div>
    </Container>
      </Container>
    </div>
  );
}

export default AddStudentPage