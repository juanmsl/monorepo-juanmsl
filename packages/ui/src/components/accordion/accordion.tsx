import { Line } from '../line';
import { Typography } from '../typography';
import { motion } from 'framer-motion';
import { useClassNames } from '../../hooks';
import { AccordionItemStyle, AccordionStyle } from './accordion.style';
import { Icon, IconNameT, TypographyVariants } from '../../contexts';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AccordionContextState = {
  toggleItem: (id: string) => void;
  items: Record<string, boolean>;
};

const AccordionContext = createContext<AccordionContextState | null>(null);

const useAccordionItem = (): [boolean, () => void] => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('You cant use this component out off an Accordion component');
  }

  const { toggleItem, items } = context;

  const id = useMemo(() => crypto.randomUUID(), []);

  const toggle = () => toggleItem(id);

  return [items[id], toggle];
};

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  multiple?: boolean;
};

export const Accordion = ({ children, className = '', multiple = false }: AccordionProps) => {
  const [items, setItems] = useState<Record<string, boolean>>({});

  const toggleItem = useCallback(
    (id: string) => {
      setItems(prev => ({
        ...(multiple ? prev : {}),
        [id]: !prev[id],
      }));
    },
    [multiple],
  );

  return (
    <AccordionContext.Provider
      value={{
        toggleItem,
        items,
      }}
    >
      <AccordionStyle className={className}>
        {(Array.isArray(children) ? children : [children]).flatMap((child, key) => {
          return key === 0 ? child : [<Line orientation='horizontal' key={`${key}.5`} />, child];
        })}
      </AccordionStyle>
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = {
  title: string;
  titleVariant?: `${TypographyVariants}`;
  subtitle?: string;
  subtitleVariant?: `${TypographyVariants}`;
  icon?: IconNameT;
  children: React.ReactNode;
  startContent?: (isOpen: boolean) => React.ReactNode;
  middleContent?: (data: { isOpen: boolean; title: string; subtitle?: string }) => React.ReactNode;
};

const AccordionItem = ({
  title,
  titleVariant = 'body',
  subtitle,
  subtitleVariant = 'label',
  children,
  icon = 'caret-left',
  startContent,
  middleContent,
}: AccordionItemProps) => {
  const [isOpen, toggle] = useAccordionItem();
  const headerClassName = useClassNames({
    'accordion-header': true,
    'has-start-content': !!startContent,
  });

  return (
    <AccordionItemStyle>
      <section className={headerClassName} onClick={toggle}>
        {startContent ? startContent(isOpen) : null}
        {middleContent ? (
          middleContent({ isOpen, title, subtitle })
        ) : (
          <section className='accordion-header-content'>
            <Typography variant={titleVariant} withoutPadding weight='bold'>
              {title}
            </Typography>
            <Typography variant={subtitleVariant} withoutPadding weight='light'>
              {subtitle}
            </Typography>
          </section>
        )}
        <Icon className={`accordion-toggle-icon ${isOpen ? 'isOpen' : ''}`} name={icon} />
      </section>
      <motion.section
        variants={{
          open: {
            height: 'auto',
            opacity: 1,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 200,
              restDelta: 0.01,
            },
          },
          closed: {
            height: 0,
            opacity: 0,
          },
        }}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        className='accordion-body'
      >
        <section className='accordion-body-content'>{children}</section>
      </motion.section>
    </AccordionItemStyle>
  );
};

Accordion.Item = AccordionItem;
