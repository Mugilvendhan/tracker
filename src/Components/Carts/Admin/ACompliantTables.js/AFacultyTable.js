import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { getIssuesFromServerFaculty } from '../../../../slices/IssueSlice';
import { Container, Table } from 'react-bootstrap';
import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice';

function AFacultyTable({searchQuery}) {
    const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getIssuesFromServerFaculty());                    
    }, [dispatch]);




    const [filteredProfileList, setFilteredProfileList] = useState([]);

    useEffect(() => {
      // Filter the profileList based on searchQuery
      const filteredList = issuesListFaculty.filter((issuefaculty) => {
        const priority = issuefaculty.priority && issuefaculty.priority.toString().toLowerCase(); // Convert to string and then lowercase
        return priority && priority.includes(searchQuery.toLowerCase()); // Ensure priority is not null/undefined before applying .toLowerCase()
      });
      setFilteredProfileList(filteredList);
    }, [issuesListFaculty, searchQuery]);





    
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
  
        { filteredProfileList.map((issuefaculty, index) => (
                <tr key={issuefaculty.id}>
                  <td>{index + 1}</td>
                  <td>{issuefaculty.date}</td>
                  <td>{issuefaculty.name}</td>
                  <td>{issuefaculty.dept}</td>
                  <td>{issuefaculty.mobile}</td>
                  <td>{issuefaculty.issueon}</td>
                  <td>{issuefaculty.priority}</td>
                  <td><b>{issuefaculty.status}</b></td>
                  
          </tr>
            ))}
        </tbody>
      </Table>
    </Container>
    
    );
}

export default AFacultyTable