import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import { Accordion } from 'react-bootstrap-accordion';

import { Link } from 'react-router-dom';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-collection'
import Icon from '../components/icon_svg/IconSvg';
import Footer2 from '../components/footer/Footer2';


function Awards(props) {
    return (
        <div className='page-collection'>
            <PageTitle title='Awards' />

            <section className="tf-collection-inner">
                {AwardItem()}
                {AwardItem()}
                {AwardItem()}
            </section>
                
            <Footer2 />
            
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
                <div className="row">
                                {
                                    data.slice(0,9).map(idx => (
                                        <div key={idx.id} className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <div className="tf-product">
                                        
                                                <div className="image">
                                                <p  style={{color: "grey",position:'absolute',top:'7.6rem',maxWidth:"170px",left:"3.7rem", zIndex: 200 ,fontSize:'1.3rem',fontWeight:'500',textAlign:'center',lineHeight:'1.5rem'}}>the medal of goasddsa dasdsadassda assdsad dsadsasda ddd ddddd</p>
                                <div className="image" style={{ marginBottom: '0.5rem' }}>
                                   
                                    <Icon color="#FFD700" />
                                    {/* <img src={idx.img} alt="Binabox" /> */}
                                </div>
                                                   
                                                </div>
                                                <h6 className="name"><Link to="/item-details"> </Link></h6>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>


                </div>

            </div>
        </div>

    </div>;
}
