import React from 'react';
import "./DisplaySinger.css"

const DisplaySinger = (props) => {
    console.log(props.singers);
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
                    <h5>Age: {age}</h5>
                    <h5>Country: {country}</h5>
                    <h5>Salary: {salary}</h5>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default DisplaySinger;