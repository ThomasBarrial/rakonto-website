import React from 'react';

function H1({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`font-bayon text-[50px] leading-none text-primary md:text-[60px] uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1;
