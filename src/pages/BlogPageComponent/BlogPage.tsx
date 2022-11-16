import { ListBlog } from "../../data/data";
const BlogPage = () => {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)]">
      <h2 className="text-[4.4rem] font-bold font-sans text-[#21243D] leading-[6rem] col-start-4 col-end-10 mb-14 lg:col-start-2 lg:col-end-12 mobile:col-start-1 mobile:col-end-13 mobile:pl-8 mobile:pr-8">
        Blog
      </h2>
      <div className="col-start-4 col-end-10 lg:col-start-2 lg:col-end-12 mobile:col-start-1 mobile:col-end-13 mobile:pl-8 mobile:pr-8">
        {ListBlog.map((item) => {
          return (
            <div className="mb-12">
              {" "}
              <div>
                <p className="text-[3.4rem] font-medium font-sans text-[#21243D] leading-[4.4rem] mb-8">
                  {item.heading}
                </p>
                <div className="flex gap-x-8 mb-8">
                  <span className="text-[2.4rem] font-normal font-sans text-[#21243D] leading-[2.9rem] ">
                    {item.date}
                  </span>
                  <span className="text-[2rem]">|</span>
                  <span className="text-xl font-normal font-sans text-[#8695A4] leading-[2.9rem]">
                    {item.describe}
                  </span>
                </div>
                <p className="text-xl font-normal font-sans text-[#21243D] leading-[2.4rem] mb-8 w-[80%] mobile:w-[95%]">
                  {item.detail}
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
