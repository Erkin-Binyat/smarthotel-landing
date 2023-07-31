"use client"
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher= () => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const languageNames = useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: 'language',
    });
  }, [currentLanguage]);


  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router]
  );

  return (
    <select className='form-select' style={{marginTop: "-5px",textTransform: 'uppercase', paddingBlock: "11px"}} onChange={(e) => {switchToLocale(e.target.value)}}>
      <option defaultValue="">{currentLanguage}</option>
      {locales.map((locale) => {
        const label = locale;
        const option = {
          value: locale,
          label,
        };
        return currentLanguage !== option.label && <option key={locale} value={option.value}>{label}</option>;
      })}
    </select>
  )
}

export default LanguageSwitcher;