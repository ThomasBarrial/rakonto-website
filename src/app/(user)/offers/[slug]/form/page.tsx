import React from 'react';
import { Slug } from 'sanity';
import { getAllOffersSlug, getOneOffer } from '@/lib/queries';
import { Metadata } from 'next';
import Image from 'next/image';
import OffersForm from '@/components/offers/OffersForm';
import client from '../../../../../../sanity/lib/client';
import { IOffer } from '../../../../../../types';
import urlForImage from '../../../../../../sanity/lib/image';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getAllOffersSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const offer: IOffer = await client.fetch(getOneOffer, { slug });

  if (offer.keywords) {
    return {
      title: offer.title,
      description: offer.descriptionEN,
      keywords: offer.keywords,
    };
  }
  return {
    title: offer.title,
    description: offer.descriptionEN,
    keywords: '',
  };
}

async function formOffer({ params: { slug } }: Props) {
  const offer: IOffer = await client.fetch(getOneOffer, { slug });

  return (
    <div className="w-full flex">
      <div className="w-full lg:w-6/12 mt-10 h-screen min-h-screen  flex items-center justify-center  overflow-hidden">
        <OffersForm />
      </div>
      <div className="w-6/12 sticky top-10">
        <Image
          src={urlForImage(offer.mainImage.asset).url()}
          width={1200}
          height={300}
          alt={offer.mainImage.alt ? offer.mainImage.alt : 'unkown image'}
        />
      </div>
    </div>
  );
}

export default formOffer;
