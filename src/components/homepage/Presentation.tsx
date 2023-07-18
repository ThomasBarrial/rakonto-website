'use client';

import React from 'react';
import { IHomePresentationSection } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

import FullWidthImage from '../global/images/FullWidthImage';
import BasicText from '../global/text/BasicText';

interface IProps {
  data: IHomePresentationSection;
}

function Presentation({ data }: IProps) {
  return (
    <section className="my-10 ">
      <FullWidthImage
        path={urlForImage(data.image.asset).url()}
        alt={data.image.alt ? data.image.alt : 'Unknow Image'}
      />
      <div className="w-full  mt-10 flex justify-end">
        <span className="h-[1px] w-8/12 bg-primary" />
      </div>
      <BasicText
        className="my-10 w-10/12 lg:w-8/12"
        contentEn={data.textEn}
        contentFr={data.textFr}
      />
    </section>
  );
}

export default Presentation;
