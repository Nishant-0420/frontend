// ctrl+a to select all 
// rafce component structure
// file name should be page.jsx always
//css will be in object form {key:value,key:value} and when want to add javascript inside jsx which is a
//  div block it will be within {} like
// const num1 is created and used inside <div> block with {}
// under div its jsx where html+js is their and outside div their is only javascript

import React from 'react'

const Home = () => {
  const sideTitle='DevilTurnzzz';
  const num1=69;
  const num2=69;
  const add=(a,b)=>{
    return a+b
  }

  return (
    <div>
      <h1 className='my-btn' >{sideTitle}</h1>
     
    <br />
    <h3>{num1+num2}</h3>
    <p>{add(55,45)}</p>
    
      <h1 style={{color:'purple',fontSize:50}}>Next.js Devil's App</h1>
      <img src="https://assets.editorial.aetnd.com/uploads/2017/09/halloween-folklore-devil-getty-173469109.jpg?width=768" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore tempora, fugiat quos voluptates nobis doloremque maiores dolorum eum fugit. Reiciendis quibusdam vero ratione fuga.</p>
    </div>
  )
}

export default Home;