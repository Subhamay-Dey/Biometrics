import React from 'react';
import Popup from './popup';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import img1 from "../images/profile-logo-removebg-preview.png"
import img2 from "../images/thumb_img.jpg"
import ImageUpload from './imageUpload';
import { useRef } from 'react';

function Home() {
  
  const [image, setImage] = useState("");
  function handleImage(e){
      console.log(e.target.files);
      setImage(e.target.files[0])
  }

  const imageRef = useRef(null);

    const [buttonPopup, setPopup] = useState(false);

    function changeImage(){
      imageRef.current.click();
    }

  return (
    <div className='flex w-full h-screen justify-center items-center gap-[2px] relative'>
    <div className='w-80 h-[450px] border-[2px] border-sky-400 bg-white' >
      <div className='w-full h-[300px] p-4 overflow-hidden'>
        {image ? <img className='' src={URL.createObjectURL(image)} alt="" size={10}  /> : <img src={img1} alt="" size={10} />}
        </div>

        <div className='w-[316px] absolute top-[60%]'>
          <button className='w-full h-[40px]  bg-sky-400 text-white'>Take Photo</button>
          <div className='w-full mt-6 flex justify-center items-center'>
            <div className='w-[200px] flex justify-center items-center leading-none whitespace-normal'>
              <input type="file" name='file' ref={imageRef} onChange={handleImage}/>
            </div>
          </div>
        </div>
    </div>
    <div className='absolute top-18 left-18'>
        <Popup trigger={buttonPopup} setTrigger={setPopup}>
            
        </Popup>
    </div>
    <div className='w-96 h-[450px] border-[2px] border-sky-400 bg-white'>
        <img src={img2} alt="" className='w-[200px] h-[300px] flex justify-center items-center ml-20'/>
        <button className='w-full h-[40px] mt-4 bg-sky-400 text-white' onClick={() => setPopup(true)}>Scan Finger</button>
        <div className='w-full  mt-6 flex justify-center items-center'>
        <div className='w-[200px] flex justify-center items-center leading-none whitespace-normal'>
    <input type="file" name='file'/>
    </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default Home