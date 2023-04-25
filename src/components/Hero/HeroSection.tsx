import { Button } from "flowbite-react";
import YellowBlob from "../../assets/images/yellow-blob.svg";
import HeroImg from "../../assets/images/scrabble-hero-bg.png";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-[80vh] max-h-fit grid md:grid-cols-2 sm:grid-cols-1 bg-gradient-to-tr from-blue-700 to-sky-500 text-neutral-50 ">
        <div className="grid place-content-center">
          <div className="flex flex-col gap-4 l md:justify-start sm:pt-[10%] sm:pl-4 sm:pb-[10%] sm:justify-center">
            <h3 className="text-4xl lg:text-5xl font-bold text-gradient">
              Bienvenue
            </h3>
            <h3 className="text-2xl lg:text-5xl md:text-4xl  font-bold text-gradient">
              au
            </h3>
            <h1
              id="hero-title"
              className="hero-title text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-bold uppercase text-gradient"
            >
              Braine Trust
            </h1>
            <Button
              size={"lg"}
              className=" mt-6 text-shadow font-extrabold bg-gradient-to-r from-yellow-400 text-3xl to-yellow-300 uppercase tracking-wide hover:tracking-widest transition-all max-w-fit"
            >
              commencez ici
            </Button>
          </div>
        </div>
        <div className="relative">
          <img src={YellowBlob} alt="yellow blob" className="-w-full z-0" />
          <img
            src={HeroImg}
            alt="hero banner image"
            className="absolute inset-0 w-full max-w-fit"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
