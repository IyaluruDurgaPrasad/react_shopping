// Mainpage.js
import React, { useState } from 'react';
import Banner from '../components/Banners';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collection from '../components/Collections';
import Womens from '../components/Womens';
import { mens, womans } from '../data'; // Importing the mens and womans objects from data.js

function Mainpage() {
    const [mensFashion, setMensFashion] = useState(mens);
    const [womanFashion, setWomenFashion] = useState(womans); // Corrected variable name

    return (
        <div>
            <Header />
            <Banner />
            <Collection mensFashion={mensFashion} />
            <Womens womanFashion={womanFashion} /> {/* Corrected prop name */}
            <Footer />
        </div>
    );
}

export default Mainpage;
