import {ThemeSelectorStyle} from "./theme-selector.style.ts";
import {Tooltip, useMyTheme} from "@juanmsl/ui";
import {useTranslation} from "react-i18next";

export const ThemeSelector = () => {
  const { toggleTheme, themeName } = useMyTheme();
  const { t } = useTranslation();

  return (
    <Tooltip
      position='left'
      content={t('utility:themeSelector.changeTheme', { theme: t(`common:themes.${themeName === 'light' ? 'dark' : 'light'}`) })}
      disabled
    >
      <ThemeSelectorStyle selected={themeName} onClick={toggleTheme}>
        <span className='dot' />
      </ThemeSelectorStyle>
    </Tooltip>
  );
}
