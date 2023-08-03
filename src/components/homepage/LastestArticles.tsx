'use client';

import React, { useMemo } from 'react';
import { Article, IHomeOurLastestArticlesSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import ArticleCard from '../articles/ArticleCard';

interface IProps {
  data: IHomeOurLastestArticlesSection;
  articles: Article[];
}

function LastestArticles({ data, articles }: IProps) {
  const latestAticles = useMemo(() => articles.slice(0, 4), [articles]);

  return (
    <section className="xl:h-screen my-10  border border-red-400">
      <div className="flex items-end justify-between">
        <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-start gap-10 -mt-0">
        {latestAticles.map((item) => (
          <li key={item._id} className="my-5 w-full">
            <ArticleCard item={item} />
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-end mt-5 lg:mt-5">
        <LinkButton
          className="w-9/12 lg:w-2/12"
          textEn={data.callToAction.nameEn}
          textFr={data.callToAction.nameFr}
          link={data.callToAction.link}
        />
      </div>
    </section>
  );
}

export default LastestArticles;
