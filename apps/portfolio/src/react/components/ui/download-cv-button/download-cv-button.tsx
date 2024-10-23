import { Button, HoverCard } from 'juanmsl/ui';

import { ENV } from '@core/env';
import { useAsset } from '@hooks';

type DownloadCvButtonProps = {
  children: string;
  width?: 'fit-content' | '100%';
};

export const DownloadCvButton = ({ children, width }: DownloadCvButtonProps) => {
  const { data: resume } = useAsset(ENV.ASSET_ID_CV);

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

  return (
    <HoverCard translationZ={15} width={width}>
      <Button
        color='primary'
        width={width === 'fit-content' ? 'fit' : 'full'}
        leftIcon='download'
        onClick={handleClick}
      >
        {children}
      </Button>
    </HoverCard>
  );
};
