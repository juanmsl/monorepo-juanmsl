import { AboutMeStyle } from './about-me.style';
import { ENV } from '@core/env';
import { ProfilePicture } from '@components/resources';
import { Reveal } from '@components/animations';
import { SectionTitle } from '@components/ui';
import { useAsset } from '@hooks';
import { useTranslation } from 'react-i18next';
import { Button, HoverCard, Typography } from '@juanmsl/ui';

export const AboutMe = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset(ENV.ASSET_ID_CV);

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

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
            <HoverCard translationZ={15}>
              <Reveal delay={700}>
                <Button leftIcon='download-cv' onClick={handleClick}>
                  {t('home:aboutMe.button1')}
                </Button>
              </Reveal>
            </HoverCard>

            <Reveal delay={800}>
              <Button leftIcon='linkedin' onClick={handleClick} variant='ghost'>
                {t('home:aboutMe.button2')}
              </Button>
            </Reveal>
          </section>
        </section>
      </AboutMeStyle>
    </>
  );
};
