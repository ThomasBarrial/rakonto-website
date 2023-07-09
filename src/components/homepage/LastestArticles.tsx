'use client';

import React, { useEffect, useMemo } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import { Article, IHomeOurLastestArticlesSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import urlForImage from '../../../sanity/lib/image';
import Text from '../global/text/Text';

interface IProps {
  data: IHomeOurLastestArticlesSection;
  articles: Article[];
}

function LastestArticles({ data, articles }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const latestAticles = useMemo(() => articles.slice(0, 4), [articles]);

  useEffect(() => {}, []);
  return (
    <section className="lg:h-screen">
      <div className="flex items-end justify-between">
        <H1>{selectedLanguage === 'Fr' ? data.titleFr : data.titleEn}</H1>
        <LinkButton
          className="hidden md:flex w-10/12 lg:w-[20%] mt-10"
          text={
            selectedLanguage === 'Fr'
              ? data.callToAction.nameFr
              : data.callToAction.nameEn
          }
          link={data.callToAction.link}
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:space-x-6 lg:mt-5">
        {latestAticles.map((item) => (
          <div className="my-10 w-full lg:w-10/12" key={item._id}>
            <div className="h-96 lg:h-[30rem] full relative">
              <Image
                className="object-cover"
                fill
                priority
                src={urlForImage(item.mainImage.asset).url()}
                alt={item.mainImage.alt ? item.mainImage.alt : item.title}
              />
            </div>
            <div className="flex flex-wrap font-josefin opacity-60 mt-2 text-sm lg:text-base">
              <div className="flex items-center flex-wrap">
                {item.subjects.map((subject) => (
                  <p key={subject._id}>
                    {selectedLanguage === 'Fr'
                      ? subject.titleFr
                      : subject.titleEn}{' '}
                    |&nbsp;
                  </p>
                ))}
              </div>{' '}
              -&nbsp;
              {selectedLanguage === 'Fr' ? (
                <p>
                  {new Date(item.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              ) : (
                <p>
                  {new Date(item.publishedAt).toLocaleDateString('en-En', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              )}
            </div>
            <Text className="uppercase mt-2">{item.title}</Text>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end mt-14">
        <LinkButton
          className="flex md:hidden w-8/12  "
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
