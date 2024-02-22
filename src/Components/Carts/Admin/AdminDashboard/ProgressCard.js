// // // import React, { useEffect, useState } from 'react'
// // // import { Button, Card, Col,Row } from 'react-bootstrap'                     
// // // import { useSelector } from 'react-redux'
// // // import { Link } from 'react-router-dom'




// // // function ProgressCard() {


// // // /*   const  {issuesList} = useSelector((state) => state.issues); 
// // // const  {issuesListFaculty}  = useSelector((state) => state.issuesfaculty); 

// // //  */

// // //   const [studentReportsCount, setStudentReportsCount] = useState(0);
// // //   const [facultyReportsCount, setFacultyReportsCount] = useState(0);

// // //   const { issuesList } = useSelector((state) => state.issues);
// // //   const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);

// // //   useEffect(() => {
// // //     setStudentReportsCount(issuesList.length);
// // //     setFacultyReportsCount(issuesListFaculty.length);
// // //   }, [issuesList, issuesListFaculty]);




// // //   return (
// // //     <div>
// // //        <div className="carousel-inner">
// // //       <div className="carousel-item active">
// // //         <Row className="justify-content-around">
// // //           <Col md={4} className="mb-3">
           
// // //               <Card className="border-0" style={{ borderRadius: '30px' }}>
// // //                 <Card.Body className="text-center">
// // //                   <p><i className='bx bxs-graduation' style={{ fontSize: '50px', height: '50px', backgroundColor: 'aqua', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
// // //                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Student Reports</span></p>
                  
// // //                   <p><span style={{ fontSize: 'medium', fontWeight:'400' }}>  {`Currently ${studentReportsCount} Reports Raised`}</span></p>
// // //                  {/*  <span style={{ fontSize: 'small' }}>more details</span> */}
// // //                  <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white',fontSize: 'small' }}  as={Link} to='/adminstudenttable'>view</Button>

// // //                 </Card.Body>
// // //               </Card>
         
// // //           </Col>
// // //           <Col md={4} className="mb-3">
           
// // //               <Card className="border-0" style={{ borderRadius: '30px' }}>
// // //                 <Card.Body className="text-center">
// // //                   <p><i className='bx bx-book-open' style={{ fontSize: '50px', height: '50px', backgroundColor: 'rgb(255, 149, 0)', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
// // //                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Faculty Reports</span></p>
// // //                   {/* <p><span style={{ fontSize: 'medium' }}>10+ Issues Processing currently</span></p> */}
// // //                   {/* <span style={{ fontSize: 'small' }}>more details</span> */}
// // //                   <p><span style={{ fontSize: 'medium' }}> </span>{`Currently ${facultyReportsCount} Reports Raised`}</p>
                
// // //                  <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white',fontSize: 'small' }} as={Link} to="/adminfacultytable">view</Button>

// // //                 </Card.Body>
// // //               </Card>
          
// // //           </Col>
          
// // //         </Row>
// // //       </div>
// // //     </div>
// // //     </div>
// // //   )
// // // }

// // // export default ProgressCard


// // import React, { useEffect, useState } from 'react';
// // import { Button, Card, Col, Row } from 'react-bootstrap';
// // import { useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';

// // function ProgressCard() {
// //   const [studentReportsCount, setStudentReportsCount] = useState(0);
// //   const [facultyReportsCount, setFacultyReportsCount] = useState(0);

// //   const { issuesList } = useSelector((state) => state.issues);
// //   const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);

// //   useEffect(() => {
// //     // Initialize studentReportsCount and facultyReportsCount with the length of issuesList and issuesListFaculty
// //     setStudentReportsCount(issuesList.length);
// //     setFacultyReportsCount(issuesListFaculty.length);
// //   }, [issuesList, issuesListFaculty]); // Update counts whenever issuesList or issuesListFaculty changes

// //   return (
// //     <div>
// //       <div className="carousel-inner">
// //         <div className="carousel-item active">
// //           <Row className="justify-content-around">
// //             <Col md={4} className="mb-3">
// //               <Card className="border-0" style={{ borderRadius: '30px' }}>
// //                 <Card.Body className="text-center">
// //                   <p><i className='bx bxs-graduation' style={{ fontSize: '50px', height: '50px', backgroundColor: 'aqua', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
// //                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Student Reports</span></p>
// //                   <p><span style={{ fontSize: 'medium', fontWeight: '400' }}>{`Currently ${studentReportsCount} Reports Raised`}</span></p>
// //                   <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to='/adminstudenttable'>View</Button>
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //             <Col md={4} className="mb-3">
// //               <Card className="border-0" style={{ borderRadius: '30px' }}>
// //                 <Card.Body className="text-center">
// //                   <p><i className='bx bx-book-open' style={{ fontSize: '50px', height: '50px', backgroundColor: 'rgb(255, 149, 0)', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
// //                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Faculty Reports</span></p>
// //                   <p><span style={{ fontSize: 'medium' }}>{`Currently ${facultyReportsCount} Reports Raised`}</span></p>
// //                   <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to="/adminfacultytable">View</Button>
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //           </Row>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProgressCard;



// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Row } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function ProgressCard() {
//   const [studentReportsCount, setStudentReportsCount] = useState(() => {
//     // Retrieve student reports count from local storage, default to 0 if not found
//     const count = localStorage.getItem('studentReportsCount');
//     return count ? parseInt(count) : 0;
//   });

//   const [facultyReportsCount, setFacultyReportsCount] = useState(() => {
//     // Retrieve faculty reports count from local storage, default to 0 if not found
//     const count = localStorage.getItem('facultyReportsCount');
//     return count ? parseInt(count) : 0;
//   });

//   const { issuesList } = useSelector((state) => state.issues);
//   const { issuesListFaculty } = useSelector((state) => state.issuesfaculty);

//   useEffect(() => {
//     // Store student reports count in local storage
//     localStorage.setItem('studentReportsCount', studentReportsCount.toString());
//   }, [studentReportsCount]);

//   useEffect(() => {
//     // Store faculty reports count in local storage
//     localStorage.setItem('facultyReportsCount', facultyReportsCount.toString());
//   }, [facultyReportsCount]);

//   useEffect(() => {
//     // Update student reports count
//     setStudentReportsCount(issuesList.length);
//   }, [issuesList]);

//   useEffect(() => {
//     // Update faculty reports count
//     setFacultyReportsCount(issuesListFaculty.length);
//   }, [issuesListFaculty]);

//   return (
//     <div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <Row className="justify-content-around">
//             <Col md={4} className="mb-3">
//               <Card className="border-0" style={{ borderRadius: '30px' }}>
//                 <Card.Body className="text-center">
//                   <p><i className='bx bxs-graduation' style={{ fontSize: '50px', height: '50px', backgroundColor: 'aqua', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
//                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Student Reports</span></p>
//                   <p><span style={{ fontSize: 'medium', fontWeight: '400' }}>{`Currently ${studentReportsCount} Reports Raised`}</span></p>
//                   <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to='/adminstudenttable'>View</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-3">
//               <Card className="border-0" style={{ borderRadius: '30px' }}>
//                 <Card.Body className="text-center">
//                   <p><i className='bx bx-book-open' style={{ fontSize: '50px', height: '50px', backgroundColor: 'rgb(255, 149, 0)', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
//                   <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Faculty Reports</span></p>
//                   <p><span style={{ fontSize: 'medium' }}>{`Currently ${facultyReportsCount} Reports Raised`}</span></p>
//                   <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to="/adminfacultytable">View</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProgressCard;



import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProgressCard() {
  const [studentReportsCount, setStudentReportsCount] = useState(() => {
    const count = localStorage.getItem('studentReportsCount');
    return count ? parseInt(count) : 0;
  });

  const [facultyReportsCount, setFacultyReportsCount] = useState(() => {
    const count = localStorage.getItem('facultyReportsCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    fetchIssues('http://localhost:5000/issues', setStudentReportsCount);
  }, []);

  useEffect(() => {
    fetchIssues('http://localhost:5000/issuesfaculty', setFacultyReportsCount);
  }, []);

  const fetchIssues = (url, setCount) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        return response.json();
      })
      .then(data => {
        setCount(data.length);
        localStorage.setItem(`${url}_count`, data.length.toString());
      })
      .catch(error => {
        console.error('Error fetching issues:', error);
      });
  };

  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Row className="justify-content-around">
            <Col md={4} className="mb-3">
              <Card className="border-0" style={{ borderRadius: '30px' }}>
                <Card.Body className="text-center">
                  <p><i className='bx bxs-graduation' style={{ fontSize: '50px', height: '50px', backgroundColor: 'aqua', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
                  <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Student Reports</span></p>
                  <p><span style={{ fontSize: 'medium', fontWeight: '400' }}>{`Currently ${studentReportsCount} Reports Raised`}</span></p>
                  <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to='/adminstudenttable'>View</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="border-0" style={{ borderRadius: '30px' }}>
                <Card.Body className="text-center">
                  <p><i className='bx bx-book-open' style={{ fontSize: '50px', height: '50px', backgroundColor: 'rgb(255, 149, 0)', color: '#fff', padding: '0px', borderRadius: '20%' }}></i></p>
                  <p><span style={{ fontWeight: '600', fontSize: 'large' }}>Faculty Reports</span></p>
                  <p><span style={{ fontSize: 'medium' }}>{`Currently ${facultyReportsCount} Reports Raised`}</span></p>
                  <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: 'small' }} as={Link} to="/adminfacultytable">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
