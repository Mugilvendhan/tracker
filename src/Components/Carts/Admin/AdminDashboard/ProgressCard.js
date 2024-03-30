import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProgressCard() {
    const [studentReportsCount, setStudentReportsCount] = useState(() => {        //By providing a function to useState, it ensures that the state is initialized only once, during the initial render, rather than being recalculated on every render. 
    const count = localStorage.getItem('studentReportsCount');                    // a function is provided that retrieves the respective count value from localStorage
    return count ? parseInt(count) : 0;                                              //key value pair
  });

  const [facultyReportsCount, setFacultyReportsCount] = useState(() => {
    const count = localStorage.getItem('facultyReportsCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    fetchIssues('http://localhost:5000/issues', setStudentReportsCount);                // fetching data and update to the function , then to state variable
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
        return response.json();                                            //.then() block parses the response body as JSON using response.json().
      })
      .then(data => {
        setCount(data.length);
        localStorage.setItem(`${url}_count`, data.length.toString());      //the function stores the count in the browser's local storage using localStorage.setItem(). It appends _count to the URL to create a unique key for storing the count.
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
                  <p><span style={{ fontSize: 'medium', fontWeight: '400' }}>{`Currently ${studentReportsCount} Reports Raised`}</span></p>                                                                                    {/* {} -  dynamically render values   ``` template literals*/}
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
