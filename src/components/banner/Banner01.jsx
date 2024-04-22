import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import img1 from '../../assets/images/slider/slider-1.jpg'
import img2 from '../../assets/images/slider/slider-2.jpg'
import img3 from '../../assets/images/slider/slider-3.jpg'
import img4 from '../../assets/images/slider/slider-9.jpg'
import img5 from '../../assets/images/slider/slider-10.jpg'
import img6 from '../../assets/images/slider/slider-11.jpg'
import Button from '../button/Button';
import Button02 from '../button/Button02';
import ImageSlider from '../slider/imageSlider';

Banner01.propTypes = {
    data : PropTypes.array,
};

function Banner01(props) {
    const {data} = props;
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      ];
    return (
        <section className="tf-slider">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                            loop= {true}
                        >
                          
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="slider-item">
                                        <div className="tf-slider-item">
                                            <div className="content-inner">
                                            
                                                <div className="text-typing">
                                                    <h1 className="heading mb0">WITH</h1>
                                                    <div className="animate-contain">
                                                        <div className="animated-text">
                                                            <span>RACIIT</span>
                                                            <span>Music</span>
                                                            <span>NFT</span>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className="heading">{idx.title} </h1>
                                                <p className="sub-heading">{idx.desc}</p>
                                                <div className="btn-slider ">
                                                    <Button path='#' title='CONNECT WALLET' />
                                                    <Button02 path='/collection' title='WHITELIST NOW' />
                                                    
                                                </div>
                                            </div>

                                            <div className="content-right ">
                                                <div className="content-slide">
                                               
                                              
                                                    <div className="image">
                                                        <img src={images[1]} alt="RACIIT" className="img-slider-1" />
                                                        <img src={images[2]} alt="RACIIT" className="fadeInClass" />
                                                    </div>
                                                    <div className="image s1">
                                                        <img src={images[0]} alt="RACIIT" className="img-slider-1" />
                                                        <img src={images[1]} alt="RACIIT" className="fadeInClass" />
                                                    </div>
                                                    <div className="image s1">
                                                        <img src={images[0]} alt="RACIIT" className="img-slider-1" />
                                                        <img src={images[1]} alt="RACIIT" className="fadeInClass" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                        
                    </div>
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner01;