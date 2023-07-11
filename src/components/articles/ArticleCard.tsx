import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Link from 'next/link';
import { Article } from '../../../types';
import HoverFadeEffect from '../animated/HoverFadeEffect';
import urlForImage from '../../../sanity/lib/image';
import DateFormat from '../global/DateFormat';
import Text from '../global/text/Text';

function ArticleCard({ item }: { item: Article }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <Link href={`/articles/${item.slug.current}`} className="w-full xl:w-10/12">
      <HoverFadeEffect
        className="h-96  lg:h-[30rem]"
        itemId={item._id}
        backgroundImage={urlForImage(item.mainImage.asset).url()}
        altImage={item.mainImage.alt ? item.mainImage.alt : item.title}
      >
        <div className=" flex flex-col">
          <p className="font-josefin">
            {selectedLanguage === 'Fr'
              ? item.descriptionFR
              : item.descriptionEN}
          </p>

          <div className="w-full mt-5  font-josefin opacity-60  text-sm lg:text-base">
            <div className="flex items-center flex-wrap">
              {item.subjects.map((subject) => (
                <p key={subject._id}>
                  {selectedLanguage === 'Fr'
                    ? subject.titleFr
                    : subject.titleEn}{' '}
                  |&nbsp;
                </p>
              ))}
            </div>
            <DateFormat date={item.publishedAt} />
          </div>
        </div>
      </HoverFadeEffect>

      <Text className="mt-3 uppercase">
        {' '}
        {selectedLanguage === 'Fr' ? item.title : item.titleEn}{' '}
      </Text>
    </Link>
  );
}

export default ArticleCard;
