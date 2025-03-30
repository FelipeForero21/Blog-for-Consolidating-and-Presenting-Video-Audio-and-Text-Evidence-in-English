
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { formatDate } from '@/lib/utils';
import CommentSection from '@/components/CommentSection';

const AboutPage = () => {
  const { language } = useLanguage();
  const aboutPost = blogPosts.find(post => post.id === "1");

  if (!aboutPost) {
    return <div>Post not found</div>;
  }

  const content = language === 'en' ? aboutPost.content : (aboutPost.contentEs || aboutPost.content);
  const title = language === 'en' ? aboutPost.title : (aboutPost.titleEs || aboutPost.title);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title={aboutPost.title}
        titleEs={aboutPost.titleEs}
        subtitle="About Me"
        subtitleEs="Acerca de Mi"
        image={aboutPost.image}
      />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-500">
                  {formatDate(aboutPost.date)}
                </span>
                <span className="blog-tag">{aboutPost.category}</span>
              </div>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            
            {aboutPost.audioLink && (
              <div className="my-8 p-6 bg-blog-accent/30 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'en' ? 'Audio Evidence' : 'Evidencia de Audio'}
                </h3>
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-gray-700">
                    {language === 'en' 
                      ? 'Listen to my audio about attitudes in the workplace:'
                      : 'Escucha mi audio sobre actitudes en el lugar de trabajo:'}
                  </p>
                  <a 
                    href={aboutPost.audioLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                  >
                    {language === 'en' ? 'Play Audio' : 'Reproducir Audio'}
                  </a>
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Tags' : 'Etiquetas'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutPost.tags.map(tag => (
                  <span key={tag} className="blog-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <CommentSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
