'use client';

import React from 'react';
import Image from 'next/image';
import { IOffer } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import H2 from '../global/text/H2';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';

function OneOffer({
  offer,
  link,
  nameButton,
}: {
  offer: IOffer;
  link: string;
  nameButton: string;
}) {
  return (
    <div className="my-5 flex flex-col lg:flex-row">
      <div className="lg:w-6/12">
        <H2 contentEn={offer.titleEn} contentFr={offer.title} />
        <Image
          src={urlForImage(offer.mainImage.asset).url()}
          width={1200}
          height={300}
          alt={offer.mainImage.alt ? offer.mainImage.alt : 'unkown image'}
        />
      </div>
      <div className="lg:w-5/12 lg:px-10">
        <BasicText
          className="mt-10"
          contentEn={offer.descriptionEN}
          contentFr={offer.descriptionFR}
        />

        <LinkButton
          className="mt-10"
          textEn={nameButton}
          textFr={nameButton}
          link={link}
        />
      </div>
    </div>
  );
}

export default OneOffer;
