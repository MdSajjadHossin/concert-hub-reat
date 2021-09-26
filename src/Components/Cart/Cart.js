import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const faUserIcon = <FontAwesomeIcon icon={faUserPlus} />
    const {cart} = props;
            let total = 0;
            for(const value of cart){
                total = total + parseInt(value.salary);
            }
    return (
        <div className="cart">
            <div className="cart-container">
            <h3 id="Singer-list-text">{faUserIcon} Singer List</h3>
            <h5>Singers Added: {cart.length}</h5> 
           <h5>Total Amount: ${total}</h5>
           <h5>Selected Singers: </h5>
           {
               
               props.names.map(name => 
               <li 
               key = {name.name}>{name}</li>)
           }
           <button className="hire-me-btn">Hire</button>
            </div>
        </div>
    );
};

export default Cart;