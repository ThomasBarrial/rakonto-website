import React from 'react';

function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-josefin text-[25px] text-primary md:text-[30px] uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

export default H2;
