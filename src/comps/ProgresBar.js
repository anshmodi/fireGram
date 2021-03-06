import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'

export const ProgressBar = ({file, setFile})=>{
    const {url,progress} = useStorage(file)
    useEffect( ()=>{
        if(url){
            setFile(null)
        }
    },[url])
    return(
        <div className = "progress-bar" style = {{width: progress + '%'}}>
        </div>
    )
}