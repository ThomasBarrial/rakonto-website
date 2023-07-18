import React from 'react';
import Image from 'next/image';
import { SanityImage } from '../../../../types';
import urlForImage from '../../../../sanity/lib/image';

function GalleryImage({ data }: { data: SanityImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 mt-10">
      {data.map((item) => (
        <div className="w-full h-[30rem] relative" key={item.asset._ref}>
          <Image
            className="object-cover"
            src={urlForImage(item.asset).url()}
            fill
            alt={item.alt ? item.alt : 'unknow Image'}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryImage;
