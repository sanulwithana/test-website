import React,{useEffect,useState} from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataBanner from '../assets/fake-data/data-banner';
import dataCollection from '../assets/fake-data/data-collection';

import About1 from '../components/about/About1';
import client from '../services/client'
import Footer2 from '../components/footer/Footer2';
import Collection03 from '../components/collection/Collection03';
import Banner03 from '../components/banner/Banner03';
import Loading from '../components/loader/loader';

export const fetchHomeSettings = async () => {
    try {
      // Fetch all homeSettings documents
      const data = await client.fetch(`
      *[_type == "homeSettings"] {
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
      `);
  
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
   
      useEffect(() => {
        async function fetchData() { 
            fetchHomeSettings().then((data)=>{
                setstats(data[0].info)
                setimageSlider(data[0].images)
                setcatogaries(data[0].categories);
            })  
            // console.log(pdfReport.reportFile);
        };
            fetchData();
            // [
            //     {
            //         "images": [
            //             {
            //                 "image": "https://cdn.sanity.io/images/eeksv8lg/production/13ead9d818bd08e05c74aeaa2ecc3e4344a7fc74-2048x1052.jpg",
            //                 "title": "Hot dog showdown",
            //                 "subtext": "hello hjadaskjdkjasd jksajksajdjasj jkbsdkj"
            //             },
            //             {
            //                 "image": "https://cdn.sanity.io/images/eeksv8lg/production/57dab5e4ab563d07037e90889eceb6baab5d0644-2048x1365.jpg",
            //                 "title": "PFL",
            //                 "subtext": "bkjsjbf jkfbsajf bkjabskjfbaskjbf  asjbfdaksjbfkjasb  bfaskjfb"
            //             },
            //             {
            //                 "image": "https://cdn.sanity.io/images/eeksv8lg/production/aa709d15ffff2055a1b00ffb7441ed09902c8735-417x278.jpg",
            //                 "title": "Ground Rules",
            //                 "subtext": "sfkj akjhdakjsh jashkjdasfjk jashkjfashjfk "
            //             }
            //         ],
            //         "categories": [
            //             {
            //                 "title": "Club Service ",
            //                 "description": "Descriotn for clb ssss",
            //                 "color": "#e36224"
            //             },
            //             {
            //                 "title": "Community Service",
            //                 "description": "description",
            //                 "color": "#e32824"
            //             },
            //             {
            //                 "title": "Professional Development ",
            //                 "description": "Descriponsafdsfd",
            //                 "color": "#e32442"
            //             },
            //             {
            //                 "title": "International Service",
            //                 "description": "description",
            //                 "color": "#e46aec"
            //             },
            //             {
            //                 "title": "Public Relation",
            //                 "description": "dESCRIPTION",
            //                 "color": "#cf24e3"
            //             },
            //             {
            //                 "title": "Sport",
            //                 "description": "Description for sports",
            //                 "color": "#24e343"
            //             },
            //             {
            //                 "title": "Digital Communication",
            //                 "description": "description of",
            //                 "color": "#2c99ef"
            //             }
            //         ],
            //         "info": [
            //             {
            //                 "heading": "Projects Completed",
            //                 "count": 1000
            //             },
            //             {
            //                 "heading": "Memberships",
            //                 "count": 1000
            //             }
            //         ]
            //     }
            // ]
       
      }, [])
      
    if(imageSlider === null || catogaries === null || stats === null){
        return ( < Loading/>);
    }

    return (
        <div className="home-1">
          <Banner03 data={imageSlider} />
            {/* <Banner01 data={dataBanner} /> */}
            {/* <Logo /> */}
            <About1 data={catogaries} stats={stats} />
            <div className="tf-heading wow fadeInUp">
                <h2 className="heading">OUR FEATURED PROJECTS</h2>
            </div>
            <Collection03 data={dataCollection} />
           
            {/* <Work data={dataWork} /> */}
            {/* <Faqs data={dataFaqs} /> */}
            {/* <Partner data={dataPartner} /> */}
           <Footer2 />
        </div>

    );
}

export default Home01;