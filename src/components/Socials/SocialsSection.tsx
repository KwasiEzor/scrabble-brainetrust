import { ImFacebook2 } from "react-icons/im";
import { FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa";
import IconButton from "../Buttons/IconButton";

const SocialsSection = () => {
  return (
    <>
      <section className="socials p-[5%] grid place-content-center min-h-[40vh]">
        <div className="max-w-xl space-y-4">
          <h1 className="text-2xl text-slate-500 text-center">
            Suivez-nous sur les réseaux
          </h1>
          <p className="w-full flex items-center justify-center gap-4">
            <IconButton
              size={35}
              color="bg-blue-600"
              icon={ImFacebook2}
              text="Facebook"
            />
            <IconButton
              size={35}
              color="bg-blue-600"
              icon={FaTwitter}
              text="Twitter"
            />
            <IconButton
              size={35}
              color="bg-blue-600"
              icon={FaTwitch}
              text="Twitch"
            />
            <IconButton
              size={35}
              color="bg-blue-600"
              icon={FaYoutube}
              text="YouTube"
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default SocialsSection;
