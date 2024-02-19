import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import DeleteTask from '../../../Modals/DeleteTask'; 
import { useDispatch, useSelector } from 'react-redux';
import { getTaskFromServer, setSelectedTask } from '../../../../slices/AddTaskSlice';
import FacultyDeleteAssignment from '../../../Modals/FDeleteAssignment';
import UpdateTaskModal from '../../../Modals/UpdateTaskModal';

function FTaskTable() {
/*   const [showModal, setShowModal] = useState(false); */

  const {taskAssign} = useSelector((state) =>state.assigntask)
  const dispatch=useDispatch();


  const [modalShow, setModalShow] = useState(false);
  
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);


  let editIssueStatus =(task) => {
    dispatch(setSelectedTask(task));
    setModalShow(true)
  }

   useEffect(()=>{               
    dispatch(getTaskFromServer());
   },[dispatch]
   )
/* 
  const deleteTask = () => {
    setShowModal(true);
  } */

  return (
    <Container className='table-responsive'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Subject Name</th>
            <th>Task</th>
            <th>Class</th>
            <th>Due Date</th>
            <th>Edit Task</th>
            <th>Delete Task</th>
          </tr>
        </thead>

        <tbody>
          {
                 taskAssign && taskAssign.map((task,index)=> (

                  <tr key={task.id}>
                  <td>{index +1}</td>
                  <td>{task.date}</td>
                  <td>{task.subname}</td>
                  <td>{task.task}</td>
                  <td>{task.classselect}</td>
                  <td>{task.duedate}</td>
                  {/* <td><Button variant="dark" onClick={() => deleteTask()}><i class="bi bi-trash"></i></Button></td> */}


                 <td className="text-center mx-5"> <Button variant='dark' onClick={()=> editIssueStatus(task)}><i className="bi bi-pencil-square mx-2"></i></Button></td> 
                   

      {/*   */}   <td><Button onClick={() => {setIssueToDelete(task); setDeleteModalShow(true);}} variant="dark" ><i className="bi bi-trash"  ></i> </Button> </td>

                </tr>

           

                 ))          
          }
          
        </tbody>
      </Table>


      <UpdateTaskModal show={modalShow} onHide={()=> setModalShow(false)} /> 


      <FacultyDeleteAssignment show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} task={IssueToDelete}/>

      {/* <DeleteTask show={showModal} onHide={() => setShowModal(false)} />  */}
    </Container>
  );
}

export default FTaskTable;
