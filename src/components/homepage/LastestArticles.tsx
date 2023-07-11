'use client';

import React, { useMemo } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { Article, IHomeOurLastestArticlesSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import ArticleCard from '../articles/ArticleCard';

interface IProps {
  data: IHomeOurLastestArticlesSection;
  articles: Article[];
}

function LastestArticles({ data, articles }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const latestAticles = useMemo(() => articles.slice(0, 4), [articles]);

  return (
    <section className="xl:h-screen my-10 ">
      <div className="flex items-end justify-between">
        <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-start gap-5 -mt-0">
        {latestAticles.map((item) => (
          <li key={item._id} className="my-5 w-full">
            <ArticleCard item={item} />
            <LinkButton
              link={`/articles/${item.slug.current}`}
              className="w-[130px] mt-3 text-sm"
              text={
                selectedLanguage === 'Fr' ? "lire l'article" : 'read article'
              }
            />
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-end mt-5 lg:mt-5">
        <LinkButton
          className="w-9/12 lg:w-2/12"
          text={
            selectedLanguage === 'Fr'
              ? data.callToAction.nameFr
              : data.callToAction.nameEn
          }
          link={data.callToAction.link}
        />
      </div>
    </section>
  );
}

export default LastestArticles;
