import IntroduceComponent from "../../components/IntroduceComponent/IntroduceComponent";
import RecentPost from "../../components/RecentPostComponent/RecentPost";
import FeatureWork from "../../components/FeatureWorkComponent/FeatureWork";

const HomePage = () => {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)]">
      <div className="col-start-3 col-end-11">
        <IntroduceComponent />
      </div>
      <div className="col-start-1 col-end-13">
        <RecentPost />
      </div>
      <div className="col-start-3 col-end-11">
        <FeatureWork />
      </div>
    </div>
  );
};

export default HomePage;
