import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIssuesFromServer } from '../../../../slices/IssueSlice';
import { Container, Table } from 'react-bootstrap';

function AStudentTable({searchQuery}) {
        const { issuesList } = useSelector((state) => state.issues);              //hook to extract the issuesList from the Redux state, state typically refers to the global state managed by the Redux store.
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getIssuesFromServer());                    
  }, [dispatch]);

  const [filteredProfileList, setFilteredProfileList] = useState([]);                      // state variable , function to assign state variable

  useEffect(() => {
    // Filter the profileList based on searchQuery
    const filteredList = issuesList.filter((issue) => {                                   // returns a new array containing only those elements that satisfy the condition specified in the callback function.
      const priority = issue.priority && issue.priority.toString().toLowerCase(); //    if issue.priority is truthy then value  Convert to string and then lowercase
      return priority && priority.includes(searchQuery.toLowerCase()); // Ensure priority is not null/undefined before applying .toLowerCase()  , if the lowercase priority contains the lowercase search query. those values move to new array (filteredList)
    });
    setFilteredProfileList(filteredList);
  }, [issuesList, searchQuery]);                                             //This useEffect hook is triggered whenever there's a change in either issuesList or searchQuery. It's used to perform side effects, like updating the filtered list, based on changes in these dependencies.


  return (
    <Container className='table-responsive'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Name</th>
          <th>Department</th>
          <th>Contact</th>
          <th>Issue on</th>
          <th>Priority</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>

      {  filteredProfileList.map((issue, index) => (
              <tr key={issue.id}>
                <td>{index + 1}</td>
                <td>{issue.date}</td>
                <td>{issue.name}</td>
                <td>{issue.dept}</td>
                <td>{issue.mobile}</td>
                <td>{issue.issueon}</td>
                <td>{issue.priority}</td>
                <td><b>{issue.status}</b></td>
                
        </tr>
          ))}
      </tbody>
    </Table>
  </Container>
  
  );
}

export default AStudentTable