import {LanguageSelectorStyle} from "./language-selector.style.ts";
import {useTranslation} from "react-i18next";
import {useClassNames} from "@juanmsl/hooks";
import {Tooltip} from "@juanmsl/ui";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const enUSClassname = useClassNames({
    'language-item': true,
    'selected': i18n.language === 'en'
  });
  const esESClassname = useClassNames({
    'language-item': true,
    'selected': i18n.language === 'es'
  });

  return (
    <LanguageSelectorStyle>
      <Tooltip content={t('common:languages.en')} position='bottom'>
        <span className={enUSClassname} onClick={() => i18n.changeLanguage('en')}>
          <img
            className='language-image'
            src='https://vectorflags.s3-us-west-2.amazonaws.com/flags/us-square-01.png'
            alt={t('common:languages.en')}
          />
        </span>
      </Tooltip>
      <Tooltip content={t('common:languages.es')} position='bottom'>
        <span className={esESClassname} onClick={() => i18n.changeLanguage('es')}>
          <img
            className='language-image'
            src='https://vectorflags.s3-us-west-2.amazonaws.com/flags/es-square-01.png'
            alt={t('common:languages.es')}
          />
        </span>
      </Tooltip>
    </LanguageSelectorStyle>
  );
};
