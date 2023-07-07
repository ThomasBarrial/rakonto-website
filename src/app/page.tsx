import Image from "next/image";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { getAllPosts } from "@/lib/queries";
import H1 from "@/components/global/H1";
import H2 from "@/components/global/H2";
import H3 from "@/components/global/H3";
import Texte from "@/components/global/Text";
import TexteSmall from "@/components/global/TextSmall";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const posts = await clientFetch(getAllPosts);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <H1>Ceci est un titre h1</H1>
      <H2>Ceci est un titre h2</H2>
      <H3>Ceci est un titre h3</H3>
      <Texte className="font-josefin text-[16px] md:text-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
        magna a vestibulum convallis. Aliquam ac interdum quam. Pellentesque
        sollicitudin erat eu lorem scelerisque lacinia.{" "}
      </Texte>
      <TexteSmall>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
        magna a vestibulum convallis. Aliquam ac interdum quam. Pellentesque
        sollicitudin erat eu lorem scelerisque lacinia.{" "}
      </TexteSmall>
    </main>
  );
}
