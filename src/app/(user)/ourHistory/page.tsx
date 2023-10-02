import PageContainer from '@/components/global/PageContainer';
import SectionContainer from '@/components/global/SectionContainer';
import FullWidthImage from '@/components/global/images/FullWidthImage';
import BasicText from '@/components/global/text/BasicText';
import H1 from '@/components/global/text/H1';
import H2 from '@/components/global/text/H2';
import TextWithPicture from '@/components/ourHistory/TextWithPicture';
import Image from 'next/image';
import React, { cache } from 'react';
import { getAllTeamMembers } from '@/lib/queries';
import TeamMembers from '@/components/ourHistory/TeamMembers';
import H3 from '@/components/global/text/H3';
import Length from '@/components/global/Length';
import RakontoNumbers from '@/components/ourHistory/RakontoNumbers';
import client from '../../../../sanity/lib/client';

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

async function page() {
  const team = await clientFetch(getAllTeamMembers);

  return (
    <PageContainer>
      <SectionContainer>
        <FullWidthImage
          title="Wo we are"
          titleEn="Qui sommes nous"
          className="mt-5"
          path="/quisommenous.webp"
          alt="unknow Image"
          end={200}
          start={-400}
          bgColor="none"
        />
        <div className="flex flex-col lg:flex-row">
          <H1
            className="mt-10 lg:w-8/12"
            contentEn="Imagine un monde dans lequel le futur ne serait pas effrayant."
            contentFr="Imagine un monde dans lequel le futur ne serait pas effrayant."
          />
          <div className=" mt-5 max-h-36  lg:w-4/12 flex justify-end">
            <Image
              src="/notreAventure.webp"
              width={150}
              height={150}
              alt="notre aventure"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-32">
          <H2
            className="font-bold italic"
            contentEn="On était pris au piège :"
            contentFr="On était pris au piège :"
          />
          <BasicText
            contentEn={`En 2019, nous sortons de l'université avec l'ambition de changer le monde. On a vite déchanté. Nos expériences avec des entreprises obsédées par l'argent au détriment de l'humain nous ont rapidement fait redescendre sur Terre. À ce moment-là, on avait 10 alarmes à 5mn d’intervalle pour se réveiller le matin. Ton réveil sonne, tu es dans ton lit à fixer le plafond. Tu sais que tu vas passer ta journée à contribuer à quelque chose qui va à l’encontre de tes valeurs pour pouvoir à peine payer ton loyer. Tu ouvres insta et tu vois des images de forêts en feu, de plastique dans les océans, et de violences à tous les niveaux. Tu sens que tout part en vrille et que tu ne sais plus quoi faire. Alors qu'est-ce que tu fais ? Tu éteins ton réveil et tu retournes te coucher. À quoi bon se lever de toute façon ? C'est alors qu'on a pris une grande décision : tout plaquer pour partir faire un tour du monde avec un projet qui avait vraiment du sens pour nous.`}
            contentFr={`En 2019, nous sortons de l'université avec l'ambition de changer le monde. On a vite déchanté. Nos expériences avec des entreprises obsédées par l'argent au détriment de l'humain nous ont rapidement fait redescendre sur Terre. À ce moment-là, on avait 10 alarmes à 5mn d’intervalle pour se réveiller le matin. Ton réveil sonne, tu es dans ton lit à fixer le plafond. Tu sais que tu vas passer ta journée à contribuer à quelque chose qui va à l’encontre de tes valeurs pour pouvoir à peine payer ton loyer. Tu ouvres insta et tu vois des images de forêts en feu, de plastique dans les océans, et de violences à tous les niveaux. Tu sens que tout part en vrille et que tu ne sais plus quoi faire. Alors qu'est-ce que tu fais ? Tu éteins ton réveil et tu retournes te coucher. À quoi bon se lever de toute façon ? C'est alors qu'on a pris une grande décision : tout plaquer pour partir faire un tour du monde avec un projet qui avait vraiment du sens pour nous.`}
          />
        </div>

        <div className=" mt-10 lg:mt-32 flex flex-col lg:flex-row lg:items-center">
          <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
            <Image src="/carte.webp" alt="" width={300} height={300} />
          </div>
          <div className="ml-10 lg:ml-20 lg:w-8/12">
            <H2
              className="font-bold italic"
              contentEn="On a décidé de tout plaquer :"
              contentFr="On a décidé de tout plaquer :"
            />
            <BasicText
              className="lg:mt-10"
              contentEn={`C'est alors qu'on a eu cette idée : le tour du monde en 80 défis. Un voyage sans avions, en créant des contenus éthiques et inspirants pour les enfants des écoles locales. On en a parlé à nos proches, et ça a tout de suite pris. En quelques mois, avec le soutien d'entreprises locales et des réseaux sociaux, on a réussi à réunir un peu d'argent et nous sommes partis.`}
              contentFr={`C'est alors qu'on a eu cette idée : le tour du monde en 80 défis. Un voyage sans avions, en créant des contenus éthiques et inspirants pour les enfants des écoles locales. On en a parlé à nos proches, et ça a tout de suite pris. En quelques mois, avec le soutien d'entreprises locales et des réseaux sociaux, on a réussi à réunir un peu d'argent et nous sommes partis.`}
            />
            <BasicText
              className="mt-5 lg:mt-10"
              contentEn={`Pendant 6 mois, on a vécu une aventure incroyable traversant l'Atlantique pour rejoindre l'Amérique latine depuis le Maroc. Dans chaque pays où l’on passait, on s’arrêtait quelques semaines pour faire du volontariat dans une initiative locale tout en créant du contenu inspirant. Puis le COVID nous a obligés à rentrer. Mais même pendant cette période, nous faisions du bénévolat en Europe, car chaque nouvelle initiative rencontrée nous redonnait espoir en un avenir meilleur. C'est là que notre association a pris un nouveau tournant.`}
              contentFr={`Pendant 6 mois, on a vécu une aventure incroyable traversant l'Atlantique pour rejoindre l'Amérique latine depuis le Maroc. Dans chaque pays où l’on passait, on s’arrêtait quelques semaines pour faire du volontariat dans une initiative locale tout en créant du contenu inspirant. Puis le COVID nous a obligés à rentrer. Mais même pendant cette période, nous faisions du bénévolat en Europe, car chaque nouvelle initiative rencontrée nous redonnait espoir en un avenir meilleur. C'est là que notre association a pris un nouveau tournant.`}
            />
          </div>
        </div>

        <div className="mr-10 mt-10 flex flex-col lg:flex-row-reverse items-center lg:mr-52">
          <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
            <Image src="/Zen.webp" alt="" width={300} height={300} />
          </div>
          <div className="ml-10 lg:w-8/12 lg:ml-52">
            <H2
              className="font-bold italic"
              contentEn="On aurait jamais pu imaginer ça :"
              contentFr="On aurait jamais pu imaginer ça :"
            />
            <BasicText
              className="lg:mt-5 "
              contentEn={`De voir toutes ces solutions et toutes ces personnes déterminées à rendre notre monde meilleur, ça nous a carrément boostés. On se levait tôt le matin sans même avoir besoin d'un réveil, et pourtant on ne touchait pas un sou pour ce qu'on faisait. Mais c'était tellement gratifiant de contribuer à quelque chose d'utile. On pouvait continuer à rêver et à espérer un futur comme jamais auparavant.`}
              contentFr={`De voir toutes ces solutions et toutes ces personnes déterminées à rendre notre monde meilleur, ça nous a carrément boostés. On se levait tôt le matin sans même avoir besoin d'un réveil, et pourtant on ne touchait pas un sou pour ce qu'on faisait. Mais c'était tellement gratifiant de contribuer à quelque chose d'utile. On pouvait continuer à rêver et à espérer un futur comme jamais auparavant.`}
            />
          </div>
        </div>

        <div className="mr-10 mt-10 flex flex-col lg:flex-row lg:items-center lg:max-w-[900px]">
          <div className="hidden lg:flex flex-row justify-center w-5/12 items-center ">
            <Image src="/Rédaction.webp" alt="" width={200} height={200} />
          </div>
          <div className="lg:w-7/12">
            <H2
              className="font-bold italic"
              contentEn="C’est là qu’on a compris."
              contentFr="C’est là qu’on a compris."
            />
            <BasicText
              contentEn={`Des solutions aux problèmes d’aujourd’hui il en existe plein, et encore plus de gens prêts à y consacrer leur vie. Le vrai problème, c'est qu’on ne leur donne aucune visibilité.`}
              contentFr={`Des solutions aux problèmes d’aujourd’hui il en existe plein, et encore plus de gens prêts à y consacrer leur vie. Le vrai problème, c'est qu’on ne leur donne aucune visibilité.`}
            />
          </div>
        </div>

        <TextWithPicture />

        <TeamMembers team={team} />

        <div className="ml-10 mt-10 lg:mt-52 flex flex-col lg:flex-row lg:items-center lg:mx-24">
          <div className="hidden lg:flex flex-row justify-center w-4/12 items-center ">
            <Image src="/Layer.webp" alt="" width={200} height={200} />
          </div>
          <div className="lg:w-9/12 mr-2">
            <H2
              className="font-bold italic"
              contentEn="nos missions / valeurs"
              contentFr="nos missions / valeurs"
            />
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-6/12 lg:p-5">
                <BasicText
                  contentEn={`Notre association a une mission bien spécifique : utiliser l'art et l'éducation non-formelle pour réécrire le récit de notre société. Nous croyons fermement que l'avenir vers lequel nous semblons nous diriger n'est pas la seule voie possible. Il est temps de concevoir un monde qui respecte ses habitants, sa biodiversité et ses limites. Un monde où la course à la croissance infinie, à la compétitivité et à la surproductivité laisse place à un nouveau paradigme. Un paradigme centré sur la durabilité, la santé (à la fois mentale et physique) ainsi que les valeurs humaines et environnementales. Il est indéniable que de nos jours, nous avons tendance à bien plus imaginer l'apocalypse que l'utopie. C'est là que nous intervenons. En tant qu'association, nous nous efforçons de catalyser l'imagination collective pour construire un monde désirable. `}
                  contentFr={`Notre association a une mission bien spécifique : utiliser l'art et l'éducation non-formelle pour réécrire le récit de notre société. Nous croyons fermement que l'avenir vers lequel nous semblons nous diriger n'est pas la seule voie possible. Il est temps de concevoir un monde qui respecte ses habitants, sa biodiversité et ses limites. Un monde où la course à la croissance infinie, à la compétitivité et à la surproductivité laisse place à un nouveau paradigme. Un paradigme centré sur la durabilité, la santé (à la fois mentale et physique) ainsi que les valeurs humaines et environnementales. Il est indéniable que de nos jours, nous avons tendance à bien plus imaginer l'apocalypse que l'utopie. C'est là que nous intervenons. En tant qu'association, nous nous efforçons de catalyser l'imagination collective pour construire un monde désirable. `}
                />
              </div>
              <div className="lg:w-6/12 lg:p-5">
                <BasicText
                  className="mt-5 font-bold"
                  contentEn={`Parce que comment pourrions-nous créer une réalité meilleure si nous ne sommes pas capables de l'imaginer d'abord ?`}
                  contentFr={`Parce que comment pourrions-nous créer une réalité meilleure si nous ne sommes pas capables de l'imaginer d'abord ?`}
                />
                <BasicText
                  className="mt-5"
                  contentEn={`Nous utilisons l'art pour inspirer de nouvelles perspectives, l'éducation pour élargir les horizons de la pensée. Nous utilisons la créativité pour dessiner les contours d'un monde où le bien-être de tous est une priorité. Un monde où les valeurs humaines et environnementales sont au cœur de chaque décision.`}
                  contentFr={`Nous utilisons l'art pour inspirer de nouvelles perspectives, l'éducation pour élargir les horizons de la pensée. Nous utilisons la créativité pour dessiner les contours d'un monde où le bien-être de tous est une priorité. Un monde où les valeurs humaines et environnementales sont au cœur de chaque décision.`}
                />
                <BasicText
                  className="mt-5"
                  contentEn="Rejoignez-nous dans cette quête pour réinventer notre avenir !"
                  contentFr="Rejoignez-nous dans cette quête pour réinventer notre avenir !"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center lg:mt-52">
          <H2
            textColor="text-secondary"
            className="font-bold italic text-center lg:text-left"
            contentEn="rakonto, de nos débuts à aujourd’hui"
            contentFr="rakonto, de nos débuts à aujourd’hui"
          />

          <div className="flex flex-col lg:flex-row items-center mt-5 ">
            <Image
              className="mt-8"
              src="/logo2.webp"
              width={200}
              height={200}
              alt=""
            />
            <Length className="mt-10 rotate-45 lg:-rotate-45 lg:mx-5" />

            <Image
              className="mt-8"
              src="/logo1.webp"
              width={200}
              height={200}
              alt=""
            />
            <Length className="mt-10 rotate-45 lg:-rotate-45 lg:mx-5" />

            <Image
              className="mt-8"
              src="/logo3.webp"
              width={200}
              height={200}
              alt=""
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mx-20">
            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="04.2019"
                  contentFr="04.2019"
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="La création de l’asso"
                  contentFr="La création de l’asso"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="Création de l’association “Le tour du monde en 80 défis” par Robin, Corentin et Magali. Le tour du monde sans avion est le point de départ de cette grande aventure."
                  contentFr="Création de l’association “Le tour du monde en 80 défis” par Robin, Corentin et Magali. Le tour du monde sans avion est le point de départ de cette grande aventure."
                />
              </div>
              <Length className="mt-10 -rotate-45" />
            </div>
            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="09.2019"
                  contentFr="09.2019"
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="Le grand départ"
                  contentFr="Le grand départ"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="Départ pour le tour du monde avec en ligne le Portugal comme première destination. "
                  contentFr="Départ pour le tour du monde avec en ligne le Portugal comme première destination. "
                />
              </div>
              <Length className="mt-10 -rotate-45" />
            </div>
            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="03.2020"
                  contentFr="03.2020"
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="Impact du COVID"
                  contentFr="Impact du COVID"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="Retour forcé par la pandémie COVID-19 qui fait faire revoir ses plans aux 2 compères. Robin reprend ses études tandis que Corentin tente de donner suite à l’association. C’est dans ce contexte qu’il rencontre Loreto lors d’un volontariat en Italie."
                  contentFr="Retour forcé par la pandémie COVID-19 qui fait faire revoir ses plans aux 2 compères. Robin reprend ses études tandis que Corentin tente de donner suite à l’association. C’est dans ce contexte qu’il rencontre Loreto lors d’un volontariat en Italie."
                />
              </div>

              <Length className="mt-10 -rotate-45" />
            </div>

            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="05.2021"
                  contentFr="05.2021"
                />

                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="L’arrivée de Loreto"
                  contentFr="L’arrivée de Loreto"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="Loreto entre dans l’association et avec elle, elle évolue pour devenir Rakonto. Quelques mois plus tard elle accueillera sa première formation Erasmus+"
                  contentFr="Loreto entre dans l’association et avec elle, elle évolue pour devenir Rakonto. Quelques mois plus tard elle accueillera sa première formation Erasmus+"
                />
              </div>
              <Length className="mt-10 -rotate-45" />
            </div>
            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-9/12 mr-2">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="04.2023"
                  contentFr="04.2023"
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="L’équipe s’agrandit"
                  contentFr="L’équipe s’agrandit"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="L’équipe s’agrandit et recrute 2 nouveaux membres, Elisa et Santiago qui apportent avec eux un nouvel élan pour l’association après 2 années pendant lesquelles elle s’est bien établit"
                  contentFr="L’équipe s’agrandit et recrute 2 nouveaux membres, Elisa et Santiago qui apportent avec eux un nouvel élan pour l’association après 2 années pendant lesquelles elle s’est bien établit"
                />
              </div>
              <Length className="mt-10 -rotate-45" />
            </div>
            <div className="flex flex-col items-center mt-10 lg:flex-row">
              <div className="w-full">
                <H3
                  className="w-full font-bold text-center lg:text-left text-secondary"
                  contentEn="09.2023"
                  contentFr="09.2023"
                />
                <H3
                  className="w-full text-center lg:text-left text-secondary"
                  contentEn="Une nouvelle identité"
                  contentFr="Une nouvelle identité"
                />
                <BasicText
                  className="text-center lg:text-left"
                  contentEn="Quelques mois après l’arrivée des 2 nouveaux membres, Alba, Adrian et Neshat ont également l’équipe. Alors Rakonto en profite pour se faire une nouvelle peau et change complètement son identité visuelle pour mieux représenter sa mission!"
                  contentFr="Quelques mois après l’arrivée des 2 nouveaux membres, Alba, Adrian et Neshat ont également l’équipe. Alors Rakonto en profite pour se faire une nouvelle peau et change complètement son identité visuelle pour mieux représenter sa mission!"
                />
              </div>
            </div>
          </div>

          <RakontoNumbers />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default page;
