import React from 'react';

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='px-3 py-1 m-2 bg-gray-100 rounded-md font-semibold'>{name}</button>
    </div>
  )
}

export default Button;