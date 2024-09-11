import { Accordion, Icon, Input, InputColor, Slider, Typography } from '@juanmsl/ui';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { TextShadowStyle } from './text-shadow.style';

import { ControllerLayout, ExampleComponentProps } from '@components/layouts';
import { TextShadow } from '@components/ui';
import { TextShadowLine, TextShadowList } from '@core/constants';
import { useTextShadow } from '@hooks';

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
  const [selectedList, setSelectedList] = useState(TextShadowList[0]);
  const [textColor, setTextColor] = useState(theme.colors.primary.main);
  const [text, setText] = useState('Text Shadow 😆');

  const textShadow = useTextShadow(selectedList);

  const css = useMemo(() => `text-shadow:\n  ${textShadow.filter(line => line).join(',\n  ')};`, [textShadow]);

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
      selected={selectedList}
      setSelected={setSelectedList}
      css={css}
      selectExample={index => setSelectedList(TextShadowList[index])}
      ExampleComponent={Example}
      newItem={{
        x: 0,
        y: 0,
        blur: 0,
        color: '#000000',
      }}
      renderActions={actions}
      renderAccordionItem={({ x, y, blur, color, updateItem, deleteItem }, key) => (
        <Accordion.Item
          key={key}
          title={t('shadow:shadow-#', { index: key + 1 })}
          subtitle={textShadow[key] || t('shadow:no-shadow')}
          className='shadows-item'
          classNames={{
            header: 'shadows-item-header',
            body: 'shadows-item-body',
            subtitle: 'shadows-item-header--subtitle',
          }}
          subtitleVariant='small'
          startContent={() => <InputColor name='color' value={color} setValue={updateItem('color', key)} />}
          endContent={() =>
            selectedList.length > 1 ? (
              <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem(key)} />
            ) : null
          }
        >
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
        </Accordion.Item>
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
