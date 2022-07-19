import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import EverydayValue from './components/EverydayValue';
import Signaturebox from './components/Signaturebox';
import Sharing from './components/Sharing';
import Promotions from './components/Promotions';
import Snacks from './components/Snacks';
import Midnight from './components/Midnight';
import Combos from './components/Combos';
import Flexlogin from './components/Flexlogin';
function Allroutes() {
  return (
    <div>
     <Routes>
      <Route exact path ='/' element = {<EverydayValue/>} />
      <Route path ='/Everydayvalue' element = {<EverydayValue/>} />
      <Route path = "/Combos" element = {<Combos/>}/>
      <Route path = "/Promotions" element = {<Promotions/>}/>
      <Route path = "/SignatureBox" element = {<Signaturebox/>}/>
      <Route path = "/Snacks" element = {<Snacks/>}/>
      <Route path = "/Sharing" element = {<Sharing/>}/>
      <Route path = "/Midnight" element = {<Midnight/>}/>
      <Route path = "/Login" element = {<Flexlogin/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes