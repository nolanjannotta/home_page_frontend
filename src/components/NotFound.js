import React from 'react'
import {PageNotFound} from "../styles"
import {Link} from 'react-router-dom';
import {Button} from "../styles"
 
function NotFound({id}) {
  return (
    <PageNotFound>
        <span>
         Page not found for {id} :(   
        </span>
        <Link to="/"><Button>back</Button></Link>
        
            </PageNotFound>
  )
}

export default NotFound