import {useEffect, useState} from 'react'
import {homepage} from "../addresses"
import HomePage from "../ABIs/HomePage.json";
import {useContract, useProvider} from 'wagmi';




function useChildURI(search, name) {
    const [childURI, setChildURI] = useState(undefined)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const provider = useProvider()

    const homePage = useContract({
        address: homepage,
        abi: HomePage,
        signerOrProvider: provider
      })

    const getChildURI = async() => {
        
        try {
            let page = await homePage.childURI(search, name)
            setChildURI(page)
        } catch (error) {
            setError(true)
            console.log(error)            
        }        
    }

    useEffect(()=> {
        setIsLoading(true)
        getChildURI()
        setIsLoading(false)

    },[search])


  return {childURI, isLoading, error}
}

export default useChildURI