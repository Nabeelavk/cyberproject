import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Women = () => {
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
  
    const handleSubmit = async() => {
        navigator('/cart')
        
      }
      const Favourites= () => {
        const signout = () => {
          dispatch({ type: 'SET_USER', payload: 'user not found' }); 
          navigator('/fav')
        }
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
        <img src='women1.avif' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Heels</div>
        <div style={{color:'white'}}>Rs:3000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='women6.avif' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Shoe</div>
        <div style={{color:'white'}}>Rs:5000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='women7.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Fancy Shoe</div>
        <div style={{color:'white'}}>Rs:2000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='women3.webp' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>women wear</div>
        <div style={{color:'white'}}>Rs:1200/-</div>
      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='women8.avif' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>casual wear</div>
        <div style={{color:'white'}}>Rs:2000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='w.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Ethnic wear</div>
        <div style={{color:'white'}}>Rs:4300/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='wo.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Flat</div>
        <div style={{color:'white'}}>Rs:3500/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='wom.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Leather</div>
        <div style={{color:'white'}}>Rs:5650/-</div>
      </a>


    </div>

    
      
  </div>



  );
};

export default Women;