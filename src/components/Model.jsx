import React from 'react'

const Model = ({selectedimg,setSelectedimg}) => {
    return (
        <div className="backdrop" onClick={()=>setSelectedimg(null)}>
            <img src={selectedimg} alt="lage pic" />
        </div>
    )
}

export default Model
