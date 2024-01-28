import {Icon, Tooltip, useMyTheme} from "@juanmsl/ui";
import {ToggleSelector} from "@/components/ui";
import {useTranslation} from "react-i18next";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { themeName, toggleTheme } = useMyTheme();

  return (
    <Tooltip content={t('utility:themeSelector.changeTheme', { theme: t(`common:themes.${themeName}`) })} position='left'>
      <ToggleSelector
        position={themeName === 'dark' ? 'left' : 'right'}
        tooltipPosition='bottom'
        toggle={toggleTheme}
      >
        <Icon name='moon' />
        <Icon name='sun' />
      </ToggleSelector>
    </Tooltip>
  );
};
