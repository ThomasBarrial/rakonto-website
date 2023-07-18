import React from 'react';
import { getAllArticlesSlug, getOneArticle } from '@/lib/queries';
import { Slug } from 'sanity';
import PageContainer from '@/components/global/PageContainer';
import H2 from '@/components/global/text/H2';
import BasicText from '@/components/global/text/BasicText';
import FullWidthImage from '@/components/global/images/FullWidthImage';
import Body from '@/components/articles/Body';
import GalleryImage from '@/components/global/images/GalleryImage';
import Partners from '@/components/global/Partners';
import client from '../../../../../sanity/lib/client';
import { Article } from '../../../../../types';
import urlForImage from '../../../../../sanity/lib/image';

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

  console.log(article.partners);

  return (
    <PageContainer>
      <H2
        contentEn={article.titleEn}
        contentFr={article.title}
        className="mt-24"
      />
      <BasicText
        className="mt-5"
        contentEn={article.descriptionEN}
        contentFr={article.descriptionFR}
      />
      <FullWidthImage
        className="mt-5"
        path={urlForImage(article.mainImage.asset).url()}
        alt={article.mainImage.alt ? article.mainImage.alt : 'unknow Image'}
      />
      <Body article={article} />
      <GalleryImage data={article.gallery} />
      <Partners data={article.partners} />
    </PageContainer>
  );
}

export default OneArticle;
