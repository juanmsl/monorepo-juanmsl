import { useDimensions } from '@juanmsl/hooks';
import { HoverCard, PdfViewer } from '@juanmsl/ui';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { DocumentStyle } from './document.style';

import { DownloadCvButton, LoaderLogo } from '@components/ui';
import { ENV } from '@core/env';
import { GA } from '@core/ga';
import { useAsset } from '@hooks';

export const Document = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset(ENV.ASSET_ID_CV);
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  const handleClick = async () => {
    GA.event({
      action: 'User Download CV from CV image',
      category: GA.categories.CV_DOWNLOAD,
    });
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
