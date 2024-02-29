'use client' 
import React from 'react';

const EvenHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <button className='btn btn-dark'
         onClick={()=>{alert('lick afeem first')}} >
            daabaa do</button>
         <input type="color" 
         onChange={(e)=>{document.body.style.background=e.target.value ;console.log(e.target.value)}} />
         
    </div>
  )
}

export default EvenHandling;