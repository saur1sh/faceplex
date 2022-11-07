import React from 'react';
import face from './faces.png';

class About extends React.Component {
    render() {
        const box = {
            margin: "20px",
            border: '4px solid black',
            borderRadius: '20px',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex'
        };

        const image = {
            textAlign: "left",
            padding: "40px 20px",
            height: "350px"
        };

        const para = {
            padding: "20px 20px",
            textAlign: "left",
            lineHeight: "40px",
            color: "white"
        };

        const head = {
            color: "white",
            fontSize: "40px",
            padding: "4px"
        };

        const m = {
            padding: "5px",
            borderRadius: "10px"
        }

        return (
            <div>
                <p style={head}><mark style={m}> About this app </mark></p>
                <div style={box}>
                    <img src={face} style={image} alt='pic of faces' />
                    <p style={para}>
                        Facial recognition is an enhanced application bio-metric software that uses a deep learning algorithm to compare a live capture or digital image to the stored face print to verify individual identity.
                        However, deep learning is a class of machine learning algorithms that uses multiple layers to progressively extract higher-level features from the raw input.
                        For example, in image processing, lower layers may identify edges, while higher layers may identify the concepts relevant to a human such as digits or letters or faces.
                        <br />Facial detection is the process of identifying a human face within a scanned image; the process of extraction involves obtaining a facial region such as the eye spacing, variation, angle and ratio to determine if the object is human.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;