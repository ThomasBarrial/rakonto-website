'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import useParallax from '@/utils/useParralax';
import { useScroll, motion } from 'framer-motion';
import { IHomeGalleryImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  data: IHomeGalleryImage;
}

function ImagesGallery({ data }: IProps) {
  const { scrollYProgress } = useScroll();
  const x = useParallax(scrollYProgress, -500, 100);
  const x2 = useParallax(scrollYProgress, 500, -100);
  const y = useParallax(scrollYProgress, -200, 100);
  const y2 = useParallax(scrollYProgress, 200, -100);
  const [gallery1, gallery2] = useMemo(() => {
    const half = Math.floor(data.gallery.length / 2);

    const firstHalf = data.gallery.slice(0, half);
    const secondHalf = data.gallery.slice(half);

    return [firstHalf, secondHalf];
  }, [data.gallery]);

  return (
    <section className="h-screen xl:my-10  overflow-hidden flex lg:flex-col lg:space-y-2 lg:space-x-0 justify-between lg:justify-center items-center">
      <div className="hidden lg:flex lg:w-[120%] bg-red- space-y-2 lg:space-x-2 lg:space-y-0 flex-col lg:flex-row items-center justify-center">
        {gallery1.map((item) => (
          <motion.div
            style={{ x }}
            key={item.asset._ref}
            className="w-full   h-[125px] md:h-[250px] lg:h-[300px] relative "
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="hidden lg:flex lg:w-[120%] space-y-2 lg:space-x-2 lg:space-y-0  flex-col lg:flex-row  items-center justify-center">
        {gallery2.map((item) => (
          <motion.div
            style={{ x: x2 }}
            key={item.asset._ref}
            className="w-full h-[125px] md:h-[250px] lg:h-[300px] relative"
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="w-[48.5%] lg:hidden space-x-0  space-y-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center">
        {gallery1.map((item) => (
          <motion.div
            style={{ y }}
            key={item.asset._ref}
            className="w-full  h-[200px] md:h-[250px] lg:h-[300px] relative "
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-[48.5%] lg:hidden space-x-0 bg-red- space-y-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center">
        {gallery2.map((item) => (
          <motion.div
            style={{ y: y2 }}
            key={item.asset._ref}
            className="w-full   h-[200px] md:h-[250px] lg:h-[300px] relative "
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ImagesGallery;
