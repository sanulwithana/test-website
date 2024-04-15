import React from 'react';

import SwiperCore, { Autoplay, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';
import Button02 from '../button/Button02';
import img1 from '../../assets/images/hello.jpg'
import img2 from '../../assets/images/help.jpg'
import img3 from '../../assets/images/help.jpg'


function Banner03(props) {
    const {data} = props;
    return (
        <section className=" tf-slider home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, Autoplay]}
                            spaceBetween={0}
                            effect=''
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            className="slider-home"
                            loop={true}
                        >
                            {data.map((idx, index) => (
                                <SwiperSlide key={idx.id}>
                                    <div className="banner-item">
                                        <div className="banner-content">
                                            <h1 className="heading">{idx.title}</h1>
                                            <p className="sub-heading">{idx.desc}</p>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src={index === 0 ? img1 : index === 1 ? img2 : img3}
                                                alt={`Slider ${index + 1}`}
                                                className="banner-image"
                                            />
                                             <div className="image-overlay"></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner03;