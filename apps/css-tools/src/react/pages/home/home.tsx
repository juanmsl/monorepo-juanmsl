import { HoverCard, Select, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';
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
  const [option, setOption] = useState(null);

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
      <section style={{ display: 'grid', placeContent: 'center', gap: '1em' }}>
        <Select
          options={[
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
            { value: 4, label: 'Option 4' },
            { value: 5, label: 'Option 5' },
            { value: 6, label: 'Option 6' },
            { value: 7, label: 'Option 7' },
            { value: 8, label: 'Option 8' },
            { value: 9, label: 'Option 9' },
            { value: 10, label: 'Option 10' },
            { value: 11, label: 'Option 11' },
            { value: 12, label: 'Option 12' },
          ]}
          showClearOption
          placeholder='Escoje una opción :D'
          renderOption={item => item.label}
          name='select'
          value={option}
          setValue={setOption}
        />
        <Tooltip content='Tooltip' position='bottom'>
          <span style={{ border: '1px solid red' }}>Bottom</span>
        </Tooltip>
        <Tooltip content='Tooltip' position='top'>
          <span style={{ border: '1px solid red' }}>Top</span>
        </Tooltip>
        <Tooltip content='Tooltip' position='left'>
          <span style={{ border: '1px solid red' }}>Left</span>
        </Tooltip>
        <Tooltip content='Tooltip' position='right'>
          <span style={{ border: '1px solid red' }}>Right</span>
        </Tooltip>
      </section>
    </HomeStyle>
  );
};
