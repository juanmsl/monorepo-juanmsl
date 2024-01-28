import {useTranslation} from "react-i18next";
import {useCallback} from "react";
import {ToggleSelector} from "@/components/ui";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.languages.includes('en');

  const handleToggle = useCallback(() => {
    if (isEnglish) i18n.changeLanguage('es');
    else i18n.changeLanguage('en');
  }, [isEnglish]);

  return (
    <ToggleSelector
      position={isEnglish ? 'left' : 'right'}
      leftLabel={t('common:languages.en')}
      rightLabel={t('common:languages.es')}
      tooltipPosition='bottom'
      toggle={handleToggle}
    >
      <img
        className='language-image'
        src='https://vectorflags.s3-us-west-2.amazonaws.com/flags/us-square-01.png'
        alt={t('common:languages.en')}
        width='100%'
        height='100%'
        style={{ borderRadius: '50%' }}
      />
      <img
        className='language-image'
        src='https://vectorflags.s3-us-west-2.amazonaws.com/flags/es-square-01.png'
        alt={t('common:languages.es')}
        width='100%'
        height='100%'
        style={{ borderRadius: '50%' }}
      />
    </ToggleSelector>
  );
};
