'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  itemId: string;
  children: React.ReactNode;
  backgroundImage: string;
  altImage: string;
  className?: string;
}

function HoverFadeEffect({
  itemId,
  children,
  backgroundImage,
  altImage,
  className,
}: IProps) {
  const [isMouseEnter, setIsMouseEnter] = useState<{
    id: string | null;
    value: boolean;
  }>({
    id: null,
    value: false,
  });
  return (
    <div
      onMouseEnter={() => setIsMouseEnter({ id: itemId, value: true })}
      onMouseLeave={() => setIsMouseEnter({ id: null, value: false })}
      className={`${className} overflow-hidden cursor-pointer full flex items-center justify-center relative`}
    >
      <div className="h-full w-full absolute  top-0 z-10 items-center justify-center flex">
        <motion.div
          animate={
            isMouseEnter && itemId === isMouseEnter.id
              ? {
                  opacity: [0, 0, 0.4, 0.8],
                }
              : {
                  opacity: [0.8, 0.8, 0.8, 0],
                }
          }
          transition={{ duration: 1 }}
          className="bg-background opacity-50 h-full w-full  "
        />

        <motion.div
          animate={
            isMouseEnter && itemId === isMouseEnter.id
              ? {
                  rotate: [90, 90, 0, 0],
                  width: ['50%', '50%', '50%', '100%'],
                  height: ['50%', '50%', '50%', '100%'],
                  opacity: [0, 1, 1, 1],
                }
              : {
                  rotate: [0, 0, 0, 90, 90],
                  width: ['100%', '100%', '50%', '50%', '50%'],
                  height: ['100%', '100%', '50%', '50%', '50%'],
                  opacity: [1, 1, 1, 0],
                }
          }
          transition={{ duration: 1 }}
          className="h-[50%] w-[50%]  absolute z-10  p-5"
        >
          <motion.div
            animate={
              isMouseEnter && itemId === isMouseEnter.id
                ? {
                    opacity: [0, 0, 0, 0, 0, 0, 1],
                  }
                : {
                    opacity: [1, 0, 0, 0, 0, 0, 0, 0, 0],
                  }
            }
            transition={{ duration: 1.5 }}
          >
            {children}
          </motion.div>

          <Image
            src="/patternTL.svg"
            alt=""
            height={60}
            width={60}
            className="absolute top-0 left-0"
          />
          <Image
            src="/patternTR.svg"
            alt=""
            height={60}
            width={60}
            className="absolute top-0 right-0"
          />
          <Image
            src="/patternBL.svg"
            alt=""
            height={60}
            width={60}
            className="absolute bottom-0 left-0"
          />
          <Image
            src="/patternBR.svg"
            alt=""
            height={60}
            width={60}
            className="absolute bottom-0 right-0"
          />
        </motion.div>
      </div>
      <Image
        className={`object-cover ${
          isMouseEnter && itemId === isMouseEnter.id ? 'scale-125' : 'scale-100'
        } transform duration-700 ease-out`}
        fill
        priority
        src={backgroundImage}
        alt={altImage}
      />
    </div>
  );
}

export default HoverFadeEffect;
