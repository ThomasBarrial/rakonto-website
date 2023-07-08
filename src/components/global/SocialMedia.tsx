import React from 'react';
import Image from 'next/image';
import { ISocialMedia } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  socialMedia: ISocialMedia[];
}

function SocialMedia({ socialMedia }: IProps) {
  return (
    <div className="flex space-x-3">
      {socialMedia.map((item) => (
        <a key={item.name} href={item.link} target="_blank">
          <Image
            src={urlForImage(item.icon.asset).url()}
            alt={item.name}
            height={30}
            width={30}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
