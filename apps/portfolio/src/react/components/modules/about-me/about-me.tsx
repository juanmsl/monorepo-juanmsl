import { Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { AboutMeStyle } from './about-me.style';

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
          <SectionTitle>{t('home:aboutMe.title')}</SectionTitle>
          <Typography variant='header4'>{t('home:aboutMe.subtitle1')}</Typography>
          <Typography variant='body'>{t('home:aboutMe.text1')}</Typography>
          <Typography variant='body'>{t('home:aboutMe.text2')}</Typography>
          <Typography variant='header4'>{t('home:aboutMe.subtitle2')}</Typography>
          <Typography variant='body'>{t('home:aboutMe.text3')}</Typography>

          <section className='button-ctas'>
            <DownloadCvButton>{t('home:aboutMe.button1')}</DownloadCvButton>
          </section>
        </section>
      </AboutMeStyle>
    </>
  );
};
