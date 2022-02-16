import React from "react";

export default function LogoList({ copy = {} }) {
  return (
    <div className="mb-32 md:mb-48 container mx-auto px-10">
      <p className="text-center text-slate-400 mb-6">Used by</p>

      {/* flex flex-wrap md:space-x-5 font-bold items-center justify-center gap-10 */}

      <div className="gap-10 flex flex-wrap justify-center items-center">
        <img
          src="/images/logos/homepage/snap.svg"
          alt="Snap logo"
          className=" h-14 mx-auto"
        />
        <img
          src="/images/logos/homepage/datadog.svg"
          alt="Datadog logo"
          className=" h-14  mx-auto"
        />
        <img
          src="/images/logos/homepage/netflix.svg"
          alt="Netflix logo"
          className=" h-14 mx-auto  "
        />
        <img
          src="/images/logos/homepage/instacart.svg"
          alt="Instacart logo"
          className=" h-14 mx-auto  "
        />
        <img
          src="/images/logos/homepage/indeed.svg"
          alt="Indeed logo"
          className=" h-14 mx-auto  "
        />
        <img
          src="/images/logos/homepage/qualtrics.svg"
          alt="Qualtrics logo"
          className=" h-14 mx-auto  "
        />
      </div>

      <div className="gap-10 flex flex-wrap justify-center items-center mt-8">
        <img
          src="/images/logos/homepage/box.svg"
          alt="Box logo"
          className=" h-14 mx-auto "
        />

        <img
          src="/images/logos/homepage/airbyte.svg"
          alt="Airbyte logo"
          className=" h-14 mx-auto  "
        />

        <img
          src="/images/logos/homepage/checkr.svg"
          alt="Checkr logo"
          className=" h-14 mx-auto  "
        />
        <img
          src="/images/logos/homepage/coinbase.svg"
          alt="Coinbase logo"
          className=" h-14 mx-auto  "
        />
        <img
          src="/images/logos/homepage/descript.svg"
          alt="Descript logo"
          className=" h-14 mx-auto  "
        />
      </div>
    </div>
  );
}
