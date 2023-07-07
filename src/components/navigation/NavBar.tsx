'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import NavOverlay from './NavOverlay';

function NavBar() {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const navBarLinks = [
    { nameFR: 'Notre Histoire', nameEn: 'Our history', link: '/ourHistory' },
    { nameFR: 'Projets', nameEn: 'Projetcs', link: '/projects' },
    { nameFR: 'Bavardons', nameEn: `Let's chat`, link: '/contact' },
    { nameFR: 'Explorer', nameEn: 'Explore', link: '' },
  ];

  return (
    <div className=" h-16 fixed top-0 w-full max-w-content flex justify-between items-center">
      <Link href="/">
        <Image src="/logo2.svg" width={150} height={200} alt="RAKONTO" />
      </Link>

      <div className="font-josefin flex uppercase space-x-4 text-[13px] text-primary">
        {navBarLinks.map((item) => (
          <div key={item.nameEn}>
            {item.nameEn === 'Explore' ? (
              <button
                onClick={() => setIsOverlayOpen(true)}
                type="button"
                className="uppercase"
              >
                {selectedLanguage === 'Fr' ? item.nameFR : item.nameEn}
              </button>
            ) : (
              <Link href={item.link}>{item.nameFR}</Link>
            )}
          </div>
        ))}
      </div>

      <NavOverlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
    </div>
  );
}

export default NavBar;
