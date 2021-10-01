/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    
    const [files, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error , setError] = useState(null);
    
    const filechecker = (files, array) => {
        array.forEach(value => {
        if(files.type === value) return true;
        } )
        return false;
    }
    
   const handelChange = (e) => {
       let upload = e.target.files[0];

        if(upload !== undefined &&  types.includes(upload.type)){
            setFile(upload);
            setError(null)
        }  else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
          }
   }
    
    return (
        <form>
        <label>
            <input type="file" onChange={handelChange} />
            <span>+</span>
        </label>
            <div className="output">
            {
                error ? (<div className="error">{error}</div>) : null
            }
            
                {/* only if the right handside is true this will render  */}
                { files && <div>{ files.name }</div> }
                { files && <ProgressBar file={files} setFile={setFile} /> }
            
            </div>
            
        </form>
    )
}

export default UploadForm
