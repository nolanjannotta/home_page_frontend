import {useEffect, useState} from 'react'
import {homepage} from "../addresses"
import HomePage from "../ABIs/HomePage.json";
import {useContract, useProvider} from 'wagmi';




function usePageURI(search) {
    const [pageURI, setpageURI] = useState(undefined)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const provider = useProvider()
    const homePage = useContract({
        address: homepage,
        abi: HomePage,
        signerOrProvider: provider

      })
    const getPageURI = async() => {
        
        try {
            let page = await homePage.pageURI(search)
            setpageURI(page)
        } catch (error) {
            setError(true)
            console.log(error)            
        }        
    }

    useEffect(()=> {
        setIsLoading(true)
        getPageURI()
        setIsLoading(false)

    },[search])


  return {pageURI, isLoading, error}
}

export default usePageURI