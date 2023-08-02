'use client';

import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Image from 'next/image';
import H3 from '../global/text/H3';
import Body from '../articles/Body';
import GalleryImage from '../global/images/GalleryImage';
import BasicText from '../global/text/BasicText';
import Video from '../videos/Video';
import VideoModal from '../videos/VideoModal';
import ExternalesLinks from './ExternalesLinks';
import Files from './Files';
import { Block, IExternalsLinks, IFile, SanityImage } from '../../../types';

interface IProps {
  item: {
    _id: string;
    title: string;
    titleEn: string;
    textFR?: Block[] | undefined;
    textEn?: Block[] | undefined;
    gallery?: SanityImage[] | undefined;
    url?: string | undefined;
    externalsLinks?: IExternalsLinks[] | undefined;
    files?: IFile[] | undefined;
  };
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}

function ProjectSection({ item, selected, setSelected }: IProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, url: '' });

  const handleClick = () => {
    if (selected === item.title) {
      setSelected(null);
    } else {
      setSelected(item.title);
    }

    if (dropdownRef.current) {
      // Récupérer la hauteur réelle du contenu
      const contentHeight = dropdownRef.current?.scrollHeight;
      setDropdownHeight(contentHeight);

      console.log(contentHeight);
    }
  };

  return (
    <div>
      {/* MODAL */}
      {isModalOpen.isOpen && (
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}{' '}
      <H3
        className="text-primary"
        contentEn={item.titleEn}
        contentFr={item.title}
      />
      <div
        ref={dropdownRef}
        className={`${
          selected === item.title
            ? `h-[80vh]  overflow-y-scroll`
            : 'h-[0vh] overflow-hidden'
        }  transform duration-500 ease-out`}
      >
        {' '}
        {/* TEXTE */}
        {item.textEn && item.textFR && (
          <Body blockEn={item.textEn} blockFr={item.textFR} />
        )}
        {/* VIDEO */}
        {item.url && (
          <Video
            setIsModalOpen={setIsModalOpen}
            url={item.url}
            className="h-52 sm:h-[400px] lg:h-[500px] xl:h-[580px] w-full mt-10"
          />
        )}
        {/* GALLERY */}
        {item.gallery && <GalleryImage data={item.gallery} />}
        {/* EXGERNAL LINKS */}
        {item.externalsLinks && (
          <div className="mt-2">
            <BasicText
              contentEn="External links"
              contentFr="Liens externes"
              className="mt-10 text-primary"
            />
            <div className="my-5">
              <ExternalesLinks links={item.externalsLinks} />
            </div>
          </div>
        )}
        {/* DOWLOAD FILES */}
        {item.files && (
          <div className="mt-2">
            <BasicText
              contentEn="DOWNLOADABLE DOCUMENTS"
              contentFr="DOCUMENTS TÉLÉCHARGEABLE"
              className="mt-10 text-primary"
            />
            <div className="my-5">
              <Files files={item.files} />
            </div>
          </div>
        )}
      </div>
      <button
        onClick={handleClick}
        className="w-full flex justify-end my-2"
        type="button"
      >
        {' '}
        <Image
          className={`${
            selected === item.title ? 'rotate-180' : 'rotate-0'
          } transform duration-500 ease-out flex `}
          src="/downArrow.svg"
          alt="down"
          height={15}
          width={13}
        />
      </button>
    </div>
  );
}

export default ProjectSection;
