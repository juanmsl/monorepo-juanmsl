import { HoverCard, Typography } from '@juanmsl/ui';
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
    to: PATHS.BOX_SHADOW_URL,
    text: 'text-shadow',
    className: 'text-shadow',
  },
];

export const Home = () => {
  return (
    <HomeStyle>
      <section className='home-header'>
        <Typography variant='header1' withoutPadding>
          CSS Generators
        </Typography>
        <Typography>
          By:{' '}
          <a href='https://juanmsl.com' target='_blank' rel='noopener noreferrer'>
            Juanmsl.com
          </a>
        </Typography>
      </section>
      <section className='generators'>
        {generators.map(({ to, text, className }, key) => (
          <HoverCard key={key} width='100%'>
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
