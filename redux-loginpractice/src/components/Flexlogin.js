import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Form,Button,Card} from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import Image from "react-bootstrap/Image";
// import pinterest from './/images/1.png'



function Flexlogin() {
  return (
    <div>
        <div className='image1'>
     <Image
        
        src = {'.//images/1.png'} responsive
        style={{width:'10rem',height:"10rem"}}
    
      />
      </div>
    <h2 className='pinterest'>Welcome to Pinterest</h2>
    <div className='loginCard'>   
    <Card style={{ width: '18rem', height: '22rem'}}>
        <Card.Body>
        <Form>
        <Form.Group className = 'mb-3'>
            <Form.Control placeholder='Email' type = "text"></Form.Control>
        </Form.Group>
        <Form.Group className = 'mb-3'>
            
            <Form.Control placeholder='Password' type = "text"></Form.Control>
            <p className="fw-bold text-secondary ">Forgot your password?</p>
        </Form.Group>
        
        <Button variant ='danger' style={{width : '16rem'}}>
            Sign In
        </Button>
        <p className='fw-bold or'>OR</p>
        <Button variant ='primary fw-bold' style={{width : '16rem', height: '2.8rem', fontSize: '18px'}}>
        <FaFacebook /> Continue with Facebook
        </Button> 
        <Button variant ='outline-primary fw-bold mt-2' style={{width : '16rem', height: '2.8rem', fontSize: '18px'}}>
        <FaGoogle /> Continue with Google
        </Button>
        </Form>
        </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Flexlogin
