import { HoverCard, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { HomeStyle } from './home.style';

import { PATHS } from '@core/constants';

const generators = [
  {
    to: PATHS.BOX_SHADOW_URL,
    text: 'box-shadow',
    className: 'box-shadow',
  },
  {
    to: PATHS.TEXT_SHADOW_URL,
    text: 'text-shadow',
    className: 'text-shadow',
  },
];

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeStyle>
      <section className='home-header'>
        <Typography variant='header1' withoutPadding>
          {t('home:title')}
        </Typography>
        <Typography>
          {t('home:by')}:{' '}
          <a href='https://juanmsl.com' className='header-link' target='_blank' rel='noopener noreferrer'>
            Juanmsl.com
          </a>
        </Typography>
      </section>
      <section className='generators'>
        {generators.map(({ to, text, className }, key) => (
          <HoverCard key={key} width='100%' className='card-container'>
            <Link to={to} className='card'>
              <section className={className}>
                <Typography variant='body' weight='bold' as='code'>
                  {text}
                </Typography>
              </section>
            </Link>
          </HoverCard>
        ))}
      </section>
    </HomeStyle>
  );
};
