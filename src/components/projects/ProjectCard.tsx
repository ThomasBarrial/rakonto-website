import React from 'react';
import HoverFadeEffect from '../animated/HoverFadeEffect';
import BasicText from '../global/text/BasicText';
import { IProject } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import TextUppercase from '../global/text/TextUppercase';
import TextSmall from '../global/text/TextSmall';

function ProjectCard({ item }: { item: IProject }) {
  return (
    <div className="w-full">
      {' '}
      <HoverFadeEffect
        link={`/projects/${item.slug.current}`}
        className="h-96  lg:h-[30rem] text-textColor"
        itemId={item._id}
        backgroundImage={urlForImage(item.mainImage?.asset).url()}
        altImage={item.mainImage.alt ? item.mainImage.alt : 'unknow image'}
      >
        <BasicText contentEn={item.titleEn} contentFr={item.title} />
      </HoverFadeEffect>
      <div className="mt-5 text-primary border-b border-primary pb-2 ">
        <TextUppercase contentEn={item.titleEn} contentFr={item.title} />
        <div className="flex justify-between mt-2">
          <div className="flex flex-row space-x-2 flex-wrap ">
            <ul className="flex space-x-2">
              {item.categories?.map((cat) => (
                <li className="flex" key={cat._id}>
                  <TextSmall contentEn={cat.titleEn} contentFr={cat.titleFr} />{' '}
                  <span className="ml-2">|</span>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-2">
              {item.subjects?.map((sub) => (
                <li className="flex" key={sub._id}>
                  <TextSmall contentEn={sub.titleEn} contentFr={sub.titleFr} />{' '}
                  <span className="ml-2">|</span>
                </li>
              ))}
            </ul>
          </div>
          <TextSmall
            contentEn={item.projectYear.year.toString()}
            contentFr={item.projectYear.year.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
