'use client';

import React from 'react';
import Image from 'next/image';
import BasicText from '../global/text/BasicText';
import H2 from '../global/text/H2';
import LinkButton from '../global/buttons/LinkButton';

function TextWithPicture() {
  return (
    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center lg:mt-32 lg:mx-32">
      <div className="lg:w-6/12 flex flex-col lg:items-end">
        <Image src="/sharewithu.webp" height={700} width={700} alt="" />
      </div>
      <div className="lg:w-6/12 lg:p-5 lg:ml-10">
        <H2
          className="mt-5 lg:mt-10 font-bold italic"
          contentEn="Maintenant notre mission c’est de le partager avec vous"
          contentFr="Maintenant notre mission c’est de le partager avec vous"
        />
        <BasicText
          contentEn={`Alors, on a pris les choses en main. On s'est donné pour mission de mettre en lumière ces personnes inspirantes et leurs solutions. Nous voulons partager notre vision d'un monde utopique et imaginer à quoi on voudrait que ce monde ressemble demain. Parce que si nous ne sommes pas capables de l’imaginer, nous ne pourrons jamais le construire. Notre mission c'est de diffuser ces idées et d'inspirer la création de nouvelles initiatives. Grâce au pouvoir du storytelling nous permettons la propagation des solutions.`}
          contentFr={`Alors, on a pris les choses en main. On s'est donné pour mission de mettre en lumière ces personnes inspirantes et leurs solutions. Nous voulons partager notre vision d'un monde utopique et imaginer à quoi on voudrait que ce monde ressemble demain. Parce que si nous ne sommes pas capables de l’imaginer, nous ne pourrons jamais le construire. Notre mission c'est de diffuser ces idées et d'inspirer la création de nouvelles initiatives. Grâce au pouvoir du storytelling nous permettons la propagation des solutions.`}
        />
        <LinkButton
          className="mt-5 lg:mt-10"
          link="/articles"
          textEn="Découvrez comment"
          textFr="Découvrez comment"
        />
      </div>
    </div>
  );
}

export default TextWithPicture;
