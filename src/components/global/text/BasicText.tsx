'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function BasicText({
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
      className={`font-josefin text-[18px] text-textColor lg:text-[20px]  ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </p>
  );
}

export default BasicText;
