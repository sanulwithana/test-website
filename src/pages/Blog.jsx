import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import { Link } from 'react-router-dom';
import Button02 from '../components/button/Button02';
import Loading from '../components/loader/loader';
import BlogItem from '../components/blogPost/BlogPost';


function Blog(props) {
    const [postData, setPostData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setloading] = useState(true);
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

    function callApi(){

    }


    useEffect(() => {
        client.fetch(`*[_type=="post"] | order(publishedAt desc, _id desc) [0...6]{
            _id,
            title,
            slug,
            publishedAt,
            body,
            "author": author->{
                name,
                slug,
            },
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
                setloading(false)
            })
            .catch(console.error)
    }, []); // Empty dependency array ensures this useEffect only runs once on mount



    async function fetchNextPage() {
        console.log(searchTerm);
        if (searchTerm) {
            return [];
        }
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
                    "author": author->{
                        name,
                        slug,
                    },
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
        if(!searchTerm || searchTerm === ""){
            return ;
        }
        const query = `*[_type == "post" && title match "${searchTerm}*"]{
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
    }`;

        console.log(searchTerm);
        try {
            const response = await client.fetch(query);
            setPostData(response);
            console.log("serch response >>>>", response);
            // setSearchResults(response);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    if (loading) {
        return (<Loading />)
    }

    return (
        <div>

            <PageTitle title='EXPLORE' />


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
                    {(!loading && searchTerm !== null && postData.length === 0 ) ?( <p>No results found</p>): (  <div className="row">
                        {postData &&
                            postData.map((post, idx) => (
                                <BlogItem post={post} />
                            ))
                        }


                        <div className="col-md-12 ">
                            <div className="tf-pagination">
                                <div className="btn-slider wow fadeInUp" data-wow-delay="0.8s">
                                    <Button02 title='LOAD MORE' path={() => fetchNextPage()} />
                                </div>
                            </div>

                        </div>

                    </div>) }
                 
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




