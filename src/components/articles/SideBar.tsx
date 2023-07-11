import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { ISubject } from '../../../types';

interface IProps {
  selectedSubject: string;
  setSelectedSubject: Dispatch<SetStateAction<string>>;
  subjects: ISubject[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleAnimate: () => void;
}

function SideBar({
  selectedSubject,
  setSelectedSubject,
  subjects,
  searchTerm,
  setSearchTerm,
  handleAnimate,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    handleAnimate();
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className={`fixed overflow-hidden z-20 bottom-7 w-[90%] border-2 border-primary lg:w-[40%] right-5 bg-background text-primary shadow-2xl  text-lg p-3  ${
        isFilterOpen ? 'h-[365px]' : 'h-[55px]'
      } transform duration-500 ease-out`}
    >
      <button
        type="button"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex justify-between items-start mb-5 w-full"
      >
        <p className="uppercase text-primary">
          {selectedLanguage === 'Fr'
            ? 'Filtrer / Rechercher'
            : 'Filter / Search'}
        </p>
        <Image
          className={`${
            isFilterOpen ? 'rotate-0' : 'rotate-180'
          } transform duration-500 ease-out`}
          src="/downArrow.svg"
          alt="down"
          height={15}
          width={13}
        />
      </button>
      <input
        className="focus:outline-none bg-background border-b border-primary text-primary w-full"
        type="text"
        placeholder={selectedLanguage === 'Fr' ? 'Rechercher' : 'Search'}
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="flex flex-col space-y-3 items-start mt-5">
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
