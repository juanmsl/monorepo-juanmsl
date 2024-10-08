import { AccordionItem, Grid, Icon, InputColor, Slider, Switch, Typography } from '@juanmsl/ui';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { BoxShadowStyle } from './box-shadow.style';

import { ControllerLayout, ExampleComponentProps } from '@components/layouts';
import { BoxShadow } from '@components/ui';
import { BoxShadowLine, BoxShadowList } from '@core/constants';
import { useBoxShadow } from '@hooks';

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
  const [selectedList, setSelectedList] = useState(BoxShadowList[0]);
  const [boxBorderRadius, setBoxBorderRadius] = useState(50);
  const [boxColor, setBoxColor] = useState(theme.colors.primary.main);

  const boxShadow = useBoxShadow(selectedList);

  const css = useMemo(() => `box-shadow:\n  ${boxShadow.filter(line => line).join(',\n  ')};`, [boxShadow]);

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
      selected={selectedList}
      setSelected={setSelectedList}
      css={css}
      selectExample={index => setSelectedList(BoxShadowList[index])}
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
      renderAccordionItem={({ x, y, blur, spread, color, isInset, deleteItem, updateItem }, key) => (
        <AccordionItem
          key={key}
          className='shadows-item'
          classNames={{
            header: 'shadows-item-header',
            body: 'shadows-item-body',
          }}
          startContent={() => <InputColor name='color' value={color} setValue={updateItem('color', key)} />}
          content={
            <Grid flow='column' gap='1em' ai='center' jc='space-between'>
              <section>
                <Typography variant='body' weight='bold' family='code' noPadding>
                  {t('shadow:shadow-#', { index: key + 1 })}
                </Typography>
                <Typography variant='small' family='code' noPadding className='shadows-item-header--subtitle'>
                  {boxShadow[key] || t('shadow:no-shadow')}
                </Typography>
              </section>
              {selectedList.length > 1 ? (
                <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem(key)} />
              ) : null}
            </Grid>
          }
        >
          <section className='checkbox-inset'>
            <Switch name='inset' label={t('controls:is-inset')} value={isInset} setValue={updateItem('isInset', key)} />
          </section>
          <Slider
            name='x'
            label={t('controls:x-position')}
            min={-100}
            max={100}
            value={x}
            setValue={updateItem('x', key)}
          />
          <Slider
            name='y'
            label={t('controls:y-position')}
            min={-100}
            max={100}
            value={y}
            setValue={updateItem('y', key)}
          />
          <Slider
            name='blur'
            label={t('controls:blur')}
            min={0}
            max={100}
            value={blur}
            setValue={updateItem('blur', key)}
          />
          <Slider
            name='spread'
            label={t('controls:spread')}
            min={-100}
            max={100}
            value={spread}
            setValue={updateItem('spread', key)}
          />
        </AccordionItem>
      )}
    >
      <BoxShadowStyle
        className='box-shadow-box'
        style={{
          boxShadow: boxShadow.filter(line => line).join(', '),
          background: boxColor,
          borderRadius: `${boxBorderRadius}%`,
        }}
      />
    </ControllerLayout>
  );
};
