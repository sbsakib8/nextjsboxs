import React from 'react'

function page({params}) {
  return (
    <div>this is topic page 

        <p>{params.topic}</p>
    </div>
  )
}

export default page