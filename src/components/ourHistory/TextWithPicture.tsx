'use client';

import React from 'react';
import Image from 'next/image';
import H2 from '../global/text/H2';
import LinkButton from '../global/buttons/LinkButton';
import { Block, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import Body from '../articles/Body';

interface IProps {
  data: {
    titleFr: string;
    titleEn: string;
    image: SanityImage;
    textFr: Block[];
    TextEn: Block[];
    callToAction: {
      nameFr: string;
      nameEn: string;
      link: string;
    };
  };
}

function TextWithPicture({ data }: IProps) {
  return (
    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center lg:mt-32 lg:mx-32">
      <div className="lg:w-6/12 flex flex-col lg:items-end">
        <Image
          src={urlForImage(data.image.asset).url()}
          height={700}
          width={700}
          alt=""
        />
      </div>
      <div className="lg:w-6/12 lg:p-5 lg:ml-10">
        <H2
          className="mt-5 lg:mt-10 font-bold italic"
          contentEn={data.titleEn}
          contentFr={data.titleFr}
        />
        <Body blockEn={data.TextEn} blockFr={data.textFr} />
        <LinkButton
          className="mt-5 lg:mt-10"
          link={data.callToAction.link}
          textEn={data.callToAction.nameEn}
          textFr={data.callToAction.nameFr}
        />
      </div>
    </div>
  );
}

export default TextWithPicture;
