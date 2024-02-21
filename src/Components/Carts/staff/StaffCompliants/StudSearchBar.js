import React from 'react';
import { Col } from 'react-bootstrap';

function StudSearchBar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div >
       
       <Col xs={12} md={6} className='text-start' style={{maxWidth:'20rem'}} >
      <input
        type='text'
        placeholder='Search by Priority'
        onChange={handleSearchChange}
        className='form-control'
                         
      />
     
    </Col>
    </div>
  );
}

export default StudSearchBar;