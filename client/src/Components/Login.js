import React, {useState} from 'react';
import axios from 'axios'


function Login(props) {
    let [input, setInput] = useState(' ')

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('------->', input)
        axios.post(`http://localhost:8000/`, {input} )
    }
    //saving to backend & database
    

    return (
        <div>
            <p>
                Account Login 
            </p>
        <h1>HELLO</h1>

          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} type="text" placeholder="email address" />
              <button> Login </button> 
          </form>  

          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} type="text" placeholder="password" /> <br></br>
              <button> Submit </button>
          </form>  
          
        </div>
    );
}

export default Login;