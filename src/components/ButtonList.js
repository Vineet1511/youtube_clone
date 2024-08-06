import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All", "Albumbs", "Live","News","Satsang","Sports","T-Series","Mantras","Recruitment", "Satsung", "Album","Watched","Recently Uploaded","New to You"]

  return (
    <div className='flex ml-5 text-nowrap overflow-x-auto'>
      {list.map((li, index) => <Button key={index} name={li} />)}
    </div>
  )
}

export default ButtonList