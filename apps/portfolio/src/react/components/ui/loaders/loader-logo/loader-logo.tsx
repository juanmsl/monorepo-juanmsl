import { LoaderLogoStyle } from './loader-logo.style';
import { Icon, Image, Typography } from '@juanmsl/ui';

type LoaderLogoProps = {
  className?: string;
};

export const LoaderLogo = ({ className }: LoaderLogoProps) => {
  return (
    <LoaderLogoStyle className={className}>
      <Image src='/assets/images/logo.png' alt='logo' />
      <Icon name='spinner' className='loader-icon' />
      <Typography variant='body' weight='bold'>
        Loading ...
      </Typography>
    </LoaderLogoStyle>
  );
};
