import React from 'react';
import { Slug } from 'sanity';
import { getAllOffersSlug, getOneOffer } from '@/lib/queries';
import { Metadata } from 'next';
import Image from 'next/image';
import OffersForm from '@/components/offers/OffersForm';
import { toast } from 'react-toastify';
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

  const query =
    '{ boards (limit:5) {name id groups{title id} columns{title id type settings_str} }  }';

  const getEventMondayArray = await fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI3ODk4OTExMSwiYWFpIjoxMSwidWlkIjo0ODA1NTc2NiwiaWFkIjoiMjAyMy0wOS0wMVQxMzozNzo1My4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTg1MzI0NjAsInJnbiI6ImV1YzEifQ.MvZWF1Z3_vdY0r4QlQ2GkKpIgcjEzLcY7Mk2chvNsvo',
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());
  // .then((res) => JSON.stringify(res, null, 2));

  const findMondayBoardName = getEventMondayArray.data.boards.find(
    (board: any) => board.name === offer.mondayArrayName
  );

  return (
    <div className="w-full flex items-center justify-center max-w-content">
      <div className="w-full lg:w-6/12 mt-10  min-h-screen  flex items-center justify-center  overflow-hidden">
        <OffersForm mondayBoard={findMondayBoardName} />
      </div>

      {/* <div className="w-6/12 sticky top-10">
        <Image
          src={urlForImage(offer.mainImage.asset).url()}
          width={1200}
          height={300}
          alt={offer.mainImage.alt ? offer.mainImage.alt : 'unkown image'}
        />
      </div> */}
    </div>
  );
}

export default formOffer;
