// Womens.js
import React from 'react';

function Womens(props) {
    const { title, image1, image2, image3 } = props.womanFashion; // Corrected prop name

    return (
        <div className='womensSection'>
            <h1>{title}</h1>
            <div className="bannerBox">
                <img src="./assets/ladiesbanner.jpg" alt="" width="100%" height='320px' />
            </div>
            <div className="menImages">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image1} alt="" />
            </div>
        </div>
    );
}

export default Womens;
