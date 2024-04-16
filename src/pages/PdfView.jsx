import React,{memo, useState} from 'react';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import { useParams } from 'react-router-dom';

import './PDFviEW/styles.scss'; 
import Icon from '../components/icon_svg/IconSvg';
import { Viewer, Worker,SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
// // const scrollModePluginInstance = scrollModePlugin();
// const defaultLayoutPluginInstance = defaultLayoutPlugin();

// export const getPdf = async (slug) => {
//     const query = `*[_type == 'annualReport'  && slug.current == "${slug}"] {
//         title,
//         publishedAt,
//         "reportFile": upload.file.asset->url,
//         showReport,
//         mainImage{
//             asset->{
//                     _id,
//                     url
//                 },
//                 alt
//                   }
//       }`
//      const pdfReport = await client.fetch(query);
//      console.log('latest report >>>',pdfReport);
//      return pdfReport[0];
//  }

 function PdfView(props) {
     const { slug } = useParams();
     const [pdfReport, setpdfReport] = useState(null);
     const [numPages, setNumPages] = useState(0);
     const [pageNumber, setPageNumber] = useState(1);
     const [loading, setLoading] = useState(true);

     const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                // Zoom to fit the screen after entering and exiting the full screen mode
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                },
            },
        },
    });
    
 
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
 
 
    //  if (pdfReport === null) {
    //      return <Loading />;
    //  }
 
     return (
      <div className='home-2'>

      <div className='tf-container' style={{   backgroundColor: 'rgba(29, 35, 40, 0.2)'}}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{
         
        // border: '1px solid rgba(0, 0, 0, 0.3)',
        // width: '50%',
        '@media (max-width: 768px)': {  // Adjust styles for mobile screens
            height: '90vh',
        },
        '@media (min-width: 769px)': {  // Adjust styles for desktop screens
            height: '60vh',
        },
        overflow: 'auto',
    }}>
            <Viewer
                defaultScale={1}  
                fileUrl={`https://cdn.sanity.io/files/eeksv8lg/production/12ff9186e0ceb7c50ebb9418fb310137832359c5.pdf`}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
      </div>
      <Footer2 />
  </div>

     );
 }
 
 export default memo(PdfView);
 
//      <Document file={'https://cdn.sanity.io/files/eeksv8lg/production/12ff9186e0ceb7c50ebb9418fb310137832359c5.pdf'}