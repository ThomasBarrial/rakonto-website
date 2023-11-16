import React, { cache } from 'react';
import { Metadata } from 'next';
import { getAllOffers, getPages } from '@/lib/queries';
import getPageContent from '@/utils/getPageContent';
import PageContainer from '@/components/global/PageContainer';
import OffersSection from '@/components/offers/OffersSection';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pages = await clientFetch(getPages);

  const pageContent = getPageContent(pages, '/articles');

  return {
    title: pageContent.title,
    description: pageContent.description,
    keywords: pageContent.keywords,
  };
}

async function Offers() {
  const offers = await clientFetch(getAllOffers);

  return (
    <PageContainer>
      <OffersSection offers={offers} />
    </PageContainer>
  );
}

export default Offers;
