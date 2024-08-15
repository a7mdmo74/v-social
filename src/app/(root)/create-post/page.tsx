'use client';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { createPostAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/Shared/Spinner';
import { useToast } from '@/components/ui/use-toast';
import UploadImage from '@/components/Shared/UploadImage';

const CreatePostPage = () => {
  const { userId } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (title.length < 3) {
      setLoading(false);
      return toast({
        variant: 'destructive',
        description: 'Title must be at least 3 characters',
      });
    } else {
      try {
        // @ts-ignore
        await createPostAction({
          title,
          body: 'test',
          userId: userId as string,
          slug: title.toLowerCase().replace(/\s/g, '-'),
        });
        setTitle('');
        setBody('');
        setLoading(false);
        toast({ variant: 'default', description: 'Post created successfully' });
      } catch (error) {
        setLoading(false);
        toast({ variant: 'destructive', description: 'Failed to create post' });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <UploadImage />
      </div>
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="text-black"
      />
      <Button onClick={handleSubmit}>{loading ? <Spinner /> : 'Create'}</Button>
    </div>
  );
};

export default CreatePostPage;
