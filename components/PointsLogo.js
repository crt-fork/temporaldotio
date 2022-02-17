import React from "react";

const copyPoints = [
  {
    heading: "Durable",
    copy: (
      <>
        Your code will
        run forever and
        <br className="hidden sm:block" /> ever
      </>
    ),
  },
  {
    heading: "Reliable",
    copy: (
      <>
        Your code will run <br className="hidden sm:block" /> despite failures!
      </>
    ),
  },
  {
    heading: "Scalable",
    copy: (
      <>
        Your code can scale up <br /> or down on command!
      </>
    ),
  },
];

const Piratical = [
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
];

const Smaller = (rrr) => {
  return (
    <>
      {rrr.map((r, i) => (
        <span key={r + i} style={{ fontSize: `${100 - i * 1.5}%` }}>
          {r}
        </span>
      ))}
    </>
  );
};

export default function PointsLogo() {
  return (
    <>
      <div className=" sm:block ml-10 sm:ml-auto mx-auto sm:w-[220px] md:w-[320px] lg:w-[600px] relative">
        <div className="w-52 
        mb-7
        sm:mb-0
        
        sm:absolute 
        sm:text-right
        
        lg:-left-[215px]
        lg:top-[150px]
        
        md:-left-[220px]
        md:top-[70px]

        sm:-left-[220px]
        sm:top-[45px]
        ">
          <h3 className="text-2xl sm:text-3xl font-bold inline-block mb-2 ">
            {copyPoints[0].heading}
          </h3>
          <p className="text-sm block">
            {copyPoints[0].copy}
            {Smaller(Piratical)}
          </p>
        </div>

        <div className="w-52
        mb-7
        sm:mb-0

        sm:absolute 
        lg:-right-[160px]
        lg:-top-[10px]

        md:-right-[190px]
        md:-top-[10px]

        sm:-right-[200px]
        sm:-top-[10px]
        ">
          <h3 className="text-2xl sm:text-3xl font-bold inline-block mb-2 ">
            {copyPoints[1].heading}
          </h3>
          <p className="text-sm block">
            {copyPoints[1].copy}
          </p>
        </div>

        <div className="w-52 
        mb-7
        sm:mb-0

        sm:absolute 
        lg:-right-[220px] 
        lg:bottom-[50px]
        
        md:-right-[220px]
        md:-bottom-[5px]

        sm:-right-[220px]
        sm:-bottom-[25px]
        ">
          <h3 className="text-2xl sm:text-3xl font-bold inline-block mb-2 relative">
            {copyPoints[2].heading}
          </h3>
          <p className="text-sm block">
            {copyPoints[2].copy}
          </p>
        </div>



        <img
          className="w-full square color-black hidden sm:block"
          src="/images/icons/Temporal_logo_infographic.svg"
          alt="temporal logo"
        />
      </div>
    </>
  );
}

{
  /* <div className="container  max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8 sm:px-10 mx-auto grid grid-cols-4">
<div className="relative">
  <div className="hidden md:block w-[110%] h-[100%] absolute top-0 left-0 text-right pr-4">
    <h3 className="text-2xl sm:text-3xl font-bold inline-block mb-4 relative">
      {copyPoints[0].heading}
    </h3>
    <p className="text-sm block">{copyPoints[0].copy}</p>
  </div>
</div>
<div className="col-span-2 py-[15%] relative">
  <span className="hidden absolute top-0 md:pt-2.5 md:left-[17%] md:h-[37%] md:w-[13%] md:block lg:left-[4%] lg:h-[39%] lg:w-[16%] flex items-stretch">
    <img
      className="h-full"
      src="/images/icons/drawpoint-left-1.svg"
      alt=""
    />
  </span>
  <img
    className="w-full square color-black"
    src="/images/logos/logo-temporal-no-copy.svg"
    alt="temporal logo"
  />
  <span className="hidden md:block absolute top-0 md:pt-2.5 md:right-[9%] md:w-[13%] md:h-[39%] lg:w-[13%] lg:right-[14%] flex items-stretch">
    <img
      className="h-full"
      src="/images/icons/drawpoint-right-1.svg"
      alt=""
    />
  </span>
  <span className="hidden absolute h-[18px] md:block md:pt-[6px] md:bottom-[25%] md:right-[15%] md:w-[20%] lg:bottom-[31%] lg:right-[14%] lg:w-[20%] flex items stretch">
    <img
      className="h-full"
      src="/images/icons/drawpoint-right-2.svg"
      alt=""
    />
  </span>
</div>
<div className="relative">
  <div className="hidden w-[120%] absolute top-0 right-0 md:block md:pt-[3px] md:right-[-7%] lg:right-0">
    <h3 className="text-2xl sm:text-3xl font-bold block mb-4">
      {copyPoints[1].heading}
    </h3>
    <p className="text-sm block">{copyPoints[1].copy}</p>
  </div>
  <div className="hidden absolute md:block w-[110%] md:right-[15%] md:top-[69%] lg:top-[65%] lg:right-0">
    <h3 className="text-2xl sm:text-3xl font-bold block mb-4">
      {copyPoints[2].heading}
    </h3>
    <p className="text-sm block">{copyPoints[2].copy}</p>
  </div>
</div>
</div>
<div className="block md:hidden ml-40">
{copyPoints.map((point, i) => (
  <div
    key={`mobile-points-logo-item-${i}`}
    className="mt-8 max-w-sm mx-auto"
  >
    <h3 className="text-3xl font-bold block mb-4">{point.heading}</h3>
    <p className="text-sm block">{point.copy}</p>
  </div>
))}
</div> */
}
