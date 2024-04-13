import React from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataBanner from '../assets/fake-data/data-banner';
import dataCollection from '../assets/fake-data/data-collection';

import About1 from '../components/about/About1';
import Banner01 from '../components/banner/Banner01';

import Footer2 from '../components/footer/Footer2';
import Collection03 from '../components/collection/Collection03';



function Home01(props) {

    return (
        <div className="home-1">
            <Banner01 data={dataBanner} />
            {/* <Logo /> */}
            <About1 data={dataAbout} />
            <div className="tf-heading wow fadeInUp">
                <h2 className="heading">Our Signature Projects</h2>
            </div>
            <Collection03 data={dataCollection} />
           
            {/* <Work data={dataWork} /> */}
            {/* <Faqs data={dataFaqs} /> */}
            {/* <Partner data={dataPartner} /> */}
           <Footer2 />
        </div>

    );
}

export default Home01;