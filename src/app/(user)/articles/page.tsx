import React, { cache } from 'react';
import { Metadata } from 'next';
import { getAllArticles, getHomePageContent, getSubjects } from '@/lib/queries';
import ArticlesSection from '@/components/articles/ArticlesSection';
import PageContainer from '@/components/global/PageContainer';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const pageData = await clientFetch(getHomePageContent);

  return {
    title: pageData[0].title,
    description: pageData[0].description,
    keywords: pageData[0].keywords,
  };
}

async function Articles() {
  const subjects = await clientFetch(getSubjects);
  const articles = await clientFetch(getAllArticles);
  const pageData = await clientFetch(getHomePageContent);

  return (
    <PageContainer>
      <ArticlesSection
        subjects={subjects}
        articles={articles}
        pageTitleFr="homePageContent[0].titleFr"
        pageTitleEn="homePageContent[0].titleEn"
      />
    </PageContainer>
  );
}

export default Articles;
