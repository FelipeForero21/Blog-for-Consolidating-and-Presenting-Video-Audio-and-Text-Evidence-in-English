
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, categories } from '@/data/blogData';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const { language } = useLanguage();
  
  // Get latest posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Luis Felipe's Learning Journey"
        titleEs="Viaje de Aprendizaje de Luis Felipe"
        subtitle="Exploring Technology, Critical Thinking, and Beyond"
        subtitleEs="Explorando Tecnología, Pensamiento Crítico y Más Allá"
        image="/lovable-uploads/7a7ab4a5-122c-42aa-ab24-db00cd7a0b5b.png"
      />
      
      <main className="flex-grow">
        {/* Latest Posts Section */}
        <section className="py-12">
          <div className="blog-container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {language === 'en' ? 'Latest Posts' : 'Publicaciones Recientes'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="blog-container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {language === 'en' ? 'Categories' : 'Categorías'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map(category => (
                <Link 
                  key={category.id}
                  to={`/${category.id}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-xl font-bold mb-2 text-blog-primary">
                    {language === 'en' ? category.name : category.nameEs}
                  </h3>
                  <span className="inline-block bg-blog-accent text-blog-primary text-xs px-2 py-1 rounded-full">
                    {blogPosts.filter(post => post.category === category.id).length} 
                    {language === 'en' ? ' posts' : ' publicaciones'}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Blog Section */}
        <section className="py-12">
          <div className="blog-container">
            <div className="bg-gradient-to-r from-blog-primary/10 to-blog-secondary/10 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">
                    {language === 'en' ? 'About This Blog' : 'Acerca de Este Blog'}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {language === 'en' 
                      ? 'Welcome to my bilingual blog exploring my academic journey at SENA, critical thinking topics, and personal interests. This platform showcases my projects, reflections, and growth as a software developer.'
                      : 'Bienvenido a mi blog bilingüe que explora mi viaje académico en el SENA, temas de pensamiento crítico e intereses personales. Esta plataforma muestra mis proyectos, reflexiones y crecimiento como desarrollador de software.'}
                  </p>
                  <Link 
                    to="/about"
                    className="inline-block bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {language === 'en' ? 'Learn More' : 'Saber Más'}
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img 
                    src="/lovable-uploads/5d96292a-4ca6-4744-8632-d84fd1cc4b07.png" 
                    alt="Blog"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
