'use client';

import React, { useEffect, useState } from 'react';
import handleAnimate from '@/utils/handleAnimate';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import SideBar from './SideBar';
import { IProject, IProjectCategories, IYear, Subject } from '../../../types';
import ProjectCard from './ProjectCard';

interface IProps {
  projectCategories: IProjectCategories[];
  subjects: Subject[];
  years: IYear[];
  projects: IProject[];
}

function ProjectsList({
  projectCategories,
  subjects,
  years,
  projects,
}: IProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [projectsList, setProjectList] = useState(projects);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [subjectSelected, setSubjectSelected] = useState<string | null>(null);
  const [yearSelected, setYearSelected] = useState<number | null>();

  useEffect(() => {
    handleAnimate(setIsAnimate);

    setProjectList(projects);

    // CATEGORIES
    // const newArray = [];
    // for (let i = 0; i < projects.length; i += 1) {
    //   const projectCategory = projects[i].categories?.filter(
    //     (c) => c.titleEn === categorySelected || c.titleFr === categorySelected
    //   );

    //   if (projectCategory && projectCategory.length > 0) {
    //     newArray.push(projects[i]);
    //   }
    // }

    // console.log(newArray);
    // setProjectList(newArray);

    // // SUBJECTS
    // if (subjectSelected) {
    //   for (let i = 0; i < projects.length; i += 1) {
    //     const projectSubject = projects[i].subjects?.filter(
    //       (c) => c.titleEn === subjectSelected || c.titleFr === subjectSelected
    //     );

    //     if (projectSubject && projectSubject.length > 0) {
    //       projectsList.push(projects[i]);
    //     }
    //   }
    // }

    // // YEARS
    // if (yearSelected) {
    //   for (let i = 0; i < projects.length; i += 1) {
    //     const projectYear = projects[i].projectYear?.year;

    //     if (projectYear && projectYear === yearSelected) {
    //       projectsList.push(projects[i]);
    //     }
    //   }
    // }

    // if (!yearSelected && !subjectSelected && !categorySelected) {
    //   setProjectList(projects);
    // }
  }, [projects, subjectSelected, yearSelected, categorySelected]);

  const filteredData = projectsList.filter((item) => {
    if (selectedLanguage === 'Fr') {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-full pt-20 font-josefin flex flex-col lg:flex-row">
      <SideBar
        setIsAnimate={setIsAnimate}
        setCategorySelected={setCategorySelected}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        projectCategories={projectCategories}
        subjects={subjects}
        years={years}
      />
      {isAnimate && (
        <div className="w-full animate-fadeIn lg:w-10/12 ">
          {filteredData.length === 0 ? (
            <p className="mt-5 text-xl">Sorry, no articles found...</p>
          ) : (
            <ul className=" grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-5 mb-10">
              {filteredData.map((item) => (
                <li key={item._id} className="w-full">
                  <ProjectCard item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
