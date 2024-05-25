import AvailableJobs from "@/components/AvailableJobs";
import Hiring from "@/components/Hiring";
import ImageComponent from "@/components/ImageComponent";
import LandingBottom from "@/components/LandingBottom";
import QnA from "@/components/QnA";
import Subscribe from "@/components/Subscribe";
import Landing from "@/components/ui/Landing";
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <div className="px-8 pt-6">
      <div className="h-screen">
        <Navbar />
        <Landing />
        <ImageComponent />
      </div>
      <LandingBottom />
      <AvailableJobs />
      <Hiring />
      <QnA />
      <Subscribe />
    </div>
  );
};

export default Home;
