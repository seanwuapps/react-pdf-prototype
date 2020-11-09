import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = (properties) => {
    const { numPages } = properties;
    setNumPages(numPages);
    // console.log({ test: document.querySelector('.react-pdf__Page__canvas') });
    // const pageHeight = document.querySelector('.react-pdf__Page__canvas').clientHeight;
    // console.log({ pageHeight });
  };

  const { pdf } = props;

  return (
    <div>
      <div className="controlBar">Total pages: {numPages}</div>
      <Document
        className="pdfviewer"
        file={pdf}
        options={{
          workerSrc: '/pdf.worker.js'
        }}
        onLoadSuccess={onDocumentLoadSuccess}
        externalLinkTarget="_blank"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
        ))}
      </Document>
    </div>
  );
}
