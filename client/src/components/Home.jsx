import React from 'react';
import Popup from './popup';
import { useState } from 'react';
import img1 from "../images/profile-logo-removebg-preview.png"
import img2 from "../images/thumb_img.jpg"
import { useRef } from 'react';
import axios from "axios";

function Home() {
  
  const [profileImage, setProfileImage] = useState("");
  const [biometric, setbiometric] = useState("");
  const [buttonPopup, setPopup] = useState(false);

  function handleImage(e){
      console.log(e.target.files);
      setProfileImage(e.target.files[0])
  }

  function handleBiometric(e) {
    console.log(e.target.files);
    setbiometric( e.target.files[0])
  }

  const imageRef = useRef(null);
  const biometricRef = useRef(null);

    function changeImage(){
      imageRef.current.click();
    }

  //   function sendImageData() {
  //     const formData = new FormData();
  //     if (profileImage) {
  //         formData.append('profileImage', profileImage);
  //     }
  //     if (biometric) {
  //         formData.append('biometric', biometric);
  //     }

  //     fetch('http://localhost:3000/submit', {
  //         method: 'POST',
  //         body: formData
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //         console.log('Success:', data);
  //         // Handle response data as needed
  //     })
  //     .catch(error => {
  //         console.error('Error:', error.message);
  //     });
  // }

  // function handleSubmit() {
  //   sendImageData();
  // }

  const submit = async(e) => {
    e.preventDefault();

    try {
      alert("submitted")
      await axios.post("http://localhost:3000/submit", {
        biometric
      })

    } catch (error) {
      console.log(error);
    }
  }


  return (
    
    <div className='flex w-full h-screen justify-center items-center gap-[2px] relative'>
    <div className='w-80 h-[460px] border-[2px] border-sky-400 bg-white' >
      <div className='w-full h-[300px] p-4 overflow-hidden flex justify-center items-center'>
        {profileImage ? <img className='w-[300px] p-4 flex justify-center items-center' src={URL.createObjectURL(profileImage)} alt="" size={10}  /> : <img src={img1} alt="" size={10} />}
        </div>

        <div className='w-[316px] absolute top-[58%]'>
          <button className='w-full h-[40px]  bg-sky-400 text-white'>Take Photo</button>
          <div className='w-full mt-6 flex justify-center items-center'>
            <div className='w-[200px] flex justify-center items-center leading-none whitespace-normal'>
              <input type="file" name='file' ref={imageRef} onChange={handleImage}/>
            </div>
          </div>
          <button className='px-5 h-[30px] font-semibold rounded-lg mt-4 bg-gradient-to-r from-green-500 to-green-300'>Back</button>
        </div>
    </div>
    <div className='absolute top-18 left-18'>
        <Popup trigger={buttonPopup} setTrigger={setPopup}>
            
        </Popup>
    </div>
    <div className='w-96 h-[460px] border-[2px] border-sky-400 bg-white'>
      <div className='w-full h-[300px] p-4 overflow-hidden flex justify-center items-center'>
        {biometric ? <img className='w-[300px] p-4 flex justify-center items-center' src={URL.createObjectURL(biometric)} alt="" size={10} /> : <img src={img2} alt="" className='w-[212px] h-[260px] p-4'/>}
      </div>
        <div className='w-absolute top-[58%]'>
          <button className='w-full h-[40px] bg-sky-400 text-white' onClick={() => setPopup(true)}>Scan Finger</button>
          <div className='w-full  mt-6 flex justify-center items-center'>
          <div className='w-[200px] flex justify-center items-center leading-none whitespace-normal'>
            <form action="POST">
            <input type="file" name='file' ref={biometricRef} onChange={handleBiometric}/>
            </form>
          </div>
          </div>
        </div>

        <button className='px-5 h-[30px] font-semibold rounded-lg mt-4 bg-gradient-to-r from-green-500 to-green-300'>Back</button>
    </div>

    <button className="absolute top-[740px] left-[550px] px-5 py-3 bg-cyan-600 text-white rounded-md"  onClick={submit}>Submit</button>
    </div>
    
  )
}

export default Home