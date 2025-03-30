
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    titleEs?: string;
    excerpt: string;
    excerptEs?: string;
    date: string;
    image: string;
    category: string;
    tags: string[];
    slug: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { language, t } = useLanguage();
  
  const title = language === 'en' ? post.title : (post.titleEs || post.title);
  const excerpt = language === 'en' ? post.excerpt : (post.excerptEs || post.excerpt);

  return (
    <div className="blog-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="blog-tag">{post.category}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          to={`/${post.category.toLowerCase()}/${post.slug}`}
          className="inline-block bg-blog-primary hover:bg-blog-secondary text-white px-4 py-2 rounded-md transition-colors"
        >
          {t('readMore')}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
