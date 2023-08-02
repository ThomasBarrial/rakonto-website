'use client';

import { useState } from 'react';
import { IProject } from '../../../types';
import ProjectSection from './ProjectSection';

interface IProps {
  project: IProject;
}

function ProjectContent({ project }: IProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ul className="flex flex-col space-y-10">
      {project.content.map((item) => (
        <li key={item.title} className="border-b border-primary">
          <ProjectSection
            item={item}
            setSelected={setSelected}
            selected={selected}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectContent;
