import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ISubject } from '../../../types';

interface IProps {
  selectedSubject: string;
  setSelectedSubject: Dispatch<SetStateAction<string>>;
  subjects: ISubject[];
}

function SideBar({ selectedSubject, setSelectedSubject, subjects }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div
      className={`fixed overflow-hidden z-10 bottom-7 w-[70%] right-5 bg-primary text-white shadow-2xl  text-lg p-3 border border-primary ${
        isFilterOpen ? 'h-[255px]' : 'h-[50px]'
      } transform duration-500 ease-out`}
    >
      <button
        type="button"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex justify-between items-start mb-5 w-full"
      >
        <p className="uppercase text-white">
          {selectedLanguage === 'Fr' ? 'Filtrer' : 'Filter'}
        </p>
        <Image
          className={`${
            isFilterOpen ? 'rotate-0' : 'rotate-180'
          } transform duration-500 ease-out`}
          src="/downArrowWhite.svg"
          alt="down"
          height={15}
          width={13}
        />
      </button>
      <div className="flex flex-col space-y-3 items-start">
        <button
          onClick={() =>
            setSelectedSubject(selectedLanguage === 'Fr' ? 'Tous' : 'All')
          }
          type="button"
          className={`uppercase ${
            selectedSubject === 'Tous' || selectedSubject === 'All'
              ? 'font-bold'
              : 'font-regular'
          }`}
        >
          {selectedLanguage === 'Fr' ? 'Tous' : 'All'}
        </button>
        {subjects.map((item) => (
          <button
            onClick={() =>
              setSelectedSubject(
                selectedLanguage === 'Fr' ? item.titleFr : item.titleEn
              )
            }
            className={`uppercase ${
              selectedSubject === item.titleFr ||
              selectedSubject === item.titleEn
                ? 'font-bold'
                : 'font-regular'
            }`}
            type="button"
            key={item._id}
          >
            {selectedLanguage === 'Fr' ? item.titleFr : item.titleEn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
