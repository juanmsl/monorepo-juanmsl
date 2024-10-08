import { useToggleValues } from '@juanmsl/hooks';
import { Accordion, Button, InputColor, Tabs, Typography } from '@juanmsl/ui';
import { fromHighlighter } from '@shikijs/markdown-it/core';
import { motion } from 'framer-motion';
import MarkdownIt from 'markdown-it';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHighlighterCore } from 'shiki/core';

import {
  ControllerLayoutStyle,
  ControllerStyle,
  CSSStyle,
  ExamplesStyle,
  SandboxStyle,
} from './controller-layout.style';

const md = MarkdownIt();

export type UpdateItem<T> = <tValue extends keyof T>(prop: tValue, index: number) => (value: T[tValue]) => void;
export type DeleteItem = (index: number) => (e: React.MouseEvent) => void;

export type ExampleComponentProps<T> = {
  index: number;
  onClick: () => void;
  example: Array<T>;
};

type ControllerLayoutProps<T> = {
  children: React.ReactNode;
  list: Array<Array<T>>;
  selected: Array<T>;
  setSelected: React.Dispatch<React.SetStateAction<Array<T>>>;
  renderAccordionItem: (
    data: T & {
      updateItem: UpdateItem<T>;
      deleteItem: DeleteItem;
    },
    key: number,
  ) => React.ReactNode;
  ExampleComponent: React.FC<ExampleComponentProps<T>>;
  renderActions: () => React.ReactNode;
  selectExample: (index: number) => void;
  css: string;
  newItem: T;
};

export const ControllerLayout = <T,>({
  children,
  list,
  renderAccordionItem,
  ExampleComponent,
  newItem,
  selected,
  setSelected,
  renderActions,
  css,
  selectExample,
}: ControllerLayoutProps<T>) => {
  const { t } = useTranslation();
  const [copyButtonText, toggle] = useToggleValues([t('controls:copy-css'), t('controls:copied')]);
  const [html, setHtml] = useState(null);
  const sandboxRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLElement>(null);
  const [sandboxBackground, setSandboxBackground] = useState('#33333300');

  useEffect(() => {
    const transform = async () => {
      const highlighter = await getHighlighterCore({
        themes: [import('shiki/themes/github-dark-default.mjs')],
        langs: [import('shiki/langs/css.mjs')],
        loadWasm: import('shiki/wasm'),
      });

      md.use(
        fromHighlighter(highlighter, {
          theme: 'github-dark-default',
        }),
      );

      const render = md.render(`\`\`\`css\n${css}\n\`\`\``);
      setHtml(render);
    };

    void transform();
  }, [css]);

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard.writeText(css);
    toggle(1);
    setTimeout(() => {
      toggle(0);
    }, 1000);
  }, [css, toggle]);

  const deleteItem: DeleteItem = (index: number) => e => {
    e.stopPropagation();
    setSelected(prev => prev.filter((_, key) => key !== index));
  };

  const updateItem: UpdateItem<T> = (prop, index) => value => {
    setSelected(prev => {
      const data = [...prev];
      data[index] = {
        ...prev[index],
        [prop]: value,
      };

      return data;
    });
  };

  const addItem = () => {
    setSelected(prev => [...prev, newItem]);
  };

  return (
    <Tabs defaultOpenTab='controls'>
      <ControllerLayoutStyle>
        <ControllerStyle>
          <Tabs.TabList
            className='controller-tabs'
            color='primary'
            variant='flat'
            radius='medium'
            size='large'
            tabs={[
              { id: 'controls', label: t('controls:controls') },
              { id: 'foreground', label: t('controls:foreground') },
            ]}
          />

          <Tabs.TabPanel id='controls'>
            <section className='controller-controls'>
              <Accordion className='controller-controls--accordeon' noSeparators>
                {selected.map((data, key) => renderAccordionItem({ ...data, deleteItem, updateItem }, key))}
              </Accordion>
            </section>
          </Tabs.TabPanel>

          <Tabs.TabPanel id='foreground'>
            <section className='controller-controls'>
              <section className='controller-controls--content'>
                <InputColor
                  showValueText
                  label={t('controls:background')}
                  name='backgroundColor'
                  value={sandboxBackground}
                  setValue={setSandboxBackground}
                />
                {renderActions()}
              </section>
            </section>
          </Tabs.TabPanel>

          <section className='controller-actions'>
            <Tabs.TabPanel id='controls'>
              <Button width='full' onClick={addItem} color='primary'>
                {t('controls:add-shadow')}
              </Button>
            </Tabs.TabPanel>
          </section>
        </ControllerStyle>

        <CSSStyle onClick={copyToClipBoard}>
          <section className='code' dangerouslySetInnerHTML={{ __html: html }} />
          <section className='overlay'>
            <Typography>{copyButtonText}</Typography>
          </section>
        </CSSStyle>

        <SandboxStyle ref={sandboxRef} style={{ background: sandboxBackground }}>
          <motion.section
            ref={objectRef}
            drag
            style={{ cursor: 'move' }}
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {children}
          </motion.section>
        </SandboxStyle>

        <ExamplesStyle>
          {list.map((example, key) => (
            <ExampleComponent key={key} index={key} onClick={() => selectExample(key)} example={example} />
          ))}
        </ExamplesStyle>
      </ControllerLayoutStyle>
    </Tabs>
  );
};
