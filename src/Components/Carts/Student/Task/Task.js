import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Task1PDF from '../../../../Assets/doc/Task1.pdf'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTaskFromServer } from '../../../../slices/AddTaskSlice';

function TaskTable() {


     const {taskAssign} = useSelector((state)=>state.assigntask)

     const dispatch=useDispatch();

     useEffect(()=>{
      dispatch(getTaskFromServer());
     },[dispatch]
     )
    const handleDownload = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = Task1PDF; // Use the imported PDF file
      downloadLink.download = 'Task1.pdf'; // Name of the downloaded file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

  return (
    <Container className='table-responsive'>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Subject Name</th>
          <th>Task</th>
          <th>Attachments</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {
                 taskAssign && taskAssign.map((task,index)=> (
     
         <tr key={task.id}>
          <td>{index+1}</td>
          <td>{task.date}</td>
          <td>{task.subname} </td>
          <td>{task.task} </td>
          <td>
          <Button variant="btn btn-dark" onClick={handleDownload}>Download PDF</Button>
          </td>
          <td>{task.duedate}</td>
        </tr>  
        
                 ))}
      </tbody>
    </Table>
    </Container>
  );
}

export default TaskTable;
