import { Accordion, Checkbox, Icon, InputColor, InputRange, Typography } from '@juanmsl/ui';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { BoxShadowStyle, AccordionHeader } from './box-shadow.style';

import { ControllerLayout, UpdateItem } from '@components/layouts';
import { BoxShadow, Navbar } from '@components/ui';
import { BoxShadowLine, useBoxShadow } from '@hooks';

const boxShadowList: Array<Array<BoxShadowLine>> = [
  [
    { x: 0, y: 0, blur: 60, spread: 0, color: '#4601D0CC', isInset: false },
    { x: -100, y: 10, blur: 80, spread: 20, color: '#08070799', isInset: true },
    { x: 0, y: 0, blur: 40, spread: 10, color: '#3D14F589', isInset: false },
    { x: 0, y: 0, blur: 10, spread: 0, color: '#c3b3ff', isInset: true },
  ],
  [
    { x: 15, y: 15, blur: 35, spread: 10, color: '#000000', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 6, color: '#5600d6', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 12, color: '#7752ff', isInset: false },
    { x: 0, y: 0, blur: 0, spread: 18, color: '#8e81ff', isInset: false },
  ],
  [{ x: 0, y: 8, blur: 24, spread: 0, color: '#000000', isInset: false }],
  [{ x: 0, y: 1, blur: 4, spread: 0, color: '#000000', isInset: false }],
  [{ x: 0, y: 10, blur: 25, spread: 5, color: '#000000', isInset: false }],
  [
    { x: 0, y: 50, blur: 100, spread: -20, color: '#000000', isInset: false },
    { x: 0, y: 30, blur: 60, spread: -30, color: '#000000', isInset: false },
    { x: 0, y: -2, blur: 6, spread: 0, color: '#000000', isInset: true },
  ],
  [
    { x: 0, y: 30, blur: 60, spread: -12, color: '#000000', isInset: true },
    { x: 0, y: 18, blur: 36, spread: -18, color: '#000000', isInset: true },
  ],
  [
    { x: 0, y: -30, blur: 60, spread: -12, color: '#000000', isInset: true },
    { x: 0, y: -6, blur: 36, spread: 8, color: '#000000', isInset: true },
  ],
  [
    { x: 0, y: 1, blur: 2, spread: 0, color: '#0040ff', isInset: false },
    { x: 0, y: 2, blur: 4, spread: 0, color: '#00fffb', isInset: false },
    { x: 0, y: 4, blur: 8, spread: 0, color: '#99ff00', isInset: false },
    { x: 0, y: 8, blur: 16, spread: 0, color: '#ffd500', isInset: false },
    { x: 0, y: 16, blur: 20, spread: 0, color: '#ff4d00', isInset: false },
    { x: 0, y: 20, blur: 24, spread: 0, color: '#ff0000', isInset: false },
  ],
  [
    { x: -10, y: 10, blur: 0, spread: 0, color: '#660EAF64', isInset: false },
    { x: -20, y: 20, blur: 0, spread: 0, color: '#660EAF48', isInset: false },
    { x: -30, y: 30, blur: 0, spread: 0, color: '#660EAF32', isInset: false },
    { x: -40, y: 40, blur: 0, spread: 0, color: '#660EAF16', isInset: false },
    { x: -50, y: 50, blur: 0, spread: 0, color: '#660EAF08', isInset: false },
  ],
  [
    { x: 10, y: 10, blur: 0, spread: 0, color: '#0C41DF64', isInset: false },
    { x: 20, y: 20, blur: 0, spread: 0, color: '#0C41DF48', isInset: false },
    { x: 30, y: 30, blur: 0, spread: 0, color: '#0C41DF32', isInset: false },
    { x: 40, y: 40, blur: 0, spread: 0, color: '#0C41DF16', isInset: false },
    { x: 50, y: 50, blur: 0, spread: 0, color: '#0C41DF08', isInset: false },
  ],
  [
    { x: 0, y: 4, blur: 0, spread: 10, color: '#0C41DF64', isInset: false },
    { x: 0, y: 7, blur: 0, spread: 20, color: '#0C41DF48', isInset: false },
    { x: 0, y: 12, blur: 0, spread: 30, color: '#0C41DF32', isInset: false },
    { x: 0, y: 17, blur: 0, spread: 40, color: '#0C41DF16', isInset: false },
    { x: 0, y: 22, blur: 0, spread: 50, color: '#0C41DF08', isInset: false },
  ],
  [
    { x: 5, y: -5, blur: 0, spread: 0, color: '#1FC11B', isInset: false },
    { x: 10, y: -10, blur: 0, spread: 0, color: '#FFD913', isInset: false },
    { x: 15, y: -15, blur: 0, spread: 0, color: '#FF9C55', isInset: false },
    { x: 20, y: -20, blur: 0, spread: 0, color: '#FF5555', isInset: false },
  ],
];

export const BoxShadowPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedList, setSelectedList] = useState(boxShadowList[0]);
  const [boxColor, setBoxColor] = useState(theme.colors.primary);
  const [sandboxBackground, setSandboxBackground] = useState(theme.colors.white);

  const boxShadow = useBoxShadow(selectedList);

  const addItem = useCallback(() => {
    setSelectedList(prev => [
      ...prev,
      {
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: '#000000',
        isInset: false,
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
    setSelectedList(boxShadowList[index]);
  }, []);

  return (
    <BoxShadowStyle>
      <Navbar />
      <ControllerLayout
        list={boxShadowList}
        addItem={addItem}
        renderedProperty={boxShadow}
        selected={selectedList}
        sandboxBackground={sandboxBackground}
        renderActions={() => (
          <section className='box-shadow-container-controls'>
            <InputColor name='boxColor' value={boxColor} setValue={setBoxColor} />
            <InputColor name='backgroundColor' value={sandboxBackground} setValue={setSandboxBackground} />
          </section>
        )}
        renderAccordionItem={({ x, y, blur, spread, color, isInset }, key) => (
          <Accordion.Item
            key={key}
            title={t('box-shadow:shadow-#', { index: key + 1 })}
            subtitle={boxShadow[key] || t('box-shadow:no-shadow')}
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
                  <Typography variant='small' className='box-shadow-css' withoutPadding weight='light'>
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
            <section className='input-ranges'>
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
              <InputRange
                name='spread'
                label={t('controls:spread')}
                min={-100}
                max={100}
                value={spread}
                setValue={updateItem('spread', key)}
              />
            </section>
            <Checkbox
              name='inset'
              label={t('controls:is-inset')}
              value={isInset}
              setValue={updateItem('isInset', key)}
            />
          </Accordion.Item>
        )}
        renderExample={(boxShadow, key) => (
          <BoxShadow key={key} boxShadowList={boxShadow} onClick={() => selectItem(key)}>
            {t('box-shadow:shadow-#', { index: key + 1 })}
          </BoxShadow>
        )}
      >
        <motion.section
          className='box-shadow-box'
          animate={{
            boxShadow: boxShadow.filter(line => line).join(', '),
            background: boxColor,
          }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </ControllerLayout>
    </BoxShadowStyle>
  );
};
