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
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-4">
                        </div>
                        <div className="col-lg-9 col-md-8 ">
                            <div className="row">
                                {
                                    data.slice(0,9).map(idx => (
                                        <div key={idx.id} className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src={idx.img} alt="Binabox" />
                                                </div>
                                                <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                             
                        </div>
                    </div>
                    
                </div>
            </section>
                
            <Footer />
            
        </div>
    );
}

export default Awards;