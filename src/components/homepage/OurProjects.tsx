'use client';

import React from 'react';
import Link from 'next/link';
import H1 from '../global/text/H1';
import { IHomeOurProjectSection } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
import BasicText from '../global/text/BasicText';
import Background from '../animated/Background';
import H2 from '../global/text/H2';

interface IProps {
  data: IHomeOurProjectSection;
}

function OurProjects({ data }: IProps) {
  return (
    <section className=" h-screen my-10  flex flex-col  items-start justify-center  border border-red-400">
      <H1 contentEn={data.titleEn} contentFr={data.titleFr} />

      <div className=" mt-10 lg:mt-0 w-full ">
        <ul className="flex flex-col w-full items-end text-primary space-y-5 lg:space-y-10">
          {data.projectCategories.map((item, index) => (
            <li
              // style={{
              //   paddingRight:
              //     window.innerWidth >= 1024 ? `${index * 80}px` : '0',
              // }}
              key={item._key}
            >
              <Link href={item.link}>
                <H2
                  className="hover:font-bold"
                  contentEn={item.nameEn}
                  contentFr={item.nameFr}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className=" mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:mt-52">
          <LinkButton
            className="w-8/12  lg:w-[240px] mt-10"
            textEn={data.callToAction.nameEn}
            textFr={data.callToAction.nameFr}
            link={data.callToAction.link}
          />
          <BasicText
            className=" lg:w-6/12"
            contentEn={data.textEn}
            contentFr={data.textFr}
          />
        </div>
      </div>
      <Background
        image="/backgroundHome/bgprojects.webp"
        start={1700}
        end={3500}
      />
    </section>
  );
}

export default OurProjects;
