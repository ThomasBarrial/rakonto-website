'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import useParallax from '@/utils/useParralax';
import { useScroll, motion } from 'framer-motion';
import { IHomePresentationSection } from '../../../types';
import H1 from '../global/text/H1';
import TextSmall from '../global/text/TextSmall';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  data: IHomePresentationSection;
}

function Presentation({ data }: IProps) {
  const [selected, setSelected] = useState(data.contentType[0].nameEn);

  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, -200, 400);

  return (
    <section className="my-10 flex flex-col lg:flex-row-reverse lg:py-20 lg:h-screen">
      <div className=" w-ful flex flex-col items-end w-full lg:w-6/12 lg:px-10 lg:h-full lg:justify-between">
        <div className="w-full">
          <div className="flex flex-col">
            {data.contentType.map((item) => (
              <button
                type="button"
                key={item._key}
                className={`cursor-pointer text-left  ${
                  selected === item.nameEn
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100'
                } transform duration-500 ease-out`}
                onClick={() => setSelected(item.nameEn)}
              >
                <H1 contentEn={item.nameEn} contentFr={item.nameFr} />
              </button>
            ))}
          </div>

          <TextSmall
            className="mt-5  text-primary lg:w-10/12"
            contentEn={data.textEn}
            contentFr={data.textFr}
          />
        </div>
        <div className="w-full flex flex-col items-end">
          {data.contentType.map((item) => {
            if (selected === item.nameEn) {
              return (
                <TextSmall
                  key={item._key}
                  className="w-8/12 mt-20 lg:mt-0 lg:w-10/12"
                  contentEn={item.descriptionEn}
                  contentFr={item.descriptionFr}
                />
              );
            }
            return null;
          })}
          <Image
            className="mt-10"
            src="/BLGreenPatternt.svg"
            height={50}
            width={50}
            priority
            alt="pattern"
          />
        </div>
      </div>

      <div className="h-full w-6/12 hidden lg:flex lg:w-6/12 overflow-hidden">
        {data.contentType.map((item) => {
          if (selected === item.nameEn) {
            return (
              <motion.div
                key={item._key}
                style={{ y }}
                className="relative h-[120%] w-full"
              >
                <Image
                  className="object-cover animate-fadeIn"
                  src={urlForImage(item.image.asset).url()}
                  fill
                  alt={item.image.alt ? item.image.alt : 'unknow Image'}
                />
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default Presentation;
