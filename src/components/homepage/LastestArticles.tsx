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
    <section className="xl:h-screen ">
      <div className="flex items-end justify-between">
        <H1>{selectedLanguage === 'Fr' ? data.titleFr : data.titleEn}</H1>
      </div>
      <div className="flex flex-col items-center justify-center xl:items-start xl:flex-row lg:space-x-6 -mt-10">
        {latestAticles.map((item) => (
          <ArticleCard item={item} key={item._id} />
        ))}
      </div>
      <div className="flex w-full justify-end mt-14 lg:mt-0">
        <LinkButton
          className="w-8/12 lg:w-2/12"
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
