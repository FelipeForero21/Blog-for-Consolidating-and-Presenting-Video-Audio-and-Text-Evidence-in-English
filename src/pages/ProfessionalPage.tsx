
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const ProfessionalPage = () => {
  const { language } = useLanguage();
  
  const professionalPosts = blogPosts.filter(post => post.category === 'professional');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Professional Growth"
        titleEs="Crecimiento Profesional"
        subtitle="Documenting my career journey and professional development"
        subtitleEs="Documentando mi trayectoria profesional y desarrollo"
        image="/lovable-uploads/fb65b63a-6a0f-4832-96e3-e02993da57d2.png"
      />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center">
              {language === 'en' 
                ? 'This section showcases my professional growth, career insights, and learning experiences in the software development field.'
                : 'Esta sección muestra mi crecimiento profesional, perspectivas de carrera y experiencias de aprendizaje en el campo del desarrollo de software.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {professionalPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'en' 
                  ? 'No professional growth posts found.'
                  : 'No se encontraron publicaciones sobre crecimiento profesional.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalPage;
