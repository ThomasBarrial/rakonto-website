'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import H2 from '../global/text/H2';
import BasicText from '../global/text/BasicText';
import NumberAnimation from './NumberAnimation';
import FullWidthImage from '../global/images/FullWidthImage';

function RakontoNumbers() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="bg-primary mt-20 lg:mt-52 p-5 flex flex-col items-center mb-10"
    >
      <H2
        textColor="text-white font-bold text-center"
        contentEn="rakonto, c’est aussi"
        contentFr="rakonto, c’est aussi"
      />
      <BasicText
        className="text-center text-white"
        contentEn="Une association à taille humaine"
        contentFr="Une association à taille humaine"
      />

      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-8/12">
        <div>
          {inView && <NumberAnimation targetValue={52} />}
          <BasicText
            className="text-center text-white"
            contentEn="Membres"
            contentFr="Membres"
          />
        </div>

        <div>
          {inView && <NumberAnimation targetValue={235} />}
          <BasicText
            className="text-center  text-white"
            contentEn="Participants"
            contentFr="Participants"
          />
        </div>

        <div>
          {inView && <NumberAnimation targetValue={18} />}
          <BasicText
            className="text-center text-white"
            contentEn="Erasmus + mobilities"
            contentFr="Erasmus + mobilities"
          />
        </div>

        <div>
          {inView && <NumberAnimation targetValue={3} />}
          <BasicText
            className="text-center text-white"
            contentEn="Projets artistiques produits"
            contentFr="Projets artistiques produits"
          />
        </div>
      </div>

      <FullWidthImage
        title="des projets, des sourires, des solutions"
        titleEn="des projets, des sourires, des solutions"
        className="mt-10 max-h-[105rem] lg:h-[50rem]"
        path="/woarewe.webp"
        h1ClassName="lg:translate-y-[35%]"
        alt="unkown image"
        end={0}
        start={0}
        bgColor="none"
      />
    </div>
  );
}

export default RakontoNumbers;
