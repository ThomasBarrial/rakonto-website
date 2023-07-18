import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';

interface IProps {
  link: string;
  textEn: string;
  textFr: string;
  className?: string;
}

function LinkButton({ link, textEn, textFr, className }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <Link
      className={`uppercase group font-josefin pb-[2px]  text-primary  flex border-b border-primary  items-center space-x-2 ${className}`}
      href={link}
    >
      <p>{selectedLanguage === 'Fr' ? textFr : textEn}</p>

      <Image
        className="mb-1"
        src="/linkArrow.svg"
        alt=""
        height={12}
        width={12}
      />
    </Link>
  );
}

export default LinkButton;
