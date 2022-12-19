import React from 'react'
import { useParams } from 'react-router-dom'
import useChildURI from '../hooks/useChildURI'
import NotFound from './NotFound';


function ChildPage() {
    const {id, child} = useParams();

    const {childURI, isLoading, error} = useChildURI(id, child)


    if(childURI) 
    return ( 
      isLoading 
      ? <div>loading...</div>     
      : <iframe  width={window.innerWidth} height={window.innerHeight} src={childURI}> </iframe>       
    )

if(error && !isLoading) 
  return (
    <NotFound id={id}></NotFound>
  )  


}
export default ChildPage