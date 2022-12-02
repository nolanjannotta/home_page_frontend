import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useContract, useProvider} from 'wagmi';
import HomePage from "../ABIs/HomePage.json";

function Page(props) {
    const [pageURI, setpageURI] = useState(undefined)
    const provider = useProvider()
    const homePage = useContract({
        address: props.homePage,
        abi: HomePage,
        signerOrProvider: provider

      })

    const {id} = useParams();

  useEffect(()=> {
      const getPage = async() => {
          let page = await homePage.pageURI(id)
          setpageURI(page)
      }

      getPage()

  },[id])
  if(pageURI) {
    return (
     
     <iframe  width={window.innerWidth} height={window.innerHeight} src={pageURI}> </iframe>
        
    )
}
else {
  return (
    
  <div>{id}</div>
)  
}

}

export default Page