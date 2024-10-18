import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { toPng } from 'html-to-image';



const App = () => {
  const [design,setDesign] = useState(null);

  //Handle image upload

  const handleUpload = (event)=>{
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setDesign(imageUrl);
  };
  //Handle Download Image

  const downloadImage = ()=>{
    const node =document.getElementById('tshirt-preview');
    toPng(node)
    .then ((dataUrl)=>{
      const link = document.createElement('a')
      link.href = dataUrl;
      link.download = 'Tshirt.png';
      link.click();
    })
    .catch((err) => console.error('Error generating image:',err));    
  };

  return (
    
    <div style={{textAlign:'center', position:'absolute',left:'30%',top:'150px', justifyContent:'center' }}>
      <div style={{ display:'inline-block' }} >
        <h2> Image Upload & Downloader</h2>
        </div>
        <br/>
    <input type='file' accept='image/*' onChange={handleUpload} />
    <div
    id='tshirt-preview'
    style={{
      position:'relative',
      width:'80%',
      height:'400px',
      margin:'20px auto',
      backgroundColor:'#f8f8f8',
      cursor:"grab",
      borderRadius:'5px',
    }}
    >
      {design && (
      <Draggable>
      <img
       src={design} 
      alt= 'Design'
      style={{
        position:'absolute',
        top:'30%',
        left:'20%',
        width:'60%',
        height:'auto'
      }}
       />
  </Draggable>
)}  
    </div>
    <button onClick={downloadImage} > Download Image </button>
    </div>

  )
}

export default App