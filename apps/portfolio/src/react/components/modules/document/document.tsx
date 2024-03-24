import { DocumentStyle } from './document.style';
import { ENV } from '@core/env';
import { LoaderLogo } from '@components/ui';
import { Reveal } from '@components/animations';
import { useAsset } from '@hooks';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, HoverCard, PdfViewer, useDimensions } from '@juanmsl/ui';

export const Document = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset(ENV.ASSET_ID_CV);
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
            {t('resume:download-button')}
          </Button>
        </Reveal>
      </HoverCard>

      <section className='document-container' onClick={handleClick} ref={containerRef}>
        <HoverCard width='100%' threshold={2}>
          <PdfViewer
            key={width}
            fileUrl={resume?.url}
            loadingElement={<LoaderLogo className='loader' />}
            width={width}
          />
        </HoverCard>
      </section>
    </DocumentStyle>
  );
};
