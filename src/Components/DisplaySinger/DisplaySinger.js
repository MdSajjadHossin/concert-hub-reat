import React from 'react';
import "./DisplaySinger.css"

const DisplaySinger = (props) => {
    console.log(props);
    const {img, name, age, country, salary} = props.singers;
    return (
        <div>
            {/* <h2>This is singer</h2> */}
            <div className="DisplaySinger-container">
            <div className="single-singer">
               <div>
                    <img src={img} alt="" />
                </div>
                <div className="single-singer-text">
                    <h5>Name: {name}</h5>
                    <p>Age: {age}</p>
                    <p>Country: {country}</p>
                    <h5>Salary: {salary}</h5>
                    <button onClick = {() => props.addToCartHandler(props.singers, name)}>Book Now</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default DisplaySinger;