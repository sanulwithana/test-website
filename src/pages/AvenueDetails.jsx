
import React , {useState,useEffect,useRef} from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import Button02 from '../components/button/Button02';
import { useParams } from 'react-router-dom';
import Loading from '../components/loader/loader';
import BlogItem from '../components/blogPost/BlogPost';



function AvenueDetails() {
    const { slug } = useParams();
    const [postData, setPostData] = useState([]);
    const [category, setCategory] = useState(null);
  
    const lastPublishedAtRef = useRef(null);
    const lastIdRef = useRef(null);
    
    
    useEffect(() => {
        // Fetch category details
        client
          .fetch(`*[_type == "category" && slug.current == "${slug}"] {
            title,
            description,
            "color": color.hex
          }`)
          .then((data) => {
            console.log('catogary >>>>>>',data);
            setCategory(data);
          })
          .catch(console.error);
    
        // Fetch posts related to the category
        client
          .fetch(`*[_type == "post" && references(*[_type == "category" && slug.current == "${slug}"]._id)]  | order(publishedAt desc, _id desc) [0...2]{
            _id,
            title,
            slug,
            publishedAt,
            "author": author->{
                name,
                slug,
            },
            body,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`, { slug })
          .then((data) => {

            if (data.length > 0) {
                lastPublishedAtRef.current = data[data.length - 1].publishedAt;
                lastIdRef.current = data[data.length - 1]._id;
                console.log("datafirs", data)
                setPostData(data);
            }
            // setPostData(data);
          })
          .catch(console.error);
      }, [slug]);
    
    
    async function fetchNextPage() {
        console.log(lastIdRef)
        if (!lastIdRef.current) {
            return [];
        }

    
        try {
            const data = await client.fetch(`
                *[_type == "post" && references(*[_type == "category" && slug.current == "${slug}"]._id) && (
                    publishedAt < $lastPublishedAt
                    || (publishedAt == $lastPublishedAt && _id < $lastId)
                )] 
                | order(publishedAt desc, _id desc) [0...1]{
                    _id,
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
            }else{
                console.log("dsadsadsa");
                lastIdRef.current = null;
            }
    
            return data;
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    }
    
    if(postData && category){
        return (
            <div>
    
                <PageTitle title={category[0].title} color={category[0].color} description={category[0].description} />
    
    
                <section className="tf-blog">
                    <div className="tf-container">
                        <div className="row">
                            {postData && 
                                postData.map((post,idx) => (
                                    <BlogItem post={post} key={idx}/>
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
    }else{
        return ( (<Loading/>));
    }

   
}

export default AvenueDetails;

