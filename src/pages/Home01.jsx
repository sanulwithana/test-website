import React, { useEffect, useState } from 'react';

import About1 from '../components/about/About1';
import client from '../services/client'
import Footer2 from '../components/footer/Footer2';
import Collection03 from '../components/collection/Collection03';
import Banner03 from '../components/banner/Banner03';
import Loading from '../components/loader/loader';

export const fetchHomeSettings = async () => {
  try {
    // Fetch all homeSettings documents
    const combinedQuery = `
{
  "posts": *[_type == "post" && showOnHome == true]{
    _id,
    "author": author->{
      name,
      slug,
    },
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
            },
  }[0...10],
  "homeSettings": *[_type == "homeSettings"] {
    "images": images[]{
      "image": image.asset->url,
      title,
      subtext
    },
    categories[]-> {
      title,
      description,
      "color": color.hex
    },
    "info": info[]{
      heading,
      count
    }
  }
}
`;
    const data = await client.fetch(combinedQuery);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching homeSettings:', error.message);
    return {};
  }
};

function Home01(props) {
  const [imageSlider, setimageSlider] = useState(null)
  const [stats, setstats] = useState(null);
  const [catogaries, setcatogaries] = useState(null);
  const [featuredPosts, setfeaturedPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      fetchHomeSettings().then((data) => {
        const { homeSettings, posts } = data;
        setstats(homeSettings[0].info)
        setimageSlider(homeSettings[0].images)
        setcatogaries(homeSettings[0].categories);
        setfeaturedPosts(posts);
      })
      // console.log(pdfReport.reportFile);
    };
    fetchData();



  }, [])

  if (imageSlider === null || catogaries === null || stats === null) {
    return (< Loading />);
  }

  return (
    <div className="home-1">
      <Banner03 data={imageSlider} />
      {/* <Banner01 data={dataBanner} /> */}
      {/* <Logo /> */}
      <About1 data={catogaries} stats={stats} />
      <div className="tf-heading wow fadeInUp">
        <h2 className="heading" style={{fontWeight:"600"}}>OUR FEATURED PROJECTS</h2>
      </div>
      <div className='blog-container'>
      <Collection03 data={featuredPosts} />
      </div>
     

      {/* <Work data={dataWork} /> */}
      {/* <Faqs data={dataFaqs} /> */}
      {/* <Partner data={dataPartner} /> */}
      <Footer2 />
    </div>

  );
}

export default Home01;