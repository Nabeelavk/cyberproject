import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wedges = () => {
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
        <img src='we1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Fancy wedding embroidary wedges</div>
        <div style={{color:'white'}}>Rs:6000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Fancy Wedges</div>
        <div style={{color:'white'}}>Rs:5400/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Konnie Wedges Sandal</div>
        <div style={{color:'white'}}>Rs:2500/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Slip-on Wedges</div>
        <div style={{color:'white'}}>Rs:3000/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='we5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Mosac Stylish Fashionable Wedges</div>
        <div style={{color:'white'}}>Rs:5999/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>White Wedges For KIds</div>
        <div style={{color:'white'}}>Rs:1800/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Pretty Bow Baby Pink Wedges</div>
        <div style={{color:'white'}}>Rs:4599/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='we8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Ankle Strap Wedges</div>
        <div style={{color:'white'}}>Rs:3750/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Wedges;