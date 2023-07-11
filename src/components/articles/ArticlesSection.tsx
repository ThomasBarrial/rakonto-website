'use client';

import React, { useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import { Article, ISubject } from '../../../types';
import SideBar from './SideBar';
import H1 from '../global/text/H1';
import ArticleCard from './ArticleCard';
import LinkButton from '../global/buttons/LinkButton';

interface IProps {
  subjects: ISubject[];
  articles: Article[];
  pageTitleFr: string;
  pageTitleEn: string;
}

function ArticlesSection({
  subjects,
  articles,
  pageTitleFr,
  pageTitleEn,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  const [selectedSubject, setSelectedSubject] = useState('All');

  return (
    <div className=" w-full pt-20 font-josefin">
      <SideBar
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
      />
      <H1 contentEn="Our Aticles" contentFr="Nos Articles" />
      <div className="flex flex-col space-y-10 mt-5 mb-10">
        {articles.map((item) => (
          <div key={item._id}>
            <ArticleCard item={item} />
            <LinkButton
              link={`/articles/${item.slug.current}`}
              className="w-[130px] mt-3 text-sm"
              text={
                selectedLanguage === 'Fr' ? "lire l'article" : 'read article'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesSection;
