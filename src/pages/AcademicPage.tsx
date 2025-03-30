
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const AcademicPage = () => {
  const { language, t } = useLanguage();
  
  const academicPosts = blogPosts.filter(post => post.category === 'academic');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Academic Evidence"
        titleEs="Evidencia Académica"
        subtitle="Showcasing my learning journey at SENA"
        subtitleEs="Mostrando mi viaje de aprendizaje en el SENA"
        image="/lovable-uploads/fb65b63a-6a0f-4832-96e3-e02993da57d2.png"
      />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center">
              {language === 'en' 
                ? 'This section contains documentation of my academic journey, including projects, reflections, and evidence from my studies at SENA.'
                : 'Esta sección contiene documentación de mi trayectoria académica, incluyendo proyectos, reflexiones y evidencias de mis estudios en el SENA.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {academicPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'en' 
                  ? 'No academic posts found.'
                  : 'No se encontraron publicaciones académicas.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicPage;
