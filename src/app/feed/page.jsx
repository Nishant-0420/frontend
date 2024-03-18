 'use client'  
import { IconHeart } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const Feed = () => {
    const [PostArray, setPostArray] = useState([]);

    const fetchPostData = ()=>{
        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status)
            return response.json();
            
        })
        .then((data)=> {
            console.log(data)
            setPostArray(data)
        } )
        .catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
      fetchPostData();
    
    }, [])
    
  return (
    <div>
        <div className="container">
            <h1 className="text-center">feed</h1>
            <hr />
            <div className="col-md-6 mx-auto">
                {PostArray.map((post)=>{
                    return <div key ={post.id} className='card shadow' > 
                    <div className="card-header">
                        <h3>{post.title}</h3></div>
                        <img className='card-img-top' src="post.image" alt="" />
                        <div className="card-footer">
                            <div className="d-flex gx-3">
                                <button className='btn btn-outline-success w-100'>{post.likes} <IconHeart/></button>
                                <button className='btn btn-outline-success w-100'>{post.share}Share</button>
                        
                            </div>
                        </div>
                        </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Feed