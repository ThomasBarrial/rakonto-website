'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import useParallax from '@/utils/useParralax';

interface IProps {
  image: string;
  start: number;
  end: number;
}

function Background({ image, start, end }: IProps) {
  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, start, end);

  return (
    <motion.div
      style={{ y }}
      className="h-screen w-screen  left-0 absolute -z-10  top-[0]"
    >
      <div className="bg-gradient-to-b from-background to-transparent h-3/6 -translate-y-1 z-10 relative top-0" />
      <div className="bg-gradient-to-t from-background to-transparent h-3/6 translate-y-1 z-10 relative bottom-0" />
      <Image
        className="object-cover object-center opacity-20"
        src={image}
        fill
        alt=""
      />
    </motion.div>
  );
}

export default Background;
