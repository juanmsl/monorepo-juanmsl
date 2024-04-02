import { Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { AboutMeStyle } from './about-me.style';

import { Reveal } from '@components/animations';
import { ProfilePicture } from '@components/resources';
import { DownloadCvButton, SectionTitle } from '@components/ui';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutMeStyle>
        <section className='left'>
          <ProfilePicture />
        </section>
        <section className='right'>
          <Reveal delay={100}>
            <SectionTitle>{t('home:aboutMe.title')}</SectionTitle>
          </Reveal>
          <Reveal delay={200}>
            <Typography variant='header4'>{t('home:aboutMe.subtitle1')}</Typography>
          </Reveal>
          <Reveal delay={300}>
            <Typography variant='body'>{t('home:aboutMe.text1')}</Typography>
          </Reveal>
          <Reveal delay={400}>
            <Typography variant='body'>{t('home:aboutMe.text2')}</Typography>
          </Reveal>
          <Reveal delay={500}>
            <Typography variant='header4'>{t('home:aboutMe.subtitle2')}</Typography>
          </Reveal>
          <Reveal delay={600}>
            <Typography variant='body'>{t('home:aboutMe.text3')}</Typography>
          </Reveal>

          <section className='button-ctas'>
            <DownloadCvButton>{t('home:aboutMe.button1')}</DownloadCvButton>
          </section>
        </section>
      </AboutMeStyle>
    </>
  );
};
