import React, { useEffect, useRef } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link } from 'react-router-dom';
import data from '../assets/fake-data/data-collection'
import Icon from '../components/icon_svg/IconSvg';
import Footer2 from '../components/footer/Footer2';
import "../components/annual_report/styles.scss";
import { AutoTextSize } from 'auto-text-size'

function Awards(props) {
    return (
        <div className='page-collection'>
            <PageTitle title='Awards' color="#3324ff" description={"Uniting hearts, Building dreams, Creating legacies"} />

            <section className="tf-container">
                {AwardItem()}
                {AwardItem()}
                {AwardItem()}
            </section>

            <Footer2 />

        </div>
    );
}

export default Awards;

export function AwardItem(award) {
      // Define color variables
      const colors = {
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700'
      };
    
      // Set color based on provided value or default to gold
      const mainColor = colors["silver"] || colors.gold;
    
    return (
        <div className="tf-container">
            <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' ,marginTop: "4rem", }}>
                <h2 className="heading" style={{color:"#ffff"}}> sasdaasdasd dasasasddsas dassadsad dsaasasds 2023/24</h2>
            </div>

            <div className="row justify-content-center" style={{ gap: '10px' }}> {/* Reduced gap */}
                {data.slice(0, 9).map((item, idx) => (
                    <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="tf-product">
                            <div className="image-wrapper">
                                <div className="image">
                                    <Icon color={mainColor} /> {/* Use your Icon component here */}
                                    <div className='textSizeBox'>
                                        <AutoTextSize style={{color: `${mainColor}` , lineHeight: '2.3rem',alignSelf:"center",fontWeight: "500"}} minFontSizePx={7} maxFontSizePx={30} mode='box'>Most Outstanding Club Of The Year </AutoTextSize>
                                    </div>
                                    {/* <p style={{fontSize :"2rem"}}>SA dsasasd asddsadsa </p> */}
                                </div>

                            </div>
                    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

