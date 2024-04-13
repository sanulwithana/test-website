import React ,{useState} from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

About1.propTypes = {
    data : PropTypes.array,
};

function About1(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: 'WHO WE ARE & WHAT WE DO',
            desc: 'We are part of an international organization of young professionals and students ages 18 to 30 that are committed to service and leadership in their communities and abroad. Established in 2010 under the Rotary Club of PanColombo, Rotaract Club of IIT is a club united with global network of young people who are changing the world with clubs in over 160 countries that have committed their leadership skills to community service.'

        }
    )


    const [dataCounter] = useState([
        {
            id: 1,
            title: 'Total Membership',
            number: '1000',
        },
        {
            id: 2,
            title: 'Projects Completed',
            number: '100',
        },
    ])
    return (
        <section className="tf-section tf-about">
                <div className="tf-container">
                    <div className="row ">   
                        <div className="col-md-12 ">
                            <div className="icon">
                                <svg width="208" height="208" viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_2337_5328)">
                                    <path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_f_2337_5328" x="0" y="0" width="208" height="208" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5328"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_2337_5328" x1="196" y1="104" x2="12" y2="104" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="var(--primary-color35)"/>
                                    <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                           <div className="icon-2">
                            <svg width="302" height="302" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2337_5282)">
                                <path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5282"/>
                                </filter>
                                <linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="var(--primary-color35)"/>
                                <stop offset="1" stopColor="var(--primary-color35)" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                           </div>
                                       
                            <div className="tf-heading wow fadeInUp">
                                <h2 className="heading">{dataBlock.heading}</h2>
                                <p className="sub-heading">{dataBlock.desc}</p>
                            </div>

                            <div className="counter-wrap wow fadeInUp" data-wow-delay="0.2s">
                                {
                                    dataCounter.map(idx => (
                                        <div key={idx.id} className="tf-counter ">
                                            <h6>{idx.title}</h6>
                                            <div className="content">
                                                <span className="counter-number" data-to="1000" data-speed="2000" >{idx.number}</span>+
                                            </div>
                                        </div>  
                                    ))
                                }
                               
                            </div>

                        </div>
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" style={{marginBottom: '2rem'}}>
                                <div className="tf-step wow fadeInUp" data-wow-delay="0.2s" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div className="step-title" style={{ marginTop: '20px' }}>
                                        <div className="sub-number" style={{ color: idx.color }}>
                                            0{idx.id}
                                        </div>
                                        <h3 style={{ lineHeight: '1.2', flex: '1' }}>{idx.title}</h3>
                                    </div>
                                    <p style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>{idx.text}</p>
                                </div>
                            </div>
                            
                            
                            ) )
                        }
                        
                    </div>
                </div>
            </section>
    );
}

export default About1;