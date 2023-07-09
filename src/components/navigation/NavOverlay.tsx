import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { INavLinks, ISocialMedia } from '../../../types';
import CloseButton from '../global/buttons/CloseButton';

import SocialMedia from '../global/SocialMedia';
import LangButton from '../global/buttons/LangButton';

interface IProps {
  isOverlayOpen: boolean;
  setIsOverlayOpen: Dispatch<SetStateAction<boolean>>;
  navLinks: INavLinks[];
  socialMedia: ISocialMedia[];
}

function NavOverlay({
  isOverlayOpen,
  setIsOverlayOpen,
  navLinks,
  socialMedia,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <>
      <div
        className={`fixed  top-0 z-50 bg-background p-4 md:p-10 h-full flex flex-col justify-between  right-0 w-full md:w-6/12 transform ${
          isOverlayOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-700`}
      >
        <div>
          <div className="w-full flex justify-end">
            <CloseButton onClick={() => setIsOverlayOpen(false)} />
          </div>
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((item) => (
              <Link
                onClick={() => setIsOverlayOpen(false)}
                key={item.nameFr}
                href={item.link}
              >
                <h1 className="font-bayon text-[50px] lg:text-[70px] leading-none text-primary">
                  {selectedLanguage === 'Fr' ? item.nameFr : item.nameEn}
                </h1>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-primary flex flex-row items-center justify-between w-full">
          <LangButton />
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>

      {isOverlayOpen && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          type="button"
          onClick={() => setIsOverlayOpen(false)}
          className="h-screen w-screen fixed z-10 left-0 top-0 opacity-[20%] bg-black  animate-backgroundOverlay"
        />
      )}
    </>
  );
}

export default NavOverlay;
