
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
}

const CommentSection = () => {
  const { t } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: 'John Doe',
      date: '2023-10-15',
      content: 'Great insights on critical thinking! I especially liked the part about evaluating sources.'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      date: '2023-10-16',
      content: '¡Excelente artículo! Me encantó la perspectiva sobre la alfabetización mediática.'
    }
  ]);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !commentText.trim()) return;
    
    const newComment: Comment = {
      id: comments.length + 1,
      name,
      date: new Date().toISOString().split('T')[0],
      content: commentText
    };
    
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setCommentText('');
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">{t('comments')} ({comments.length})</h3>
      
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-6">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold">{comment.name}</h4>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">{t('leaveComment')}</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1">{t('yourName')}</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">{t('yourEmail')}</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block mb-1">{t('yourComment')}</label>
            <Textarea
              id="comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" className="bg-blog-primary hover:bg-blog-secondary">
            {t('submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
