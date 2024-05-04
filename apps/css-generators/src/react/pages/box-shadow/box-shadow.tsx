import { Accordion, Checkbox, Icon, InputColor, InputRange } from '@juanmsl/ui';
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
  const [boxColor, setBoxColor] = useState(theme.colors.primary);

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
      <InputRange
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
        <Accordion.Item
          key={key}
          title={t('shadow:shadow-#', { index: key + 1 })}
          subtitle={boxShadow[key] || t('shadow:no-shadow')}
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
          <Checkbox name='inset' label={t('controls:is-inset')} value={isInset} setValue={updateItem('isInset', key)} />
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
        </Accordion.Item>
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
