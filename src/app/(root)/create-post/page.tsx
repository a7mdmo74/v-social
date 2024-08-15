'use client';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/Shared/Spinner';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { createPostAction } from '@/lib/actions';

const CreatePostPage = () => {
  const { userId } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (title.length < 3) {
      setLoading(false);
      return toast({
        variant: 'destructive',
        description: 'Title must be at least 3 characters',
      });
    }

    try {
      const postData = {
        title,
        userId: userId as string,
      };

      // @ts-ignore
      await createPostAction(postData);

      // Reset the fields
      setTitle('');
      setLoading(false);
      toast({ variant: 'default', description: 'Post created successfully' });
    } catch (error) {
      setLoading(false);
      toast({
        variant: 'destructive',
        description: `Failed to create post`,
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <Textarea
        placeholder="Type your thoughts here."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-2/3 text-slate-800"
        rows={15}
      />

      <Button onClick={handleSubmit} className="w-2/3">
        {loading ? <Spinner /> : 'Create'}
      </Button>
    </div>
  );
};

export default CreatePostPage;
