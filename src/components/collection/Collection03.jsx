import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import client from '../../services/client'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Loading from '../loader/loader';

Collection03.propTypes = {
    data: PropTypes.array,
};

export function getTimeDifference(publishDate) {
    const currentDate = new Date();
    const publishDateObj = new Date(publishDate);

    const timeDifference = currentDate - publishDateObj;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(monthsDifference / 12);

    if (yearsDifference >= 1) {
        return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
    } else if (monthsDifference >= 1) {
        return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference >= 1) {
        return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else {
        return 'Today';
    }
}


function truncateBodyToThreeLines(body, maxLength = 120) {
    let currentLength = 0;
    let truncatedText = [];

    for (let block of body) {
        if (currentLength >= maxLength) {
            break;
        }

        if (block._type === 'block' && block.style === 'normal') {
            const text = block.children[0].text.trim();

            if (currentLength + text.length <= maxLength) {
                truncatedText.push(text);
                currentLength += text.length;
            } else {
                const availableChars = maxLength - currentLength;
                truncatedText.push(text.substring(0, availableChars) + '.....');
                break;
            }
        }
    }

    return truncatedText.join(' ');
}

function Collection03(props) {
    const { data } = props;
    console.log("helpme >>", data)
    // const [signaturePost, setSignaturePost] = useState(null);



    if (data == null) {
        return (<Loading />);
    };

    return (
        <section className="tf-collection-ss">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12 wow fadeInUp">

                        <Swiper
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}

                            modules={[Autoplay, Navigation]}
                            className="collection-1 visible"
                        >

                            {
                                data.map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="slider-item" style={{ backgroundColor: 'rgba(29, 35, 40, 0.2)', padding: '2rem' }}>
                                            <Link to={"/blog/" + idx.slug.current} key={idx.slug.current}>
                                                <div className="tf-product">
                                                    <div className="image">
                                                        <img src={idx.mainImage.asset.url} alt="RACIIT" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <article className="tf-blog-item" style={{ backgroundColor: 'rgba(29, 35, 40, 0.2)', paddingLeft: '1rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
                                            <h4 className="title" style={{ color: '#FFFFFF' }}><Link to={"/blog"} style={{ color: '#FFFFFF' }}>{idx.title}</Link></h4>
                                            <p className="content" style={{ fontSize: '1.5rem', overflow: 'hidden', color: '#FFFFFF', lineHeight: '1.5', maxHeight: '4.5rem', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', paddingRight: '2rem' }}>
                                                {truncateBodyToThreeLines(idx.body)}
                                            </p>
                                            <div className="meta" style={{ paddingLeft: '1.7rem', paddingTop: '1rem' }}>

                                                <span className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '1rem' }}>
                                                        <path d="M10 0C7.09223 0 4.72656 2.36566 4.72656 5.27344C4.72656 8.18121 7.09223 10.5469 10 10.5469C12.9078 10.5469 15.2734 8.18121 15.2734 5.27344C15.2734 2.36566 12.9078 0 10 0Z" fill="#ED3659" />
                                                        <path d="M16.5612 13.992C15.1174 12.5261 13.2035 11.7188 11.1719 11.7188H8.82812C6.79656 11.7188 4.88258 12.5261 3.43883 13.992C2.00215 15.4507 1.21094 17.3763 1.21094 19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141C18.7891 17.3763 17.9979 15.4507 16.5612 13.992Z" fill="#ED3659" />
                                                    </svg>

                                                    <p style={{ fontSize: '1.3rem', color: '#FFFFFF' }}>
                                                        {idx.author.name}
                                                    </p>
                                                </span>
                                            </div>

                                        </article>
                                    </SwiperSlide>



                                ))
                            }


                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection03;