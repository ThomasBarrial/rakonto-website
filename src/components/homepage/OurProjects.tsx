'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import H1 from '../global/text/H1';
import { IHomeOurProjectSection } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
import BasicText from '../global/text/BasicText';
import H2 from '../global/text/H2';
import SlideUp from '../animated/SlideUp';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  data: IHomeOurProjectSection;
}

function OurProjects({ data }: IProps) {
  const [size, setSize] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  return (
    <SectionContainer
      bgImage="/backgroundHome/bgProjec4.png"
      className=" h-screen my-10  flex flex-col  items-start justify-center"
    >
      <div ref={ref} className=" mt-10 lg:mt-0 w-full ">
        {inView && (
          <SlideUp duration={1.2}>
            <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
          </SlideUp>
        )}
        <ul className="flex flex-col w-full items-end text-primary space-y-5 lg:space-y-10">
          {data.projectCategories.map((item, index) => (
            <li key={item._key}>
              {inView && (
                <SlideUp
                  duration={index * 0.25 + 0.5}
                  className="hidden lg:flex"
                  style={{
                    paddingRight: size >= 1024 ? `${index * 80}px` : '0',
                  }}
                >
                  <Link href={item.link}>
                    <H2
                      className="hover:font-bold transform duration-200"
                      contentEn={item.nameEn}
                      contentFr={item.nameFr}
                    />
                  </Link>
                </SlideUp>
              )}
              <Link className="flex flex-col lg:hidden" href={item.link}>
                <H2
                  className="hover:font-bold transform duration-200"
                  contentEn={item.nameEn}
                  contentFr={item.nameFr}
                />
              </Link>
            </li>
          ))}
        </ul>{' '}
        {inView && (
          <SlideUp
            duration={1.2}
            className=" mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:mt-52"
          >
            <LinkButton
              className="w-8/12  lg:w-[240px] mt-10"
              textEn={data.callToAction.nameEn}
              textFr={data.callToAction.nameFr}
              link={data.callToAction.link}
            />
            <BasicText
              className="mt-10 lg:mt-0 lg:w-6/12"
              contentEn={data.textEn}
              contentFr={data.textFr}
            />
          </SlideUp>
        )}
      </div>
    </SectionContainer>
  );
}

export default OurProjects;
