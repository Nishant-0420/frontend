'use client'
import React, { useState } from 'react'

const Comment = () => {
    let [commentList,updateComment]=useState([])

    const addLike=(index)=>{
        const like=[...commentList]
        like[index].likes+=1
        updateComment(like);
    }
    const comm=(e)=>{

        if(e.code==='Enter' || e.code==='Tap'){
            console.log(e.target.value)
            const obj={text: e.target.value , likes:0};
            updateComment([obj,...commentList]);
            e.target.value=''
        }
        

    }
  return (
    <div className='container p-5  '>
        <div><h2 className='text-center'>comment</h2></div>
        <div className="card mx-5 shadow">
            <div className="card-header p-4 text-bg-info">
                <input 
                type="text" 
                className='form-control '
                placeholder='comment...' 
                onKeyDown={comm}/>
            </div>
            <div className="card-body p-4">
                {commentList.map((n,index)=>
                    <div className='comment-block d-flex gap-2 justify-content-between' key={index}>
                        <p className='fw-bold'>{n.text}</p>
                        <div className=' '>
                            <button onClick={()=>{addLike(index)}} className='btn btn-primary btn-sm'>Like {commentList[index].likes}</button>
                        </div>
                        
                    </div>
                )}
            </div>
            <div className="card-footer py-3 ">
                <p className='text-center bold'>Join the community to comment</p>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment