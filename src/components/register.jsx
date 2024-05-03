import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate('/login')
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
     
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
   
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
      
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  
// 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
  return (
  <div>
    <div style={{display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'80px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
    </div>
    <div style={{ backgroundImage:`url(/bg.jpg)`,backgroundSize:'cover',height:'800px' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <h2 style={{color:'white'}}>REGISTER</h2>
      <div>
        <label style={{color:'white'}}>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div >
        
        <label style={{color:'white'}}>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div >
        <label style={{color:'white'}}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div >
        <label style={{color:'white'}}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    
      <div >
        <label style={{color:'white'}}>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit}  style={{backgroundColor:'green'}}>REGISTER</button>
    </div>
    </div>
    
  );
};

export default Register;
