'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Article } from '../../../types';

interface IProps {
  article: Article;
  allArticles: Article[];
}

function ArticlesFooter({ article, allArticles }: IProps) {
  const [nextArticle, setNextArticle] = useState<Article>();

  useEffect(() => {
    let NextArticleIndex = -1;

    for (let i = 0; i < allArticles.length; i += 1) {
      if (article._id === allArticles[i]._id) {
        NextArticleIndex = i;
        break;
      }
    }

    if (NextArticleIndex < allArticles.length) {
      setNextArticle(allArticles[NextArticleIndex + 1]);
    }
  }, [allArticles, article._id]);

  return (
    <div className="w-full mb-10 px-5 font-josefin mt-10 lg:mt-20 mx-auto  uppercase font-benchnine flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:items-center">
      <div className="flex space-x-2 mb-3 text-[14px] lg:text-[20px] lg:mb-0 opacity-50">
        {article.subjects.map((c) => (
          <p key={c._id}>{c.titleFr} |</p>
        ))}
      </div>
      {nextArticle && (
        <Link href={`/articles/${nextArticle.slug.current}`}>
          <p className=" text-primary text-[18px] mt-10 lg:mt-0 lg:text-[20px]">
            ARTICLE SUIVANT :{' '}
            <span className="uppercase underline font-benchnine ">
              {nextArticle.title}
            </span>
          </p>
        </Link>
      )}
    </div>
  );
}

export default ArticlesFooter;
