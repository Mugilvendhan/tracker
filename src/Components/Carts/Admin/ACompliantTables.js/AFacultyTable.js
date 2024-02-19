import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { getIssuesFromServerFaculty } from '../../../../slices/IssueSlice';
import { Container, Table } from 'react-bootstrap';
import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice';

function AFacultyTable() {
    const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getIssuesFromServerFaculty());                    
    }, [dispatch]);

    
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
  
        {issuesListFaculty && issuesListFaculty.map((issuefaculty, index) => (
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