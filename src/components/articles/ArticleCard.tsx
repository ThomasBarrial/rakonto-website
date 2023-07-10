import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Link from 'next/link';
import { Article } from '../../../types';
import HoverFadeEffect from '../animated/HoverFadeEffect';
import LinkButton from '../global/buttons/LinkButton';
import urlForImage from '../../../sanity/lib/image';
import DateFormat from '../global/DateFormat';
import Text from '../global/text/Text';

function ArticleCard({ item }: { item: Article }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <Link
      href={`/articles/${item.slug.current}`}
      className="my-10 w-full xl:w-10/12 cursor-pointer"
    >
      <HoverFadeEffect
        className="h-96  lg:h-[30rem]"
        itemId={item._id}
        backgroundImage={urlForImage(item.mainImage.asset).url()}
        altImage={item.mainImage.alt ? item.mainImage.alt : item.title}
      >
        <p className="font-josefin">
          {selectedLanguage === 'Fr' ? item.descriptionFR : item.descriptionEN}
        </p>
        <LinkButton
          link={`/articles/${item.slug.current}`}
          className="w-[130px] mt-5 text-sm"
          text={selectedLanguage === 'Fr' ? "lire l'article" : 'read article'}
        />
      </HoverFadeEffect>

      <div className="flex flex-wrap font-josefin opacity-60 mt-2 text-sm lg:text-base">
        <div className="flex items-center flex-wrap">
          {item.subjects.map((subject) => (
            <p key={subject._id}>
              {selectedLanguage === 'Fr' ? subject.titleFr : subject.titleEn}{' '}
              |&nbsp;
            </p>
          ))}
        </div>{' '}
        -&nbsp;
        <DateFormat date={item.publishedAt} />
      </div>
      <Text className="mt-2 uppercase">
        {' '}
        {selectedLanguage === 'Fr' ? item.title : item.titleEn}{' '}
      </Text>
      <LinkButton
        link={`/articles/${item.slug.current}`}
        className="w-[130px] mt-5 text-sm"
        text={selectedLanguage === 'Fr' ? "lire l'article" : 'read article'}
      />
    </Link>
  );
}

export default ArticleCard;
