/* import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../Assets/img/about1.jpg'
function AboutUsSection() {
  return (
    <section className="Aboutus bg-light" id="about">
      <Container>
        <h1 className="about_title text-center mb-4" style={{ fontSize: '1.7rem' }}> <b>About Us!</b></h1>
        
        <Row className='justify-content-md-center my-5'>
        <Col lg={5}>
        <h3 className="about_subtitle text-left lg-5" style={{ fontSize: '1.5rem', textAlign: 'left' }}>What we do?</h3>
        <p className=" text-justify md-6  " style={{ textAlign: 'justify', alignContent: 'left' }}>
      
         An issue tracker for colleges is a software tool that helps identify, manage, and fix any issues that may arise in a college environment.
          This tracking software enables faculty and staff to log tasks and issues and offers tools such as taking screenshots,
          annotating them, recording videos of the issues, and any other problems that are found. By utilizing visual communication,
          a college issue tracker enables faculty and staff to mark issues visually on the actual content and then share it with the responsible stakeholders.
          This helps the college administration to precisely understand the issue and work on fixing it. Without such a tool, issues might remain unresolved,
          no matter how many messages get exchanged in chat, emails, or calls.
          </p>
         </Col>
         <Col lg={6}>
         <img src={about} alt="About Us" className="img-fluid" style={{maxWidth:'85%', borderRadius:'2rem' }}/>
         </Col>
      
      
        </Row>

        <Row className='justify-content-md-center my-5'>
        <Col lg={6}>
         <img src={about} alt="About Us" className="img-fluid" style={{maxWidth:'85%', borderRadius:'2rem' }}/>
         </Col>
        <Col lg={5}>
        <h3 className="about_subtitle text-left lg-5" style={{ fontSize: '1.5rem', textAlign: 'left' }}>What we do?</h3>
        <p className=" text-justify md-6  " style={{ textAlign: 'justify', alignContent: 'left' }}>
      
         An issue tracker for colleges is a software tool that helps identify, manage, and fix any issues that may arise in a college environment.
          This tracking software enables faculty and staff to log tasks and issues and offers tools such as taking screenshots,
          annotating them, recording videos of the issues, and any other problems that are found. By utilizing visual communication,
          a college issue tracker enables faculty and staff to mark issues visually on the actual content and then share it with the responsible stakeholders.
          This helps the college administration to precisely understand the issue and work on fixing it. Without such a tool, issues might remain unresolved,
          no matter how many messages get exchanged in chat, emails, or calls.
          </p>
         </Col>
        
      
      
        </Row>
      </Container>
    </section>     
  );
}

export default AboutUsSection;
 */

import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import about from '../../Assets/img/about1.jpg'
import about2 from '../../Assets/img/about2.jpg'
function AboutUsSection() {
  return (
    <section className="Aboutus bg-light" id="about">
      <Container>
        <h1 className="about_title text-center mb-4" style={{ fontSize: '1.7rem' }}> <b>About Us!</b></h1>
        <div className="content-box1 mt-1 py-1">
  <div className="container py-4" >
        <Row className='justify-content-md-center my-5'>
        <Col lg={5}>
        <h3 className="about_subtitle text-left lg-5" style={{ fontSize: '1.5rem', textAlign: 'left' }}>Who We Are?</h3>
        <p className=" text-justify md-6  " style={{ textAlign: 'justify', alignContent: 'left' }}>
      
         
At Knowledge Institute Of Technology, we pride ourselves on being a beacon of innovation and excellence in engineering education. 
With a focus on cutting-edge research and hands-on learning experiences, we prepare our students to become leaders in their fields.
 Our state-of-the-art facilities and world-class faculty create an environment where creativity and discovery thrive. 
 We are committed to fostering collaboration among students, faculty, and industry partners to tackle real-world challenges and drive impactful solutions.
  With a dedication to academic excellence and a passion for pushing boundaries, we strive to empower our community to make a positive impact on the world.
          </p>
         </Col>
         <Col lg={6}>
        {/*  <img src={about2} alt="About Us" className="img-fluid" style={{maxWidth:'85%', borderRadius:'1rem' }}/> */}
        <img src={about2} alt="About Us" className="img-fluid" style={{maxWidth:'85%', borderRadius:'1rem' }}/>
    </Col>
      
      
        </Row>
</div></div>
<div className="content-box1 mt-1 py-1">
  <div className="container py-4" >
        <Row className='justify-content-md-center my-5'>
        <Col lg={6}>
         <img src={about} alt="About Us" className="img-fluid" style={{maxWidth:'85%', borderRadius:'1rem' }}/>
         </Col>
        <Col lg={5}>
        <h3 className="about_subtitle text-left lg-5" style={{ fontSize: '1.5rem', textAlign: 'left' }}>What We Do?</h3>
        <p className=" text-justify md-6  " style={{ textAlign: 'justify', alignContent: 'left' }}>
      
         An issue tracker for colleges is a software tool that helps identify, manage, and fix any issues that may arise in a college environment.
          This tracking software enables faculty and staff to log tasks and issues and offers tools such as taking screenshots,
          annotating them, recording videos of the issues, and any other problems that are found. By utilizing visual communication,
          a college issue tracker enables faculty and staff to mark issues visually on the actual content and then share it with the responsible stakeholders.
          This helps the college administration to precisely understand the issue and work on fixing it. Without such a tool, issues might remain unresolved,
          no matter how many messages get exchanged in chat, emails, or calls.
          </p>
         </Col>
        
      
      
        </Row>
        </div></div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
