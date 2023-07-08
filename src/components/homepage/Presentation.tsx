'use client';

import Image from 'next/image';
import React from 'react';
import Text from '@/components/global/text/Text';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { IHomePresentationSection } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  data: IHomePresentationSection;
}

function Presentation({ data }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <section>
      <div className="w-full h-96 lg:h-screen bg-red-200 relative max-h-[65rem]">
        <Image
          className="object-cover"
          src={urlForImage(data.image.asset).url()}
          fill
          priority
          alt={data.image.alt ? data.image.alt : 'Unknow Image'}
        />
      </div>
      <div className="w-full  mt-10 flex justify-end">
        <span className="h-[1px] w-8/12 bg-primary" />
      </div>
      <Text className="my-10 w-10/12 lg:w-8/12  uppercase">
        {selectedLanguage === 'Fr' ? data.textFr : data.textEn}
      </Text>
    </section>
  );
}

export default Presentation;
