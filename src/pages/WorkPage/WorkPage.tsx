import { listFeature } from "../../data/data";
const WorkPage = () => {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)]">
      <p className="col-start-3 col-end-11 text-primary font-black leading-[6rem] font-sans mb-12 lg:col-start-2 lg:col-end-12 mobile:col-start-1 mobile:col-end-13 mobile:pl-8 mobile:pr-8">
        Work
      </p>
      <div className="col-start-3 col-end-11 lg:col-start-2 lg:col-end-12 mobile:col-start-1 mobile:col-end-13 mobile:pl-8 mobile:pr-8">
        {" "}
        {listFeature.map((item) => {
          return (
            <div className="mb-[5rem]">
              <div className="flex gap-x-14 mb-[5rem] sm:flex sm:flex-col">
                <div className="sm:flex sm:justify-center sm:mb-12 sm:w-[100%]">
                  <img
                    className="max-w-none sm:w-[70%] mobile:w-[100%]"
                    src={item.urlImg}
                  />
                </div>
                <div className=" max-w-[70%] sm:max-w-[95%]">
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
                  <p className="text-[1.6rem] font-normal font-sans leading-[2.4rem] w-[60%] sm:w-[95%] sm:text-[1.8rem] ">
                    {item.title}
                  </p>
                </div>
              </div>{" "}
              <hr className="border-solid-[1px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPage;
