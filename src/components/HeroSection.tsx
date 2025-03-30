
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  title: string;
  titleEs?: string;
  subtitle: string;
  subtitleEs?: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  titleEs = "", 
  subtitle, 
  subtitleEs = "", 
  image 
}) => {
  const { language } = useLanguage();
  
  const displayTitle = language === 'en' ? title : (titleEs || title);
  const displaySubtitle = language === 'en' ? subtitle : (subtitleEs || subtitle);

  return (
    <div className="blog-header h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={displayTitle} 
          className="w-full h-full object-cover"
          style={{ 
            opacity: 0.9, 
            filter: "brightness(0.8) contrast(1.1)" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blog-primary/40 to-blog-secondary/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="blog-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {displayTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">
              {displaySubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
