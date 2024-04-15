// Collection.js
import React from 'react';

function Collection(props) {
    // Destructuring mensFashion from props
    const { title, image1, image2 } = props.mensFashion;

    return (
        <div className='collectionSection'>
            <h1>{title}</h1>
            <div className="menImages">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
            </div>

        </div>
    );
}

export default Collection;
