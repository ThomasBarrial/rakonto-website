import PageContainer from '@/components/global/PageContainer';
import Header from '@/components/homepage/Header';
import Presentation from '@/components/homepage/Presentation';
import LastestArticles from '@/components/homepage/LastestArticles';
import type { Metadata } from 'next';
import OurProjects from '@/components/homepage/OurProjects';
import { cache } from 'react';
import { getAllArticles, getHomePageContent } from '@/lib/queries';
import ImagesGallery from '@/components/homepage/ImagesGallery';
import SupportUs from '@/components/homepage/SupportUs';
import client from '../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const homePageContent = await clientFetch(getHomePageContent);

  return {
    title: homePageContent[0].title,
    description: homePageContent[0].description,
    keywords: homePageContent[0].keywords,
  };
}

export default async function Home() {
  const homePageContent = await clientFetch(getHomePageContent);
  const articles = await clientFetch(getAllArticles);

  return (
    <PageContainer>
      <Header />
      <Presentation data={homePageContent[0].pageBuilder[0]} />
      <OurProjects data={homePageContent[0].pageBuilder[1]} />
      <LastestArticles
        data={homePageContent[0].pageBuilder[2]}
        articles={articles}
      />
      <OurProjects data={homePageContent[0].pageBuilder[3]} />
      <ImagesGallery data={homePageContent[0].pageBuilder[4]} />
      <SupportUs data={homePageContent[0].pageBuilder[5]} />
    </PageContainer>
  );
}
