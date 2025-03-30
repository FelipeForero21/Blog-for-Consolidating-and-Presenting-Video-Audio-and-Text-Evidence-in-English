
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="blog-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-blog-primary">
            Luis Felipe's <span className="text-blog-secondary">Learning Journey</span>
          </Link>
          
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <Link to="/" className="hover:text-blog-secondary">
                {t('home')}
              </Link>
              <Link to="/about" className="hover:text-blog-secondary">
                {t('about')}
              </Link>
              <Link to="/academic" className="hover:text-blog-secondary">
                {t('academic')}
              </Link>
              <Link to="/critical" className="hover:text-blog-secondary">
                {t('critical')}
              </Link>
              <Link to="/travel" className="hover:text-blog-secondary">
                {t('travel')}
              </Link>
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="language-switcher"
            >
              <Globe size={16} />
              <span>{t('language')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
