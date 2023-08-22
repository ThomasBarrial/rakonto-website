import React from 'react';

function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen flex-col">{children}</main>;
}

export default PageContainer;
