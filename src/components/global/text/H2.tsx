'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function H2({
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
    <h2
      className={`font-josefin text-[25px] text-primary md:text-[30px] uppercase ${className}`}
    >
      {selectedLanguage === 'Fr' ? contentFr : contentEn}
    </h2>
  );
}

export default H2;
