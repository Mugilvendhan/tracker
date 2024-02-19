
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {error, setSelectedUserStud} from '../../../../slices/StudentProfileSlice'
import { getUserFromServer } from '../../../../slices/StudentProfileSlice';
import AddStudEditModal from '../../../Modals/AddStudEditModal';
import DeleteStudUser from '../../../Modals/DeleteStudUser';

function AddUserStud() {
     
  const { profileList } = useSelector((state) => state.studentprofile);

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
   
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);

  let editIssueStatus =(profilestud) => {
    dispatch(setSelectedUserStud(profilestud));                                          
    setModalShow(true)
  }
  
  useEffect(() => {
    dispatch(getUserFromServer());                    
  }, [dispatch]);

    
  return (
    <div>
      <Container className='table-responsive'>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Sno</th>
              <th>Role</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>           
              <th>Mobile</th>
              <th>Password</th>     
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {profileList && profileList.map((profilestud, index) => (
              <tr key={profilestud.id}>
                <td>{index + 1}</td>
                <td>{profilestud.role}</td>
                <td>{profilestud.name}</td>
                <td>{profilestud.email}</td>
                <td>{profilestud.year} {profilestud.classdept}</td>
                <td>{profilestud.mobile}</td>
                <td>{profilestud.password}</td>
                <td className="text-center mx-5"> <Button variant='dark' onClick={()=> editIssueStatus(profilestud)}><i className="bi bi-pencil-square mx-2"></i></Button></td> 
                <td><Button onClick={() => {setIssueToDelete(profilestud); setDeleteModalShow(true);}} variant="dark" ><i className="bi bi-trash"  ></i> </Button> </td>{/**/}

              </tr>
            ))}
          </tbody>
        </Table>
        <div>{error ? <h2>{error}</h2> : null}</div>
        <AddStudEditModal show={modalShow} onHide={()=> setModalShow(false)} />
        <DeleteStudUser show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} profilestud={IssueToDelete}/>
       
      </Container>
    </div>
  )
}

export default AddUserStud;
