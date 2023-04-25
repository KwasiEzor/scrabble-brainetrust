import Video from "../../assets/videos/scrabble-presentation-web.webm";
import Poster from "../../assets/images/scrabble-poster.png";
import ScrabbleData from "../../data/scrabble_rules.json";
import AboutData from "../../data/about_data.json";
import { Link } from "react-router-dom";

const ScrabblePage = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto p-4">
        <video
          muted
          autoPlay={false}
          poster={Poster}
          className="w-full h-full aspect-video rounded-lg"
          controls
        >
          <source src={Video} type="video/webm" />
        </video>
      </section>
      <section className=" max-w-7xl mx-auto px-8 py-8">
        {ScrabbleData.data.map((info) => (
          <div className="" key={info.id}>
            <h2 className="text-blue-500 font-medium ">{info.title}</h2>
            <p className="my-4 text-slate-500 bg-slate-100 rounded-lg p-4 text-justify">
              {info.rule}
            </p>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8">
              {info.images?.map((image, index) => (
                <img
                  src={image.url}
                  alt="image"
                  key={index}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="max-w-5xl mx-auto p-8 rounded-xl mb-16 border-2 border-yellow-400">
        {AboutData.details.map((detail) => (
          <div className="shadow-md p-4 rounded-xl mb-4" key={detail.id}>
            <h3 className="text-slate-500 font-medium mb-4 ">{detail.title}</h3>
            <p className="bg-slate-100 p-4 rounded-b-xl">{detail.content}</p>
            {detail.title.toLowerCase() === "nous contacter" ? (
              <div className="flex items-center justify-center">
                <Link
                  className="text-blue-500 hover:text-yellow-500  transition-colors max-w-xs my-4 text-sm underline underline-offset-2 mx-auto"
                  to={`/contact`}
                >
                  Contactez-nous Maintenant
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ScrabblePage;
