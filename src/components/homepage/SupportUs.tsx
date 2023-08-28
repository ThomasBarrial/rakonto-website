'use client';

import React, { useRef, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { IHomeSupportUs } from '../../../types';
import H1 from '../global/text/H1';
import RichTextComponents from '../global/text/RichTextComponent';
import H3 from '../global/text/H3';
import SectionContainer from '../global/SectionContainer';
import SlideUp from '../animated/SlideUp';

function SupportUs({ data }: { data: IHomeSupportUs }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [callToActionOpen, setCallToActionOpen] = useState<{
    isOpen: boolean;
    itemId: undefined | string;
  }>({
    isOpen: false,
    itemId: undefined,
  });

  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  return (
    <SectionContainer
      className="h-screen"
      bgImage="/backgroundHome/bgFooter3.png"
    >
      <div
        ref={ref}
        id="supportUs"
        className="my-10 pb-32 relative  w-[100%] font-josefin flex flex-col"
      >
        {inView && (
          <SlideUp
            duration={1.2}
            className=" w-full  flex flex-col xl:mr-5 xl:w-5/12"
          >
            <H1
              contentEn={data.titleEn}
              contentFr={data.titleFr}
              className="w-full"
            />
            <div className="text-[20px] mt-5 ">
              <PortableText
                value={selectedLanguage === 'Fr' ? data.textFr : data.TextEn}
                components={RichTextComponents}
              />
            </div>
          </SlideUp>
        )}
        {inView && (
          <div className="xl:w-6/12 xl:absolute right-0">
            {data.callToAction.map((item, index) => (
              <SlideUp key={item._key} duration={index * 0.5 + 1}>
                <motion.div
                  animate={
                    callToActionOpen.isOpen &&
                    callToActionOpen.itemId === item._key
                      ? { height: `100%` }
                      : { height: `60px` }
                  }
                  transition={{ duration: 0.5 }}
                  className="border border-primary overflow-hidden my-2 flex flex-col items-start"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        callToActionOpen.isOpen === true &&
                        callToActionOpen.itemId === item._key
                      ) {
                        setCallToActionOpen({
                          isOpen: false,
                          itemId: undefined,
                        });
                      } else {
                        setCallToActionOpen({
                          isOpen: true,
                          itemId: item._key,
                        });
                      }
                    }}
                    className=" flex justify-between items-start text-left w-full pt-3 px-3"
                  >
                    <H3
                      className="leading-none w-10/12"
                      contentEn={item.nameEn}
                      contentFr={item.nameFr}
                    />

                    <Image
                      src="/downArrow.svg"
                      className={`${
                        callToActionOpen.isOpen &&
                        callToActionOpen.itemId === item._key
                          ? 'rotate-180'
                          : 'rotate-0'
                      } transform duration-500 ease-out`}
                      alt="down"
                      height={15}
                      width={15}
                    />
                  </button>
                  <div className="mt-7 leading-normal px-5">
                    <PortableText
                      value={
                        selectedLanguage === 'Fr' ? item.textFr : item.TextEn
                      }
                      components={RichTextComponents}
                    />
                  </div>
                  <Link
                    className="flex items-center m-5 justify-center bg-primary px-4 py-3  text-white font-bold"
                    href={item.link}
                  >
                    {selectedLanguage === 'Fr'
                      ? item.buttonNameFr
                      : item.buttonNameEn}
                  </Link>
                </motion.div>
              </SlideUp>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default SupportUs;
