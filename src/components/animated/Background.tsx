'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import useParallax from '@/utils/useParralax';

interface IProps {
  image: string;
  start: number;
  end: number;
  opacity?: number;
  end1080?: number;
  end880?: number;
}

function Background({
  image,
  start,
  end,
  end1080,
  end880,
  opacity = 0.3,
}: IProps) {
  const { scrollYProgress } = useScroll();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  function calculateEnd() {
    if (end1080 && end880) {
      const slope = (end1080 - end880) / (1080 - 880);
      const yIntercept = end1080 - slope * 1080;

      return slope * windowSize.height + yIntercept;
    }
    return end;
  }

  const y = useParallax(scrollYProgress, start, calculateEnd());

  useEffect(() => {
    // Function to update windowSize state on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      style={{ y }}
      className="h-screen w-screen  left-0 absolute -z-10  top-[0]"
    >
      <div className="bg-gradient-to-b from-background to-transparent h-3/6 -translate-y-1 z-10 relative top-0" />
      <div className="bg-gradient-to-t from-background to-transparent h-3/6 translate-y-1 z-10 relative bottom-0" />
      <Image
        className="object-cover object-center"
        style={{ opacity }}
        src={image}
        fill
        alt=""
      />
    </motion.div>
  );
}

export default Background;
