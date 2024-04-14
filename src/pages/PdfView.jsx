import React,{useEffect,useState} from 'react';
import Footer2 from '../components/footer/Footer2';
import PageTitle from '../components/pagetitle/PageTitle';
import client from '../services/client'
import { useParams } from 'react-router-dom';
import Loading from '../components/loader/loader';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`



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
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess(numPages){
        setLoading(false);
        setNumPages(numPages);
      }

    useEffect(() => {  
        async function fetchData() { 
            getPdf(slug).then((data)=>{setpdfReport(data)})  
            console.log(pdfReport);
        };
            fetchData();
   
   
    
    }, [])

    if(pdfReport === null || loading){
        <Loading/>
    }
    
    return (
        <div className='home-2'>
           <PageTitle title={pdfReport.title} />
           <div>
      <Document file={pdfReport.reportFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
            <Footer2 />
            
        </div>
    );
}

export default PdfView;