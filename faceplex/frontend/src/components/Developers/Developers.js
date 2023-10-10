import React from 'react';
import Card from './Card.js';

class Developers extends React.Component {
    render() {
        const head = {
            fontSize: "40px"
        };
        const m = {
            padding: "5px",
            borderRadius: "10px"
        }
        return (
            <div>
                <p style={head}> <mark style={m}> Developers </mark> </p>
                <Card id={true} name="Saurish Sharma" email="saurishsharma@protonmail.com"/>
                <Card id={false} name="Raghav Phophaliya" email="raghaphophaliya@gmail.com"/>
            </div>
        );
    }
}

export default Developers;
