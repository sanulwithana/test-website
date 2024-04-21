import React, { memo, useState, useEffect } from 'react';
import Footer2 from '../components/footer/Footer2';
import client from '../services/client'
import { useParams } from 'react-router-dom';

import './PDFviEW/styles.scss';
import Icon from '../components/icon_svg/IconSvg';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import YouTubePlayer from 'react-player/youtube';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Loading from '../components/loader/loader';
import PageTitle from '../components/pagetitle/PageTitle';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // const scrollModePluginInstance = scrollModePlugin();
// const defaultLayoutPluginInstance = defaultLayoutPlugin();

export const getPdf = async (slug) => {
  const query = `*[_type == 'annualReport'  && slug.current == "${slug}"] {
        title,
        publishedAt,
        "reportFile": upload.file.asset->url,
        showReport,
        "youTube" :  youTubeAnnual.url,
        mainImage{
            asset->{
                    _id,
                    url
                },
                alt
                  }
      }`
  const pdfReport = await client.fetch(query);
  console.log('latest report >>>', pdfReport[0]);
  return pdfReport[0];
}

function PdfView(props) {
  const { slug } = useParams();
  const [pdfReport, setpdfReport] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageWidth);
        },
        onExitFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageWidth);
        },
      },
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPdf(slug);
        setpdfReport(data);

      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    }
    fetchData();
  }, [slug]);


  if (pdfReport === null) {
    return <Loading />;
  }

  return (
    <div className='home-2'>
      <PageTitle title={pdfReport.title} />
      <div className='tf-container' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(29, 35, 40, 0.2)',
        height: '100vh',
        marginTop:"10rem"
      }}>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className='viewer-container' style={{
            height: '100%',
            width: '100%',
            overflow: 'auto',
          }}>
            <Viewer
              fileUrl={pdfReport.reportFile}
              plugins={[
                defaultLayoutPluginInstance,
              ]}
            />
          </div>
        </Worker>
      </div>
      {pdfReport.youTube ? (
        <div
          className='container'
          style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Added elevation
            // margin: '7rem 0', // Added margin top and bottom
          }}
        >
          <YouTubePlayer
            url={pdfReport.youTube}
            width={'80%'}
            height={"70%"}
            style={{
              display: 'block',
              position: 'absolute',
              alignContent:"center",
              justifyContent: 'center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      ) : (<div style={{ margin: "10rem" }}></div>)}
      <Footer2 />
    </div>


  );
}

export default memo(PdfView);

//      <Document file={'https://cdn.sanity.io/files/eeksv8lg/production/12ff9186e0ceb7c50ebb9418fb310137832359c5.pdf'}