import React, { useEffect, useState } from 'react';
import DisplaySinger from '../DisplaySinger/DisplaySinger';
import './Singer.css'

const Singer = () => {
    const [singers, setSingers] = useState([]);
    // const cart = [cart, setCart] = useState([]);
    // const [DisplaySingers, setDisplaySinger] = useState([]);

    useEffect ( ()=> {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
        // .then(data => setDisplaySinger(data))
    },[])
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
                >
                </DisplaySinger>)
                
            }
        </div>
        <div>
            <h3>cart</h3>
            <h3>Name:</h3>
        </div>
        </div>
        
        </>
    );
};

export default Singer;