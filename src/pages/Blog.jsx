import React,{useState,useEffect,useRef} from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer';
import client from '../services/client'
import data from '../assets/fake-data/data-blog'
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import Button02 from '../components/button/Button02';


function Blog(props) {
    const [postData, setPostData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    const lastPublishedAtRef = useRef(null);
    const lastIdRef = useRef(null);
    
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
    
    
    
    
    useEffect(() => {
        client.fetch(`*[_type=="post"] | order(publishedAt desc) [0...6]{
            _id,
            title,
            slug,
            publishedAt,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => {
          
            if (data.length > 0) {
                lastPublishedAtRef.current = data[data.length - 1].publishedAt;
                lastIdRef.current = data[data.length - 1]._id;
                console.log("datafirs", data)
                setPostData(data);
            }
        })
        .catch(console.error);
    }, []); // Empty dependency array ensures this useEffect only runs once on mount

    
    
    async function fetchNextPage() {
        console.log(lastIdRef)
        if (!lastIdRef.current) {
            return [];
        }
    
        try {
            const data = await client.fetch(`
                *[_type == "post" && (
                    publishedAt < $lastPublishedAt
                    || (publishedAt == $lastPublishedAt && _id < $lastId)
                )] 
                | order(publishedAt desc, _id desc) [0...3]{
                    title,
                    slug,
                    body,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`, 
                { lastPublishedAt: lastPublishedAtRef.current, lastId: lastIdRef.current }
            );
    
            if (data.length > 0) {
                lastPublishedAtRef.current = data[data.length - 1].publishedAt;
                lastIdRef.current = data[data.length - 1]._id;
                setPostData(prev => [...prev, ...data]);
            } else {
                lastIdRef.current = null;
            }
    
            return data;
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    }
    

const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const query = `*[_type == "post" && title match "${searchTerm}*"]{
        title,
        slug,
        publishedAt,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`;
        console.log(searchTerm);
        try {
            const response =  await client.fetch(query);
            setPostData(response);
            console.log("serch response >>>>",response);
            // setSearchResults(response);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
};

    return (
        <div>

            <PageTitle title='Explore' />


            <section className="tf-blog">
                <div className="tf-container">
        <div className="widget widget-search" style={{ marginBottom: '4rem' }}>
        <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Blog....." 
                    value={searchTerm}
                    onChange={handleInputChange}
                    required="" 
                />
                <Link to className="btn-search"><i className="icon-fl-search-filled"></i></Link>
                                    </form>
                                </div>
                    <div className="row">
                        {postData && 
                            postData.map((post,idx) => (
                                <div key={idx} className="col-xl-4 col-lg-6 col-md-6">
                                    <article className="tf-blog-item">
                                        <div className="image">
                                            <Link to={"/blog/" + post.slug.current} key={post.slug.current}><img src={post.mainImage.asset.url} alt={post.mainImage.alt} /></Link>
                                            {/* <Link to="#" className="category">Club Service</Link> */}
                                        </div>
                                      
                
                                        <h3 className="title"><Link to={"/blog/" + post.slug.current} key={post.slug.current}>{post.title}</Link></h3>
                                      <p className="content" style={{ fontSize: '1.5rem', overflow: 'hidden' }}>
                                        {truncateBodyToThreeLines(post.body)}
                                      </p>
                                      
                                      <div className="meta">
                                            <span className="admin"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0C7.09223 0 4.72656 2.36566 4.72656 5.27344C4.72656 8.18121 7.09223 10.5469 10 10.5469C12.9078 10.5469 15.2734 8.18121 15.2734 5.27344C15.2734 2.36566 12.9078 0 10 0Z" fill="#ED3659"/>
                                                <path d="M16.5612 13.992C15.1174 12.5261 13.2035 11.7188 11.1719 11.7188H8.82812C6.79656 11.7188 4.88258 12.5261 3.43883 13.992C2.00215 15.4507 1.21094 17.3763 1.21094 19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141C18.7891 17.3763 17.9979 15.4507 16.5612 13.992Z" fill="#ED3659"/>
                                                </svg>
                                                <p>James Charter james harder</p>
                                              </span>
                                            <span className="date">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66602 7.50033C1.66602 6.25417 1.66602 5.63109 1.93396 5.16699C2.1095 4.86295 2.36198 4.61048 2.66602 4.43494C3.13012 4.16699 3.75319 4.16699 4.99935 4.16699H14.9993C16.2455 4.16699 16.8686 4.16699 17.3327 4.43494C17.6367 4.61048 17.8892 4.86295 18.0647 5.16699C18.3327 5.63109 18.3327 6.25417 18.3327 7.50033C18.3327 7.81186 18.3327 7.96763 18.2657 8.08366C18.2218 8.15967 18.1587 8.22279 18.0827 8.26667C17.9667 8.33366 17.8109 8.33366 17.4993 8.33366H2.49935C2.18781 8.33366 2.03204 8.33366 1.91602 8.26667C1.84001 8.22279 1.77689 8.15967 1.733 8.08366C1.66602 7.96763 1.66602 7.81186 1.66602 7.50033Z" fill="#21E786"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.2518 17.7475C1.66602 17.1618 1.66602 16.219 1.66602 14.3333V11C1.66602 10.5286 1.66602 10.2929 1.81246 10.1464C1.95891 10 2.19461 10 2.66601 10H17.3327C17.8041 10 18.0398 10 18.1862 10.1464C18.3327 10.2929 18.3327 10.5286 18.3327 11V14.3333C18.3327 16.219 18.3327 17.1618 17.7469 17.7475C17.1611 18.3333 16.2183 18.3333 14.3327 18.3333H5.66602C3.7804 18.3333 2.83759 18.3333 2.2518 17.7475ZM6.66602 13.1667C6.11373 13.1667 5.66602 13.6144 5.66602 14.1667C5.66602 14.719 6.11373 15.1667 6.66602 15.1667H13.3327C13.885 15.1667 14.3327 14.719 14.3327 14.1667C14.3327 13.6144 13.885 13.1667 13.3327 13.1667H6.66602Z" fill="#21E786"/>
                                                <path d="M5.83398 2.5L5.83398 5" stroke="#ED3659" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M14.166 2.5L14.166 5" stroke="#ED3659" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                               {post.publishedAt}</span>
                                             
                                        </div>

                                        <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className="btn-readmore">READ MORE <i className="fal fa-long-arrow-right"></i></Link>

                                        
                                        
                                    </article>
                                </div>
                            ))
                        }

                        
                        <div className="col-md-12 ">
                            <div className="tf-pagination">
                            <div className="btn-slider wow fadeInUp" data-wow-delay="0.8s">
                                        <Button02 title='LOAD MORE' path={()=>fetchNextPage()} />
                                    </div>
                            </div>
                            
                        </div>                 
                        
                    </div>
                </div>
            </section>

            <Footer2 />

            
        </div>
    );
}

export default Blog;


// Single blog post 

// title
// description 
// date (minimfied)
// author
// catogary
// image
// slugs

// Detailed Blog 

// title
// description 
// date (minimfied)
// author
// catogary (need a section of that on the side )
// image
// slugs

// api call to get first 4 recent posts 
// api call to get the catogaries plus the sligs




