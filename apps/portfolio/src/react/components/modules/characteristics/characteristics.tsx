import { Reveal } from '@components/animations';
import { useGetCharacteristics } from '@hooks';
import { useMemo } from 'react';
import { CharacteristicStyle, CharacteristicsStyle } from './characteristics.style';
import { HoverCard, Icon, IconNameT, Line, Typography } from '@juanmsl/ui';

export const Characteristics = () => {
  const { data = [] } = useGetCharacteristics();

  const characteristics = useMemo(
    () =>
      data.map(({ title, icon }, key) => (
        <CharacteristicStyle key={key}>
          <HoverCard translationZ={15}>
            <Reveal delay={100 * key}>
              <section className='characteristic-container'>
                <Icon name={icon as IconNameT} className='characteristic-icon' />
                <Line orientation='horizontal' className='characteristic-line' />
                <Typography variant='body' className='characteristic-title'>
                  {title}
                </Typography>
              </section>
            </Reveal>
          </HoverCard>
        </CharacteristicStyle>
      )),
    [data],
  );

  return (
    <CharacteristicsStyle>
      <section className='characteristics-gallery'>{characteristics}</section>
    </CharacteristicsStyle>
  );
};
