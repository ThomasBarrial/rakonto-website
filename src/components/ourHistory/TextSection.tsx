import Image from 'next/image';
import React from 'react';
import Body from '../articles/Body';
import H2 from '../global/text/H2';
import urlForImage from '../../../sanity/lib/image';
import { IOurHistoryTextSection } from '../../../types';

interface IProps {
  data: IOurHistoryTextSection[];
}

function TextSection({ data }: IProps) {
  return (
    <>
      <div className="mt-10 lg:mt-32 lg:w-10/12">
        <H2
          className="font-bold italic"
          contentEn={data[0].titleEn}
          contentFr={data[0].titleFr}
        />
        <Body blockEn={data[0].TextEn} blockFr={data[0].textFr} />
      </div>

      <div className=" mt-10 lg:mt-32 flex flex-col lg:flex-row lg:items-center">
        <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
          <Image
            src={urlForImage(data[1].image.asset).url()}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="lg:ml-20 lg:w-8/12">
          <H2
            className="font-bold italic"
            contentEn={data[1].titleEn}
            contentFr={data[1].titleFr}
          />
          <Body blockEn={data[1].TextEn} blockFr={data[1].textFr} />
        </div>
      </div>

      <div className="mr-10 mt-10 flex flex-col lg:flex-row-reverse items-center lg:mr-52">
        <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
          <Image
            src={urlForImage(data[2].image.asset).url()}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className=" lg:w-8/12 lg:ml-52">
          <H2
            className="font-bold italic"
            contentEn={data[2].titleEn}
            contentFr={data[2].titleFr}
          />
          <Body blockEn={data[2].TextEn} blockFr={data[2].textFr} />
        </div>
      </div>

      <div className="mr-10 mt-10 flex flex-col lg:flex-row lg:items-center lg:max-w-[900px]">
        <div className="hidden lg:flex flex-row justify-center w-5/12 items-center ">
          <Image
            src={urlForImage(data[3].image.asset).url()}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="lg:w-7/12">
          <H2
            className="font-bold italic"
            contentEn={data[3].titleEn}
            contentFr={data[3].titleFr}
          />
          <Body blockEn={data[3].TextEn} blockFr={data[3].textFr} />
        </div>
      </div>
    </>
  );
}

export default TextSection;
