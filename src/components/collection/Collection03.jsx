import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import client from '../../services/client'
import { Navigation , Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Loading from '../loader/loader';

Collection03.propTypes = {
    data : PropTypes.array,
};

export const getLatestPost = async () => {
    const query = `*[_type == "post" && showOnHome == true]{
         _id,
         title,
         slug,
         mainImage{
             asset->{
               _id,
               url
             }
           },
       }[0...15]`
     const latestPosts = await client.fetch(query);
     console.log('latest posts >>>',latestPosts);
     return latestPosts;
 }

function Collection03(props) {
    const {data} = props;
    const [signaturePost, setSignaturePost] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        async function fetchData() { 
              
        getLatestPost().then((data)=>{setSignaturePost(data)})  
        setloading(false);
    };
        fetchData();
    }, []);

    if(loading || signaturePost === null){
        return(<Loading/>);
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
                                    signaturePost.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="slider-item">
                                                <Link to={"/blog/" + idx.slug.current} key={idx.slug.current}>
                                                <div className="tf-product ">
                                                    <div className="image">
                                                        <img src={idx.mainImage.asset.url} alt="RACIIT" />
                                                    </div>
                                                    {/* <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6> */}
                                                </div>
                                                </Link>
                                              
                                            </div>
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