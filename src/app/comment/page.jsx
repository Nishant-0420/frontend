'use client'
import React, { useState } from 'react'
  
const Comment = () => {
    let [commentList, updateCommentList]=useState([])
    const com=(e)=>{
        if(e.code==='Enter' && 'Tap'){
            const obj={text:e.target.value}; 
            updateCommentList([obj,...commentList])
            e.target.value=''
        }
    }

  return (
    <div className='bg-success'>
        <div className="container">
            <h1 className='text-center'>COMMENTZZZZZ</h1>
            <div className="card shadow">
                <div className="card-header">
                    <input type="text" onKeyDown={com} className='form-control '/>
                </div>
                <div className="card-body">
                { commentList.map((n,index)=> <div  key={index} ><p>{n.text}</p> </div>)}
                
            </div>
        </div>
    </div></div>
  )
}

export default Comment