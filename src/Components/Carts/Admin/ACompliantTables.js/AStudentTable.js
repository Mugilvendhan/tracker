import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIssuesFromServer } from '../../../../slices/IssueSlice';
import { Container, Table } from 'react-bootstrap';

function AStudentTable() {
        const { issuesList } = useSelector((state) => state.issues);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getIssuesFromServer());                    
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

      {issuesList && issuesList.map((issue, index) => (
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