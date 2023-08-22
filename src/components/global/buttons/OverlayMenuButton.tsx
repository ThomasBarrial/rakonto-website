import React from 'react';

function OverlayMenuButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="w-full my-2 text-left font-light">
      {children}
    </button>
  );
}

export default OverlayMenuButton;
