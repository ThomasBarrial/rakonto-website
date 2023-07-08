import React from 'react';

function Texte({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-josefin text-[14px] text-textColor lg:text-[16px] text-justify ${className}`}
    >
      {children}
    </p>
  );
}

export default Texte;

Texte.defaultProps = {
  className: '',
};
