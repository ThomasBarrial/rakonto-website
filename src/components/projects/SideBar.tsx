'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import SideBarLayout from '../global/SideBarLayout';
import { IProjectCategories, IYear, Subject } from '../../../types';
import OverlayMenu from './OverlayMenu';
import BasicText from '../global/text/BasicText';
import OverlayMenuButton from '../global/buttons/OverlayMenuButton';

interface IProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
  projectCategories: IProjectCategories[];
  setYearSelected: Dispatch<SetStateAction<number | null>>;
  setSubjectSelected: Dispatch<SetStateAction<string | null>>;
  subjects: Subject[];
  years: IYear[];
  setCategorySelected: Dispatch<SetStateAction<string | null>>;
  yearSelected: number | null;
  categorySelected: string | null;
  subjectSelected: string | null;
}

function SideBar({
  setIsAnimate,
  searchTerm,
  setSearchTerm,
  setCategorySelected,
  setYearSelected,
  setSubjectSelected,
  projectCategories,
  subjects,
  yearSelected,
  categorySelected,
  subjectSelected,
  years,
}: IProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <SideBarLayout
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      setIsAnimate={setIsAnimate}
    >
      <div className="mt-10 flex flex-col lg:space-y-5">
        <OverlayMenu
          nameEn="Categories"
          nameFr="Catégories"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {projectCategories.map((item) => (
            <OverlayMenuButton
              key={item._id}
              onClick={() => {
                if (categorySelected === item.titleFr) {
                  setCategorySelected(null);
                } else {
                  setCategorySelected(item.titleFr);
                }
              }}
            >
              <BasicText
                className={`uppercase  hover:underline transform duration-300 pb-1 text-sm ${
                  categorySelected === item.titleFr ? 'font-bold' : 'font-light'
                }`}
                contentEn={item.titleEn}
                contentFr={item.titleFr}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
        <OverlayMenu
          nameEn="Subjects"
          nameFr="Sujets"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {subjects.map((item) => (
            <OverlayMenuButton
              key={item._id}
              onClick={() => {
                if (subjectSelected === item.titleFr) {
                  setSubjectSelected(null);
                } else {
                  setSubjectSelected(item.titleFr);
                }
              }}
            >
              <BasicText
                className={`uppercase hover:underline transform duration-300 pb-1 text-sm ${
                  subjectSelected === item.titleFr ? 'font-bold' : 'font-light'
                }`}
                contentEn={item.titleEn}
                contentFr={item.titleFr}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
        <OverlayMenu
          nameEn="Years"
          nameFr="Années"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {years.map((item) => (
            <OverlayMenuButton
              onClick={() => {
                if (yearSelected === item.year) {
                  setYearSelected(null);
                } else {
                  setYearSelected(item.year);
                }
              }}
              key={item._id}
            >
              <BasicText
                className={`uppercase  hover:underline transform duration-300 pb-1 text-sm ${
                  yearSelected === item.year ? 'font-bold' : 'font-light'
                }`}
                contentEn={item.year.toString()}
                contentFr={item.year.toString()}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>

        <div>
          <div className="flex flex-wrap  text-xs uppercase mt-10">
            {categorySelected && <p>{categorySelected}&nbsp;/ &nbsp;</p>}
            {subjectSelected && <p>{subjectSelected}&nbsp;/ &nbsp;</p>}
            {yearSelected && <p>{yearSelected}</p>}
          </div>
          {categorySelected || subjectSelected || yearSelected ? (
            <button
              onClick={() => {
                setCategorySelected(null);
                setYearSelected(null);
                setSubjectSelected(null);
              }}
              type="button"
              className="mt-5 text-sm "
            >
              {selectedLanguage === 'Fr'
                ? 'Effacer les filtres'
                : 'Remove filters'}
            </button>
          ) : null}
        </div>
      </div>
    </SideBarLayout>
  );
}

export default SideBar;
