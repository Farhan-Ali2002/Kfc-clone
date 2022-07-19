import React from 'react'
import { Navbar, Nav, NavDropdown,FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

import {LinkContainer} from 'react-router-bootstrap'
import Image from "react-bootstrap/Image";
// import indexx from './/images/2.png'
function NavBar() {
  return (
    <div>
    <div>
    <div className='besideslogo'>
    <h6 >STORE LOCATOR</h6>
    <h6 className='signin1'>SIGN IN/REGISTER</h6>
    </div>
    <Image src={'.//images/2.png'} className='kfcimage'  style= {{width: '50', height: '6rem'}}></Image>
    </div>
    <Navbar bg="dark" variant="dark" className = 'navv' style={{width: '68rem'}}>
    <Container>
    <Navbar.Brand href="#home">KFC</Navbar.Brand>
    <Nav className=" fw-bold me-auto" style={{color: 'black'}}>
    <LinkContainer to={"/Everydayvalue"}>
        <Nav.Link>EVERYDAY VALUE</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Combos"}>
        <Nav.Link >AL CARTE & COMBOS</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/SignatureBox"}>
        <Nav.Link >SIGNATURE BOX</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Snacks"}>
        <Nav.Link >SNACKS</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Promotions"}>
        <Nav.Link >PROMOTIONS</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Sharing"}>
        <Nav.Link >SHARING</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/Midnight"}>
        <Nav.Link >MIDNIGHT DEALS</Nav.Link>
        </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  </div>
  
  )
}

export default NavBar