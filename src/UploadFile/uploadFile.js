import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // Để sử dụng Web Worker
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const UploadFile = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=10SYzfJsJwTBI2weBf77TW1Xh2mWwjmxm';
    return (
        <div style={{ height: '750px', border: '1px solid #ccc' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <Viewer fileUrl={proxyUrl + pdfUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
};

export default UploadFile;
