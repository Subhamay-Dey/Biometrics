import React from 'react';
import { useState } from 'react';

export default function ImageUpload() {
    
    const [image, setImage] = useState('');
    function handleImage(e){
        console.log(e.target.files);
        setImage(e.target.files[0])
    }

    const imageRef = useRef(null);

  return (
    <>
    <div className='w-[400px] flex justify-center items-center'>
    <input type="file" name='file' ref={imageRef} onChange={handleImage}/>
    </div>
    </>
  )
}