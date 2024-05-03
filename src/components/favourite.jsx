import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }

  return (
  <div>
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
      <h2 style={{color:'white'}}>Favourite Footwears</h2>
    </div>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'white',height:'320px'}}>
      <a href='#'>
        <img src='h2.jpg' style={{height:'200px',width:'400'}}></img>
        <h4>women heels</h4>
      </a>
      <a href='#'>
        <img src='we3.jpg' style={{height:'200px',width:'500'}}></img>
        <h4>Wedges</h4>
      </a>
      <a href='#'>
        <img src='ki.jpg' style={{height:'200px',width:'500'}}></img>
        <h4>casual wear</h4>
      </a>

    </div>
  </div>

);
};

export default Favourites;
