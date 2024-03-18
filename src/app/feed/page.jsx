 'use client'  
import React, { useEffect } from 'react'

const Feed = () => {
    const fetchPostData = ()=>{
        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status)
            
        })
        .then(()=> {} )
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
        </div>
    </div>
  )
}

export default Feed