import React from 'react';
import Popup from './popup';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import img1 from "../images/profile-logo-removebg-preview.png"
import img2 from "../images/thumb_img.jpg"
import ImageUpload from './imageUpload';

function Home() {

    const [buttonPopup, setPopup] = useState(false);

  return (
    <div className='flex w-full h-screen justify-center items-center gap-[2px] relative'>
    <div className='w-80 h-[450px] border-[2px] border-sky-400 bg-white'>
        <img src={img1} alt="" size={10}/>
        <button className='w-full h-[40px]  bg-sky-400 text-white'>Take Photo</button>
        <div className='w-full h-[40px] mt-6'>
          <ImageUpload/>
        
        </div>
    </div>
    <div className='absolute top-18 left-18'>
        <Popup trigger={buttonPopup} setTrigger={setPopup}>
            
        </Popup>
    </div>
    <div className='w-96 h-[450px] border-[2px] border-sky-400 bg-white'>
        <img src={img2} alt="" className='w-[200px] h-[300px] flex justify-center items-center ml-20'/>
        <button className='w-full h-[40px] mt-4 bg-sky-400 text-white' onClick={() => setPopup(true)}>Scan Finger</button>
        <div className='w-[460px]  mt-6 flex justify-center items-center'>
          <ImageUpload/>
        </div>
        
    </div>
    </div>
    
  )
}

export default Home