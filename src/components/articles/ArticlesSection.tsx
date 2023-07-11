'use client';

import React, { useEffect, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
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
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);

  const handleAnimate = () => {
    setIsAnimate(false);
    setTimeout(() => {
      setIsAnimate(true);
    }, 10);
  };

  useEffect(() => {
    if (selectedSubject === 'All' || selectedSubject === 'Tous') {
      setArticlesList(articles);
    } else {
      const newArticleList = [];
      for (let i = 0; i < articles.length; i += 1) {
        const postCategory = articles[i].subjects.filter(
          (c) => c.titleEn === selectedSubject || c.titleFr === selectedSubject
        );

        if (postCategory.length > 0) {
          newArticleList.push(articles[i]);
        }
      }

      setArticlesList(newArticleList);
    }
    handleAnimate();
  }, [selectedSubject, articles]);

  const filteredData = articlesList.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full pt-20 font-josefin">
      <SideBar
        handleAnimate={handleAnimate}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
      />

      <H1 contentEn="Our Aticles" contentFr="Nos Articles" />
      {isAnimate && (
        <div className="animate-fadeIn">
          {filteredData.length === 0 ? (
            <p className="mt-5 text-xl">Sorry, no articles found...</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-5 mt-5 mb-10">
              {filteredData.map((item) => (
                <li key={item._id}>
                  <ArticleCard item={item} />
                  <LinkButton
                    link={`/articles/${item.slug.current}`}
                    className="w-[130px] mt-3 text-sm"
                    text={
                      selectedLanguage === 'Fr'
                        ? "lire l'article"
                        : 'read article'
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ArticlesSection;
