
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-switcher"
    >
      <Globe size={16} />
      <span>{t('language')}</span>
    </button>
  );
};

export default LanguageSwitcher;
