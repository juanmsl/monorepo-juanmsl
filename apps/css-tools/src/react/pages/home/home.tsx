import {
  HoverCard,
  Typography,
  Grid,
  Button,
  Select,
  IconNames,
  IconNameT,
  Checkbox,
  Icon,
  ButtonSize,
  ButtonVariant,
  Radio,
  Input,
  ButtonColor,
} from '@juanmsl/ui';
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
  const [leftIcon, setLeftIcon] = useState<IconNameT | null>('download');
  const [rightIcon, setRightIcon] = useState<IconNameT | null>('bicycle');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [width, setWidth] = useState<string>('full');
  const [text, setText] = useState('Button');
  const [isRounded, setIsRounded] = useState(false);
  const [noShadow, setNoShadow] = useState(false);
  const [color, setColor] = useState<string>('default');

  return (
    <HomeStyle>
      <section className='home-header'>
        <Typography variant='header1' noPadding>
          {t('home:title')}
        </Typography>
        <Typography>
          {t('home:by')}:{' '}
          <a href='https://juanmsl.com' className='header-link' target='_blank' rel='noopener'>
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
      <Grid gap='1em' flow='column' columnSize='250px' pc='center' ai='center' style={{ padding: '4em' }}>
        <Grid gap='1em'>
          <Input
            name='text'
            value={text}
            setValue={value => setText(value)}
            label='Text'
            variant='full-border'
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
          <Select<IconNameT>
            options={IconNames}
            renderOption={item => (
              <Grid flow='column' gap='1em' ai='center' jc='start'>
                <Icon name={item} /> {item}
              </Grid>
            )}
            name='left-icon'
            value={leftIcon}
            setValue={value => setLeftIcon(value)}
            multiselect={false}
            label='Left Icon'
            variant='full-border'
            showClearOption
            placeholder='Select an icon'
          />
        </Grid>
        <Grid gap='1em'>
          <Select
            options={['default', 'primary', 'secondary', 'tertiary', 'info', 'warning', 'alert', 'active']}
            renderOption={item => item}
            name='color'
            value={color}
            setValue={value => setColor(value)}
            multiselect={false}
            label='Color'
            variant='full-border'
            showClearOption
            placeholder='Select a color'
          />
          <Select<IconNameT>
            options={IconNames}
            renderOption={item => (
              <Grid flow='column' gap='1em' ai='center' jc='start'>
                <Icon name={item} /> {item}
              </Grid>
            )}
            name='right-icon'
            value={rightIcon}
            setValue={value => setRightIcon(value)}
            multiselect={false}
            label='Right Icon'
            variant='full-border'
            showClearOption
            placeholder='Select an icon'
          />
        </Grid>
        <Grid>
          <Checkbox name='is-loading' value={isLoading} setValue={setIsLoading} label='Is loading' />
          <Checkbox name='is-disabled' value={isDisabled} setValue={setIsDisabled} label='Is disabled' />
          <Checkbox name='is-rounded' value={isRounded} setValue={setIsRounded} label='Is rounded' />
          <Checkbox name='no-shadow' value={noShadow} setValue={setNoShadow} label='No Shadow' />
        </Grid>
        <Grid>
          <Radio name='width' value={width} radioValue='fit' setValue={value => setWidth(value)} label='Fit width' />
          <Radio name='width' value={width} radioValue='full' setValue={value => setWidth(value)} label='Full width' />
        </Grid>
      </Grid>
      <Grid gap='1em' gtc='repeat(3, 300px)' pi='center' pc='center' style={{ padding: '0 4em' }}>
        {['default', 'ghost', 'flat'].map(variant =>
          ['small', 'regular', 'large'].map(size => (
            <Button
              key={size}
              isLoading={isLoading}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              width={width as 'fit' | 'full'}
              size={size as ButtonSize}
              variant={variant as ButtonVariant}
              disabled={isDisabled}
              rounded={isRounded}
              noShadow={noShadow}
              color={color as ButtonColor}
            >
              {text}
            </Button>
          )),
        )}
        {['default', 'ghost', 'flat'].map(variant =>
          ['small', 'regular', 'large'].map(size => (
            <Button
              key={size}
              isLoading={isLoading}
              width={width as 'fit' | 'full'}
              size={size as ButtonSize}
              variant={variant as ButtonVariant}
              disabled={isDisabled}
              rounded={isRounded}
              noShadow={noShadow}
              color={color as ButtonColor}
            >
              <Icon name={leftIcon} />
            </Button>
          )),
        )}
      </Grid>
    </HomeStyle>
  );
};
