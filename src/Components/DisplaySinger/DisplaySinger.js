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
                    <h2>Name: {name}</h2>
                    <h3>Age: {age}</h3>
                    <h4>Country: {country}</h4>
                    <h2>Salary: <span id="salary-span">{salary}</span> </h2>
                    <button onClick = {() => props.addToCartHandler(props.singers, name)}>Book Now</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default DisplaySinger;