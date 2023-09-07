'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import Background from '../animated/Background';
import BasicText from '../global/text/BasicText';
import SlideUp from '../animated/SlideUp';
import { IHomeHeader } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
// import TextUppercase from '../global/text/TextUppercase';
// import Background from '../animated/Background';

interface IProps {
  data: IHomeHeader;
}

function Header({ data }: IProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const targetY = rect.top + scrollTop - 80;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className=" w-full flex flex-col justify-between items-center  py-20 px-4 lg:px-10">
      <div ref={ref} className="max-w-content w-full">
        {inView && (
          <div className="font-francoisOne   text-[60px] md:text-[5rem]  leading-none mt-10 lg:text-[7rem] xl:text-[8rem] text-primary font-bold">
            <SlideUp duration={1}>
              <h2>WE TRAIN AND INFORM</h2>
            </SlideUp>
            <SlideUp duration={1.5}>
              <h2 className=" w-full">{`ON TOMORROW'S`}</h2>
            </SlideUp>
            <SlideUp duration={2}>
              <h2 className=" w-full">SOLUTIONS</h2>
            </SlideUp>
          </div>
        )}
      </div>
      <div className="max-w-content">
        {inView && (
          <div className="w-full flex  justify-between items-center">
            <div>
              <SlideUp duration={2}>
                <BasicText
                  className=" w-10/12 xl:w-6/12 font-josefin text-lg mt-5"
                  contentEn={data.textEn}
                  contentFr={data.textFr}
                />
              </SlideUp>
              <SlideUp duration={2.2}>
                <LinkButton
                  className="mt-5 w-52"
                  textEn={data.callToAction.nameEn}
                  textFr={data.callToAction.nameFr}
                  link={data.callToAction.link}
                />
              </SlideUp>
            </div>
            <SlideUp duration={2}>
              <button
                type="button"
                onClick={() => scrollToSection('presentation')}
              >
                <Image
                  className="mt-20 hidden md:flex"
                  src="/scrollArrow2.png"
                  alt="scroll"
                  height={100}
                  width={50}
                />
              </button>
            </SlideUp>
          </div>
        )}
      </div>

      <Background
        image="/backgroundHome/bgHeader5.png"
        opacity={1}
        start={0}
        end={2000}
      />
    </section>
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
