// src/components/PDFViewer.js
import React from 'react';
import { Viewer } from '@react-pdf-viewer/core'; // Sử dụng thư viện PDF Viewer
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ fileUrl }) => (
    <div style={{ height: '100vh' }}>
        <Viewer fileUrl={fileUrl} />
    </div>
);

export default PDFViewer;
