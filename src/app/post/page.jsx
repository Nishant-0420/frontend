'use client'
import React from 'react';
import classes from './post.module.css';

const userPost = () => {
    
  return (
    <div className={`vh-100 bg-success ${classes.backgroundimage}`}>
        <div className={`container d-flex justify-content-center align-items-center vh-100 `}>
           
            
                <div className={`row col-sm-8 gap-2 p-4 m-2 ${classes.curvecorner}`}>
            <form > 
               <label > Title</label>
                <input type="text" className={`form-control shadow ${classes.inputcustom} `} placeholder='Title' />
                <label htmlFor="">Username</label>
                <input type="text" className={`form-control shadow ${classes.inputcustom} `} placeholder='username'/>
                <label htmlFor="">Description</label>
                <textarea rows="3" className={`form-control shadow ${classes.inputcustom} `} placeholder='Description' ></textarea>
                <label htmlFor="">Image link</label>
                <input type="text" className={`form-control shadow ${classes.inputcustom} `} placeholder='image link' />
                <br />
                <button type='submit' className='btn btn-success w-100'>Submit</button>
            </form>    
            </div>
                
            
        
        </div>
    </div>
    
    
  )
}

export default userPost