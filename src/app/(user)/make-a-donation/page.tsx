import React from 'react';

function page() {
  return (
    <div className=" h-[2300px] iframe:h-[1280px] w-full flex items-center justify-center mt-24">
      <iframe
        src="https://www.helloasso.com/associations/rakonto/formulaires/1/widget"
        title="Become member"
        height="100%"
        width="100%"
        style={{ overflow: 'hidden' }}
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
}

export default page;
