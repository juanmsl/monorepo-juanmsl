import { AboutMeStyle } from './about-me.style';
import { ProfilePicture } from '@components/resources';
import { Reveal } from '@components/animations';
import { SectionTitle } from '@components/ui';
import { TechnologyEntity } from '@domain';
import { useTranslation } from 'react-i18next';
import { Button, HoverCard, Tooltip, Typography } from '@juanmsl/ui';
import { useAsset, useGetTechnologies } from '@hooks';

export const AboutMe = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset('2Sb2cM6MN8osN8kXMizuUd');
  const { data: technologies = [] } = useGetTechnologies();

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

  const renderTechnology = ({ name, icon }: TechnologyEntity, key: number) => (
    <Tooltip content={name} key={key}>
      <Reveal key={key} delay={(key + 1) * 50}>
        <img className="technology-icon" src={icon} alt={name} />
      </Reveal>
    </Tooltip>
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

          <div className="skills-labels">{technologies.map(renderTechnology)}</div>
        </section>
      </AboutMeStyle>
    </>
  );
};
