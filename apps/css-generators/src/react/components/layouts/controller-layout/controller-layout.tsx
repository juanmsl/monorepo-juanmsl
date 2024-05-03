import { Accordion, Button, Tabs, Typography, useToggleValues } from '@juanmsl/ui';
import { fromHighlighter } from '@shikijs/markdown-it/core';
import { motion } from 'framer-motion';
import MarkdownIt from 'markdown-it';
import React, { useCallback, useEffect, useState } from 'react';
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

type ControllerLayoutProps<T> = {
  children: React.ReactNode;
  list: Array<Array<T>>;
  selected: Array<T>;
  renderAccordionItem: (data: T, key: number) => React.ReactNode;
  renderExample: (data: Array<T>, key: number) => React.ReactNode;
  addItem: () => void;
  sandboxBackground?: string;
  renderActions: () => React.ReactNode;
  css: string;
};

export const ControllerLayout = <T,>({
  children,
  list,
  renderAccordionItem,
  renderExample,
  addItem,
  selected,
  sandboxBackground,
  renderActions,
  css,
}: ControllerLayoutProps<T>) => {
  const { t } = useTranslation();
  const [copyButtonText, toggle] = useToggleValues([t('controls:copy-css'), t('controls:copied')]);
  const [html, setHtml] = useState(null);

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

  return (
    <Tabs defaultOpenTab='controls'>
      <ControllerLayoutStyle>
        <ControllerStyle>
          <section className='controller-tabs'>
            <Tabs.Tab className='controller-tabs--tab' id='controls'>
              <Typography variant='label' weight='bold'>
                Controls
              </Typography>
            </Tabs.Tab>
            <Tabs.Tab className='controller-tabs--tab' id='foreground'>
              <Typography variant='label' weight='bold'>
                Foreground
              </Typography>
            </Tabs.Tab>
          </section>

          <Tabs.TabPanel id='controls'>
            <section className='controller-controls'>
              <Accordion className='controller-controls--accordeon' noSeparators>
                {selected.map((data, key) => renderAccordionItem(data, key))}
              </Accordion>
            </section>
          </Tabs.TabPanel>

          <Tabs.TabPanel id='foreground'>
            <section className='controller-controls'>{renderActions()}</section>
          </Tabs.TabPanel>

          <section className='controller-actions'>
            <Tabs.TabPanel id='controls'>
              <Button width='full' onClick={addItem}>
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

        <SandboxStyle style={{ background: sandboxBackground }}>
          <motion.section
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

        <ExamplesStyle>{list.map(renderExample)}</ExamplesStyle>
      </ControllerLayoutStyle>
    </Tabs>
  );
};
