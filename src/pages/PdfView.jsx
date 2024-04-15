import React,{useEffect,useState} from 'react';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import { useParams } from 'react-router-dom';
import Loading from '../components/loader/loader';
import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    const [loading, setLoading] = useState(false);

    function onDocumentLoadSuccess(numPages){
        setLoading(false);
        setNumPages(numPages);
      }

    useEffect(() => {  
        async function fetchData() { 
            getPdf(slug).then((data)=>{setpdfReport(data)})  
            // console.log(pdfReport.reportFile);
        };
            fetchData();
   
   
    
    }, [])

    if(pdfReport === null || loading){
      return( <Loading/>); 
    }
    
    return (
        <div className='home-2'>
           {/* <PageTitle title={pdfReport.title} /> */}
           <div className='container'>
      <Document file={pdfReport.reportFile} onLoadSuccess={onDocumentLoadSuccess} style={{width: '100vw', height: 'auto'}}>
        <Page pageIndex={0} />
      </Document>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
            <Footer2 />
            
        </div>
    );
}

export default PdfView;