import { Slug } from 'sanity';
import { getOneProject, getProjects, getProjectsSlug } from '@/lib/queries';
import { Metadata } from 'next';
import PageContainer from '@/components/global/PageContainer';
import H2 from '@/components/global/text/H2';
import BasicText from '@/components/global/text/BasicText';
import FullWidthImage from '@/components/global/images/FullWidthImage';
import ProjectContent from '@/components/projects/ProjectContent';
import ProjectSideBar from '@/components/projects/ProjectSideBar';
import Partners from '@/components/projects/Partners';
import ProjectFooter from '@/components/projects/ProjectFooter';
import { IProject } from '../../../../../types';
import client from '../../../../../sanity/lib/client';
import urlForImage from '../../../../../sanity/lib/image';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getProjectsSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const project: IProject = await client.fetch(getOneProject, { slug });

  if (project.keywords) {
    return {
      title: project.title,
      description: project.descriptionEN,
      keywords: project.keywords,
    };
  }
  return {
    title: project.title,
    description: project.descriptionEN,
    keywords: '',
  };
}

async function page({ params: { slug } }: Props) {
  const project: IProject = await client.fetch(getOneProject, { slug });
  const allProjects: IProject[] = await client.fetch(getProjects);

  return (
    <PageContainer>
      <H2
        contentEn={project.titleEn}
        contentFr={project.title}
        className="mt-24"
      />
      <BasicText contentEn={project.descriptionEN} contentFr={project.title} />
      <FullWidthImage
        videoUrl={project.url}
        className="mt-5"
        path={urlForImage(project.mainImage.asset).url()}
        alt={project.mainImage.alt ? project.mainImage.alt : 'unknow Image'}
        end={300}
      />
      <div className="mt-10 flex">
        <div className="w-full lg:w-9/12">
          <ProjectContent project={project} />
          <Partners partners={project.partners} />
        </div>
        <ProjectSideBar project={project} />
      </div>
      <ProjectFooter project={project} allProjects={allProjects} />
    </PageContainer>
  );
}

export default page;
