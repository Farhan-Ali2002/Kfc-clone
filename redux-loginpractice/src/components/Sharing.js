import React from 'react'
import NavBar from './Navbar'
import {Container,Button,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { useState, useEffect } from 'react';
import Axios from 'axios'

function Sharing() {
    const [everydayList, seteverydayList] = useState([]);
    useEffect(()=>{
    const geteveryday = () => {
    Axios.get("http://localhost:3001/everyday").then((response) => {
    console.log(response)
      seteverydayList(response.data);
      console.log("first response",everydayList);
      
    }).catch(error => {
        console.log(error.response);
        console.log(error.response.status)})
  };
  geteveryday();
},[])

    const arrayChunk = (arr, n) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
      };  
  

  return (
    
    <div className='everydaylife'>        
        <h2 className='everyhead'>SHARING</h2>
        
        <Container >
        { arrayChunk(everydayList, 3).map((val,key)=>{
            return(
            <Row className = ' py-4 row1'>
            {val.map((col, i) => (
                <Col sm = {4}>
                <Card >
                    <Link to={'/Everydayvalue'}>
                    <div className='eCard'>
                    <Image  src= {col.everyimgpath} style={{width:'100%', height: '14rem'}}></Image>
                    </div>
                    </Link>
                    <h6 className = "fw-bold krunch">{col.everyitemname}</h6>
                    <p style={{fontSize: '12px',position:'relative', top:'4px'}}>{col.everyitemdesc}</p>
                    <div className='items'>
                    <p className='price'>PRICE:-</p>
                    <p className='pricenum'>{col.everyitemprice}</p>
                    <span className='itemspan'></span>
                    </div>
                </Card>
                </Col>
            ))}
                
                
        
                
                </Row>
                )})}
    
        </Container>
        
        </div>

        
    
    
  )
}

export default Sharing