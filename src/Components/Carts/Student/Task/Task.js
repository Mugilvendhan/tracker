import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Task1PDF from '../../../../Assets/doc/Task1.pdf'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTaskFromServer } from '../../../../slices/AddTaskSlice';

function TaskTable() {



  

  const [userData, setUserData] = useState(null);
  const [loggedYear, setLoggedYear] = useState(null);
  const [loggedDept, setLoggedDept] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInYearFromLocalStorage = localStorage.getItem('loggedYear');
    const loggedInDeptFromLocalStorage = localStorage.getItem('loggedDept');
    console.log('loggedInYearFromLocalStorage:', loggedInYearFromLocalStorage);
    console.log('loggedInDeptFromLocalStorage:', loggedInDeptFromLocalStorage);
    if (loggedInYearFromLocalStorage) {
      setLoggedYear(loggedInYearFromLocalStorage);
    }
  
    if (loggedInDeptFromLocalStorage) {
      setLoggedDept(loggedInDeptFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    console.log(loggedYear , loggedDept);
    if (loggedYear && loggedDept) {
      // Make the API request using loggedYear and loggedDept
      fetch(`http://localhost:5000/assigntask?year=${loggedYear}&classselect=${loggedDept}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          // Handle the fetched data as needed
          setUserData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [loggedYear, loggedDept]);
  
          












    // const {taskAssign} = useSelector((state)=>state.assigntask)

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
                 userData && userData.map((task,index)=> (
     
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
