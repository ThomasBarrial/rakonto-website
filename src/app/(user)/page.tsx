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
    title: homePageContent[1].title,
    description: homePageContent[1].description,
    keywords: homePageContent[1].keywords,
  };
}

export default async function Home() {
  const homePageContent = await clientFetch(getHomePageContent);
  const articles = await clientFetch(getAllArticles);

  return (
    <PageContainer>
      <Header />
      <Presentation data={homePageContent[1].pageBuilder[0]} />
      <OurProjects data={homePageContent[1].pageBuilder[1]} />
      <LastestArticles
        data={homePageContent[1].pageBuilder[2]}
        articles={articles}
      />
      <OurProjects data={homePageContent[1].pageBuilder[3]} />
      <ImagesGallery data={homePageContent[1].pageBuilder[4]} />
      <SupportUs data={homePageContent[1].pageBuilder[5]} />
    </PageContainer>
  );
}
