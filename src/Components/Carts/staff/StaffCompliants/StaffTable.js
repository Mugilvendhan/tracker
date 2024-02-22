
// import React, { useEffect, useState } from 'react';
// import { Button, Container, Table } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIssuesFromServer, setSelectedIssue,error } from '../../../../slices/IssueSlice';
// import Description from '../../../Modals/Description';
// import UpdateStatueStaff from '../../../Modals/UpdateStatueStaff';
// import DeleteTask from '../../../Modals/DeleteTask';

// function StaffTable({searchQuery}) {

//   const [modalShow, setModalShow] = useState(false);
// /*   const [selectedIssueId, setSelectedIssueId] = useState(null); */
//   const [selectedIssueData, setSelectedIssueData] = useState(null);       //describe the issue
//   const { issuesList } = useSelector((state) => state.issues);
//   //
//   const dispatch = useDispatch();

//   const [deleteModalShow, setDeleteModalShow] = React.useState(false);
//   const [IssueToDelete, setIssueToDelete] = useState(null);


//   useEffect(() => {
//     dispatch(getIssuesFromServer());                    
//   }, [dispatch]);





//     let editIssueStatus =(issue) => {
//       dispatch(setSelectedIssue(issue));
//       setModalShow(true)
//     }
  
   


//   const openDescriptionModal = (issue) => { 
//     dispatch(setSelectedIssue(issue)); 
//     setSelectedIssueData(issue); 
//   }

//   const closeDescriptionModal = () => {
//     setSelectedIssueData(null);
//   }


//   const [filteredProfileList, setFilteredProfileList] = useState([]);

//   useEffect(() => {
//     // Filter the profileList based on searchQuery
//     const filteredList = issuesList.filter((issue) => {
//       const priority = issue.priority && issue.priority.toString().toLowerCase(); // Convert to string and then lowercase
//       return priority && priority.includes(searchQuery.toLowerCase()); // Ensure priority is not null/undefined before applying .toLowerCase()
//     });
//     setFilteredProfileList(filteredList);
//   }, [issuesList, searchQuery]);
  

// /* 
//   const [userData, setUserData] = useState(null);
//   const [loggedYear, setLoggedYear] = useState(null);
//   const [loggedDept, setLoggedDept] = useState(null);
//   useEffect(() => {
//     // Retrieve loggedInUserId from local storage when the component mounts
//     const loggedInYearFromLocalStorage = localStorage.getItem('loggedYear');
//     const loggedInDeptFromLocalStorage = localStorage.getItem('loggedDept');
//     console.log('loggedInYearFromLocalStorage:', loggedInYearFromLocalStorage);
//     console.log('loggedInDeptFromLocalStorage:', loggedInDeptFromLocalStorage);
//     if (loggedInYearFromLocalStorage) {
//       setLoggedYear(loggedInYearFromLocalStorage);
//     }
  
//     if (loggedInDeptFromLocalStorage) {
//       setLoggedDept(loggedInDeptFromLocalStorage);
//     }
//   }, []);

//   useEffect(() => {
//     console.log(loggedYear , loggedDept);
//     if (loggedYear && loggedDept) {
//       // Make the API request using loggedYear and loggedDept
//       fetch(`http://localhost:5000/assigntask?year=${loggedYear}&classselect=${loggedDept}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch user details');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Handle the fetched data as needed
//           setUserData(data);
//           console.log(data);
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [loggedYear, loggedDept]);
  
//            */



//   return (
//     <div>
//       <Container className='table-responsive'>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Issue Id</th>
//               <th>Date</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Priority</th>
//               <th>Contact No.</th>
//               <th>Issue On</th>
//               <th>Status</th>
//               <th>Delete</th>          
//             </tr>
//           </thead>
//           <tbody>
//             {  filteredProfileList.map((issue, index) => (
//               <tr key={issue.id}>
//                 <td>{index + 1}</td>
//                 <td>{issue.date}</td>            
//                 <td>{issue.name}</td>
//                 <td>{issue.dept}</td>
//                 <td>{issue.priority}</td>
//                 <td>{issue.mobile}</td>
//                 <td className="text-center mx-5">
//                   {issue.issueon} 
//                   <i className="bi bi-eye-fill mx-2" style={{ cursor: 'pointer' }} onClick={() => openDescriptionModal(issue)}></i>
//                 </td>
//                  <td className="text-center mx-5"> <b> {issue.status} </b><i className="bi bi-pencil-square mx-2" style={{ cursor: 'pointer' }} onClick={()=> editIssueStatus(issue)}></i></td> 
//                 {/* <td><Button variant="dark" onClick={()=>deleteReportField(issue)}><i className="bi bi-trash" ></i></Button></td> */}

//                 {/* <td><Button variant="dark" onClick={() => deleteReportField(issue)}><i className="bi bi-trash" ></i></Button></td> */}



//                 {/* <Button
//                       variant="dark"
//                       onClick={() => {
//                        setIssueToDelete(leave); 
//                       setModalDelete(true);
//                       }}
//                     >
//                     </Button>   */}
                    
// {/* Deletemodal */}

//       {/*   */}   <td><Button onClick={() => {setIssueToDelete(issue); setDeleteModalShow(true);}} variant="dark" ><i className="bi bi-trash"  ></i> </Button> </td>{/**/}






//                {/* <Button variant="dark" onClick={() => deleteReportField(issue)}>
//                       <i className="bi bi-trash"></i>
//                     </Button> */}
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <div>{error ? <h2>{error}</h2> : null}</div>
//         <Description show={selectedIssueData !== null} onHide={closeDescriptionModal} issue={selectedIssueData} />
//         <UpdateStatueStaff show={modalShow} onHide={()=> setModalShow(false)} /> 
//            <DeleteTask show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} issue={IssueToDelete}/>




//       {/*  {selectedIssueId && <DeleteTask show={true} onHide={() => setSelectedIssueId(null)} selectedIssueId={selectedIssueId} />} */}

//       </Container>
//     </div>
//   )
// }

// export default StaffTable;




import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getIssuesFromServer, setSelectedIssue,error } from '../../../../slices/IssueSlice';
import Description from '../../../Modals/Description';
import UpdateStatueStaff from '../../../Modals/UpdateStatueStaff';
import DeleteTask from '../../../Modals/DeleteTask';

function StaffTable({searchQuery}) {

  const [modalShow, setModalShow] = useState(false);
/*   const [selectedIssueId, setSelectedIssueId] = useState(null); */
  const [selectedIssueData, setSelectedIssueData] = useState(null);       //describe the issue
  const { issuesList } = useSelector((state) => state.issues);
  //
  const dispatch = useDispatch();

  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);


  useEffect(() => {
    dispatch(getIssuesFromServer());                    
  }, [dispatch]);





    let editIssueStatus =(issue) => {
      dispatch(setSelectedIssue(issue));
      setModalShow(true)
    }
  
   


  const openDescriptionModal = (issue) => { 
    dispatch(setSelectedIssue(issue)); 
    setSelectedIssueData(issue); 
  }

  const closeDescriptionModal = () => {
    setSelectedIssueData(null);
  }


  const [filteredProfileList, setFilteredProfileList] = useState([]);

  useEffect(() => {
    // Filter the profileList based on searchQuery
    const filteredList = issuesList.filter((issue) => {
      const priority = issue.priority && issue.priority.toString().toLowerCase(); // Convert to string and then lowercase
      return priority && priority.includes(searchQuery.toLowerCase()); // Ensure priority is not null/undefined before applying .toLowerCase()
    });
    setFilteredProfileList(filteredList);
  }, [issuesList, searchQuery]);
  


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
      fetch(`http://localhost:5000/issues?dept=${loggedDept}`)
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
        <div>{error ? <h2>{error}</h2> : null}</div>
        <Description show={selectedIssueData !== null} onHide={closeDescriptionModal} issue={selectedIssueData} />
        <UpdateStatueStaff show={modalShow} onHide={()=> setModalShow(false)} /> 
           <DeleteTask show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} issue={IssueToDelete}/>

      </Container>
    </div>
  )
}

export default StaffTable;
