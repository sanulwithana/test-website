import React from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataBanner from '../assets/fake-data/data-banner';
import dataCollection from '../assets/fake-data/data-collection';
import dataFaqs from '../assets/fake-data/data-faq';
import dataWork from '../assets/fake-data/data-work';

import About1 from '../components/about/About1';
import Banner01 from '../components/banner/Banner01';

import Collection from '../components/collection/Collection';
import About2 from '../components/about/About2';
import Faqs from '../components/faqs/Faqs';
import Footer2 from '../components/footer/Footer2';
import Work02 from '../components/work/Work02';
import Logo from '../components/logo/Logo';
import Collection03 from '../components/collection/Collection03';

import Work from '../components/work/Work';


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