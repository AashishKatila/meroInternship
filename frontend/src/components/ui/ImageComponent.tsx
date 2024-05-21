import Image from "./Image";
import Airbnb from "../../assets/company/airbnb.png";
import Dribble from "../../assets/company/dribble.png";
import Google from "../../assets/company/google.jpg";
import Meta from "../../assets/company/meta.png";
import Youtube from "../../assets/company/yt.png";
import Slack from "../../assets/company/slack.png";

const ImageComponent = () => {
  const logos = [
    { src: Airbnb, alt: "Airbnb" },
    { src: Google, alt: "Google" },
    { src: Youtube, alt: "Youtube" },
    { src: Slack, alt: "Airbnb" },
    { src: Meta, alt: "Meta" },
    { src: Dribble, alt: "Dribble" },
  ];
  return (
    <div className="flex justify-around items-center ">
      {logos.map((logo) => (
        <Image source={logo.src} alternate={logo.alt} />
      ))}
    </div>
  );
};

export default ImageComponent;
