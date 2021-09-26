import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplaySinger from '../DisplaySinger/DisplaySinger';
import './Singer.css'

const Singer = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);
    const [names, setNames] = useState([]);

    useEffect ( ()=> {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
        // .then(data => setDisplaySinger(data))
    },[]);
    const addToCartHandler = (singers, name) => {
        // console.log(singers.name);
        const newCart = [...cart, singers]
        setCart(newCart)
        const newName = [...names, name]
        setNames(newName)

    }
    return (
        <>
        <div className="singer-container">
        <h3>Total Singer: {singers.length}</h3>
        <br />
        <div className="displaySinger-Container">
            {/* <h3>Total Singer: {singers.length}</h3> */}
            {
                singers.map(Singers => <DisplaySinger
                key = {Singers.id}
                singers = {Singers}
                addToCartHandler = {addToCartHandler}
                >
                </DisplaySinger>)
                
            }
        </div>
        <div className="cart">
            {/* <h3>cart: {cart.length}</h3>
            <h3>Name: </h3>
            <h3>Total: </h3>
            <button>Hire Now</button> */}
            <Cart 
            cart ={cart}
            names = {names}
            ></Cart>
        </div>
        </div>
        
        </>
    );
};

export default Singer;