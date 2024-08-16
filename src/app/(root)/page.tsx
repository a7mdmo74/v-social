import PostCard from '@/components/Cards/PostCard';
import { getPostListAction } from '@/lib/actions';
import { clerkClient, User } from '@clerk/nextjs/server';

export default async function Home() {
  const userPosts = await getPostListAction();

  return (
    <main>
      <div className="flex flex-col gap-12 mt-12">
        {userPosts.map(async (post) => {
          const user: User = await clerkClient.users.getUser(post.userId);
          return <PostCard post={post} user={user} key={post.id} />;
        })}
      </div>
    </main>
  );
}
