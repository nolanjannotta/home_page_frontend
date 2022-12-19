import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Page from './Page';
import Search from './Search';
import { Wrapper} from "../styles"
import CustomConnect from './CustomConnect';
import NavBar from './NavBar';
import ChildPage from './ChildPage';

function Main() {
    const [searchInput, setSearchInput] = useState("")
    // const { pathname } = useLocation();
    const [searmParams, setSearchParams] = useState({
        base: "",
        child: ""
    })
    const updateSearchInput = (event) => {
      setSearchInput(event.target.value)
    }


  return (
        <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Search updateSearchInput={updateSearchInput} searchInput={searchInput} />} />
        <Route path="/:id" element={<Page/>} />
        <Route path="/:id/:child" element={<ChildPage/>} />
        </Routes>
        </BrowserRouter>
  )
}

export default Main