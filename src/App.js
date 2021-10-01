import React, { useState } from 'react'
import ImageGrid from './components/ImageGrid'
import Model from './components/Model'
import Title from './components/Title'
import UploadForm from './components/UploadForm'

const App = () => {
  const [selectedimg , setSelectedimg] = useState(null)

  return (
    <div>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedimg={setSelectedimg}/>
     { selectedimg && <Model selectedimg={selectedimg} setSelectedimg={setSelectedimg}/>}
    </div>
  )
}

export default App
