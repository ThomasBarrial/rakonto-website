import React from 'react';
import Image from 'next/image';
import { SanityImage } from '../../../types';
import FullWidthImage from '../global/images/FullWidthImage';
import H1 from '../global/text/H1';
import urlForImage from '../../../sanity/lib/image';

interface Data {
  titleFr: string;
  titleEn: string;
  introImage: SanityImage;
}

interface IProps {
  dataBanner: Data;
  dataIntro: Data;
}

function Header({ dataBanner, dataIntro }: IProps) {
  return (
    <>
      {' '}
      <FullWidthImage
        title={dataBanner.titleFr}
        titleEn={dataBanner.titleEn}
        className="mt-5"
        path={urlForImage(dataBanner.introImage.asset).url()}
        alt={
          dataBanner.introImage.alt ? dataBanner.introImage.alt : 'unknow Image'
        }
        end={200}
        start={-400}
        bgColor="none"
      />
      <div className="flex flex-col lg:flex-row lg:items-end">
        <H1
          className="mt-10 lg:w-8/12"
          contentEn={dataIntro.titleEn}
          contentFr={dataIntro.titleFr}
        />
        <div className=" mt-5 max-h-36  lg:w-4/12 lg:flex justify-end hidden">
          <Image
            src={urlForImage(dataIntro.introImage.asset).url()}
            width={180}
            height={180}
            alt={
              dataIntro.introImage.alt
                ? dataIntro.introImage.alt
                : 'unknow Image'
            }
          />
        </div>
      </div>
    </>
  );
}

export default Header;
