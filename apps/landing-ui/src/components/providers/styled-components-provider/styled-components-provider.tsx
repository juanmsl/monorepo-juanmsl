'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const StyledComponentsProvider = ({ children }: { children: React.ReactNode }) => {
  const styledComponentsStyleSheet = new ServerStyleSheet();

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
};
