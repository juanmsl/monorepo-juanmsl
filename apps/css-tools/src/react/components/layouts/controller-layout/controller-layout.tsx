import { fromHighlighter } from '@shikijs/markdown-it/core';
import { motion } from 'framer-motion';
import MarkdownIt from 'markdown-it';
import { useToggleValues } from 'polpo/hooks';
import { Accordion, Button, Icon, InputColor, Tabs, Tooltip, Typography } from 'polpo/ui';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHighlighterCore } from 'shiki/core';

import {
  ControllerLayoutStyle,
  ControllerStyle,
  CSSStyle,
  ExamplesStyle,
  ExampleTriggerStyle,
  SandboxStyle,
} from './controller-layout.style';

const md = MarkdownIt();

export type UpdateItem<T> = <tValue extends keyof T>(prop: tValue) => (value: T[tValue]) => void;
export type DeleteItem = (e: React.MouseEvent) => void;

export type ExampleComponentProps<T> = {
  index: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  example: Array<T>;
};

type ControllerLayoutProps<T> = {
  children: (item: Array<T>) => React.ReactNode;
  list: Array<Array<T>>;
  renderAccordionItem: (data: {
    index: number;
    item: T;
    updateItem: UpdateItem<T>;
    deleteItem: DeleteItem | undefined;
  }) => React.ReactNode;
  ExampleComponent: React.FC<ExampleComponentProps<T>>;
  renderActions: () => React.ReactNode;
  getCSS: (item: Array<T>) => string;
  newItem: T;
};

export const ControllerLayout = <T,>({
  children,
  list,
  renderAccordionItem,
  ExampleComponent,
  newItem,
  renderActions,
  getCSS,
}: ControllerLayoutProps<T>) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Array<T>>(list[0]);
  const [copyButtonText, toggle] = useToggleValues([t('controls:copy-css'), t('controls:copied')]);
  const [html, setHtml] = useState(null);
  const [isExamplesSectionOpen, setIsExamplesSectionOpen] = useState(false);
  const sandboxRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLElement>(null);
  const [sandboxBackground, setSandboxBackground] = useState('#33333300');

  const css = useMemo(() => getCSS(selected), [selected, getCSS]);

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

  const deleteItem =
    (index: number): DeleteItem =>
    e => {
      e.stopPropagation();
      setSelected(prev => prev.filter((_, key) => key !== index));
    };

  const updateItem =
    (index: number): UpdateItem<T> =>
    prop =>
    value => {
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
        <section className='controller-layout-content'>
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
              {children(selected)}
            </motion.section>
          </SandboxStyle>

          <ExamplesStyle
            className={isExamplesSectionOpen ? 'is-open' : ''}
            onClick={() => setIsExamplesSectionOpen(false)}
          >
            {list.map((example, key) => (
              <ExampleComponent
                key={key}
                index={key}
                onClick={event => {
                  event.stopPropagation();
                  setSelected(list[key]);
                }}
                example={example}
              />
            ))}
          </ExamplesStyle>

          <Tooltip content={isExamplesSectionOpen ? 'Close examples' : 'Open more examples'} position='right'>
            <ExampleTriggerStyle onClick={() => setIsExamplesSectionOpen(p => !p)}>
              <Icon name={isExamplesSectionOpen ? 'cross' : 'caret-up'} />
            </ExampleTriggerStyle>
          </Tooltip>
        </section>

        <section className='controller-layout-controls'>
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
                  {selected.map((data, key) =>
                    renderAccordionItem({
                      item: data,
                      index: key,
                      deleteItem: selected.length > 1 ? deleteItem(key) : undefined,
                      updateItem: updateItem(key),
                    }),
                  )}
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
        </section>
      </ControllerLayoutStyle>
    </Tabs>
  );
};
