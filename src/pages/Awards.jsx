import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import { Accordion } from 'react-bootstrap-accordion';

import { Link } from 'react-router-dom';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-collection'
import Icon from '../components/icon_svg/IconSvg';


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
                            <p  style={{color: "grey",position:'absolute',top:'6.5rem',maxWidth:"170px",left:"3.5rem", zIndex: 200 ,fontSize:'1.5rem',fontWeight:'500',textAlign:'center',lineHeight:'1.5rem'}}>the great absent of doomm dasdad sdasds</p>
                                <div className="image" style={{ marginBottom: '0.5rem' }}>
                                   
                                    {/* <Icon color="#FFD700" gap={20} /> */}
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
