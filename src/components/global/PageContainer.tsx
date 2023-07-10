import React from 'react';

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col md:px-10 px-4">{children}</main>
  );
}

export default PageContainer;
