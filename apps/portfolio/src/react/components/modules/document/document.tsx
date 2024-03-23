import { DocumentStyle } from './document.style';
import { LoaderLogo } from '@components/ui';
import { Reveal } from '@components/animations';
import { useAsset } from '@hooks';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, HoverCard, useDimensions } from '@juanmsl/ui';
import { Document as Doc, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.js', import.meta.url).toString();

export const Document = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset('2Sb2cM6MN8osN8kXMizuUd');
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

  return (
    <DocumentStyle>
      <HoverCard translationZ={15}>
        <Reveal delay={700}>
          <Button leftIcon='download-cv' onClick={handleClick}>
            {t('home:aboutMe.button1')}
          </Button>
        </Reveal>
      </HoverCard>

      <section className='document-container' onClick={handleClick} ref={containerRef}>
        <Doc file={resume?.url} key={width} loading={<LoaderLogo className='loader' />}>
          <Page pageNumber={1} width={width} />
        </Doc>
      </section>
    </DocumentStyle>
  );
};
