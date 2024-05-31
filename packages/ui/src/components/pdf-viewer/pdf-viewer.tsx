import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.js', import.meta.url).toString();

type PdfViewerProps = {
  fileUrl: string;
  onLoad?: () => void;
  page?: number;
  loadingElement?: React.ReactNode;
  width?: number;
};

export const PdfViewer = ({ fileUrl, onLoad, page = 1, width, loadingElement }: PdfViewerProps) => {
  return (
    <Document file={fileUrl} loading={loadingElement} onLoadSuccess={onLoad}>
      <Page pageNumber={page} width={width} />
    </Document>
  );
};
