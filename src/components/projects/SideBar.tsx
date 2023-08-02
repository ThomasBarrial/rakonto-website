'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
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
  subjects: Subject[];
  years: IYear[];
  setCategorySelected: Dispatch<SetStateAction<string | null>>;
}

function SideBar({
  setIsAnimate,
  searchTerm,
  setSearchTerm,
  setCategorySelected,
  projectCategories,
  subjects,
  years,
}: IProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SideBarLayout
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      setIsAnimate={setIsAnimate}
    >
      <div className="mt-10">
        <OverlayMenu
          nameEn="Categories"
          nameFr="Catégories"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {projectCategories.map((item) => (
            <button
              key={item._id}
              onClick={() => setCategorySelected(item.titleFr)}
              type="button"
              className="w-full my-2 text-left font-light hover:font-bold"
            >
              <BasicText
                className="uppercase pb-1 text-sm"
                contentEn={item.titleEn}
                contentFr={item.titleFr}
              />
            </button>
          ))}
        </OverlayMenu>
        <OverlayMenu
          nameEn="Subjects"
          nameFr="Sujets"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {subjects.map((item) => (
            <OverlayMenuButton key={item._id}>
              <BasicText
                className="uppercase pb-1 text-sm"
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
            <OverlayMenuButton key={item._id}>
              <BasicText
                className="uppercase pb-1 text-sm"
                contentEn={item.year.toString()}
                contentFr={item.year.toString()}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
      </div>
    </SideBarLayout>
  );
}

export default SideBar;
