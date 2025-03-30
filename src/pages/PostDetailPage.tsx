
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';

const PostDetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { language } = useLanguage();
  
  const post = blogPosts.find(
    post => post.category === category && post.slug === slug
  );

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Post Not Found' : 'Publicación No Encontrada'}
            </h1>
            <p className="mb-6 text-gray-600">
              {language === 'en' 
                ? 'The post you are looking for does not exist.'
                : 'La publicación que estás buscando no existe.'}
            </p>
            <Link 
              to="/"
              className="bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors"
            >
              {language === 'en' ? 'Return Home' : 'Volver al Inicio'}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const content = language === 'en' ? post.content : (post.contentEs || post.content);
  const title = language === 'en' ? post.title : (post.titleEs || post.title);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={title} 
          className="w-full h-full object-cover"
          style={{ opacity: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blog-primary/40 to-blog-secondary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="text-white bg-blog-primary/70 px-3 py-1 rounded-full text-sm">
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            
            {/* Media attachments */}
            <div className="space-y-6 my-8">
              {post.audioLink && (
                <div className="p-6 bg-blog-accent/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'en' ? 'Audio Content' : 'Contenido de Audio'}
                  </h3>
                  <div className="flex justify-center">
                    <a 
                      href={post.audioLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                    >
                      {language === 'en' ? 'Listen to Audio' : 'Escuchar Audio'}
                    </a>
                  </div>
                </div>
              )}
              
              {post.videoLink && (
                <div className="p-6 bg-blog-accent/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'en' ? 'Video Content' : 'Contenido de Video'}
                  </h3>
                  <div className="flex justify-center">
                    <a 
                      href={post.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                    >
                      {language === 'en' ? 'Watch Video' : 'Ver Video'}
                    </a>
                  </div>
                </div>
              )}
              
              {post.pdfLink && (
                <div className="p-6 bg-blog-accent/30 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'en' ? 'PDF Document' : 'Documento PDF'}
                  </h3>
                  <div className="flex justify-center">
                    <a 
                      href={post.pdfLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                    >
                      {language === 'en' ? 'View PDF' : 'Ver PDF'}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <CommentSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostDetailPage;
