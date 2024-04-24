import { Image, Line, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyle>
      <section className='layout-content'>
        <Image className='footer-logo' src='/assets/images/logo.png' alt='logo' />

        <Typography variant='header3' className='name'>
          Juan Sánchez
        </Typography>

        <section className='footer-content'></section>

        <section className='columns'></section>

        <Line orientation='horizontal' />

        <Typography variant='small' className='copyright' as='p'>
          {t('footer:copyright', { version: '1.0.0' })}
        </Typography>
      </section>
    </FooterStyle>
  );
};
