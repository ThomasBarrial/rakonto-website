import React from 'react';

interface IProps {
  onClick: () => void;
}

function CloseButton({ onClick }: IProps) {
  return (
    <button onClick={onClick} type="button">
      <div className="border group bg-background  border-primary transform hover:border-none hover:bg-primary rounded-full h-10 w-10 flex items-center justify-center duration-300">
        <div className="h-full w-full rotate-45 flex items-center justify-center">
          <span className="h-[1px] w-8 rotate-90 translate-x-1/2 transform bg-primary group-hover:bg-background duration-300" />
          <span className="h-[1px] w-8 bg-primary -translate-x-1/2 transform group-hover:bg-background duration-300" />
        </div>
      </div>
    </button>
  );
}

export default CloseButton;
