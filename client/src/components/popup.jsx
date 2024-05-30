import React from 'react';
import img3 from "../images/biometric_img.jpg"

function Popup(props) {
  return (props.trigger) ? (
    <div className='w-[400px] h-[400px] bg-white border-[2px] border-sky-600 flex justify-evenly relative'>
        <img src={img3} alt="" />
    <div className='absolute top-80 flex justify-evenly gap-6'>
        <button className='px-5 py-2 rounded-lg border-black border-[2px] bg-white'>Scan</button>
        <button className='px-5 py-2 bg-purple-500 text-white rounded-md' onClick={() => props.setTrigger(false)}>Cancel</button>
        {props.children}
        <button className='px-5 py-2 rounded-lg border-black border-[2px] bg-white'>Verify</button>
    </div>
    </div>
  ) : "";
}

export default Popup