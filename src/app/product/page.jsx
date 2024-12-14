'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function page() {
    let router = useRouter()
    let add =()=>{
        alert('your order done!')
        router.push('/')
    }
  return (
    <div>
        <h1>this is a product page</h1>
        <p>mobile </p>
        <button onClick={add} className=' bg-green-500 py-4 px-6 rounded-2xl'>order new</button>
    </div>
  )
}

export default page