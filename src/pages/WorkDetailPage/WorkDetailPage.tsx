import WorkDetail_1 from "../../assets/images/WorkDetail_1.png";
import WorkDetail_2 from "../../assets/images/WorkDetail_2.png";
import WorkDetail_3 from "../../assets/images/WorkDetail_3.png";

const WorkDetailPage = () => {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)]">
      <div className="col-start-3 col-end-11 lg:col-start-2 lg:col-end-12 mobile:col-start-1 mobile:col-end-13 mobile:pl-8 mobile:pr-8">
        <h1 className="text-[3.4rem] font-black leading-[5rem] font-sans mb-8">
          Designing Dashboards with usability in mind
        </h1>
        <div>
          <div className="mb-4 ">
            <span className="bg-[#FF7C7C] text-white text-[1.8rem] font-black font-sans rounded-[16px] py-1 px-6 leading-[6rem] mr-[2rem]">
              2020
            </span>
            <span className="text-xl  font-normal font-sans  text-[#21243D] leading-[2.9rem]">
              Dashboard, User Experience Design
            </span>
          </div>
          <p className="text-[1.6rem]  font-normal font-sans  text-black leading-[2.9rem] w-[85%] mb-12 mobile:w-[95%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <img className="w-[100%]" src={WorkDetail_1} />
          </div>
        </div>
        <div className="mt-[7rem]">
          <h1 className="text-[3.8rem] font-medium font-sans text-[#21243D] leading-[6rem]">
            Heading 1
          </h1>
          <h2 className="text-[2.4rem] font-medium font-sans text-[#21243D] leading-[6rem] mb-6">
            Heading 2
          </h2>
          <p className="text-[1.6rem] font-normal font-sans text-black leading-[2.4rem] w-[80%] mb-14 mobile:w-[100%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="detail__container-image">
            <img className="w-[100%] mb-12" src={WorkDetail_2} />
            <img className="w-[100%]" src={WorkDetail_3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
