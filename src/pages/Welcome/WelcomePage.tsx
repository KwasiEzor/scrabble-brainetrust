import SliderComponent from "../../components/SliderComponent/SliderComponent";

import AgendaPreviews from "../../components/AgendaPreviews/AgendaPreviews";
import JoinUs from "../../components/JoinUs/JoinUs";
import HeroSection from "../../components/Hero/HeroSection";
import Partners from "../../components/Partners/Partners";
import RecentPosts from "../../components/RecentPosts/RecentPosts";
import SocialsSection from "../../components/Socials/SocialsSection";

const WelcomePage = () => {
  return (
    <div>
      <HeroSection />
      <SliderComponent />
      <AgendaPreviews />
      <JoinUs />
      <Partners />
      <RecentPosts />
      <SocialsSection />
    </div>
  );
};

export default WelcomePage;
