'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useParallax from '@/utils/useParralax';
import Video from '@/components/videos/Video';
import VideoModal from '@/components/videos/VideoModal';

interface IProps {
  path: string;
  alt: string;
  className?: string;
  start?: number;
  end?: number;
  videoUrl?: string;
}

function FullWidthImage({
  path,
  alt,
  className = '',
  start = -100,
  end = 200,
  videoUrl,
}: IProps) {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, url: '' });
  const y = useParallax(scrollYProgress, start, end);

  return (
    <div
      className={`w-full h-52  lg:h-screen z-0 relative max-h-[65rem] overflow-hidden ${className}`}
    >
      {/* MODAL */}
      {isModalOpen.isOpen && (
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}{' '}
      <motion.div style={{ y }} className="w-[100%] h-[110%]">
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
