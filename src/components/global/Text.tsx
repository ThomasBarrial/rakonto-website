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
      className={`font-josefin text-[16px] text-textColor md:text-[20px] ${className}`}
    >
      {children}
    </p>
  );
}

export default Texte;

Texte.defaultProps = {
  className: '',
};
