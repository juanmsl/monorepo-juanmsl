import { Button, HoverCard } from '@juanmsl/ui';
import { useLocation } from 'react-router-dom';

import { Reveal } from '@components/animations';
import { ENV } from '@core/env';
import { GA } from '@core/ga';
import { useAsset } from '@hooks';

type DownloadCvButtonProps = {
  children: string;
  width?: 'fit-content' | '100%';
};

export const DownloadCvButton = ({ children, width }: DownloadCvButtonProps) => {
  const { data: resume } = useAsset(ENV.ASSET_ID_CV);
  const location = useLocation();

  const handleClick = async () => {
    GA.event({
      action: 'User Download CV from button',
      category: GA.categories.CV_DOWNLOAD,
      label: location.pathname + location.search,
    });
    window.open(resume.url, '_blank');
  };

  return (
    <HoverCard translationZ={15} width={width}>
      <Reveal delay={700} width={width}>
        <Button width={width === 'fit-content' ? 'fit' : 'full'} leftIcon='download' onClick={handleClick}>
          {children}
        </Button>
      </Reveal>
    </HoverCard>
  );
};
