import { motion } from 'framer-motion';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { Icon, IconNameT, TypographyVariants } from '../../contexts';
import { useClassNames } from '../../hooks';
import { Line } from '../line';
import { Typography } from '../typography';

import { AccordionItemStyle, AccordionStyle } from './accordion.style';

const variants = {
  body: {
    open: {
      height: 'auto',
      opacity: 1,
      /*
       * transition: {
       *   type: 'spring',
       *   damping: 10,
       *   stiffness: 200,
       *   restDelta: 0.01,
       * },
       */
    },
    closed: {
      height: 0,
      opacity: 0,
    },
  },
};

type AccordionContextState = {
  toggleItem: (id: string) => void;
  openedItem: string;
};

const AccordionContext = createContext<AccordionContextState | null>(null);

const useAccordionItem = (id: string): [boolean, () => void] => {
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
};

export const Accordion = ({ children, className = '' }: AccordionProps) => {
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
  endContent?: (isOpen: boolean) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  classNames?: {
    header?: string;
    headerContent?: string;
    title?: string;
    subtitle?: string;
    toggleIcon?: string;
    body?: string;
  };
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
  endContent,
  classNames = {},
  className = '',
  style = {},
}: AccordionItemProps) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const [isOpen, toggle] = useAccordionItem(id);
  const headerClassName = useClassNames({
    'accordion-header': true,
    'has-start-content': !!startContent,
    [classNames?.header ?? '']: !!classNames?.header,
    'is-open': isOpen,
  });

  const headerContentClassName = useClassNames({
    'accordion-header-content': true,
    [classNames?.headerContent ?? '']: !!classNames?.headerContent,
  });

  const toggleIconClassName = useClassNames({
    'accordion-toggle-icon': true,
    isOpen: isOpen,
    [classNames?.toggleIcon ?? '']: !!classNames?.toggleIcon,
  });

  const bodyContentClassName = useClassNames({
    'accordion-body-content': true,
    [classNames?.body ?? '']: !!classNames?.body,
  });

  const headerStart = useMemo(() => (startContent ? startContent(isOpen) : null), [isOpen, startContent]);

  const headerMiddle = useMemo(
    () =>
      middleContent ? (
        middleContent({ isOpen, title, subtitle })
      ) : (
        <section className={headerContentClassName}>
          <Typography className={classNames?.title} variant={titleVariant} withoutPadding weight='bold'>
            {title}
          </Typography>
          <Typography className={classNames?.subtitle} variant={subtitleVariant} withoutPadding weight='light'>
            {subtitle}
          </Typography>
        </section>
      ),
    [
      classNames?.subtitle,
      classNames?.title,
      headerContentClassName,
      isOpen,
      middleContent,
      subtitle,
      subtitleVariant,
      title,
      titleVariant,
    ],
  );

  const headerEnd = useMemo(
    () => (endContent ? endContent(isOpen) : <Icon className={toggleIconClassName} name={icon} />),
    [endContent, icon, isOpen, toggleIconClassName],
  );

  return (
    <AccordionItemStyle className={className} style={style}>
      <section className={headerClassName} onClick={toggle}>
        {headerStart}
        {headerMiddle}
        {headerEnd}
      </section>
      <motion.section
        variants={variants.body}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        className='accordion-body'
      >
        <section className={bodyContentClassName}>{children}</section>
      </motion.section>
    </AccordionItemStyle>
  );
};

Accordion.Item = AccordionItem;
