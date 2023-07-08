import React from 'react';

function TextSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-josefin text-[14px] text-textColor text-justify md:text-[18px] ${className}`}
    >
      {children}
    </p>
  );
}

export default TextSmall;

TextSmall.defaultProps = {
  className: '',
};
