import { Skeleton } from '@/components/ui/skeleton';
import { getPostListAction } from '@/lib/actions';

export default async function Home() {
  const userPosts = await getPostListAction();

  return (
    <main>
      <div>
        <input type="text" />
      </div>
      <ul>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <div className="flex items-center space-x-4 mt-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <h1>test</h1>
          </div>
        )}
      </ul>
    </main>
  );
}
