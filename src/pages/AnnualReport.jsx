import React,{useEffect,useState} from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer/Footer2';
import ARItem from '../components/annual_report/AR_item';
import client from '../services/client'
import Loading from '../components/loader/loader';

function AnnualReport(props) {
    const [annualRep, setAnnualRep] = useState(null);
    useEffect(() => {
        client.fetch(`*[_type == 'annualReport' && showReport == true ] {
            title,
            slug,
            publishedAt,
            "reportFile": upload.file.asset->url,
            showReport,
            mainImage{
                asset->{
                        _id,
                        url
                    },
                    alt
                      }
          }`)
        .then((data) => {
            setAnnualRep(data);
            console.log(data);
        })
        .catch(console.error)
    }, []); 


    if(annualRep === null){
        return(<Loading/>);
    }
    return (
        <div className='page-about home-1'>
            <PageTitle title='Annual Report' />
            {annualRep.map((item,idx) => (  
                <ARItem
                title= {item.title}
                reportFile ={item.reportFile}
                slug={item.slug.current}
                image={item.mainImage.asset.url}
                />
              ))}
            <Footer2 />

            
        </div>
    );
}

export default AnnualReport;
