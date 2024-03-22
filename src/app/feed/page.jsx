 'use client'  
import { IconHeart, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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

    const deletePost = (id)=>{
        fetch('http://localhost:5000/post/delete/'+ id,{
            method: 'DELETE'
        }).then((response) => {
            if(response.status===200){
                console.log('post deleted')
                fetchPostData();
                toast.success('Post deleted successful')
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    const updatePost= (id,dataToUpdate)=>{
        fetch('http://localhost:5000/post/update/'+id,{
            method: 'PUT'
        }).then((result) => {
            if(response.status===200){
                
                fetchPostData();
                toast.success('Post liked')
            }
            
        }).catch((err) => {
            console.log(err)
        });
    }
    
  return (
    <div>
        <div className="container">
            <h1 className="text-center">feed</h1>
            <hr />
            <div className="col-md-6 mx-auto">
                {PostArray.map((post)=>{
                    return <div key ={post._id} className='card shadow' > 
                    <div className="card-header d-flex justify-content-between">
                        <h3>{post.title}</h3>
                        <button className='btn btn-danger' onClick={()=>deletePost(post._id)}><IconTrash/></button>
                        </div>
                        <img onDoubleClick={() => updatePost(post._id, {likes : post.likes+1})} className='card-img-top' src="post.image" alt=""  />
                        <div className="card-footer">
                            <div className="d-flex gx-3">
                                <button className='btn btn-outline-success w-100' onClick={  () => updatePost(post._id, {likes : post.likes+1}) }>{post.likes} <IconHeart/></button>
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