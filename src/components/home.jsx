import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const Login = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const reg = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/register')
  }
  
  const user = useSelector((state) => state.user.user);

  return (
  <div>
    <div style={{display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'80px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
    </div>

    <div style={{backgroundImage:`url(/bg.jpg)`,backgroundSize:'cover',height:'1800px',width:'700'}}>
      <div style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>
      <button onClick={Login} style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Sign In</button>
      <button onClick={reg} style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Sign Up</button>
      </div>

    </div>
    

    
      
  </div>



  );
};

export default Home;
