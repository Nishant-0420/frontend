import React from 'react';
// import that local css like import classes from "./"
// className='' for global css
// classNmae={classes.css}

import classes from './login.module.css'
const Login = () => {
  return (
    <div>LoginDevil
      <button className={classes.mybtn} >submit</button>
      <button className='my-btn' >submit</button>
    </div>
  )
}

export default Login;