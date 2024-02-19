import React from 'react'
import { Container } from 'react-bootstrap'

function FInfo() {
  return (
    <Container className='table-responsive'>
    <div className="card-body" style={{border:'1px solid black', borderRadius:'5px' , backgroundColor:'white' ,textAlign: 'left' , padding: '1rem'}}>
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Full Name</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">Tanishka</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Email</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">tanishka123@gmail.com</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Class/Dept</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">IV-CSE</p>
      </div>
    </div>
    <hr />
    <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Role</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">Faculty</p>
        </div>
      </div>
      <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Mobile</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">91+ 6062837125</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Address</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">99/1 janagan street, saran road chennai, Tamilnadu</p>
      </div>
    </div>
  </div>
  </Container>

  )
}

export default FInfo