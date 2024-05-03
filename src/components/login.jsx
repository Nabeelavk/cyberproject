import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    navigate('/home1')

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <div>
    <div style={{display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'80px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
    </div>


    <div style={{backgroundImage:`url(/bg.jpg)`,backgroundSize:'cover',height:'800px' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <h2 style={{color:'white'}}>LOGIN</h2>
      <div>
        <label style={{color:'white'}}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{color:'white'}}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
     
      <button onClick={handleSubmit}  style={{backgroundColor:'green'}}>LOGIN</button> 

      <button onClick={redirecter}  style={{backgroundColor:'green'}}>REGISTER</button> 
      <div style={{color:'red'}}>
            <a href="/forget">ForgetPassword?</a>
        </div>

    </div>
    </div>
  );
};

export default Login;
