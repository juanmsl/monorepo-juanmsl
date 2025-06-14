import { Icon, Image, Line, SectionLayout, Typography } from 'polpo/ui';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FooterStyle } from './footer.style';

import { FooterTop } from '@components/resources';
import { Particles, SocialIcons } from '@components/ui';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyle>
      <FooterTop />
      <Particles className='particles-canvas' />
      <SectionLayout contentClassName='footer-layout-content' fitHeightContent>
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
          <Trans
            t={t}
            i18nKey='footer:copyright'
            components={[
              <Link className='footer-link' key={0} target='_blank' rel='nooppener' to='https://react.dev/' />,
              <Link
                className='footer-link'
                key={1}
                target='_blank'
                rel='nooppener'
                to='https://styled-components.com/'
              />,
              <Link className='footer-link' key={2} target='_blank' rel='nooppener' to='http://motion.dev/' />,
              <Link className='footer-link' key={3} target='_blank' rel='nooppener' to='https://vercel.com/' />,
              <span className='footer-heart' key={4} />,
            ]}
          ></Trans>
        </Typography>
      </SectionLayout>
    </FooterStyle>
  );
};
