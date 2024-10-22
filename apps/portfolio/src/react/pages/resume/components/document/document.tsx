import { useDimensions } from '@juanmsl/hooks';
import { PdfViewer } from '@juanmsl/pdf-viewer';
import { HoverCard } from '@juanmsl/ui';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { DocumentStyle } from './document.style';

import { DownloadCvButton, LoaderLogo } from '@components/ui';
import { ENV } from '@core/env';
import { useAsset } from '@hooks';

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
      <DownloadCvButton>{t('resume:download-button')}</DownloadCvButton>

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
