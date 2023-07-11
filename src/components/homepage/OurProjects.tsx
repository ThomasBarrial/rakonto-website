'use client';

import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import H1 from '../global/text/H1';
import Text from '../global/text/Text';
import { IHomeOurProjectSection } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';

interface IProps {
  data: IHomeOurProjectSection;
}

function OurProjects({ data }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <section className=" h-screen my-10  flex flex-col  items-end justify-center">
      <div className="w-full">
        <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
      </div>
      <div className=" mt-5 lg:mt-32 w-10/12 lg:w-6/12">
        <Text className="uppercase">
          {selectedLanguage === 'Fr' ? data.textFr : data.textEn}
        </Text>

        <LinkButton
          className="w-10/12  lg:w-[240px] mt-10"
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

export default OurProjects;
