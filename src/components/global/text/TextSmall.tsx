'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function TextSmall({
  contentFr,
  contentEn,
  className,
}: {
  contentFr: string;
  contentEn: string;
  className?: string;
}) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <p
      className={`font-josefin text-[14px] text-textColor text-justify md:text-[16px] ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </p>
  );
}

export default TextSmall;
