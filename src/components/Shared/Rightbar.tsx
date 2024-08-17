import { getNewsApiAction } from '@/lib/actions';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';

async function Rightbar() {
  const news = await getNewsApiAction();
  const randomNews = news.sort(() => Math.random() - Math.random()).slice(0, 4);
  return (
    <section className="custom-scrollbar rightsidebar">
      <h3 className="text-center mt-2 text-xl font-semibold">Trending News</h3>
      <div className="flex flex-col justify-start">
        {news.length > 0 ? (
          randomNews.map((news: any) => (
            <div key={news.id} className="flex justify-start mb-4 gap-3">
              <Link
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-end"
              >
                {news.title}
              </Link>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[120px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[120px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[120px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Rightbar;
