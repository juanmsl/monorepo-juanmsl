import { Icon, Tooltip, useMyTheme } from 'juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { ToggleSelector } from '@components/ui';

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { themeName, toggleTheme } = useMyTheme();

  return (
    <ToggleSelector
      position={themeName === 'dark' ? 'left' : 'right'}
      tooltipPosition='bottom'
      toggle={toggleTheme}
      orientation='vertical'
    >
      <Tooltip
        content={t('utility:themeSelector.changeTheme', { theme: t(`common:themes.${themeName}`) })}
        position='left'
      >
        <Icon name='moon' />
      </Tooltip>
      <Tooltip
        content={t('utility:themeSelector.changeTheme', { theme: t(`common:themes.${themeName}`) })}
        position='left'
      >
        <Icon name='sun' />
      </Tooltip>
    </ToggleSelector>
  );
};
