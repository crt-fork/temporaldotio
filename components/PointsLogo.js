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
