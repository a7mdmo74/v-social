// import { getNewsArticleApiAction } from '@/lib/actions';
import React from 'react';

const NewsPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  // const newsArticle = await getNewsArticleApiAction({ id: params.id });
  // console.log(newsArticle);

  return <div>NewsPage</div>;
};

export default NewsPage;
