import React from 'react';

function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-josefin text-[14px] text-textColor lg:text-[16px]  ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
