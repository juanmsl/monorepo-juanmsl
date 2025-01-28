import { HoverCard, Icon, IconNameT, Line, Typography } from 'polpo/ui';
import { useMemo } from 'react';

import { CharacteristicStyle, CharacteristicsStyle, CharacteristicsContainerStyle } from './characteristics.style';

import { Reveal } from '@components/animations';
import { Particles } from '@components/ui';
import { useGetCharacteristics } from '@hooks';

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
    <CharacteristicsContainerStyle>
      <Particles className='particles-canvas' />
      <CharacteristicsStyle fitHeightContent contentClassName='layout-content'>
        <section className='characteristics-gallery'>{characteristics}</section>
      </CharacteristicsStyle>
    </CharacteristicsContainerStyle>
  );
};
