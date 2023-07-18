'use client';

import React from 'react';
import H1 from '../global/text/H1';
import { IHomeOurProjectSection } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
import BasicText from '../global/text/BasicText';

interface IProps {
  data: IHomeOurProjectSection;
}

function OurProjects({ data }: IProps) {
  return (
    <section className=" h-screen my-10  flex flex-col  items-end justify-center">
      <div className="w-full">
        <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
      </div>
      <div className=" mt-5 lg:mt-32 w-10/12 lg:w-6/12">
        <BasicText contentEn={data.textEn} contentFr={data.textFr} />

        <LinkButton
          className="w-10/12  lg:w-[240px] mt-10"
          textEn={data.callToAction.nameEn}
          textFr={data.callToAction.nameFr}
          link={data.callToAction.link}
        />
      </div>
    </section>
  );
}

export default OurProjects;
