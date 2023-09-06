'use client';

import React from 'react';
import { IOffer } from '../../../types';
import SectionContainer from '../global/SectionContainer';

import OneOffer from './OneOffer';

function OffersSection({ offers }: { offers: IOffer[] }) {
  console.log(offers);
  return (
    <SectionContainer className=" w-full  ">
      {offers.map((item) => (
        <OneOffer
          key={item._id}
          offer={item}
          link={`/offers/${item.slug.current}`}
        />
      ))}
    </SectionContainer>
  );
}

export default OffersSection;
