import React from 'react';
import 'tachyons';
import './Card.css';
import Sa from './saurish.jpg';
import Ra from './raghav.jpg';

function Card(props) {
    
    const image = {
        textAlign: "left",
        padding: "40px 20px",
        height: "200px"
    };

    const user = props.id;
    if(user) {
        return(
            <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
                <img alt="image" src={Sa} style={image}></img>
                <h2> {props.name} </h2>
                <p> {props.email} </p>
            </div>
        );
    }
    else {
        return(
            <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
                <img alt="image" src={Ra} style={image}></img>
                <h2> {props.name} </h2>
                <p> {props.email} </p>
            </div>
        );
    }
    
}

export default Card;