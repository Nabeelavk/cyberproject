import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Heels = () => {
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
        navigator('/fav')
      }
      const Favourites= () => {
        const signout = () => {
          dispatch({ type: 'SET_USER', payload: 'user not found' }); 
          navigator('/fav')
        }
      }

  return (
    <div>
    <div style={{justifyContent:'space-between',display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'90px'}}>
      <img src='logo1.jpeg' style={{height:'90px',width:'150px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
     <div style={{display:'flex',justifyContent:'left',padding:'10px',gap:'10px'}}> 
      <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Favourites</button>
      <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Add to cart</button>
    </div>
      
    </div>

    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='h1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>heels shoe</div>
        <div style={{color:'white'}}>Rs:3000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>women</div>
        <div style={{color:'white'}}>Rs:5000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Fancy heels</div>
        <div style={{color:'white'}}>Rs:6000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Heels</div>
        <div style={{color:'white'}}>Rs:4500/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='h5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>heels shoes</div>
        <div style={{color:'white'}}>Rs:7000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Women</div>
        <div style={{color:'white'}}>Rs:4000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>girls Heels</div>
        <div style={{color:'white'}}>Rs:3000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='h8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Fancy Heels</div>
        <div style={{color:'white'}}>Rs:5000/-</div>
      

      </a>


    </div>

    
      
  </div>



  );
};

export default Heels;