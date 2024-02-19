import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice'
//import { getIssuesFromServerFaculty } from '../../../../slices/FacultyIssueSlice'

function FIssueTable() {

  const {issuesListFaculty } = useSelector((state) =>state.issuesfaculty)
   const dispatch=useDispatch()

   useEffect(() => {
    dispatch(getIssuesFromServerFaculty());                    
  }, [dispatch]);     
   
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

    {issuesListFaculty && issuesListFaculty.map((issuefaculty, index) => (
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