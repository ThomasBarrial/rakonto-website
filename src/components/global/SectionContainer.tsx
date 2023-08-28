'use client';

// import Image from 'next/image';
import React from 'react';
// import bg from '../../../public/backgroundHome/projectBg.png';

interface IProps {
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
  id?: string;
}

function SectionContainer({ className, children, bgImage, id }: IProps) {
  return (
    <section
      id={id || ''}
      className={`${className} w-screen flex flex-col items-center justify-center`}
      style={{
        backgroundImage: `${bgImage && `url(${bgImage})`}`,
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-content w-full px-4 lg:px-10">{children}</div>
    </section>
  );
}

export default SectionContainer;
