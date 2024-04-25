import { Accordion, Icon, InputColor, InputRange, Typography } from '@juanmsl/ui';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { AccordionHeader, TextShadowStyle } from './text-shadow.style';

import { ControllerLayout, UpdateItem } from '@components/layouts';
import { TextShadow, Navbar } from '@components/ui';
import { BoxShadowLine, TextShadowLine, useTextShadow } from '@hooks';

const textShadowList: Array<Array<TextShadowLine>> = [
  [{ x: 0, y: 8, blur: 24, color: '#000000' }],
  [{ x: 0, y: 1, blur: 4, color: '#000000' }],
  [{ x: 0, y: 10, blur: 25, color: '#000000' }],
  [
    { x: 0, y: 50, blur: 100, color: '#000000' },
    { x: 0, y: 30, blur: 60, color: '#000000' },
    { x: 0, y: -2, blur: 6, color: '#000000' },
  ],
  [
    { x: 15, y: 15, blur: 35, color: '#000000' },
    { x: 0, y: 0, blur: 0, color: '#5600d6' },
    { x: 0, y: 0, blur: 0, color: '#7752ff' },
    { x: 0, y: 0, blur: 0, color: '#8e81ff' },
  ],
  [
    { x: 0, y: 30, blur: 60, color: '#000000' },
    { x: 0, y: 18, blur: 36, color: '#000000' },
  ],
  [
    { x: 0, y: -30, blur: 60, color: '#000000' },
    { x: 0, y: -6, blur: 36, color: '#000000' },
  ],
  [
    { x: 0, y: 1, blur: 2, color: '#0040ff' },
    { x: 0, y: 2, blur: 4, color: '#00fffb' },
    { x: 0, y: 4, blur: 8, color: '#99ff00' },
    { x: 0, y: 8, blur: 16, color: '#ffd500' },
    { x: 0, y: 16, blur: 20, color: '#ff4d00' },
    { x: 0, y: 20, blur: 24, color: '#ff0000' },
  ],
  [
    { x: -1, y: 1, blur: 0, color: '#1FC11B' },
    { x: -2, y: 2, blur: 0, color: '#FFD913' },
    { x: -3, y: 3, blur: 0, color: '#FF9C55' },
    { x: -4, y: 4, blur: 0, color: '#FF5555' },
    { x: -5, y: 5, blur: 0, color: '#9f4fff' },
  ],
  [
    { x: 1, y: 1, blur: 0, color: '#1FC11B' },
    { x: 2, y: 2, blur: 0, color: '#FFD913' },
    { x: 3, y: 3, blur: 0, color: '#FF9C55' },
    { x: 4, y: 4, blur: 0, color: '#FF5555' },
    { x: 5, y: 5, blur: 0, color: '#9f4fff' },
  ],
  [
    { x: 0, y: 1, blur: 0, color: '#1FC11B' },
    { x: 0, y: 3, blur: 0, color: '#FFD913' },
    { x: 0, y: 5, blur: 0, color: '#FF9C55' },
    { x: 0, y: 7, blur: 0, color: '#FF5555' },
    { x: 0, y: 9, blur: 0, color: '#9f4fff' },
  ],
  [
    { x: 1, y: -1, blur: 0, color: '#1FC11B' },
    { x: 2, y: -2, blur: 0, color: '#FFD913' },
    { x: 3, y: -3, blur: 0, color: '#FF9C55' },
    { x: 4, y: -4, blur: 0, color: '#FF5555' },
  ],
];

export const TextShadowPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedList, setSelectedList] = useState(textShadowList[0]);
  const [boxColor, setBoxColor] = useState(theme.colors.primary);
  const [sandboxBackground, setSandboxBackground] = useState(theme.colors.white);

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

  const selectItem = useCallback((index: number) => {
    setSelectedList(textShadowList[index]);
  }, []);

  return (
    <TextShadowStyle>
      <Navbar />
      <ControllerLayout
        list={textShadowList}
        addItem={addItem}
        renderedProperty={textShadow}
        selected={selectedList}
        sandboxBackground={sandboxBackground}
        renderActions={() => (
          <section className='text-shadow-container-controls'>
            <InputColor name='boxColor' value={boxColor} setValue={setBoxColor} />
            <InputColor name='backgroundColor' value={sandboxBackground} setValue={setSandboxBackground} />
          </section>
        )}
        renderAccordionItem={({ x, y, blur, color }, key) => (
          <Accordion.Item
            key={key}
            title={t('text-shadow:shadow-#', { index: key + 1 })}
            subtitle={textShadow[key] || t('text-shadow:no-shadow')}
            classNames={{
              header: 'shadows-item-header',
              body: 'shadows-item-body',
            }}
            startContent={() => <InputColor name='color' value={color} setValue={updateItem('color', key)} />}
            middleContent={({ title, subtitle }) => (
              <AccordionHeader>
                <section className='accordion-text'>
                  <Typography variant='body' withoutPadding weight='bold'>
                    {title}
                  </Typography>
                  <Typography variant='small' className='text-shadow-css' withoutPadding weight='light'>
                    {subtitle}
                  </Typography>
                </section>
                <section className='accordion-actions'>
                  {selectedList.length > 1 && (
                    <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem(key)} />
                  )}
                </section>
              </AccordionHeader>
            )}
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
          <TextShadow key={key} textShadowList={boxShadow} onClick={() => selectItem(key)}>
            {t('text-shadow:shadow-#', { index: key + 1 })}
          </TextShadow>
        )}
      >
        <motion.section
          className='text-shadow-box'
          animate={{
            textShadow: textShadow.filter(line => line).join(', '),
          }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography variant='header4'>Text Shadow</Typography>
        </motion.section>
      </ControllerLayout>
    </TextShadowStyle>
  );
};
