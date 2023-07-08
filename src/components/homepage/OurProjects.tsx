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
    <section className=" h-screen flex flex-col lg:flex-row items-end lg:items-center justify-center">
      <div className="lg:h-[28rem] w-full lg:w-5/12">
        <H1>{selectedLanguage === 'Fr' ? data.titleFr : data.titleEn}</H1>
      </div>
      <div className=" lg:h-[28rem] mt-5 lg:mt-0 w-10/12 lg:w-6/12 flex flex-col justify-end">
        <Text className="uppercase">
          {selectedLanguage === 'Fr' ? data.textFr : data.textEn}
        </Text>

        <LinkButton
          className="w-10/12 lg:w-[36%] mt-10"
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
