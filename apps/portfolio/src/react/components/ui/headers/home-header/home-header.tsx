import { Line, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { HomeHeaderStyle } from './home-header.style';

import { Reveal } from '@components/animations';
import { HeaderBottom } from '@components/resources';
import { SocialIcons } from '@components/ui';
import { ENV } from '@core/env';
import { useAsset } from '@hooks';

export const HomeHeader = () => {
  const { t } = useTranslation();
  const userLabels = t('common:userLabels', { returnObjects: true }) as Array<string>;
  const { data } = useAsset(ENV.ASSET_ID_BACKGROUND);

  return (
    <HomeHeaderStyle $background={data?.url}>
      <section className='container'>
        <Reveal delay={200} width='100%'>
          <Line orientation='horizontal' lineWidth={3} className='header-line' />
        </Reveal>
        <Reveal delay={300} width='100%'>
          <Typography variant='hero' className='names' withoutPadding>
            {t('common:shortName')}
          </Typography>
        </Reveal>
        <Reveal delay={400} width='100%'>
          <Line orientation='horizontal' lineWidth={3} className='header-line' />
        </Reveal>
        <section className='user-labels'>
          {userLabels.map((label, key) => (
            <Reveal key={key} delay={100 * key + 500}>
              <Typography variant='body' className='user-label'>
                {label}
              </Typography>
            </Reveal>
          ))}
        </section>
        <SocialIcons position='bottom' />
      </section>
      <HeaderBottom className='home-header-svg' />
    </HomeHeaderStyle>
  );
};
