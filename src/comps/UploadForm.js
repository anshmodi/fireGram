import React, { useState } from 'react'
import { ProgressBar } from './ProgresBar';

export const UploadForm = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const type = ['image/jpg' , 'image/png', 'image/webp'];

    const changeHandler=(e)=>{
        let selected = e.target.files[0];
        if(selected && type.includes (selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile(null);
            setError('Please select an image of (.jpg/.png/.webp) type only')
        }
    }
    return(
        <form>
            <label>
            <input type = "file" onChange = {changeHandler}/>
            <span>+</span>
            </label>
            <div className = "output">
                {error && <div className = 'error'>{ error }</div>}
                {file && <div>{ file.name }</div>}
                {file && <ProgressBar file = {file} setFile = {setFile} />}
            </div>
        </form>
    )
}
