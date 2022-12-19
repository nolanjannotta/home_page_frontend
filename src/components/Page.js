import React from 'react'
import {useParams} from 'react-router-dom';
import NotFound from './NotFound';
import usePageURI from '../hooks/usePageURI';
import {Iframe,IframeContainer} from "../styles"

function Page() {
    const {id} = useParams();
    console.log(id)

  
    const {pageURI, isLoading, error} = usePageURI(id)

  if(pageURI) 
    return ( 
      isLoading 
      ? <div>loading...</div>     
      : 
          <Iframe  width={window.innerWidth} height={window.innerHeight} scrolling="no" src={pageURI}></Iframe>
         
    )

if(error && !isLoading) 
  return (
    <NotFound id={id}></NotFound>
  )  


}

export default Page