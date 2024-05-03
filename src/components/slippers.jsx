import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Slippers = () => {
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
        <img src='sp1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Slippers</div>
        <div  style={{color:'white'}}>Rs:400/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>kids wear</div>
        <div  style={{color:'white'}}>Rs:300/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>women slippers</div>
        <div  style={{color:'white'}}>Rs:800/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='slip.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>casual slippers</div>
        <div  style={{color:'white'}}>Rs:350/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='sp5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>men wear</div>
        <div  style={{color:'white'}}>Rs:700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>NIKE</div>
        <div  style={{color:'white'}}>Rs:1600/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>kids wear</div>
        <div  style={{color:'white'}}>Rs:700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>kids slippers</div>
        <div  style={{color:'white'}}>Rs:200/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Slippers;