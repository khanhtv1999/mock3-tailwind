const RecentPost = () => {
  return (
    <div className="bg-[#edf7fa] grid grid-cols-[repeat(12,1fr)] mt-8 ">
      <div className="flex justify-between col-start-3 col-end-11 pt-8 pb-8">
        <p className="text-4xl font-sans ">Recent posts</p>
        <p className="text-[#00a8cc] font-sans text-3xl">View all</p>
      </div>
      <div className="flex gap-x-20 col-start-3 col-end-11">
        <div className="bg-[#fff] mb-8">
          <div className="w-[74%]">
            {" "}
            <h2 className="text-xxl font-sans font-bold pt-6 pl-6 mb-8 leading-[3.8rem]">
              Making a design system from scratch
            </h2>
            <div className="flex gap-x-6 pl-6">
              <span className="text-xl font-sans text-[#21243D]">
                12 Feb 2020
              </span>
              <span className="text-xl  text-[#21243D]">|</span>
              <span className="text-xl font-sans text-[#21243D]">
                Design, Pattern
              </span>
            </div>
            <p className="text-title font-sans pt-6 pl-6 leading-[2.4rem] ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="bg-[#fff] mb-8">
          <div className="w-[74%]">
            {" "}
            <h2 className="text-xxl font-sans font-bold pt-6 pl-6 mb-8 leading-[3.8rem]">
              Making a design system from scratch
            </h2>
            <div className="flex gap-x-6 pl-6">
              <span className="text-xl font-sans text-[#21243D]">
                12 Feb 2020
              </span>
              <span className="text-xl  text-[#21243D]">|</span>
              <span className="text-xl font-sans text-[#21243D]">
                Design, Pattern
              </span>
            </div>
            <p className="text-title font-sans pt-6 pl-6 leading-[2.4rem] pb-8 ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
