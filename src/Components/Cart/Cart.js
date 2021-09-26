import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;
            let total = 0;
            for(const value of cart){
                total = total + parseInt(value.salary);
            }
    return (
        <div className="cart">
            <div className="cart-container">
            <h3>Singer List</h3>
            <h5>Singers Added: {cart.length}</h5> 
           <h5>Total Amount: ${total}</h5>
           <h5>Selected Singers: </h5>
           {
               
               props.names.map(name => 
               <li 
               key = {name.id}>{name}</li>)
           }
           <button>Hire</button>
            </div>
        </div>
    );
};

export default Cart;