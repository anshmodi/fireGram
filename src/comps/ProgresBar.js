import React from 'react'
import useStorage from '../Hooks/useStorage'

export const ProgressBar = ({file, setFile})=>{
    const {url,progress} = useStorage(file)
    console.log(progress);
    // test

    //again test
    return(
        <div  style = {{width: progress + '%'}}>
            progress
        </div>
    )
}