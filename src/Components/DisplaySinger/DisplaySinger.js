import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import "./DisplaySinger.css"

const DisplaySinger = (props) => {
    const faPlusIcon = <FontAwesomeIcon icon={faPlusSquare} />
    const faInfoIcon = <FontAwesomeIcon icon={faInfoCircle} />
    // console.log(props);
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
                    <h4>Age: {age}</h4>
                    <h3>Country: {country}</h3>
                    <h2>Salary: <span id="salary-span">$ {salary}</span> </h2>
                    <button className="book-now-btn" onClick = {() => props.addToCartHandler(props.singers, name)}>{faPlusIcon} Book Now</button>
                    <button className="details-btn">{faInfoIcon} Details</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default DisplaySinger;