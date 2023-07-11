import React from 'react';

function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center mt-24">
      <iframe
        src="https://www.helloasso.com/associations/rakonto/adhesions/devenir-membre-de-l-association/widget"
        title="Become member"
        height="100%"
        width="100%"
        allowFullScreen
      />
    </div>
  );
}

export default page;
