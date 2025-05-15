import { AccordionItem, Grid, Icon, InputColor, Slider, Switch, Typography } from 'polpo/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { BoxShadowStyle } from './box-shadow.style';

import { ControllerLayout, ExampleComponentProps } from '@components/layouts';
import { BoxShadow, DistanceSelector } from '@components/ui';
import { BoxShadowLine, BoxShadowList } from '@core/constants';
import { getBoxShadowCSS } from '@hooks';

const Example = ({ index, example, onClick }: ExampleComponentProps<BoxShadowLine>) => {
  const { t } = useTranslation();

  return (
    <BoxShadow boxShadowList={example} onClick={onClick}>
      {t('shadow:shadow-#', { index: index + 1 })}
    </BoxShadow>
  );
};

export const BoxShadowPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [boxBorderRadius, setBoxBorderRadius] = useState(50);
  const [boxColor, setBoxColor] = useState(theme.colors.primary.main);

  const actions = () => (
    <>
      <InputColor
        showValueText
        label={t('controls:sample-color')}
        name='boxColor'
        value={boxColor}
        setValue={setBoxColor}
      />
      <Slider
        name='boxBorderRadius'
        label={t('controls:border-radius')}
        min={0}
        max={50}
        value={boxBorderRadius}
        setValue={setBoxBorderRadius}
      />
    </>
  );

  return (
    <ControllerLayout
      list={BoxShadowList}
      getCSS={item =>
        `box-shadow:\n  ${item
          .map(getBoxShadowCSS)
          .filter(line => line)
          .join(',\n  ')};`
      }
      ExampleComponent={Example}
      newItem={{
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: '#CCCCCC',
        isInset: false,
      }}
      renderActions={actions}
      renderAccordionItem={({ item, deleteItem, updateItem, index }) => (
        <AccordionItem
          key={index}
          className='shadows-item'
          classNames={{
            header: 'shadows-item-header',
            body: 'shadows-item-body',
          }}
          startContent={() => <InputColor name='color' value={item.color} setValue={updateItem('color')} />}
          content={
            <Grid flow='column' gap='1em' ai='center' jc='space-between'>
              <section>
                <Typography variant='body' weight='bold' family='code' noPadding>
                  {t('shadow:shadow-#', { index: index + 1 })}
                </Typography>
                <Typography variant='small' family='code' noPadding className='shadows-item-header--subtitle'>
                  {getBoxShadowCSS(item) || t('shadow:no-shadow')}
                </Typography>
              </section>
              {deleteItem ? <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem} /> : null}
            </Grid>
          }
        >
          <DistanceSelector
            x={item.x}
            y={item.y}
            setValue={([xValue, yValue]) => {
              updateItem('x')(xValue);
              updateItem('y')(yValue);
            }}
          >
            <Switch name='inset' label={t('controls:is-inset')} value={item.isInset} setValue={updateItem('isInset')} />
            <Slider
              name='x'
              label={t('controls:x-position')}
              min={-100}
              max={100}
              value={item.x}
              setValue={updateItem('x')}
            />
            <Slider
              name='y'
              label={t('controls:y-position')}
              min={-100}
              max={100}
              value={item.y}
              setValue={updateItem('y')}
            />
          </DistanceSelector>
          <Slider
            name='blur'
            label={t('controls:blur')}
            min={0}
            max={100}
            value={item.blur}
            setValue={updateItem('blur')}
          />
          <Slider
            name='spread'
            label={t('controls:spread')}
            min={-100}
            max={100}
            value={item.spread}
            setValue={updateItem('spread')}
          />
        </AccordionItem>
      )}
    >
      {item => (
        <BoxShadowStyle
          className='box-shadow-box'
          style={{
            background: boxColor,
            borderRadius: `${boxBorderRadius}%`,
            boxShadow: item
              .map(getBoxShadowCSS)
              .filter(line => line)
              .join(', '),
          }}
        />
      )}
    </ControllerLayout>
  );
};
