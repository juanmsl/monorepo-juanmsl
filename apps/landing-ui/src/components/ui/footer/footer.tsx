'use client';

import { Typography } from 'juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <FooterStyle>
      <Typography variant='small' className='copyright' as='p'>
        {t('copyright', { version: '1.0.0' })}
      </Typography>
    </FooterStyle>
  );
};
