import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IContactInfos, ISocialMedia } from '../../../types';
import SocialMedia from './SocialMedia';

interface IProps {
  contactInfos: IContactInfos;
  socialMedia: ISocialMedia[];
}

function Footer({ contactInfos, socialMedia }: IProps) {
  return (
    <div className=" h-[35rem] flex  items-end max-w-content  pb-32 md:pb-10 md:p-10 font-josefin">
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center w-full space-y-10 md:space-y-0">
        <div className="text-xl  w-4/12 text-textColor flex flex-col items-center md:items-start">
          <p>+{contactInfos.phoneNumber}</p>
          <p>{contactInfos.email}</p>
        </div>
        <div className=" w-4/12 flex flex-col justify-center items-center">
          <Image src="/logo/logo.svg" alt="RAKONTO" height={40} width={200} />
          <Link
            className="text-textColor  font-josefin opacity-80 mt-5 md:mt-0"
            href="/"
          >
            Legal mention
          </Link>
        </div>
        <div className=" w-4/12 flex flex-col justify-center items-center md:items-end">
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Footer;