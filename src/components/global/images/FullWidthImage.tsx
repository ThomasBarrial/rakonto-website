'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useParallax from '@/utils/useParralax';
import Video from '@/components/videos/Video';
import VideoModal from '@/components/videos/VideoModal';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';

interface IProps {
  path: string;
  alt: string;
  className?: string;
  start?: number;
  end?: number;
  videoUrl?: string;
  title?: string;
  titleEn?: string;
}

function FullWidthImage({
  path,
  alt,
  className = '',
  start = -100,
  end = 200,
  videoUrl,
  title,
  titleEn,
}: IProps) {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, url: '' });
  const y = useParallax(scrollYProgress, start, end);

  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div
      className={`w-full h-80  lg:h-96 z-0 relative max-h-[65rem] overflow-hidden ${className}`}
    >
      {title && titleEn && (
        <div className=" bg-primary bg-opacity-50 h-[100%] w-[100%] relative flex justify-center items-center -translate-y-1/2  top-1/2 z-10">
          <h1
            className={`font-francoisOne text-center text-[50px] leading-none text-white md:text-[60px] xl:text-[90px] uppercase ${className}`}
          >
            {selectedLanguage === 'Fr' ? title : titleEn}
          </h1>
        </div>
      )}
      {/* MODAL */}
      {isModalOpen.isOpen && (
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}{' '}
      <motion.div style={{ y }} className="w-[100%] h-[130%]">
        {videoUrl ? (
          <Video
            container="h-full"
            setIsModalOpen={setIsModalOpen}
            url={videoUrl}
            className="h-[100%] w-full mt-10"
          />
        ) : (
          <Image className="object-cover" src={path} fill priority alt={alt} />
        )}
      </motion.div>
    </div>
  );
}

export default FullWidthImage;
