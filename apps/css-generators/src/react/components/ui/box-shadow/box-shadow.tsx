import { Accordion, Button, Checkbox, Icon, InputColor, InputRange, Typography, useToggleValues } from '@juanmsl/ui';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { AccordionHeader, BoxShadowSandBoxStyle, BoxShadowStyle } from './box-shadow.style';

import { BoxShadowLine, useBoxShadow } from '@hooks';

type BoxShadowProps = {
  initialShadow: Array<BoxShadowLine>;
};

export const BoxShadow = ({ initialShadow }: BoxShadowProps) => {
  const { t } = useTranslation();
  const [copyButtonText, toggle] = useToggleValues([t('box-shadow:copy-css'), t('box-shadow:copied')]);
  const [boxShadowLines, setBoxShadowLines] = useState<Array<BoxShadowLine>>(initialShadow);
  const theme = useTheme();
  const [boxColor, setBoxColor] = useState(theme.colors.primary);
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.white);

  useEffect(() => {
    setBoxShadowLines(initialShadow);
  }, [initialShadow]);

  const boxShadow = useBoxShadow(boxShadowLines);

  const setShadow = useCallback(
    <T extends keyof BoxShadowLine>(prop: T, index: number) =>
      (value: BoxShadowLine[T]) => {
        setBoxShadowLines(prev => {
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

  const addShadow = useCallback(() => {
    setBoxShadowLines(prev => [
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

  const deleteShadow = useCallback(
    (index: number) => e => {
      e.stopPropagation();
      setBoxShadowLines(prev => prev.filter((_, key) => key !== index));
    },
    [],
  );

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard.writeText(`box-shadow: ${boxShadow.filter(line => line).join(',\n')};`);
    toggle(1);
    setTimeout(() => {
      toggle(0);
    }, 1000);
  }, [boxShadow, toggle]);

  return (
    <BoxShadowStyle>
      <section className='box-shadow-controls'>
        <Accordion>
          {boxShadowLines.map(({ x, y, blur, spread, color, isInset }, key) => (
            <Accordion.Item
              key={key}
              title={t('box-shadow:shadow-#', { index: key + 1 })}
              subtitle={boxShadow[key] || t('box-shadow:no-shadow')}
              classNames={{
                header: 'shadows-item-header',
                body: 'shadows-item-body',
              }}
              startContent={() => <InputColor name='color' value={color} setValue={setShadow('color', key)} />}
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
                    {boxShadowLines.length > 1 && (
                      <Icon name='cross' className='delete-shadow-icon' onClick={deleteShadow(key)} />
                    )}
                  </section>
                </AccordionHeader>
              )}
            >
              <section className='input-ranges'>
                <InputRange
                  name='x'
                  label={t('box-shadow:x-position')}
                  min={-100}
                  max={100}
                  value={x}
                  setValue={setShadow('x', key)}
                />
                <InputRange
                  name='y'
                  label={t('box-shadow:y-position')}
                  min={-100}
                  max={100}
                  value={y}
                  setValue={setShadow('y', key)}
                />
                <InputRange
                  name='blur'
                  label={t('box-shadow:blur')}
                  min={0}
                  max={100}
                  value={blur}
                  setValue={setShadow('blur', key)}
                />
                <InputRange
                  name='spread'
                  label={t('box-shadow:spread')}
                  min={-100}
                  max={100}
                  value={spread}
                  setValue={setShadow('spread', key)}
                />
              </section>
              <Checkbox
                name='inset'
                label={t('box-shadow:is-inset')}
                value={isInset}
                setValue={setShadow('isInset', key)}
              />
            </Accordion.Item>
          ))}
        </Accordion>
        <section className='box-shadow-controls--actions'>
          <Button width='full' onClick={addShadow}>
            {t('box-shadow:add-shadow')}
          </Button>
          <Button width='full' onClick={copyToClipBoard} variant='ghost'>
            {copyButtonText}
          </Button>
        </section>
      </section>
      <BoxShadowSandBoxStyle>
        <section className='box-shadow-container' style={{ backgroundColor }}>
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
        </section>
        <section className='box-shadow-container-controls'>
          <InputColor name='boxColor' value={boxColor} setValue={setBoxColor} />
          <InputColor name='backgroundColor' value={backgroundColor} setValue={setBackgroundColor} />
        </section>
      </BoxShadowSandBoxStyle>
    </BoxShadowStyle>
  );
};
