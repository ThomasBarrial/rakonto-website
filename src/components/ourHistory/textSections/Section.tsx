'use client';

import SlideUp from '@/components/animated/SlideUp';
import Body from '@/components/articles/Body';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import H2 from '@/components/global/text/H2';
import React, { useRef } from 'react';
import { IOurHistoryTextSection } from '../../../../types';
import urlForImage from '../../../../sanity/lib/image';

interface IProps {
  data: IOurHistoryTextSection;
  class1: string | boolean | undefined;
  class2: string | boolean | undefined;
  class3: string | boolean | undefined;
  imageSize: number | boolean;
}

function Section({ data, class1, class2, class3, imageSize = 300 }: IProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-100px 0px -100px 0px',
  });
  return (
    <div>
      <div className={`flex flex-col lg:items-center min-h-screen ${class1}`}>
        <div
          className={`hidden lg:flex flex-row justify-center  items-center ${class2}`}
        >
          {inView && (
            <SlideUp duration={1.2}>
              <Image
                src={urlForImage(data.image.asset).url()}
                alt=""
                width={imageSize as number}
                height={imageSize as number}
              />
            </SlideUp>
          )}
        </div>
        <div ref={ref} className={` ${class3}`}>
          {inView && (
            <SlideUp duration={1.5}>
              <H2
                className="font-bold italic"
                contentEn={data.titleEn}
                contentFr={data.titleFr}
              />
            </SlideUp>
          )}
          {inView && (
            <SlideUp duration={1.2}>
              <Body blockEn={data.TextEn} blockFr={data.textFr} />
            </SlideUp>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
