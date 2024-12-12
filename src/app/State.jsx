'use client'
import React, { useState } from 'react'

function State() {
   const[number,setnumber] = useState(0)
   let add = ()=>{
    setnumber(number + 1)
   };
  return (
    <div className=' text-green-600 '>

        <p>count number : {number}</p>
        <button className=' bg-red-800 py-5 px-10 rounded-2xl ' onClick={add}>add number</button>
    </div>

  )
}

export default State