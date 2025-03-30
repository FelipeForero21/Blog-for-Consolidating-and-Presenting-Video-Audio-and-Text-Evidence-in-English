
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'home': 'Home',
    'about': 'About Me',
    'academic': 'Academic Evidence',
    'critical': 'Critical Topics',
    'travel': 'Travel & Interests',
    'search': 'Search...',
    'readMore': 'Read More',
    'language': 'Español',
    'postedOn': 'Posted on',
    'tags': 'Tags',
    'comments': 'Comments',
    'leaveComment': 'Leave a comment',
    'yourName': 'Your Name',
    'yourEmail': 'Your Email',
    'yourComment': 'Your Comment',
    'submit': 'Submit',
    'recentPosts': 'Recent Posts',
    'categories': 'Categories',
    'subscribe': 'Subscribe',
    'subscribeDesc': 'Get the latest posts delivered straight to your inbox.',
    'emailAddress': 'Email Address',
    'subscribe.button': 'Subscribe',
    'followMe': 'Follow Me',
    'copyright': '© 2023 Luis Felipe. All rights reserved.',
  },
  es: {
    'home': 'Inicio',
    'about': 'Acerca de Mi',
    'academic': 'Evidencia Académica',
    'critical': 'Temas Críticos',
    'travel': 'Viajes e Intereses',
    'search': 'Buscar...',
    'readMore': 'Leer Más',
    'language': 'English',
    'postedOn': 'Publicado el',
    'tags': 'Etiquetas',
    'comments': 'Comentarios',
    'leaveComment': 'Dejar un comentario',
    'yourName': 'Su Nombre',
    'yourEmail': 'Su Correo Electrónico',
    'yourComment': 'Su Comentario',
    'submit': 'Enviar',
    'recentPosts': 'Publicaciones Recientes',
    'categories': 'Categorías',
    'subscribe': 'Suscribirse',
    'subscribeDesc': 'Reciba las últimas publicaciones directamente en su bandeja de entrada.',
    'emailAddress': 'Dirección de Correo Electrónico',
    'subscribe.button': 'Suscribirse',
    'followMe': 'Sígueme',
    'copyright': '© 2023 Luis Felipe. Todos los derechos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
