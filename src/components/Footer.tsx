
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-blog-primary/10 via-blog-accent to-blog-secondary/10 pt-12 pb-6">
      <div className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Luis Felipe's Blog</h3>
            <p className="text-gray-600 mb-4">
              Exploring Technology, Critical Thinking, and Beyond
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('recentPosts')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/critical/media-literacy" className="text-gray-600 hover:text-blog-primary">
                  Critical Thinking & Media Literacy
                </a>
              </li>
              <li>
                <a href="/critical/cybercrime" className="text-gray-600 hover:text-blog-primary">
                  Cybercrime: Penalties and Prevention
                </a>
              </li>
              <li>
                <a href="/travel/villa-de-leyva" className="text-gray-600 hover:text-blog-primary">
                  Villa de Leyva: A Colombian Gem
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
