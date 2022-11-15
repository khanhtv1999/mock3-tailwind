import React from "react";

import { listFeature } from "../../data/data";

const FeatureWork = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <p className="text-[2.2rem] leading-[6rem] mt-3">Featured works</p>
      {listFeature.map((item) => {
        return (
          <div>
            <div className="flex gap-x-14 mb-12">
              <div>
                <img className="max-w-none" src={item.urlImg} />
              </div>
              <div>
                <h2 className="text-xxl font-sans mb-4 font-bold text-[#21243D]">
                  {item.heading}
                </h2>
                <div className="mb-6">
                  <span className="w-[62px] mr-8 font-sans text-white bg-[#142850] py-1 px-5 text-[1.8rem] rounded-[16px] font-black">
                    {item.year}
                  </span>
                  <span className="text-[#8695A4] text-[2rem] font-sans leading-[2.9rem] font-normal">
                    {item.describe}
                  </span>
                </div>
                <p className="text-[1.6rem] w-[60%] font-normal font-sans leading-[2.4rem]">
                  {item.title}
                </p>
              </div>
            </div>{" "}
            <hr className="border-solid-[1px]" />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureWork;
