import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [Name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [Size,setSize]=useState('');
  const [Color, setColor] = useState('');
  const [Brand,setBrand]=useState('');


  const handleSubmit = async (e) => {
    navigate('/admin')

    try {
      const response = await axios.post('http://localhost:2000/login', { Name, price,Size,Color,Brand });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/admin');
  }

  return (
    
    <div>
      <div style={{display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'80px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
    </div>
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
      <h2 style={{color:'white'}}>Add Product</h2>
    </div>

      <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
        <label style={{color:'white'}}> Name</label>
        <input
          type="text"
          value={Text}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
        <label style={{color:'white'}}>Price</label>
        <input
          type="number"
          value={Number}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px',color:'gray'}}>
        <label style={{color:'white'}}>Size</label>
        <input
          type="number"
          value={Number}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </div>
      <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
        <label style={{color:'white'}}>Color</label>
        <input
          type="text"
          value={Text}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
        <label style={{color:'white'}}>Brand</label>
        <input
          type="text"
          value={Text}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>
      
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px',gap:'50px'}}>
     
      <button style={{height:'100',width:'200'}}  onClick={handleSubmit}  >Add Product</button> 
      </div>

    </div>
  );
};

export default Addproduct;


