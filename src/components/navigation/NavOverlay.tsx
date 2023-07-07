import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import H1 from '../global/H1';

interface IProps {
  isOverlayOpen: boolean;
  setIsOverlayOpen: Dispatch<SetStateAction<boolean>>;
}

function NavOverlay({ isOverlayOpen, setIsOverlayOpen }: IProps) {
  const { selectedLanguage, setSelectedLanguage } =
    useSelectedLanguagesFromStore();
  const navOverlayLinks = [
    { nameFR: 'Notre Histoire', nameEn: 'Our history', link: '/ourHistory' },
    { nameFR: 'Projets', nameEn: 'Projetcs', link: '/projects' },
    { nameFR: 'Offres', nameEn: 'Offers', link: '/offers' },
    { nameFR: 'Articles', nameEn: 'Articles', link: '/articles' },
    { nameFR: 'Videos', nameEn: 'Videos', link: '/videos' },
    { nameFR: 'Nous Rejoindre', nameEn: 'Join us', link: '/joinus' },
    { nameFR: 'Bavardons', nameEn: `Let's chat`, link: '/contact' },
  ];

  const socialLinks = [
    { name: 'facebook', link: '', icon: '/socialMedia/facebook.svg' },
    { name: 'instagram', link: '', icon: '/socialMedia/instagram.svg' },
    { name: 'youtube', link: '', icon: '/socialMedia/youtube.svg' },
  ];

  return (
    <>
      <div
        className={`fixed z-20 top-0   right-0 h-screen  w-screen flex justify-end transform ${
          isOverlayOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-700`}
      >
        <div className="w-6/12 bg-background p-10 h-screen flex flex-col justify-between">
          <div>
            <div className="w-full flex justify-end">
              <button onClick={() => setIsOverlayOpen(false)} type="button">
                <div className="border group bg-background border-primary transform hover:border-none hover:bg-primary rounded-full h-10 w-10 flex items-center justify-center duration-300">
                  <div className="h-full w-full rotate-45 flex items-center justify-center">
                    <span className="h-[1px] w-8 rotate-90 translate-x-1/2 transform bg-primary group-hover:bg-background duration-300" />
                    <span className="h-[1px] w-8 bg-primary -translate-x-1/2 transform group-hover:bg-background duration-300" />
                  </div>
                </div>
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {navOverlayLinks.map((item) => (
                <Link
                  onClick={() => setIsOverlayOpen(false)}
                  key={item.nameFR}
                  href={item.link}
                >
                  <H1>
                    {selectedLanguage === 'Fr' ? item.nameFR : item.nameEn}
                  </H1>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-primary flex flex-row items-center justify-between w-full">
            <div className="flex  relative">
              <button
                onClick={() => setSelectedLanguage('En')}
                className="mr-2"
                type="button"
              >
                EN
              </button>
              <button onClick={() => setSelectedLanguage('Fr')} type="button">
                FR
              </button>
              <span
                className={`h-[1px] w-5/12 bg-primary absolute bottom-0 left-0 transform  ${
                  selectedLanguage === 'En'
                    ? 'translate-x-0'
                    : 'translate-x-[135%]'
                } duration-300 ease-in-out`}
              />
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.link} target="_blank">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={30}
                    width={30}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOverlayOpen && (
        <div className="h-screen w-screen fixed left-0 top-0 z-10 opacity-[20%] bg-black  animate-backgroundOverlay" />
      )}
    </>
  );
}

export default NavOverlay;
