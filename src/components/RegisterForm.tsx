"use client";

import { useTranslation } from 'react-i18next';

export const RegisterForm = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('register.title')}</h1>
    </div>
  );
};
