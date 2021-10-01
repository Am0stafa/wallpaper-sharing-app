import React from 'react'
import useFirestoreFB from '../hooks/useFirestoreFB';

const ImageGrid = ({setSelectedimg}) => {

    const [docs] = useFirestoreFB('images')
    
    const handellarg = (doc) => {
        setSelectedimg(doc.url)
    }
    
    return (
        <div className="img-grid">
            {
                docs && docs.map((doc)=>(
                    <div className="img-wrap" key={doc.id} onClick={()=>handellarg(doc)}>
                        <img src={doc.url} alt="img" />
                    </div>
                ))
            
            }
        </div>
    )
}

export default ImageGrid

// {()=>setSelectedimg(doc.url)}