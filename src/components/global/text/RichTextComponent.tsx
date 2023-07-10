import Image from 'next/image';
import Link from 'next/link';
import urlForImage from '../../../../sanity/lib/image';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';

const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative flex  h-96 m-10 mx-auto">
        <Image
          className="object-contain object-left"
          src={urlForImage(value)
            .fit('crop')
            .crop('focalpoint')
            .quality(80)
            .url()}
          alt="Blog Post Image"
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => <H1>{children}</H1>,
    h2: ({ children }: any) => <H2>{children}</H2>,
    h3: ({ children }: any) => <H3>{children}</H3>,
    h4: ({ children }: any) => (
      <h4 className="text-2xl  pb-5 pt-10 font-benchnine lg:text-4xl font-extrabold">
        {children}
      </h4>
    ),
  },

  blockquote: ({ children }: any) => {
    <blockquote className="">{children}</blockquote>;
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="underline decoration-primary hover:font-bold"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
