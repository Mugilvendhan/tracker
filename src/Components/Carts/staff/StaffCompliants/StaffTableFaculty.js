import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
//import { getIssuesFromServerFaculty, setSelectedIssueFaculty } from '../../../../slices/IssueSlice';
import FacultyDescription from '../../../Modals/FDescriptionModal';
import FacultyUpdateStatueStaff from '../../../Modals/FUpdateStatus';
import FacultyDeleteTask from '../../../Modals/FDeleteTask';
import { getIssuesFromServerFaculty, setSelectedIssueFaculty } from '../../../../slices/FacultyIssueSlice';





                             
function StaffTableFaculty({searchQuery}) {








  const [modalShow, setModalShow] = useState(false);

  const [selectedIssueData, setSelectedIssueData] = useState(null); 

  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);


  const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);

   const dispatch=useDispatch();


   useEffect(() => {
    dispatch(getIssuesFromServerFaculty());                    
  }, [dispatch]);



  const openDescriptionModal = (issuefaculty) => { 
    dispatch( setSelectedIssueFaculty (issuefaculty)); 
    setSelectedIssueData(issuefaculty); 
  }

  const closeDescriptionModal = () => {
    setSelectedIssueData(null);
  }



  let editIssueStatus =(issuefaculty) => {
    dispatch(setSelectedIssueFaculty(issuefaculty));
    setModalShow(true)
  }





  const [filteredProfileList, setFilteredProfileList] = useState([]);

  useEffect(() => {
    // Filter the profileList based on searchQuery
    const filteredList = issuesListFaculty.filter((issuefaculty) => {
      const priority = issuefaculty.priority && issuefaculty.priority.toString().toLowerCase(); // Convert to string and then lowercase
      return priority && priority.includes(searchQuery.toLowerCase()); // Ensure priority is not null/undefined before applying .toLowerCase()
    });
    setFilteredProfileList(filteredList);
  }, [issuesListFaculty, searchQuery]);



  
  const [userData, setUserData] = useState(null);

  const [loggedDept, setLoggedDept] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInYearFromLocalStorage = localStorage.getItem('loggedYear');
    const loggedInDeptFromLocalStorage = localStorage.getItem('loggedDept');
    console.log('loggedInYearFromLocalStorage:', loggedInYearFromLocalStorage);
    console.log('loggedInDeptFromLocalStorage:', loggedInDeptFromLocalStorage);
  
  
    if (loggedInDeptFromLocalStorage) {
      setLoggedDept(loggedInDeptFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    console.log( loggedDept);
    if ( loggedDept) {
      // Make the API request using loggedYear and loggedDept
      fetch(`http://localhost:5000/issuesfaculty?dept=${loggedDept}`)
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
  }, [ loggedDept]);
  
           




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
        {/* { filteredProfileList.map((issuefaculty, index) => (
              <tr key={issuefaculty.id}>
                <td>{index + 1}</td>
                <td>{issuefaculty.date}</td>
                <td>{issuefaculty.name}</td>
                <td>{issuefaculty.dept}</td>
                <td>{issuefaculty.priority}</td>
                <td>{issuefaculty.mobile}</td>
                <td className="text-center mx-5">
                  {issuefaculty.issueon} 
                  <i className="bi bi-eye-fill mx-2" style={{ cursor: 'pointer' }} onClick={() => openDescriptionModal(issuefaculty)}></i>
                </td>

                <td className="text-center mx-5"> <b> {issuefaculty.status} </b><i className="bi bi-pencil-square mx-2" style={{ cursor: 'pointer' }} onClick={()=> editIssueStatus(issuefaculty)}></i></td> 

     <td><Button onClick={() => {setIssueToDelete(issuefaculty); setDeleteModalShow(true);}} variant="dark" ><i className="bi bi-trash"  ></i> </Button> </td>
                  
               
            </tr>
            ))} */}


{userData &&
  filteredProfileList
    .filter(issue => issue.dept === loggedDept) // Filter by loggedDept
    .filter(issue => {
      const priority = issue.priority && issue.priority.toString().toLowerCase();
      return priority && priority.includes(searchQuery.toLowerCase());
    }) // Filter by searchQuery
    .map((issue, index) => (
      <tr key={issue.id}>
        <td>{index + 1}</td>
        <td>{issue.date}</td>            
        <td>{issue.name}</td>
        <td>{issue.year} {issue.dept}</td>
        <td>{issue.priority}</td>
        <td>{issue.mobile}</td>
        <td className="text-center mx-5">
          {issue.issueon} 
          <i className="bi bi-eye-fill mx-2" style={{ cursor: 'pointer' }} onClick={() => openDescriptionModal(issue)}></i>
        </td>
        <td className="text-center mx-5">
          <b>{issue.status}</b>
          <i className="bi bi-pencil-square mx-2" style={{ cursor: 'pointer' }} onClick={() => editIssueStatus(issue)}></i>
        </td> 
        <td>
          <Button onClick={() => {setIssueToDelete(issue); setDeleteModalShow(true);}} variant="dark">
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    ))}
        </tbody>
      </Table>
      <FacultyDescription show={selectedIssueData !== null} onHide={closeDescriptionModal} issuefaculty={selectedIssueData} />
      
      <FacultyUpdateStatueStaff show={modalShow} onHide={()=> setModalShow(false)} /> 

      <FacultyDeleteTask show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} issuefaculty={IssueToDelete}/>
    
    </Container>
    </div>
  )
}

export default StaffTableFaculty