import React from 'react';
import { getAllArticlesSlug, getOneArticle } from '@/lib/queries';
import { Slug } from 'sanity';
import H1 from '@/components/global/text/H1';
import PageContainer from '@/components/global/PageContainer';
import client from '../../../../sanity/lib/client';
import { Article } from '../../../../types';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getAllArticlesSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

async function OneArticle({ params: { slug } }: Props) {
  const article: Article = await client.fetch(getOneArticle, { slug });

  return (
    <PageContainer>
      <H1 className="mt-24">{article.title}</H1>
    </PageContainer>
  );
}

export default OneArticle;
