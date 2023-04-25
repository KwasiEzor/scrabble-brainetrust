import HeadingTitle from "../HeadingTitle/HeadingTitle";
import Img1 from "../../assets/images/scrabble-jetons.png";
import Img2 from "../../assets/images/scrabble-duplicate.png";
import Img3 from "../../assets/images/scrabble-en-famille.png";

const ShowCaseSection = () => {
  return (
    <>
      <div className="showcase-area">
        <section className="p-4">
          <HeadingTitle title="Découvrez" center />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
            <article className="">
              <img
                src={Img1}
                alt="scrabble"
                className="w-full object-cover shadow-md"
              />
            </article>
            <article className=" grid place-items-center p-[11%]">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="showcase-heading relative md:text-4xl  text-blue-500 font-medium">
                  Le Scrabble
                </h2>
                <h4 className="text-slate-500">Plus qu'un divertissement</h4>
              </div>
            </article>
          </div>
        </section>
        <section className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article className=" grid place-items-center p-[11%]">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="showcase-heading relative md:text-4xl  text-blue-500 font-medium">
                  Le Duplicate
                </h2>
                <h4 className="text-slate-500">Un test de connaissances</h4>
              </div>
            </article>
            <article className="">
              <img
                src={Img2}
                alt="scrabble"
                className="w-full object-cover shadow-md"
              />
            </article>
          </div>
        </section>
        <section className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article className="">
              <img
                src={Img3}
                alt="scrabble"
                className="w-full object-cover shadow-md"
              />
            </article>
            <article className=" grid place-items-center p-[11%]">
              <div className="flex flex-col gap-3 items-center">
                <h2 className="showcase-heading relative md:text-4xl  text-blue-500 font-medium">
                  Le Classique
                </h2>
                <h4 className="text-slate-500">Plaisir et partage</h4>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShowCaseSection;
