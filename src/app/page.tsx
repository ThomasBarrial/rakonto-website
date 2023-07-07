import { cache } from 'react';
import { getAllPosts } from '@/lib/queries';
import H1 from '@/components/global/H1';
import H2 from '@/components/global/H2';
import H3 from '@/components/global/H3';
import Texte from '@/components/global/Text';
import TextSmall from '@/components/global/TextSmall';
import client from '../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const posts = await clientFetch(getAllPosts);

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <H1>Ceci est un titre h1</H1>
      <H2>Ceci est un titre h2</H2>
      <H3>Ceci est un titre h3</H3>
      <Texte className="font-josefin text-[16px] md:text-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
        magna a vestibulum convallis. Aliquam ac interdum quam. Pellentesque
        sollicitudin erat eu lorem scelerisque lacinia.{' '}
      </Texte>
      <TextSmall>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
        magna a vestibulum convallis. Aliquam ac interdum quam. Pellentesque
        sollicitudin erat eu lorem scelerisque lacinia.{' '}
      </TextSmall>
    </main>
  );
}
