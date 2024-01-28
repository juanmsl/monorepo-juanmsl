import {AboutMeStyle, CharacteristicsStyle, CharacteristicStyle} from "./about-me.style.ts";
import {SectionTitle} from "@/components/ui";
import {HoverCard, Icon, Line, Typography} from "@juanmsl/ui";
import {useTranslation} from "react-i18next";
import {Button, IconNameT} from "@juanmsl/ui";
import {useState} from "react";
import {ProfilePicture} from "@/components/resources";

type CharacteristicEntity = {
  title: string;
  icon: IconNameT;
  description: string;
};

export const AboutMe = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const response = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 3000);
    });
    setIsLoading(response);
  }

  const characteristics = (t('home:aboutMe.characteristics', { returnObjects: true }) as Array<CharacteristicEntity>).map(({title, icon}, key) => (
    <HoverCard translationZ={15}>
      <CharacteristicStyle key={key}>
        <Icon name={icon} className='characteristic-icon' />
        <Line orientation='horizontal' className='characteristic-line' />
        <Typography variant='body' className='characteristic-title'>{title}</Typography>
      </CharacteristicStyle>
    </HoverCard>
  ))

  return (
    <>
      <AboutMeStyle>
        <div className="layout-content">
          <section className='left'>
            <ProfilePicture className='profile-picture' />
          </section>
          <section className='right'>
            <SectionTitle>
              {t('home:aboutMe.title')}
            </SectionTitle>
            <Typography variant='header4'>
              {t('home:aboutMe.subtitle1')}
            </Typography>
            <Typography variant='body'>
              {t('home:aboutMe.text1')}
            </Typography>
            <Typography variant='body'>
              {t('home:aboutMe.text2')}
            </Typography>
            <Typography variant='header4'>
              {t('home:aboutMe.subtitle2')}
            </Typography>
            <Typography variant='body'>
              {t('home:aboutMe.text3')}
            </Typography>
            <div className="button-ctas">
              <HoverCard translationZ={15}>
                <Button
                  leftIcon='instagram'
                  onClick={handleClick}
                  isLoading={isLoading}
                >
                  {t('home:aboutMe.button1')}
                </Button>
              </HoverCard>
              <Button
                leftIcon='linkedin'
                onClick={handleClick}
                isLoading={isLoading}
                variant='ghost'
              >
                {t('home:aboutMe.button2')}
              </Button>
            </div>
          </section>
        </div>
      </AboutMeStyle>
      <CharacteristicsStyle>
        <div className="layout-content">
          <div className="characteristics-gallery">
            {characteristics}
          </div>
        </div>
      </CharacteristicsStyle>
    </>
  );
};
