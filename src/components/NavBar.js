import React from 'react'
import {Title, Nav, Wrapper, Hello, LeftThing} from "../styles"
import CustomConnect from './CustomConnect';

function NavBar({toggle, setToggle}) {

  return (
    <Nav>
          <LeftThing onClick={()=> {setToggle(prev => !prev)}}>{ !toggle ? "πΈπππΆππ" : "πππΆππΈπ½"}</LeftThing>
        <Title>π½πππ ππΆππ</Title>
        {/* <Hello>hello</Hello> */}
        <CustomConnect/>
        </Nav> 
  )
}

export default NavBar