import { AccordionItem, Grid, Icon, Input, InputColor, Slider, Typography } from 'polpo/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { TextShadowStyle } from './text-shadow.style';

import { ControllerLayout, ExampleComponentProps } from '@components/layouts';
import { DistanceSelector, TextShadow } from '@components/ui';
import { TextShadowLine, TextShadowList } from '@core/constants';
import { getTextShadowCSS } from '@hooks';

const Example = ({ index, example, onClick }: ExampleComponentProps<TextShadowLine>) => {
  const { t } = useTranslation();

  return (
    <TextShadow textShadowList={example} onClick={onClick}>
      {t('shadow:shadow-#', { index: index + 1 })}
    </TextShadow>
  );
};

export const TextShadowPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [textColor, setTextColor] = useState(theme.colors.primary.main);
  const [text, setText] = useState('Text Shadow 😆');

  const actions = () => (
    <>
      <InputColor
        showValueText
        label={t('controls:sample-color')}
        name='textColor'
        value={textColor}
        setValue={setTextColor}
      />
      <Input label={t('controls:sample-text')} name='text' value={text} setValue={setText} />
    </>
  );

  return (
    <ControllerLayout
      list={TextShadowList}
      getCSS={item =>
        `text-shadow:\n  ${item
          .map(getTextShadowCSS)
          .filter(line => line)
          .join(',\n  ')};`
      }
      ExampleComponent={Example}
      newItem={{
        x: 0,
        y: 0,
        blur: 0,
        color: '#000000',
      }}
      renderActions={actions}
      renderAccordionItem={({ item, updateItem, deleteItem, index }) => (
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
                  {getTextShadowCSS(item) || t('shadow:no-shadow')}
                </Typography>
              </section>
              {deleteItem ? <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem} /> : null}
            </Grid>
          }
        >
          <DistanceSelector
            x={item.x}
            y={item.y}
            width='150'
            setValue={([xValue, yValue]) => {
              updateItem('x')(xValue);
              updateItem('y')(yValue);
            }}
          >
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
        </AccordionItem>
      )}
    >
      {item => (
        <TextShadowStyle
          className='text-shadow-box'
          style={{
            color: textColor,
            textShadow: item
              .map(getTextShadowCSS)
              .filter(line => line)
              .join(', '),
          }}
        >
          <Typography variant='header1'>{text}</Typography>
        </TextShadowStyle>
      )}
    </ControllerLayout>
  );
};
