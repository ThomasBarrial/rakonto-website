'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PortableText } from '@portabletext/react';
import React from 'react';
import RichTextComponents from '../global/text/RichTextComponent';
import { Article } from '../../../types';

function Body({ article }: { article: Article }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div className="mt-5 font-josefin">
      <PortableText
        value={selectedLanguage === 'Fr' ? article.bodyFr : article.bodyEn}
        components={RichTextComponents}
      />
    </div>
  );
}

export default Body;
