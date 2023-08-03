'use client';

import React from 'react';
import { IHomeOurOffersSection } from '../../../types';
import H1 from '../global/text/H1';
import LinkButton from '../global/buttons/LinkButton';
import Background from '../animated/Background';

function OurOffers({ data }: { data: IHomeOurOffersSection }) {
  return (
    <section className=" h-screen flex flex-col items-center justify-center pb-52">
      <H1
        contentEn={data.titleEn}
        contentFr={data.titleFr}
        className="text-center lg:w-10/12"
      />
      <LinkButton
        className="w-8/12  lg:w-[240px] mt-10"
        textEn={data.callToAction.nameEn}
        textFr={data.callToAction.nameFr}
        link={data.callToAction.link}
      />
      <Background
        image="/backgroundHome/bgoffers.webp"
        start={3100}
        end={5100}
      />
    </section>
  );
}

export default OurOffers;
