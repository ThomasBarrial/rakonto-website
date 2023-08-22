'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import Background from '../animated/Background';
import BasicText from '../global/text/BasicText';
import SectionContainer from '../global/SectionContainer';
import SlideUp from '../animated/SlideUp';
// import TextUppercase from '../global/text/TextUppercase';
// import Background from '../animated/Background';

function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <SectionContainer className="h-full min-h-screen flex flex-col justify-between  pt-20">
      <div ref={ref}>
        {inView && (
          <div className="font-francoisOne   text-[4rem] md:text-[5rem]  leading-none mt-10 lg:text-[8rem] xl:text-[9rem] text-primary font-bold">
            <SlideUp duration={1}>
              <h2>WE TRAIN AND INFORM</h2>
            </SlideUp>
            <SlideUp duration={1.5}>
              <h2 className=" w-full">{`TOMORROW'S`}</h2>
            </SlideUp>
            <SlideUp duration={2}>
              <h2 className=" w-full">SOLUTIONS</h2>
            </SlideUp>
          </div>
        )}
      </div>
      {inView && (
        <div className="w-full flex mt-20  justify-between items-center">
          <SlideUp duration={2}>
            <BasicText
              className=" w-10/12 xl:w-5/12 font-josefin text-lg"
              contentEn="   Rakonto is an association and a major player in European ecological
          awareness projects. We invite young people from all over Europe to
          take part in training weeks focusing on environmental issues."
              contentFr="   Rakonto is an association and a major player in European ecological
          awareness projects. We invite young people from all over Europe to
          take part in training weeks focusing on environmental issues."
            />
          </SlideUp>
          <SlideUp duration={2}>
            <Image
              className="mt-20 hidden md:flex"
              src="/scrollArrow2.png"
              alt="scroll"
              height={100}
              width={50}
            />
          </SlideUp>
        </div>
      )}

      <Background
        image="/backgroundHome/bgHeader2.webp"
        opacity={0.2}
        start={300}
        end={2000}
      />
    </SectionContainer>
    // <section className="h-full min-h-screen flex flex-col items-center justify-start md:justify-center pt-24 pb-52">
    //   <div className="flex md:hidden flex-col items-center justify-center space-y-5">
    //     <Image
    //       src="/logo/logoMobile1.svg"
    //       alt="RA"
    //       height={200}
    //       width={240}
    //       priority
    //     />
    //     <Image
    //       src="/logo/logoMobile2.svg"
    //       alt="KON"
    //       height={200}
    //       width={350}
    //       priority
    //     />
    //     <Image
    //       src="/logo/logoMobile3.svg"
    //       alt="TO"
    //       height={200}
    //       width={240}
    //       priority
    //     />
    //     <Image
    //       className="pt-5"
    //       src="/logo/logoMobile4.svg"
    //       alt="TO"
    //       height={200}
    //       width={400}
    //       priority
    //     />
    //   </div>
    //   <Image
    //     className="hidden md:flex"
    //     src="/logo/logoDesktop.svg"
    //     alt="RAKONTO"
    //     width={1200}
    //     height={200}
    //     priority
    //   />

    //   <Image
    //     className="mt-20 hidden md:flex"
    //     src="/scrollArrow.svg"
    //     alt="scroll"
    //     height={100}
    //     width={50}
    //   />

    //   <Background
    //     image="/backgroundHome/pyrenees.webp"
    //     opacity={0.3}
    //     start={300}
    //     end={2000}
    //   />
    // </section>
  );
}

export default Header;
