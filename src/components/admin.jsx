import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const Login = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }
  const reg = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/register')
  }
  const Addproduct = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }
  
  const handleSubmit = async() => {
    navigator('/addproduct')
  }
  const productdetails = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }
  const add = async() => {
    navigator('/productdetails')
  }
  const user = useSelector((state) => state.user.user);

  return (
  <div>
    
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>

      <div>
      <h2 style={{color:'white'}}>Admin</h2>
    </div>
    </div>

    <div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>
      <button onClick={handleSubmit} style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Add product</button>
      </div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>
      <button onClick={add} style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Product Details</button>
      </div>

    </div>
    

    
      
  </div>



  );
};

export default Admin;
