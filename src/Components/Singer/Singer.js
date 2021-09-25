import React, { useEffect, useState } from 'react';

const Singer = () => {
    const [singers, setSingers] = useState([]);
    // const cart = [cart, setCart] = useState([]);

    useEffect ( ()=> {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    },[])
    return (
        <div>
            <h3>Total Singer: {singers.length}</h3>
        </div>
    );
};

export default Singer;