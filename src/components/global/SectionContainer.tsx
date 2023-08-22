'use client';

import Image from 'next/image';
import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
}

function SectionContainer({ className, children, bgImage }: IProps) {
  return (
    <section className={`${className} ${bgImage && 'relative'}`}>
      {bgImage && (
        <div className="h-screen w-screen max-w-screen hidden  left-0 md:flex flex-col absolute -z-10  top-[0]">
          <div className="bg-gradient-to-b from-background to-transparent h-3/6 -translate-y-1 z-10 relative top-0" />
          <div className="bg-gradient-to-t from-background to-transparent h-3/6 translate-y-1 z-10 relative bottom-0" />
          <Image
            className="object-cover object-center"
            style={{ opacity: 0.6 }}
            src={bgImage}
            fill
            alt=""
          />
        </div>
      )}
      <div className="max-w-content px-4 lg:px-10">{children}</div>
    </section>
  );
}

export default SectionContainer;
