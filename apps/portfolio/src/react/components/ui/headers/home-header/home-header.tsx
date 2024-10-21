import { Grid, Line, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { HomeHeaderContainer, HomeHeaderStyle } from './home-header.style';

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
    <HomeHeaderContainer>
      <HomeHeaderStyle $background={data?.url} contentClassName='layout-content'>
        <Reveal delay={400} width='100%'>
          <section className='container'>
            <Grid style={{ overflow: 'hidden' }}>
              <Line orientation='horizontal' lineWidth={3} />
              <Typography variant='hero' className='names animate-title' noPadding>
                {t('common:shortName')}
              </Typography>
              <Line orientation='horizontal' lineWidth={3} />
            </Grid>
            <section className='user-labels'>
              {userLabels.map((label, key) => (
                <Reveal key={key} delay={100 * key + 1000}>
                  <Typography variant='body' className='user-label'>
                    {label}
                  </Typography>
                </Reveal>
              ))}
            </section>
            <SocialIcons position='bottom' />
          </section>
        </Reveal>
        <HeaderBottom className='home-header-svg' />
      </HomeHeaderStyle>
    </HomeHeaderContainer>
  );
};
