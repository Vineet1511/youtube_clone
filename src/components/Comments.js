import React from 'react';
import { FaUserTie } from "react-icons/fa";

const Comments = ({data}) => {

    const {name, text, reply} = data;


  return (
    <div className='flex items-center w-[60vw]'>
        <FaUserTie className='text-4xl text-purple-500 my-5 border rounded-full'/>

        <div className='mx-5'>
            <p className='text-sm font-semibold cursor-pointer'>{name}</p>
            <p>{text}</p>
            
        </div>       
    </div>
  )
}

export default Comments