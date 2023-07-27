'use client';

import React from 'react';
import Image from 'next/image';
import TextUppercase from '../global/text/TextUppercase';
import Background from '../animated/Background';

function Header() {
  return (
    <section className="h-full min-h-screen flex flex-col justify-between py-20">
      <div className="">
        <div className="font-francoisOne text-[4rem] md:text-[5rem]  leading-none mt-10 lg:text-[8rem] xl:text-[9rem] text-primary font-bold">
          <h2>WE TRAIN AND INFORM</h2>

          <h2 className="xl:text-center w-full">{`TOMORROW'S`}</h2>
          <h2 className="xl:text-right w-full">SOLUTIONS</h2>
        </div>
      </div>
      <div className="w-full flex  justify-between items-center">
        <TextUppercase
          className=" w-10/12 xl:w-5/12 font-josefin text-lg"
          contentEn="   Rakonto is an association and a major player in European ecological
          awareness projects. We invite young people from all over Europe to
          take part in training weeks focusing on environmental issues."
          contentFr="   Rakonto is an association and a major player in European ecological
          awareness projects. We invite young people from all over Europe to
          take part in training weeks focusing on environmental issues."
        />
        <Image
          className="mt-20 hidden md:flex"
          src="/scrollArrow2.png"
          alt="scroll"
          height={100}
          width={50}
        />
      </div>

      <Background
        image="/backgroundHome/bgheader.webp"
        start={300}
        end={2000}
      />
    </section>
  );
}

export default Header;
