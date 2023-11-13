'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import useParallax from '@/utils/useParralax';
import { useScroll, motion } from 'framer-motion';
import handleAnimate from '@/utils/handleAnimate';
import { IHomeGalleryImage, SanityImage } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import CloseButton from '../global/buttons/CloseButton';

interface IProps {
  data: IHomeGalleryImage;
}

function ImagesGallery({ data }: IProps) {
  const { scrollYProgress } = useScroll();
  const [isModal, setIsModal] = useState<{
    isOpen: boolean;
    image: SanityImage | null;
  }>({
    isOpen: false,
    image: null,
  });

  const [isAnimated, setIsAnimated] = useState(false);
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

  useEffect(() => {
    handleAnimate(setIsAnimated);
  }, [isModal.image]);

  return (
    <section className="h-screen xl:my-10  overflow-hidden flex lg:flex-col lg:space-y-2 lg:space-x-0 justify-between lg:justify-center items-center">
      {isModal.isOpen && isModal.image && (
        <div className="fixed h-screen w-screen bg-black bg-opacity-90 top-0 left-0 z-50 flex flex-col items-center">
          <div className="w-11/12 h-[10%]  max-w-6xl flex items-center justify-end">
            <CloseButton
              background="background-none"
              onClick={() => {
                setIsModal({ isOpen: false, image: null });
              }}
            />
          </div>
          <div className="w-11/12  h-[80%] max-w-5xl relative animate-fadeIn">
            {isAnimated && (
              <Image
                src={urlForImage(isModal.image?.asset).url()}
                alt={isModal.image.alt ? isModal.image.alt : 'unknow image'}
                fill
                priority
                className="animate-fadeIn object-cover"
              />
            )}
          </div>
          <div className="w-11/12 animate-fadeIn  h-[20%] flex items-center overflow-x-scroll p-5 space-x-2">
            {data.gallery.map((item) => (
              <button
                type="button"
                onClick={() => setIsModal({ isOpen: true, image: item })}
                key={item.asset._ref}
                className="w-96 h-[80%] group relative"
              >
                <Image
                  src={urlForImage(item.asset).url()}
                  alt={item.alt ? item.alt : 'unknow image'}
                  fill
                  priority
                  className={`object-cover  group-hover:scale-110 group-hover:opacity-100 opacity-70 transition ease-in duration-300 ${
                    item === isModal.image && 'scale-110 opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
      <motion.div
        style={{ x }}
        className="hidden lg:flex lg:w-[120%] bg-red- space-y-2 lg:space-x-2 lg:space-y-0 flex-col lg:flex-row items-center justify-center"
      >
        {gallery1.map((item) => (
          <button
            type="button"
            onClick={() =>
              setIsModal({
                isOpen: true,
                image: item,
              })
            }
            key={item.asset._ref}
            className="w-full   h-[125px] md:h-[250px] group lg:h-[300px] relative overflow-hidden "
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover group-hover:scale-110 transition ease-in duration-500"
            />
          </button>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="hidden lg:flex lg:w-[120%] space-y-2 lg:space-x-2 lg:space-y-0  flex-col lg:flex-row  items-center justify-center"
      >
        {gallery2.map((item) => (
          <button
            type="button"
            onClick={() =>
              setIsModal({
                isOpen: true,
                image: item,
              })
            }
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
          </button>
        ))}
      </motion.div>

      <motion.div
        style={{ y }}
        className="w-[48.5%] lg:hidden space-x-0  space-y-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center"
      >
        {gallery1.map((item) => (
          <button
            type="button"
            onClick={() =>
              setIsModal({
                isOpen: true,
                image: item,
              })
            }
            key={item.asset._ref}
            className="w-full  h-[200px] md:h-[250px] lg:h-[300px] relative cursor-pointer"
          >
            <Image
              src={urlForImage(item.asset).url()}
              alt={item.alt ? item.alt : 'unknow image'}
              fill
              priority
              className="object-cover"
            />
          </button>
        ))}
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="w-[48.5%] lg:hidden space-x-0 bg-red- space-y-2 lg:space-x-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center"
      >
        {gallery2.map((item) => (
          <button
            type="button"
            onClick={() =>
              setIsModal({
                isOpen: true,
                image: item,
              })
            }
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
          </button>
        ))}
      </motion.div>
    </section>
  );
}

export default ImagesGallery;
