'use client';

import React from 'react';
import { IHomePresentationSection } from '../../../types';
import PresentationElement from './PresentationElement';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  data: IHomePresentationSection;
}

function Presentation({ data }: IProps) {
  return (
    <section className="my-10 flex flex-col overflow-scroll lg:h-screen bg-red-200  snap-y snap-mandatory  stciky-top-0 no-scrollbar">
      <div className="min-h-screen w-full bg-red-400" />
      <div className="min-h-screen w-full bg-red-500" />
      <div className="min-h-screen w-full bg-red-600" />

      {/* <div className=" w-ful flex flex-col items-end w-full lg:w-6/12 lg:px-10 lg:h-full lg:justify-between">
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
      </div> */}
    </section>
  );
}

export default Presentation;
