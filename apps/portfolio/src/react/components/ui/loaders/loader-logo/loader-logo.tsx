import { LoaderLogoStyle } from './loader-logo.style';
import { Icon, Typography } from '@juanmsl/ui';

export const LoaderLogo = () => {
  return (
    <LoaderLogoStyle>
      <img loading='lazy' src='/assets/images/logo.png' alt='logo' />
      <Icon name='spinner' className='loader-icon' />
      <Typography variant='body' weight='bold'>
        Loading ...
      </Typography>
    </LoaderLogoStyle>
  );
};
