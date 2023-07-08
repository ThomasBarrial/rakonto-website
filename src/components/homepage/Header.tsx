import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <section className="h-full min-h-screen flex flex-col items-center justify-start md:justify-center pt-24">
      <div className="flex md:hidden flex-col items-center justify-center space-y-5">
        <Image
          src="/logo/logoMobile1.svg"
          alt="RA"
          height={200}
          width={240}
          priority
        />
        <Image
          src="/logo/logoMobile2.svg"
          alt="KON"
          height={200}
          width={350}
          priority
        />
        <Image
          src="/logo/logoMobile3.svg"
          alt="TO"
          height={200}
          width={240}
          priority
        />
        <Image
          className="pt-5"
          src="/logo/logoMobile4.svg"
          alt="TO"
          height={200}
          width={400}
          priority
        />
      </div>
      <Image
        className="hidden md:flex"
        src="/logo/logoDesktop.svg"
        alt="RAKONTO"
        width={1200}
        height={200}
        priority
      />

      <Image
        className="mt-20 hidden md:flex"
        src="/scrollArrow.svg"
        alt="scroll"
        height={100}
        width={50}
      />
    </section>
  );
}

export default Header;
