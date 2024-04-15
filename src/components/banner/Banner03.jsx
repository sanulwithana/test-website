import React from 'react';

import { Autoplay, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';

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
                            effect='fade'
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false
                            }}
                            className="slider-home"
                            loop={true}
                        >
                            {data.map((idx, index) => (
                                <SwiperSlide key={idx.title}>
                                    <div className="banner-item">
                                        <div className="banner-content">
                                            <h1 className="heading">{idx.title}</h1>
                                            <p className="sub-heading">{idx.subtext}</p>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src={idx.image}
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