import { AccordionItem, Grid, Icon, InputColor, Typography } from 'polpo/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ControllerLayout, ExampleComponentProps } from '@components/layouts';
import { ColorBox } from '@components/ui';
import { GradientBox } from '@components/ui/gradient-box';
import { GradientLine, GradientList } from '@core/constants';

const Example = ({ example, onClick }: ExampleComponentProps<GradientLine>) => {
  return (
    <Grid gap='4px'>
      {example.map((line, key) => (
        <ColorBox key={key} onClick={onClick} color={line.color} size={40} />
      ))}
    </Grid>
  );
};

export const GradientsPage = () => {
  const { t } = useTranslation();

  return (
    <ControllerLayout
      list={GradientList}
      getCSS={item => `background: linear-gradient(\n  ${item.map(line => line.color).join(',\n  ')}\n);`}
      ExampleComponent={Example}
      newItem={{
        color: '#2e0da5',
      }}
      renderActions={() => null}
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
                  {item.color || t('shadow:no-shadow')}
                </Typography>
              </section>
              {deleteItem ? <Icon name='cross' className='delete-shadow-icon' onClick={deleteItem} /> : null}
            </Grid>
          }
        >
          :D
        </AccordionItem>
      )}
    >
      {item => (
        <Grid flow='column' gap='1em' jc='center' style={{ padding: '4em 2em' }}>
          <Grid ji='center' gap={4}>
            {item.slice(0, item.length - 1).map(({ color }, key) => (
              <React.Fragment key={key}>
                {key === 0 && <ColorBox width={280} size={60} color={color} />}
                <GradientBox colors={[color, item[key + 1].color]} degree={key % 2 === 0 ? 135 : -135} />
                <ColorBox width={280} size={60} reverse={key % 2 === 0} color={item[key + 1].color} />
              </React.Fragment>
            ))}
          </Grid>
          <section
            style={{
              background: `linear-gradient(${item.map(line => line.color).join(', ')})`,
              height: '100%',
              width: '50px',
              borderRadius: '50px',
            }}
          />
        </Grid>
      )}
    </ControllerLayout>
  );
};
