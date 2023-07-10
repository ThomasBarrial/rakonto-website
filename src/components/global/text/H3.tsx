import React from 'react';

function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`font-josefin uppercase text-textColor text-[20px] md:text-[25px]" ${className}`}
    >
      {children}
    </h3>
  );
}

export default H3;
