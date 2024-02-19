
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getIssuesFromServer, setSelectedIssue,error } from '../../../../slices/IssueSlice';
import Description from '../../../Modals/Description';
import UpdateStatueStaff from '../../../Modals/UpdateStatueStaff';
import DeleteTask from '../../../Modals/DeleteTask';

function StaffTable() {

  const [modalShow, setModalShow] = useState(false);
/*   const [selectedIssueId, setSelectedIssueId] = useState(null); */
  const [selectedIssueData, setSelectedIssueData] = useState(null);       //describe the issue
  const { issuesList } = useSelector((state) => state.issues);
  //
  const dispatch = useDispatch();

  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);



                    
/*   const [modalDelete, setModalDelete] = React.useState(false);    */  //update

  useEffect(() => {
    dispatch(getIssuesFromServer());                    
  }, [dispatch]);


 /*  const handleStatusUpdate = (status) => {
    setShowModal(true)         
    dispatch(updateIssue(status)); // Dispatch the updateIssue action to update the issue in the Redux store
  }; */


    let editIssueStatus =(issue) => {
      dispatch(setSelectedIssue(issue));
      setModalShow(true)
    }
  
   
 /*  const deleteReportField =(issue)=> {
      setModalDelete(issue);
    } */

/* 
    const deleteReportField = (issue) => {
      setSelectedIssueId(issue);
    }; */



  const openDescriptionModal = (issue) => { 
    dispatch(setSelectedIssue(issue)); 
    setSelectedIssueData(issue); 
  }

  const closeDescriptionModal = () => {
    setSelectedIssueData(null);
  }
/* 
  let editModal =() => {
    setShowModal(true)
  } */

  return (
    <div>
      <Container className='table-responsive'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Issue Id</th>
              <th>Date</th>
              <th>Name</th>
              <th>Department</th>
              <th>Priority</th>
              <th>Contact No.</th>
              <th>Issue On</th>
              <th>Status</th>
              <th>Delete</th>          
            </tr>
          </thead>
          <tbody>
            {issuesList && issuesList.map((issue, index) => (
              <tr key={issue.id}>
                <td>{index + 1}</td>
                <td>{issue.date}</td>            
                <td>{issue.name}</td>
                <td>{issue.dept}</td>
                <td>{issue.priority}</td>
                <td>{issue.mobile}</td>
                <td className="text-center mx-5">
                  {issue.issueon} 
                  <i className="bi bi-eye-fill mx-2" style={{ cursor: 'pointer' }} onClick={() => openDescriptionModal(issue)}></i>
                </td>
                 <td className="text-center mx-5"> <b> {issue.status} </b><i className="bi bi-pencil-square mx-2" style={{ cursor: 'pointer' }} onClick={()=> editIssueStatus(issue)}></i></td> 
                {/* <td><Button variant="dark" onClick={()=>deleteReportField(issue)}><i className="bi bi-trash" ></i></Button></td> */}

                {/* <td><Button variant="dark" onClick={() => deleteReportField(issue)}><i className="bi bi-trash" ></i></Button></td> */}



                {/* <Button
                      variant="dark"
                      onClick={() => {
                       setIssueToDelete(leave); 
                      setModalDelete(true);
                      }}
                    >
                    </Button>   */}
                    
{/* Deletemodal */}

      {/*   */}   <td><Button onClick={() => {setIssueToDelete(issue); setDeleteModalShow(true);}} variant="dark" ><i className="bi bi-trash"  ></i> </Button> </td>{/**/}






               {/* <Button variant="dark" onClick={() => deleteReportField(issue)}>
                      <i className="bi bi-trash"></i>
                    </Button> */}
              </tr>
            ))}
          </tbody>
        </Table>
        <div>{error ? <h2>{error}</h2> : null}</div>
        <Description show={selectedIssueData !== null} onHide={closeDescriptionModal} issue={selectedIssueData} />
        <UpdateStatueStaff show={modalShow} onHide={()=> setModalShow(false)} /> 
           <DeleteTask show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} issue={IssueToDelete}/>




      {/*  {selectedIssueId && <DeleteTask show={true} onHide={() => setSelectedIssueId(null)} selectedIssueId={selectedIssueId} />} */}

      </Container>
    </div>
  )
}

export default StaffTable;
