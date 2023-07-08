import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ComeUpText from '../text/ComeUpText';


interface IProps {
  link: string;
  text: string;
  className?: string;
}

function LinkButton({ link, text, className }: IProps) {
  return (
    <Link
      className={`uppercase group font-josefin pb-2  text-primary  flex border-b border-primary  items-center space-x-2 ${className}`}
      href={link}
    >
      <ComeUpText
        className="text-primary bold text-[14px] lg:text-[18px]"
        text={text}
      />

      <Image
        className="mb-1"
        src="/linkArrow.svg"
        alt=""
        height={15}
        width={15}
      />
    </Link>
  );
}

export default LinkButton;

LinkButton.defaultProps = {
  className: '',
};
