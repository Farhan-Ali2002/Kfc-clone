import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/esm/Image';
// import footerlogo from './/images/footer-logo.png'

export default function Footer() {
  return (
    <div className='footer1'>
    <Image src = {'.//images/footer-logo.png'}className = 'logoimage' ></Image>
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 loclist'>
            <h5 className='text-uppercase'>Information</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-light'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Mitao Bhook
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Careers
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 loclist'>
            <h5 className='text-uppercase mb-0'>Food</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-light'>
                  Our Secret Recipe
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 loclist'>
            <h5 className='text-uppercase'>Locations</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-light'>
                  Find a Store
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 loclist'>
            <h5 className='text-uppercase mb-0'>Get in Touch</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-light'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Link 3
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
        KFC Pakistan. All rights reserved. 
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}