import AvatarHome from "../../assets/images/avatar_home.png";
const IntroduceComponent = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] mb-12 ">
      <div className="max-w-[55.6rem]">
        <h1 className="text-primary font-bold font-sans leading-24 mb-16">
          Hi, I am John,
          <br /> Creative Technologist
        </h1>
        <p className="text-xl font-sans font-normal leading-[2.4rem] mb-16">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="bg-[#FF6464] text-xl text-[#fff] rounded-sm font-sans px-8 py-5">
          Dowload Resume
        </button>
      </div>
      <div className="flex justify-end">
        <img className="w-[25rem] h-[25rem]" src={AvatarHome} />
      </div>
    </div>
  );
};

export default IntroduceComponent;
