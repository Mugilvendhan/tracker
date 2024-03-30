import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { getIssuesFromServer } from '../../../../slices/IssueSlice';

function ReportTable() {
  

  const [userData, setUserData] = useState(null);
  //const [loggedName, setLoggedName] = useState(null);
  const [loggedEmail, setLoggedEmail] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInEmailFromLocalStorage = localStorage.getItem('loggedEmail');
    if (loggedInEmailFromLocalStorage) {
      setLoggedEmail(loggedInEmailFromLocalStorage);
      
    }
  }, []);

  useEffect(() => {
    console.log(loggedEmail)
    if (loggedEmail) {
      // Make the API request using loggedEmail
      fetch(`http://localhost:5000/issues?email=${loggedEmail}`)                            //the URL is known as the query string.  pass additional parameters to the server. retrieving a list of issues associated with the user's email address.
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
  }, [loggedEmail]);
          


 /*  const { issuesList } = useSelector((state) => state.issues); */
  const dispatch=useDispatch();
  useEffect(() => {                                                               //sideeffects - fetching data, subscribing to external services, or manually changing the DOM, 
    dispatch(getIssuesFromServer());                    
  }, [dispatch]);                                                                // The effect will re-run if any of the dependencies change
  return (
    <Container fluid className='table-responsive'>
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


          {userData && userData.map((issue, index) => (                                       //.map()-the code iterates over each element in the userData array using the .map() function
           <tr key={issue.id}>                                                     {/* key -  is used to uniquely identify elements in a list.  */}
           <td>{index + 1}</td>
           <td>{issue.date}</td>
           <td>{issue.issueon}</td>
           <td>{issue.description}</td>
           <td>{issue.priority}</td>
           <td><b>{issue.status}</b></td>
           
          </tr>
         ))}

      </tbody>
    </Table>
  </Container>
  
  );
}

export default ReportTable;