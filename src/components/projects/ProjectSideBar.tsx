'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IProject } from '../../../types';
import H3 from '../global/text/H3';
import TextSmall from '../global/text/TextSmall';
import Files from './Files';
import ExternalesLinks from './ExternalesLinks';

function ProjectSideBar({ project }: { project: IProject }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsOpen(true);
    }
  }, []);
  return (
    <div
      className={`fixed overflow-y-scroll lg:sticky lg:top-20 z-20 bottom-7 w-[90%] lg:w-3/12 border-2 lg:border-l lg:border-0  border-primary  right-5 bg-background  shadow-2xl lg:shadow-none  text-lg p-3 lg:ml-10 lg:p-5   ${
        isOpen ? 'h-[85vh]' : 'h-[6vh] lg:h-screen'
      } transform duration-500 ease-out `}
    >
      <div className="flex flex-col space-y-1  pb-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-between items-start text-left mb-5 w-full"
        >
          <H3
            className="text-primary"
            contentEn="ABOUT THIS PROJECT"
            contentFr="A PROPOS DE CE PROJET"
          />
          <Image
            className={`${
              isOpen ? 'rotate-180' : 'rotate-0'
            } transform duration-500 ease-out flex lg:hidden`}
            src="/downArrow.svg"
            alt="down"
            height={15}
            width={13}
          />
        </button>
        <TextSmall contentEn={project.title} contentFr={project.titleEn} />
        <ul>
          {project.subjects?.map((item) => (
            <li key={item._id}>
              <TextSmall contentEn={item.titleEn} contentFr={item.titleFr} />{' '}
            </li>
          ))}
        </ul>
        <ul>
          {project.categories?.map((item) => (
            <li key={item._id}>
              <TextSmall contentEn={item.titleEn} contentFr={item.titleFr} />{' '}
            </li>
          ))}
        </ul>
        <TextSmall
          contentEn={project.projectYear.year.toString()}
          contentFr={project.projectYear.year.toString()}
        />
      </div>

      <div className="mt-10">
        <H3
          className="text-primary"
          contentEn="PARTENERS"
          contentFr="PARTENAIRES"
        />
        {project.partners && (
          <ul>
            {project.partners?.map((item) => (
              <li key={item._id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <TextSmall
                    className="underline"
                    contentEn={item.name}
                    contentFr={item.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        {project.files && (
          <div className="mt-10">
            <H3
              className="text-primary"
              contentEn="Downloadable documents"
              contentFr="Documents téléchargeable"
            />
            <Files files={project.files} />
          </div>
        )}

        {project.externalsLinks && (
          <div className="mt-10">
            <H3
              className="text-primary"
              contentEn="External Links"
              contentFr="Liens externes"
            />
            <ExternalesLinks links={project.externalsLinks} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSideBar;
