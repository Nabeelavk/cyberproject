import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }

  return (
  <div>
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'50px'}}>
      <h2 style={{color:'white'}}>Shopping Cart</h2>
    </div>
    <div>
        <table border={'1'} style={{height:'400px',width:'1485px'}}>
             <th>
              PRODUCTS
            </th>
              <th>
                PRICE
              </th>

              <th>
                QUANTITY
              </th>
              <th>
                SUBTOTAL
              </th>

              <tr>
               <td>
                <img src='b1.jpg' style={{height:'100px',width:'100px'}}></img>
                Black Boot
                </td>
                <td>
                  4000/-
                </td>
                <td>
                 <button>1</button>
                </td>
                <td>
                  4000/-
                </td>
               </tr> 
               <tr>
                <td>
                <img src='h2.jpg' style={{height:'100px',width:'100px'}}></img>
                Women Heels
                </td>
                <td>
                  5000/-
                </td>
                <td>
                 <button>1</button> 
                </td>
                <td>
                  5000/-
                </td>
              </tr>
              <tr>
                <td>
                <img src='ki.jpg' style={{height:'100px',width:'100px'}}></img>
                Casual Wear
                </td>
                <td>
                  1500/-
                </td>
                <td>
                  <button>1</button>
                </td>
                <td>
                  1500/-
                </td>
              </tr>
             </table>

    </div>
    <br></br>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{fontSize:'25px',fontStyle:'inherit'}}>
      Promotion code
      <div>
        <br></br>
      <button style={{alignItems:'start',height:'40px',width:'400px',fontSize:'20px',color:'lightgray'}}>Cuoppen code</button>
      <button style={{borderRadius:'20px',alignItems:'end',height:'40px',width:'200px',backgroundColor:'lightblue'}}>APPLY COUPEN</button>
      </div>
    </div>
    <br></br>
    <div style={{fontSize:'25px',fontStyle:'inherit'}}>
      Cart Totals
        <br></br>
        <br></br>
        <table border={1} style={{height:'120px',width:'500px'}}>
          <tr>
            <td>
             Subtotal
            </td>
            <td>
              4200/-
            </td>
          </tr>
          <tr>
            <td>
             Total
            </td>
            <td>
             4200/-
            </td>
          </tr>
        </table>
        <div style={{display:'flex',justifyContent:'right'}}>
      <button style={{borderRadius:'20px',height:'30px',width:'200px',backgroundColor:'lightblue'}}>Proceed To Checkout</button>
      </div>
      </div>
    </div>
    

</div>



  );
};

export default Cart;
