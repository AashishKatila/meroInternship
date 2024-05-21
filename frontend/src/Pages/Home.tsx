import ImageComponent from "@/components/ui/ImageComponent";
import Landing from "@/components/ui/Landing";
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <div className="px-8 pt-6">
      <Navbar />
      <Landing />
      <ImageComponent />
    </div>
  );
};

export default Home;
