import axios from "axios";
import {useState,useEffect} from 'react'

export const getKeyshells = () =>{
    const [allKeyShells,setKeyShells] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    const fetchKeyShells = async() =>{
       try {
        setLoading(true)
        const fetchedKeyShells = await axios.get("http://localhost:4000/keyshells")
        setKeyShells(fetchedKeyShells.data)
        setLoading(false)
       } catch (error) {
        alert('Could not fetch key shells' + error)
        setError(error)
        
       }

    }
    useEffect(()=>{
        fetchKeyShells()
    },[])

    return {allKeyShells,loading,error}
}