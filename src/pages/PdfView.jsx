import React,{useEffect,useState} from 'react';
import Footer2 from '../components/footer/Footer2';
import PageTitle from '../components/pagetitle/PageTitle';
import client from '../services/client'
import { useParams } from 'react-router-dom';
import Loading from '../components/loader/loader';

export const getPdf = async (slug) => {
    const query = `*[_type == 'annualReport'  && slug.current == "${slug}"] {
        title,
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
      }`
     const pdfReport = await client.fetch(query);
     console.log('latest report >>>',pdfReport);
     return pdfReport[0];
 }

function PdfView(props) {
    const { slug } = useParams();
    const [pdfReport, setpdfReport] = useState(null)

    useEffect(() => {  
        async function fetchData() { 
            getPdf(slug).then((data)=>{setpdfReport(data)})  
            console.log(pdfReport);
        };
            fetchData();
   
   
    
    }, [])

    if(pdfReport === null){
        <Loading/>
    }
    
    return (
        <div className='home-2'>
           <PageTitle title={pdfReport.title} />
           <div>
            
           </div>
            <Footer2 />
            
        </div>
    );
}

export default PdfView;