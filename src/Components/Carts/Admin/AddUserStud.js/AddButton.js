import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import StudentAddFormModal from './StudentAddForm'

function AddButton() {

    const[showModal,setShowModal]=useState()

    const openModal =()=>{
        setShowModal(true)
    }
  return (
    <div>
<Button variant='dark' onClick={openModal}>
    Add User
</Button>
        <StudentAddFormModal show={showModal} onHide={()=> setShowModal(false)}/>
    </div>

    
  )
}

export default AddButton