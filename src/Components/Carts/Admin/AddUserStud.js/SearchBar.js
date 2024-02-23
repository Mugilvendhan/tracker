// SearchBar.js
import React from 'react';
import { Col, Container } from 'react-bootstrap';

function SearchBar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div >
       <Container>
       <Col xs={12} md={6} className='text-start' >
      <input
        type='text'
        placeholder='Search by Name / Role'
        onChange={handleSearchChange}
        className='form-control'
                         
      />
     
    </Col>
       </Container>
    </div>
  );
}

export default SearchBar;
