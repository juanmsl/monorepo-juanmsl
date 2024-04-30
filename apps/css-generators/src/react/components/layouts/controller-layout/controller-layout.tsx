import { Accordion, Button, useToggleValues } from '@juanmsl/ui';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ControllerLayoutStyle, ControllerStyle, ExamplesStyle, SandboxStyle } from './controller-layout.style';

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
  copyCSSToClipboard: () => void;
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
  copyCSSToClipboard,
}: ControllerLayoutProps<T>) => {
  const { t } = useTranslation();
  const [copyButtonText, toggle] = useToggleValues([t('controls:copy-css'), t('controls:copied')]);

  const copyToClipBoard = useCallback(() => {
    copyCSSToClipboard();
    toggle(1);
    setTimeout(() => {
      toggle(0);
    }, 1000);
  }, [copyCSSToClipboard, toggle]);

  return (
    <ControllerLayoutStyle>
      <ControllerStyle>
        <section className='controller-tabs'>{renderActions()}</section>
        <Accordion className='controller-controls'>
          {selected.map((data, key) => renderAccordionItem(data, key))}
        </Accordion>
        <section className='controller-actions'>
          <Button width='full' onClick={addItem}>
            {t('controls:add-shadow')}
          </Button>
          <Button width='full' onClick={copyToClipBoard} variant='ghost'>
            {copyButtonText}
          </Button>
        </section>
      </ControllerStyle>

      <SandboxStyle style={{ background: sandboxBackground }}>{children}</SandboxStyle>

      <ExamplesStyle>{list.map(renderExample)}</ExamplesStyle>
    </ControllerLayoutStyle>
  );
};
