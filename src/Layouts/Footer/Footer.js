import React from 'react';
import { NavLink } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light p-3" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <div className="footer_left">
              <div className="footer_navlinks">
                <ul className="list-unstyled">
                  <li><NavLink href="#home" className="text-light my-2" style={{ textDecoration: 'none', textAlign: 'left' }}>Home</NavLink></li>
                  <li><NavLink href="#about" className="text-light my-2" style={{ textDecoration: 'none', textAlign: 'left' }}>About</NavLink></li>
                  <li><NavLink href="#contact" className="text-light my-2" style={{ textDecoration: 'none', textAlign: 'left' }}>Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-11" style={{ textAlign: 'end' }}>
            <div className="contact text-right">
              <h2>Contact Us</h2>
              <div className="socials p-2 m-1">
  <i className="bi bi-linkedin mx-2"></i>
  <i className="bi bi-instagram mx-0"></i> 
  <p className="mb-0 my-2">Contact : +0427 254712</p>
</div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
