import React from 'react';
import Image from 'next/image';
import { SanityImage } from '../../../types';
import SectionContainer from '../global/SectionContainer';
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
    <SectionContainer>
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
      <div className="flex flex-col lg:flex-row">
        <H1
          className="mt-10 lg:w-8/12"
          contentEn={dataIntro.titleEn}
          contentFr={dataIntro.titleEn}
        />
        <div className=" mt-5 max-h-36  lg:w-4/12 flex justify-end">
          <Image
            src={urlForImage(dataIntro.introImage.asset).url()}
            width={150}
            height={150}
            alt={
              dataIntro.introImage.alt
                ? dataIntro.introImage.alt
                : 'unknow Image'
            }
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Header;
