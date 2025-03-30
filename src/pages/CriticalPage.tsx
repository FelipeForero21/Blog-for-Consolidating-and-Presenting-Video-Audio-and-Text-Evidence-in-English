
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const CriticalPage = () => {
  const { language } = useLanguage();
  
  const criticalPosts = blogPosts.filter(post => post.category === 'critical');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Critical Topics"
        titleEs="Temas Críticos"
        subtitle="Exploring important issues and developing critical thinking"
        subtitleEs="Explorando temas importantes y desarrollando pensamiento crítico"
        image="/lovable-uploads/cf9e88f2-6623-4cd0-bddc-969aa72c6d19.png"
      />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center">
              {language === 'en' 
                ? 'This section contains my reflections on critical topics such as media literacy, cybercrime, and other subjects that require thoughtful analysis.'
                : 'Esta sección contiene mis reflexiones sobre temas críticos como alfabetización mediática, ciberdelincuencia y otros temas que requieren un análisis cuidadoso.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {criticalPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {criticalPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'en' 
                  ? 'No critical topic posts found.'
                  : 'No se encontraron publicaciones sobre temas críticos.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CriticalPage;
