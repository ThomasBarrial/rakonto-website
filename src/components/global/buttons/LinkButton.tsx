import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

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
      <p>{text}</p>

      <Image
        className="mb-1"
        src="/linkArrow.svg"
        alt=""
        height={12}
        width={12}
      />
    </Link>
  );
}

export default LinkButton;
