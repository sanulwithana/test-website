import React,{useEffect,useState} from 'react';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import { useParams } from 'react-router-dom';
import Loading from '../components/loader/loader';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import styles for react-pdf

import './PDFviEW/styles.scss'; 
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();
  
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
     const [pdfReport, setpdfReport] = useState(null);
     const [numPages, setNumPages] = useState(0);
     const [pageNumber, setPageNumber] = useState(1);
     const [loading, setLoading] = useState(true);
 
    //  useEffect(() => {
    //      async function fetchData() {
    //          try {
    //              const data = await getPdf(slug);
    //              setpdfReport(data);
    //          } catch (error) {
    //              console.error('Error fetching PDF:', error);
    //          }
    //      }
    //      fetchData();
    //  }, [slug]);
 
     function onDocumentLoadSuccess({ numPages }) {
         setLoading(false);
         setNumPages(numPages);
     }
 
     const handlePageChange = (newPage) => {
         setPageNumber(newPage);
     };
 
    //  if (pdfReport === null) {
    //      return <Loading />;
    //  }
 
     return (
      <div className='home-2'>
      <div className='tf-container'>
          <p className='title'>
              Page {pageNumber} of {numPages}
          </p>
          <div className='pdf-container'>
              <Document file={'https://cdn.sanity.io/files/eeksv8lg/production/12ff9186e0ceb7c50ebb9418fb310137832359c5.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.apply(null, Array(numPages))
                      .map((x, i) => i + 1)
                      .map((page) => {
                          return (
                              <Page
                                  key={page}
                                  pageNumber={page}
                                  renderTextLayer={false}
                                  renderAnnotationLayer={false}
                                  width={600} // Optional: Set the width of the page
                              />
                          );
                      })}
              </Document>
          </div>
      </div>
      <Footer2 />
  </div>

     );
 }
 
 export default PdfView;
 