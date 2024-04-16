import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import { Accordion } from 'react-bootstrap-accordion';

import { Link } from 'react-router-dom';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-collection'


function Awards(props) {
    return (
        <div className='page-collection'>
            <PageTitle title='Awards' />

            <section className="tf-collection-inner">
                {AwardItem()}
                {AwardItem()}
                {AwardItem()}
            </section>
                
            <Footer />
            
        </div>
    );
}

export default Awards;

export function AwardItem() {
    return <div className="tf-container">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <h2 className="heading">2023/24</h2>
        </div>

        <div className="row ">
            <div className="col-lg-2 col-md-2">
            </div>
            <div className="col-lg-9 col-md-8 ">
                <div className="row">
                    {data.map(idx => (
                        <div key={idx.id} className="col-lg-3 col-md-1">
                            <div className="tf-product">
                                <div className="image" style={{ marginBottom: '4rem' }}>
                                    <img src={idx.img} alt="Binabox" />
                                </div>

                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </div>

    </div>;
}
