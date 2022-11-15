import WorkDetail_1 from "../../assets/images/WorkDetail_1.png";
import WorkDetail_2 from "../../assets/images/WorkDetail_2.png";
import WorkDetail_3 from "../../assets/images/WorkDetail_3.png";

const WorkDetailPage = () => {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)]">
      <div className="col-start-3 col-end-11">
        <h1 className="text-[3.4rem] font-black leading-[5rem] font-sans mb-8">
          Designing Dashboards with usability in mind
        </h1>
        <div className="overview">
          <div>
            <span className="bg-[#FF7C7C] text-white text-[1.8rem] font-black font-sans rounded-[16px] py-1 px-6 leading-[6rem] mr-[2rem]">
              2020
            </span>
            <span className="text-[1.8rem] font-black font-normal font-sans  text-[#21243D] leading-[2.9rem]">
              Dashboard, User Experience Design
            </span>
          </div>
          <p className="overview__title">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <img className="w-[100%]" src={WorkDetail_1} />
          </div>
        </div>
        <div className="detail__container">
          <h1 className="detail__heading-1">Heading 1</h1>
          <h2 className="detail__heading-2">Heading 2</h2>
          <p className="detail__title">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="detail__container-image">
            <img className="img" src={WorkDetail_2} />
            <img className="img" src={WorkDetail_3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
