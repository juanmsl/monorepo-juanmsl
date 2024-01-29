import {AboutMeStyle, CharacteristicsStyle, CharacteristicStyle} from "./about-me.style.ts";
import {SectionTitle} from "@/components/ui";
import {HoverCard, Icon, Line, Typography} from "@juanmsl/ui";
import {useTranslation} from "react-i18next";
import {Button, IconNameT} from "@juanmsl/ui";
import {useMemo, useState} from "react";
import {ProfilePicture} from "@/components/resources";
import {useGetCharacteristics} from "@/hooks";
import {Reveal} from "@/components/animations";

export const AboutMe = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { data = [] } = useGetCharacteristics();

  const handleClick = async () => {
    setIsLoading(true);
    const response = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 3000);
    });
    setIsLoading(response);
  }

  const characteristics = useMemo(() => (
    data.map(({title, icon}, key) => (
      <HoverCard translationZ={15} key={key}>
        <Reveal delay={100 * key}>
          <CharacteristicStyle>
            <Icon name={icon as IconNameT} className='characteristic-icon' />
            <Line orientation='horizontal' className='characteristic-line' />
            <Typography variant='body' className='characteristic-title'>{title}</Typography>
          </CharacteristicStyle>
        </Reveal>
      </HoverCard>
    ))
  ), [data]);

  return (
    <>
      <AboutMeStyle>
        <section className='left'>
          <ProfilePicture className='profile-picture' />
        </section>
        <section className='right'>
          <Reveal delay={100}>
            <SectionTitle>
              {t('home:aboutMe.title')}
            </SectionTitle>
          </Reveal>
          <Reveal delay={200}>
            <Typography variant='header4'>
              {t('home:aboutMe.subtitle1')}
            </Typography>
          </Reveal>
          <Reveal delay={300}>
            <Typography variant='body'>
              {t('home:aboutMe.text1')}
            </Typography>
          </Reveal>
          <Reveal delay={400}>
            <Typography variant='body'>
              {t('home:aboutMe.text2')}
            </Typography>
          </Reveal>
          <Reveal delay={500}>
            <Typography variant='header4'>
              {t('home:aboutMe.subtitle2')}
            </Typography>
          </Reveal>
          <Reveal delay={600}>
            <Typography variant='body'>
              {t('home:aboutMe.text3')}
            </Typography>
          </Reveal>

          <div className="button-ctas">
            <HoverCard translationZ={15}>
              <Reveal delay={700}>
                <Button
                  leftIcon='instagram'
                  onClick={handleClick}
                  isLoading={isLoading}
                >
                  {t('home:aboutMe.button1')}
                </Button>
              </Reveal>
            </HoverCard>

            <Reveal delay={800}>
              <Button
                leftIcon='linkedin'
                onClick={handleClick}
                isLoading={isLoading}
                variant='ghost'
              >
                {t('home:aboutMe.button2')}
              </Button>
            </Reveal>
          </div>
        </section>
      </AboutMeStyle>
      <CharacteristicsStyle>
        <div className="characteristics-gallery">
          {characteristics}
        </div>
      </CharacteristicsStyle>
    </>
  );
};
