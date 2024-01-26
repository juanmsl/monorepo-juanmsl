import {ThemeSelectorStyle} from "./theme-selector.style.ts";
import {Icon, useMyTheme} from "@juanmsl/ui";
import {useClassNames} from "@juanmsl/hooks";

export const ThemeSelector = () => {
  const { toggleTheme, themeName } = useMyTheme();
  const className = useClassNames({
    'light': themeName === 'light'
  })

  return (
    <ThemeSelectorStyle className={className} onClick={toggleTheme}>
      <Icon name='moon' className='dark-icon' />
      <Icon name='sun' className='light-icon' />
    </ThemeSelectorStyle>
  );
}
