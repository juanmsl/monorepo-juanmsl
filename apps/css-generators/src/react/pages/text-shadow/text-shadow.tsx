import { Accordion, Icon, Input, InputColor, InputRange, Typography } from '@juanmsl/ui';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { TextShadowStyle } from './text-shadow.style';

import { ControllerLayout, UpdateItem } from '@components/layouts';
import { SandboxAccordionHeader } from '@components/layouts/sandbox-layout/sandbox-layout.style';
import { TextShadow } from '@components/ui';
import { BoxShadowLine, TextShadowLine, useTextShadow } from '@hooks';

const textShadowList: Array<Array<TextShadowLine>> = [
  [{ x: 0, y: 2, blur: 6, color: '#000000' }],
  [{ x: 0, y: 5, blur: 15, color: '#000000' }],
  [
    { x: 0, y: 3, blur: 60, color: '#000000' },
    { x: 0, y: 8, blur: 36, color: '#000000' },
  ],
  [
    { x: 0, y: 1, blur: 2, color: '#0040ff' },
    { x: 0, y: 2, blur: 2, color: '#00fffb' },
    { x: 0, y: 3, blur: 2, color: '#99ff00' },
    { x: 0, y: 4, blur: 2, color: '#ffd500' },
    { x: 0, y: 5, blur: 2, color: '#ff4d00' },
    { x: 0, y: 6, blur: 2, color: '#ff0000' },
  ],
  [
    { x: -1, y: 1, blur: 0, color: '#1FC11B' },
    { x: -2, y: 2, blur: 0, color: '#FFD913' },
    { x: -3, y: 3, blur: 0, color: '#FF9C55' },
    { x: -4, y: 4, blur: 0, color: '#FF5555' },
    { x: -5, y: 5, blur: 0, color: '#9f4fff' },
  ],
  [
    { x: 1, y: 1, blur: 1, color: '#1FC11B' },
    { x: 2, y: 2, blur: 1, color: '#FFD913' },
    { x: 3, y: 3, blur: 1, color: '#FF9C55' },
    { x: 4, y: 4, blur: 1, color: '#FF5555' },
    { x: 5, y: 5, blur: 1, color: '#9f4fff' },
  ],
  [
    { x: 0, y: 1, blur: 2, color: '#1FC11B' },
    { x: 0, y: 3, blur: 2, color: '#FFD913' },
    { x: 0, y: 5, blur: 2, color: '#FF9C55' },
    { x: 0, y: 7, blur: 2, color: '#FF5555' },
    { x: 0, y: 9, blur: 2, color: '#9f4fff' },
  ],
  [
    { x: 1, y: -1, blur: 1, color: '#1FC11B' },
    { x: 2, y: -2, blur: 2, color: '#FFD913' },
    { x: 3, y: -3, blur: 3, color: '#FF9C55' },
    { x: 4, y: -4, blur: 4, color: '#FF5555' },
  ],
];

export const TextShadowPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedList, setSelectedList] = useState(textShadowList[0]);
  const [textColor, setTextColor] = useState(theme.colors.primary);
  const [sandboxBackground, setSandboxBackground] = useState('#33333300');
  const [text, setText] = useState('Text Shadow 😆');

  const textShadow = useTextShadow(selectedList);

  const addItem = useCallback(() => {
    setSelectedList(prev => [
      ...prev,
      {
        x: 0,
        y: 0,
        blur: 0,
        color: '#000000',
      },
    ]);
  }, []);

  const deleteItem = useCallback(
    (index: number) => e => {
      e.stopPropagation();
      setSelectedList(prev => prev.filter((_, key) => key !== index));
    },
    [],
  );

  const updateItem = useCallback<UpdateItem<BoxShadowLine>>(
    (prop, index) => value => {
      setSelectedList(prev => {
        const data = [...prev];
        data[index] = {
          ...prev[index],
          [prop]: value,
        };

        return data;
      });
    },
    [],
  );

  const css = useMemo(() => `text-shadow:\n  ${textShadow.filter(line => line).join(',\n  ')};`, [textShadow]);

  return (
    <ControllerLayout
      list={textShadowList}
      addItem={addItem}
      selected={selectedList}
      sandboxBackground={sandboxBackground}
      css={css}
      renderActions={() => (
        <section className='container-controls'>
          <InputColor showValueText label='Sample color' name='textColor' value={textColor} setValue={setTextColor} />
          <InputColor
            showValueText
            label='Background'
            name='backgroundColor'
            value={sandboxBackground}
            setValue={setSandboxBackground}
          />
          <Input label='Sample text' name='text' value={text} setValue={setText} />
        </section>
      )}
      renderAccordionItem={({ x, y, blur, color }, key) => (
        <Accordion.Item
          key={key}
          title={t('box-shadow:shadow-#', { index: key + 1 })}
          subtitle={textShadow[key] || t('box-shadow:no-shadow')}
          className='shadows-item'
          classNames={{
            header: 'shadows-item-header',
            body: 'shadows-item-body',
          }}
          startContent={() => <InputColor name='color' value={color} setValue={updateItem('color', key)} />}
          middleContent={({ title, subtitle }) => (
            <SandboxAccordionHeader>
              <Typography variant='body' withoutPadding weight='bold'>
                {title}
              </Typography>
              <Typography variant='small' className='header-subtitle' withoutPadding weight='light'>
                {subtitle}
              </Typography>
            </SandboxAccordionHeader>
          )}
          endContent={() =>
            selectedList.length > 1 ? (
              <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem(key)} />
            ) : null
          }
        >
          <InputRange
            name='x'
            label={t('controls:x-position')}
            min={-100}
            max={100}
            value={x}
            setValue={updateItem('x', key)}
          />
          <InputRange
            name='y'
            label={t('controls:y-position')}
            min={-100}
            max={100}
            value={y}
            setValue={updateItem('y', key)}
          />
          <InputRange
            name='blur'
            label={t('controls:blur')}
            min={0}
            max={100}
            value={blur}
            setValue={updateItem('blur', key)}
          />
        </Accordion.Item>
      )}
      renderExample={(boxShadow, key) => (
        <TextShadow key={key} textShadowList={boxShadow} onClick={() => setSelectedList(textShadowList[key])}>
          {t('box-shadow:shadow-#', { index: key + 1 })}
        </TextShadow>
      )}
    >
      <TextShadowStyle
        className='text-shadow-box'
        style={{
          textShadow: textShadow.filter(line => line).join(', '),
          color: textColor,
        }}
      >
        <Typography variant='header1'>{text}</Typography>
      </TextShadowStyle>
    </ControllerLayout>
  );
};
