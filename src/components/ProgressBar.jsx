import React, { useEffect } from 'react'
import useStorageFB from '../hooks/useStorageFB'

const ProgressBar = ({file , setFile}) => {
    const [progress, url] = useStorageFB(file)

    useEffect(() => {
        if(url){
            setFile(null)
        }
        
    }, [url,setFile ])
    
    return (
        <div>
            <div className="progress-bar" style={{width: progress +'%'}} ></div>
        </div>
    )
}

export default ProgressBar
