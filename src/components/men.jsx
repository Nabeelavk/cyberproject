import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import CartPage from '../pages/cart';
import axios from 'axios';

const Men = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }
  const cart= () => {
    const signout = () => {
      dispatch({ type: 'SET_USER', payload: 'user not found' }); 
      navigator('/cart')
    }

  }
  const Favourites= () => {
    const signout = () => {
      dispatch({ type: 'SET_USER', payload: 'user not found' }); 
      navigator('/fav')
    }
  }

   const handleSubmit = async() => {
        navigator('/cart')
    }

    const fav = async() => {
      navigator('/fav')
  }
    

  return (
    <div>
    <div style={{justifyContent:'space-between',display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'90px'}}>
      <img src='logo1.jpeg' style={{height:'90px',width:'150px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
     <div style={{display:'flex',justifyContent:'left',padding:'10px',gap:'10px'}}> 
      <button onClick={fav} style={{borderRadius:'10px'}}>Favourites</button>
      <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Add to cart</button>
    </div>
      
    </div>

    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='men1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Athletic Shoe</div>
        <div  style={{color:'white'}}>Rs:5000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='men2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Leather Shoe</div>
        <div  style={{color:'white'}}>Rs:3600/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Leather Sandal</div>
        <div style={{color:'white'}}>Rs:2700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='men4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Athletic shoe</div>
        <div style={{color:'white'}}>Rs:6000/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='men5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Casual Slipper</div>
        <div style={{color:'white'}}>Rs:500/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Sneakers Shoe</div>
        <div style={{color:'white'}}>Rs:4000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Jack&Sons Slipper</div>
        <div style={{color:'white'}}>Rs:500/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Slipper</div>
        <div style={{color:'white'}}>Rs:300/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Men;