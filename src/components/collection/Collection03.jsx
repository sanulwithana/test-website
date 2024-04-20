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
                                            <div className="meta" style={{paddingLeft: '1.7rem',paddingTop:'1rem'}}>
                                                <span className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '1rem' }}>
                                                        <path d="M1.66602 7.50033C1.66602 6.25417 1.66602 5.63109 1.93396 5.16699C2.1095 4.86295 2.36198 4.61048 2.66602 4.43494C3.13012 4.16699 3.75319 4.16699 4.99935 4.16699H14.9993C16.2455 4.16699 16.8686 4.16699 17.3327 4.43494C17.6367 4.61048 17.8892 4.86295 18.0647 5.16699C18.3327 5.63109 18.3327 6.25417 18.3327 7.50033C18.3327 7.81186 18.3327 7.96763 18.2657 8.08366C18.2218 8.15967 18.1587 8.22279 18.0827 8.26667C17.9667 8.33366 17.8109 8.33366 17.4993 8.33366H2.49935C2.18781 8.33366 2.03204 8.33366 1.91602 8.26667C1.84001 8.22279 1.77689 8.15967 1.733 8.08366C1.66602 7.96763 1.66602 7.81186 1.66602 7.50033Z" fill="#ED3659" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.2518 17.7475C1.66602 17.1618 1.66602 16.219 1.66602 14.3333V11C1.66602 10.5286 1.66602 10.2929 1.81246 10.1464C1.95891 10 2.19461 10 2.66601 10H17.3327C17.8041 10 18.0398 10 18.1862 10.1464C18.3327 10.2929 18.3327 10.5286 18.3327 11V14.3333C18.3327 16.219 18.3327 17.1618 17.7469 17.7475C17.1611 18.3333 16.2183 18.3333 14.3327 18.3333H5.66602C3.7804 18.3333 2.83759 18.3333 2.2518 17.7475ZM6.66602 13.1667C6.11373 13.1667 5.66602 13.6144 5.66602 14.1667C5.66602 14.719 6.11373 15.1667 6.66602 15.1667H13.3327C13.885 15.1667 14.3327 14.719 14.3327 14.1667C14.3327 13.6144 13.885 13.1667 13.3327 13.1667H6.66602Z" fill="#ED3659" />
                                                        <path d="M5.83398 2.5L5.83398 5" stroke="#ED3659" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M14.166 2.5L14.166 5" stroke="#ED3659" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    <p style={{ fontSize: '1.7rem', color: '#FFFFFF' }}>
                                                        {getTimeDifference(idx.publishedAt)}
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