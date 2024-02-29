// use 'use client' to use bootstrap js and also add useEffect() snippetbefore return
'use client';
import React, { useEffect } from 'react'
//import karate time function name se karvana
import Navbar from '@/navbar'
// give {children} to display the previous thing that page already containes
// template.jsx for common content to display in every page of website

const Template = ({children}) => {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [])
    

  return (
    <div>
{/* how namebar file is imported with function name & its in capitalize form */}
       <Navbar/> 
       {children}
        </div>
  )
}

export default Template