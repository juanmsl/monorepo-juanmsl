import { ProfilePicture } from '@components/resources';
import { Reveal } from '@components/animations';
import { SectionTitle } from '@components/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutMeStyle, CharacteristicStyle, CharacteristicsStyle } from './about-me.style';
import { Button, HoverCard, Icon, IconNameT, Line, Typography } from '@juanmsl/ui';
import { useAsset, useGetCharacteristics } from '@hooks';

export const AboutMe = () => {
  const { t } = useTranslation();
  const { data = [] } = useGetCharacteristics();
  const { data: resume } = useAsset('2Sb2cM6MN8osN8kXMizuUd');

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

  const characteristics = useMemo(
    () =>
      data.map(({ title, icon }, key) => (
        <CharacteristicStyle key={key}>
          <HoverCard translationZ={15}>
            <Reveal delay={100 * key}>
              <div className="characteristic-container">
                <Icon name={icon as IconNameT} className="characteristic-icon" />
                <Line orientation="horizontal" className="characteristic-line" />
                <Typography variant="body" className="characteristic-title">
                  {title}
                </Typography>
              </div>
            </Reveal>
          </HoverCard>
        </CharacteristicStyle>
      )),
    [data],
  );

  return (
    <>
      <AboutMeStyle>
        <section className="left">
          <ProfilePicture />
        </section>
        <section className="right">
          <Reveal delay={100}>
            <SectionTitle>{t('home:aboutMe.title')}</SectionTitle>
          </Reveal>
          <Reveal delay={200}>
            <Typography variant="header4">{t('home:aboutMe.subtitle1')}</Typography>
          </Reveal>
          <Reveal delay={300}>
            <Typography variant="body">{t('home:aboutMe.text1')}</Typography>
          </Reveal>
          <Reveal delay={400}>
            <Typography variant="body">{t('home:aboutMe.text2')}</Typography>
          </Reveal>
          <Reveal delay={500}>
            <Typography variant="header4">{t('home:aboutMe.subtitle2')}</Typography>
          </Reveal>
          <Reveal delay={600}>
            <Typography variant="body">{t('home:aboutMe.text3')}</Typography>
          </Reveal>

          <div className="button-ctas">
            <HoverCard translationZ={15}>
              <Reveal delay={700}>
                <Button leftIcon="instagram" onClick={handleClick}>
                  {t('home:aboutMe.button1')}
                </Button>
              </Reveal>
            </HoverCard>

            <Reveal delay={800}>
              <Button leftIcon="linkedin" onClick={handleClick} variant="ghost">
                {t('home:aboutMe.button2')}
              </Button>
            </Reveal>
          </div>
        </section>
      </AboutMeStyle>
      <CharacteristicsStyle>
        <div className="characteristics-gallery">{characteristics}</div>
      </CharacteristicsStyle>
    </>
  );
};
