import React from 'react';

export default function LogoList({ copy = {} }) {
  return (
    <div className='mb-32 md:mb-48 container mx-auto px-10'>
      <p className="text-center md:-mb-6">Trusted by</p>
      <div className="flex flex-wrap md:space-x-5 font-bold items-center justify-center">
        <a href="https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/coinbase.svg" alt="Coinbase logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        <a href="https://docs.temporal.io/blog/Temporal-a-central-brain-for-Box" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/box.svg" alt="Box logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        <a href="https://docs.temporal.io/blog/airbyte-case-study" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/airbyte.svg" alt="Airbyte logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        <a href="https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/checkr.svg" alt="Checkr logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        <a href="https://docs.temporal.io/blog/descript-case-study" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/descript.svg" alt="Descript logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        <a href="https://docs.temporal.io/blog/zebra-medical-case-study/" className="md:mt-4 flex hover:scale-110 transform transition-transform ">
          <img src="/images/logos/zebramedicalvision.svg" alt="Zebra Medical Vision logo" className="w-32 h-16 md:w-44 md:h-24 transition duration-300 ease-in-out transform scale-75 md:scale-100 filter saturate-0 hover:saturate-100 brightness-90 opacity-60 hover:opacity-100 hover:-translate-y-sm hover:brightness-100"></img>
        </a>
        
      </div>
    </div>
  );
}

