import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice'
//import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice'

function FIssueTable() {

  /* const {issuesListFaculty } = useSelector((state) =>state.issuesfaculty) */
   const dispatch=useDispatch()

   useEffect(() => {
    dispatch(getIssuesFromServerFaculty());                    
  }, [dispatch]);   
        
    

  
  const [userData, setUserData] = useState(null);
  const [loggedName, setLoggedName] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInNameFromLocalStorage = localStorage.getItem('loggedName');
    if (loggedInNameFromLocalStorage) {
      setLoggedName(loggedInNameFromLocalStorage);
      
    }
  }, []);

  useEffect(() => {
    console.log(loggedName)
    if (loggedName) {
      // Make the API request using loggedName
      fetch(`http://localhost:5000/issuesfaculty?name=${loggedName}`)
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
  }, [loggedName]);
        





   
  return (

   

    <Container fluid className="table-responsive">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Issue on</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>

    {userData && userData.map((issuefaculty, index) => (
              <tr key={issuefaculty.id}>
                <td>{index + 1}</td>
                <td>{issuefaculty.date}</td>
                <td>{issuefaculty.issueon}</td>
                <td>{issuefaculty.description}</td>
                <td>{issuefaculty.priority}</td>
                <td><b>{issuefaculty.status}</b></td>
                
        </tr>
          ))}
    </tbody>
  </Table>
  </Container>
  )
}

export default FIssueTable