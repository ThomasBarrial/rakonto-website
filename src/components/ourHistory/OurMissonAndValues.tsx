'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import H2 from '../global/text/H2';
import { Block, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import Body from '../articles/Body';
import SlideUp from '../animated/SlideUp';

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 10px -10px 0px' });
  return (
    <div className="mt-10 lg:mt-52 flex flex-col lg:flex-row lg:items-center lg:mx-24">
      <div
        ref={ref}
        className="hidden lg:flex flex-row justify-center w-4/12 items-center "
      >
        {inView && (
          <SlideUp duration={1.5}>
            <Image
              src={urlForImage(data.image.asset).url()}
              alt=""
              width={200}
              height={200}
            />
          </SlideUp>
        )}
      </div>
      {inView && (
        <div className="lg:w-9/12">
          <SlideUp duration={1.5}>
            <H2
              className="font-bold italic"
              contentEn={data.titleEn}
              contentFr={data.titleFr}
            />
          </SlideUp>

          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-6/12 lg:p-5">
              <SlideUp duration={2}>
                <Body blockEn={data.TextEn} blockFr={data.textFr} />
              </SlideUp>
            </div>
            <div className="lg:w-6/12 lg:p-5">
              <SlideUp duration={2}>
                <Body blockEn={data.TextEn2} blockFr={data.textFr2} />
              </SlideUp>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurMissonAndValues;
