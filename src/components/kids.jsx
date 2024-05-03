import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Kids = () => {
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
        <img src='k.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Fancy Shoe</div>
        <div style={{color:'white'}}>Rs:3000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='ki.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Casual Wear</div>
        <div style={{color:'white'}}>Rs:1500/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='kid.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Fancy Wear</div>
        <div style={{color:'white'}}>Rs:2700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='kk.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Athletic Shoe</div>
        <div style={{color:'white'}}>Rs:5,000/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='kp.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Rainbow</div>
        <div style={{color:'white'}}>Rs:700/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='kc.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>colour bird</div>
        <div style={{color:'white'}}>Rs:1200/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='kd.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Leather Shoe</div>
        <div style={{color:'white'}}>Rs:2000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='ks.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Light sports shoe</div>
        <div  style={{color:'white'}}>Rs:3000/-</div>
      </a>


    </div>

    
      
  </div>



  );
};

export default Kids;