import React, { useEffect, useState } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import data from '../assets/fake-data/data-collection'
import Icon from '../components/icon_svg/IconSvg';
import Footer2 from '../components/footer/Footer2';
import "../components/annual_report/styles.scss";
import client from '../services/client'
import { AutoTextSize } from 'auto-text-size'
import Loading from '../components/loader/loader';

function Awards(props) {
    const [awardPageData, setAwardPageData] = useState(null);

    useEffect(() => {
        const query = `*[_type == "awardPage"] {
            title,
            "awards": awards[] {
              description,
              awardType
            }
          }`
        client.fetch(query)
            .then((data) => {
            
                setAwardPageData(data);
             
            })
            .catch(console.error)
    }, []); 

    if(awardPageData === null){
       return <Loading/>;
    }

    return (
        <div className='page-collection'>
            <PageTitle title='Awards' color="#3324ff" description={"Uniting hearts, Building dreams, Creating legacies"} />

            <section className="tf-container">
            {awardPageData.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
             
            </section>

            <Footer2 />

        </div>
    );
}

export default Awards;

export const AwardItem = (props) => {
    console.log(props.award);
    const {title , awards} = props.award;
      // Define color variables
      const colors = {
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700'
      };
    
      // Set color based on provided value or default to gold

    
    return (
        <div className="tf-container">
            <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' ,marginTop: "4rem", }}>
                <h2 className="heading" style={{color:"#ffff"}}> {title}</h2>
            </div>

            <div className="row justify-content-center" style={{ gap: '10px' }}> {/* Reduced gap */}
                {awards.map((item, idx) => (
                    <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="tf-product">
                            <div className="image-wrapper">
                                <div className="image">
                                    <Icon color={ colors[item.awardType] || colors.gold} /> {/* Use your Icon component here */}
                                    <div className='textSizeBox'>
                                        <AutoTextSize style={{color: `${colors[item.awardType] || colors.gold}`,alignSelf:"center",fontWeight: "500"}} minFontSizePx={7} maxFontSizePx={26} mode='box'>{(item.description).toUpperCase()} </AutoTextSize>
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

