import Image from 'next/image';
import React from 'react';
import H2 from '../global/text/H2';
import { Block, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import Body from '../articles/Body';

function OurMissonAndValues({
  data,
}: {
  data: {
    _type: string;
    _key: string;
    titleEn: string;
    titleFr: string;
    textFr: Block[];
    TextEn: Block[];
    textFr2: Block[];
    TextEn2: Block[];
    image: SanityImage;
  };
}) {
  return (
    <div className="mt-10 lg:mt-52 flex flex-col lg:flex-row lg:items-center lg:mx-24">
      <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
        <Image
          src={urlForImage(data.image.asset).url()}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="lg:w-9/12">
        <H2
          className="font-bold italic"
          contentEn={data.titleEn}
          contentFr={data.titleFr}
        />
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-6/12 lg:p-5">
            <Body blockEn={data.TextEn} blockFr={data.textFr} />
          </div>
          <div className="lg:w-6/12 lg:p-5">
            <Body blockEn={data.TextEn2} blockFr={data.textFr2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMissonAndValues;
