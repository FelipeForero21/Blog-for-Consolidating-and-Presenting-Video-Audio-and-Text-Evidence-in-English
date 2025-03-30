
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const TravelPage = () => {
  const { language } = useLanguage();
  
  const travelPosts = blogPosts.filter(post => post.category === 'travel');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Travel & Interests"
        titleEs="Viajes e Intereses"
        subtitle="Exploring places and sharing my passions"
        subtitleEs="Explorando lugares y compartiendo mis pasiones"
        image="/lovable-uploads/c30ee6e5-ba05-491f-8376-c2cbc4242fa6.png"
      />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center">
              {language === 'en' 
                ? 'This section showcases my travels and personal interests, including my experiences visiting different places and exploring various hobbies.'
                : 'Esta sección muestra mis viajes e intereses personales, incluyendo mis experiencias visitando diferentes lugares y explorando varios pasatiempos.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {travelPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'en' 
                  ? 'No travel posts found.'
                  : 'No se encontraron publicaciones de viajes.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelPage;
