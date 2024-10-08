import React, { createContext, useCallback, useContext, useState } from 'react';

import { Line } from '../line';

import { AccordionStyle } from './accordion.style';

type AccordionContextState = {
  toggleItem: (id: string) => void;
  openedItem: string;
};

const AccordionContext = createContext<AccordionContextState | null>(null);

export const useAccordionItem = (id: string): [boolean, () => void] => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('You cant use this component out off an Accordion component');
  }

  const { toggleItem, openedItem } = context;

  const toggle = () => toggleItem(id);

  return [openedItem === id, toggle];
};

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noSeparators?: boolean;
};

export const Accordion = ({ children, className = '', noSeparators, style = {} }: AccordionProps) => {
  const [openedItem, setOpenedItem] = useState<string>('');

  const toggleItem = useCallback((id: string) => {
    setOpenedItem(prev => (prev === id ? '' : id));
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        toggleItem,
        openedItem,
      }}
    >
      <AccordionStyle className={className} style={style}>
        {(Array.isArray(children) ? children : [children]).flatMap((child, key) => {
          return key === 0 ? child : [noSeparators ? null : <Line orientation='horizontal' key={`${key}.5`} />, child];
        })}
      </AccordionStyle>
    </AccordionContext.Provider>
  );
};
