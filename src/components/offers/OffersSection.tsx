'use client';

import React from 'react';
import Image from 'next/image';
import { IOffer } from '../../../types';
import SectionContainer from '../global/SectionContainer';

import H2 from '../global/text/H2';
import urlForImage from '../../../sanity/lib/image';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';
import OneOffer from './OneOffer';

function OffersSection({ offers }: { offers: IOffer[] }) {
  console.log(offers);
  return (
    <SectionContainer className=" w-full pt-20 ">
      {offers.map((item) => (
        <OneOffer
          nameButton="Details"
          key={item._id}
          offer={item}
          link={`/offers/${item.slug.current}`}
        />
      ))}
    </SectionContainer>
  );
}

export default OffersSection;
