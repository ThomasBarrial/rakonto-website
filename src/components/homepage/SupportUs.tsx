'use client';

import React, { useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IHomeSupportUs } from '../../../types';
import H1 from '../global/text/H1';
import RichTextComponents from '../global/text/RichTextComponent';
import H2 from '../global/text/H2';

function SupportUs({ data }: { data: IHomeSupportUs }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [callToActionOpen, setCallToActionOpen] = useState<{
    isOpen: boolean;
    itemId: undefined | string;
  }>({
    isOpen: false,
    itemId: undefined,
  });

  return (
    <section className="my-10   font-josefin flex flex-col relative">
      <div className=" w-full  flex flex-col xl:mr-5 xl:w-5/12">
        <H1 className="w-full">
          {selectedLanguage === 'Fr' ? data.titleFr : data.titleEn}
        </H1>
        <div className=" uppercase mt-5 ">
          <PortableText
            value={selectedLanguage === 'Fr' ? data.textFr : data.TextEn}
            components={RichTextComponents}
          />
        </div>
      </div>
      <div className="xl:w-6/12 xl:absolute right-0">
        {data.callToAction.map((item) => (
          <motion.div
            animate={
              callToActionOpen.isOpen && callToActionOpen.itemId === item._key
                ? { height: `100%` }
                : { height: `70px` }
            }
            transition={{ duration: 0.5 }}
            className="border border-primary overflow-hidden my-5 flex flex-col items-start"
            key={item._key}
          >
            <button
              type="button"
              onClick={() => {
                if (
                  callToActionOpen.isOpen === true &&
                  callToActionOpen.itemId === item._key
                ) {
                  setCallToActionOpen({ isOpen: false, itemId: undefined });
                } else {
                  setCallToActionOpen({ isOpen: true, itemId: item._key });
                }
              }}
              className=" flex justify-between items-start text-left w-full pt-3 px-3"
            >
              <H2 className="leading-none w-10/12">
                {selectedLanguage === 'Fr' ? item.nameFr : item.nameEn}
              </H2>
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
                value={selectedLanguage === 'Fr' ? item.textFr : item.TextEn}
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
        ))}
      </div>
    </section>
  );
}

export default SupportUs;
