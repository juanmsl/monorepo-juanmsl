import { Line, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyle>
      <section className='layout-content'>
        <Line orientation='horizontal' />

        <Typography variant='small' className='copyright' as='p'>
          {t('footer:copyright', { version: '1.0.0' })}
        </Typography>
      </section>
    </FooterStyle>
  );
};
