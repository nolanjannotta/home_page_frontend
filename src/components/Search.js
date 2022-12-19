import React,{useState} from 'react'
import {SearchBox, Button, ButtonBox, SearchBackground,Input} from "../styles"
import {Link, useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import { Wrapper } from '../styles';
import Create from "./Create"



function Search({updateSearchInput, searchInput}) {
  const [toggle, setToggle] = useState(false)
  // const { pathname } = useLocation();


  return(
    <Wrapper>
      <NavBar toggle={toggle} setToggle={setToggle}></NavBar>
    {!toggle
    ? <SearchBackground>
      
        <SearchBox>

          <Input onChange={(event) => {updateSearchInput(event)}} placeholder='search'></Input>
          <ButtonBox>       
                    
            <Link to={searchInput}><Button>Search</Button></Link>
        </ButtonBox>
            
      </SearchBox>
    </SearchBackground>
    
    : <SearchBackground>
      <Create></Create>
    </SearchBackground>}
    </Wrapper>


  )
}
export default Search