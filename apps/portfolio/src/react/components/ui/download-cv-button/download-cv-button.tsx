import { ENV } from '@core/env';
import { GA } from '@core/ga';
import { Reveal } from '@components/animations';
import { useAsset } from '@hooks';
import { useLocation } from 'react-router-dom';
import { Button, HoverCard } from '@juanmsl/ui';

type DownloadCvButtonProps = {
  children: string;
};

export const DownloadCvButton = ({ children }: DownloadCvButtonProps) => {
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
    <HoverCard translationZ={15}>
      <Reveal delay={700}>
        <Button leftIcon='download-cv' onClick={handleClick}>
          {children}
        </Button>
      </Reveal>
    </HoverCard>
  );
};
