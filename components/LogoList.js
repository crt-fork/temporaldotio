import React from "react";

export default function LogoList({ copy = {} }) {
  const classy = "h-6 sm:h-14 lg:h-12 xl:h-14 2xl:h-16 mx-auto"
  return (
    <div className="mb-32 md:mb-48 container mx-auto px-10">
      <p className="text-center text-slate-400 mb-6">Used by</p>

      {/* flex flex-wrap md:space-x-5 font-bold items-center justify-center gap-10 */}

      <div className="gap-3 sm:gap-4 lg:gap-6 xl:gap-10 2xl:gap-14 flex flex-wrap justify-center items-center">
        <img
          src="/images/logos/homepage/snap.png"
          alt="Snap logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/datadog.png"
          alt="Datadog logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/netflix.png"
          alt="Netflix logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/instacart.png"
          alt="Instacart logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/indeed.png"
          alt="Indeed logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/qualtrics.png"
          alt="Qualtrics logo"
          className={classy}
        />
      
        <img
          src="/images/logos/homepage/box.png"
          alt="Box logo"
          className={classy}
        />

        <img
          src="/images/logos/homepage/airbyte.png"
          alt="Airbyte logo"
          className={classy}
        />

        <img
          src="/images/logos/homepage/checkr.png"
          alt="Checkr logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/coinbase.png"
          alt="Coinbase logo"
          className={classy}
        />
        <img
          src="/images/logos/homepage/descript.png"
          alt="Descript logo"
          className={classy}
        />
      </div>
    </div>
  );
}
