import { useClassNames } from '@juanmsl/hooks';
import React, { createContext, useContext, useState } from 'react';

type TabsContextState = {
  openTab: string;
  changeOpenTab: (id: string) => void;
};

const TabsContext = createContext<TabsContextState | null>(null);

const useTab = (id: string): [boolean, () => void] => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('You cant use this component out off an Tabs component');
  }

  const { openTab, changeOpenTab } = context;

  return [openTab === id, () => changeOpenTab(id)];
};

type TabsProps = {
  children: React.ReactNode;
  defaultOpenTab: string;
};

export const Tabs = ({ children, defaultOpenTab }: TabsProps) => {
  const [openTab, setOpenTab] = useState(defaultOpenTab);

  return (
    <TabsContext.Provider
      value={{
        openTab,
        changeOpenTab: id => setOpenTab(id),
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

type TabProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Tab = ({ id, children, className = '', style = {} }: TabProps) => {
  const [isOpen, openTab] = useTab(id);
  const tabClassNames = useClassNames({
    [className]: !!className,
    'is-open': isOpen,
  });

  return (
    <span className={tabClassNames} style={style} onClick={openTab}>
      {children}
    </span>
  );
};

type TabPanelProps = {
  id: string;
  children: React.ReactNode;
};

const TabPanel = ({ id, children }: TabPanelProps) => {
  const [isOpen] = useTab(id);

  if (!isOpen) {
    return null;
  }

  return children;
};

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
