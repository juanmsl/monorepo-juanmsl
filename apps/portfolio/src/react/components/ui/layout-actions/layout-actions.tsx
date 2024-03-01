import { LayoutActionsStyle } from './layout-actions.style';
import { LanguageSelector, ThemeSelector } from '@components/ui';

export const LayoutActions = () => {
  return (
    <LayoutActionsStyle>
      <ThemeSelector />
      <LanguageSelector />
    </LayoutActionsStyle>
  );
};
