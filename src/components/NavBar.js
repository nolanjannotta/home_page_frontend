import React from 'react'
import {Title, Nav, Wrapper, Hello, LeftThing} from "../styles"
import CustomConnect from './CustomConnect';

function NavBar({toggle, setToggle}) {

  return (
    <Nav>
          <LeftThing onClick={()=> {setToggle(prev => !prev)}}>{ !toggle ? "𝒸𝓇𝑒𝒶𝓉𝑒" : "𝓈𝑒𝒶𝓇𝒸𝒽"}</LeftThing>
        <Title>𝒽𝑜𝓂𝑒 𝓅𝒶𝑔𝑒</Title>
        {/* <Hello>hello</Hello> */}
        <CustomConnect/>
        </Nav> 
  )
}

export default NavBar