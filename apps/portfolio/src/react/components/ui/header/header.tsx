import { HeaderBottom } from '@components/resources';
import { HeaderStyle } from './header.style';
import { Reveal } from '@components/animations';
import { SocialIcons } from '@components/ui';
import { useAsset } from '@hooks';
import { useTranslation } from 'react-i18next';
import { Line, Typography } from '@juanmsl/ui';

export const Header = () => {
  const { t } = useTranslation();
  const userLabels = t('common:userLabels', { returnObjects: true }) as Array<string>;
  const { data } = useAsset('7kZGbgXgeL1PtS0eyjA1VL');

  return (
    <HeaderStyle $background={data?.url}>
      <div className="container">
        <Reveal delay={200} width="100%">
          <Line orientation="horizontal" size="3px" className="header-line" />
        </Reveal>
        <Reveal delay={300} width="100%">
          <Typography variant="hero" className="names" withoutPadding>
            {t('common:shortName')}
          </Typography>
        </Reveal>
        <Reveal delay={400} width="100%">
          <Line orientation="horizontal" size="3px" className="header-line" />
        </Reveal>
        <div className="user-labels">
          {userLabels.map((label, key) => (
            <Reveal key={key} delay={100 * key + 500}>
              <Typography variant="body" className="user-label">
                {label}
              </Typography>
            </Reveal>
          ))}
        </div>
        <SocialIcons position="bottom" />
      </div>
      <HeaderBottom />
    </HeaderStyle>
  );
};
