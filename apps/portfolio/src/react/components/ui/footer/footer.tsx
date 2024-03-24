import { FooterStyle } from './footer.style';
import { FooterTop } from '@components/resources';
import { SocialIcons } from '@components/ui';
import { useTranslation } from 'react-i18next';
import { Icon, Image, Line, Typography } from '@juanmsl/ui';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyle>
      <FooterTop />
      <section className='layout-content'>
        <Image className='footer-logo' src='/assets/images/logo.png' alt='logo' />

        <Typography variant='header3' className='name'>
          {t('common:shortName')}
        </Typography>

        <section className='footer-content'></section>

        <section className='columns'>
          <section className='location'>
            <Icon name='pin-location' />
            <Typography variant='label'>{t('common:location')}</Typography>
          </section>

          <SocialIcons position='top' gap='10px' />
        </section>

        <Line orientation='horizontal' />

        <Typography variant='small' className='copyright' as='p'>
          {t('footer:copyright', { version: '3.0.0' })}
        </Typography>
      </section>
    </FooterStyle>
  );
};
