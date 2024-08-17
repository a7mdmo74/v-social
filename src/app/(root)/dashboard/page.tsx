import PostCard from '@/components/Cards/PostCard';
import { getUserPostListAction } from '@/lib/actions';
import { currentUser, User } from '@clerk/nextjs/server';
import React from 'react';

const Dashboard = async () => {
  const user: User | null = await currentUser();

  const userPosts = await getUserPostListAction({ userId: user!.id });
  return (
    <div>
      <h2 className="text-2xl font-mono">
        Welcome {user?.fullName} to your dashboard
      </h2>
      <h3 className="mt-6 mb-3 text-center">Your posts</h3>
      <div className="flex flex-col gap-12 mt-12">
        {userPosts.map(async (post) => {
          return <PostCard post={post} user={user} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
