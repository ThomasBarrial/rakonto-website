'use client';

import React, { useRef } from 'react';
import { useScroll, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import useParallax from '@/utils/useParralax';
import { SanityImage } from '../../../types';
import H1 from '../global/text/H1';
import BasicText from '../global/text/BasicText';
import urlForImage from '../../../sanity/lib/image';
import SlideUp from '../animated/SlideUp';

interface IProps {
  item: {
    _key: string;
    nameEn: string;
    nameFr: string;
    descriptionEn: string;
    descriptionFr: string;
    image: SanityImage;
  };
  index: number;
}

function PresentationElement({ item, index }: IProps) {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, -200, 400);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    open: {
      y: 0,
      scale: 1,
      transition: { duration: 2, bounce: 0, delay: 0 },
    },
    closed: {
      y: '600px',
      scale: 1,
      transition: { duration: 2, bounce: 0, delay: 0 },
    },
  };
  return (
    <div
      ref={ref}
      className={`lg:h-[90vh]  flex  my-10 ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-end`}
    >
      {inView && (
        <div
          className={`w-full h-[100%] flex flex-col items-end  lg:w-5/12 ${
            index % 2 === 0 ? 'pr-10' : 'pl-10'
          } lg:justify-between`}
        >
          <SlideUp
            className="flex flex-col items-end lg:items-start"
            duration={1.2}
          >
            <H1
              className=" w-full"
              contentEn={item.nameEn}
              contentFr={item.nameFr}
            />

            <BasicText
              key={item._key}
              className="w-8/12 mt-20 lg:mt-10 lg:w-10/12"
              contentEn={item.descriptionEn}
              contentFr={item.descriptionFr}
            />
          </SlideUp>
          <Image
            className="mt-10"
            src="/BLGreenPatternt.svg"
            height={50}
            width={50}
            priority
            alt="pattern"
          />
        </div>
      )}
      {inView && (
        <div className="h-[100%] w-6/12 hidden lg:flex lg:flex-col lg:w-7/12 overflow-hidden">
          <motion.div
            className="relative min-h-[120%] w-full"
            variants={variants}
            initial="closed"
            animate="open"
          >
            <motion.div
              key={item._key}
              style={{ y }}
              className="relative min-h-[120%] w-full"
            >
              <Image
                className="object-cover"
                src={urlForImage(item.image.asset).url()}
                fill
                alt={item.image.alt ? item.image.alt : 'unknow Image'}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default PresentationElement;
