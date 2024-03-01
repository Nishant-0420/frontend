'use client'
import React, { useState } from 'react'

const TodoList = () => {
    // to show updates on page we use state way  useState() to create variable and useState only returns 2value
    // first variable is used to read and 2nd one is function to update value
    // when fun returns multiple value then use array like const [a,b,c]
    let [taskList, updateTaskList]= useState([
        {text:'do homework', completed: false},
        {text:'learn react', completed: false},
        {text:'getting high at night', completed: false}
    ])
    console.log(taskList);
    // console.log(updateTaskList);
    const addTask=(e)=>{ console.log(e.key)}

  return (
    <div className='bg-success vh-100 '>
       
        <div className="container py-4">
            <h1 className="display-2 fw-bold text-center"> ToDo list</h1>
            <div className="card shadow">
                <div className="card-header">
                    <input 
                    // onKeyDown()
                    onKeyDown={addTask}
                    type="text" className='form-control border-2 border-success'
                    placeholder='add your task here' />
                </div>
                <div className="card-body">
                    {
                        // taskList.map(n=> <h1>{n.text}</h1> )
                        taskList.map((n,index)=> <div className='p-4 shadow d-flex justify-content-between mb-2' key={index}>
                            <p>{n.text}</p>
                            <button className='btn btn-success'> Delete</button>
                            </div> )
                        
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default TodoList