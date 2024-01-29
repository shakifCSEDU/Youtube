import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All","Gaming","Live","Songs","Cricket","Valentines","Cooking","Soccer","Somoy News","JamunaTV","BTV","Top News"];

  return (
    <div className='flex'>
      {
        list.map((l,index)=>{
         return  <Button key={index} name={l}/>
        })
      }

    </div>
  )
}

export default ButtonList