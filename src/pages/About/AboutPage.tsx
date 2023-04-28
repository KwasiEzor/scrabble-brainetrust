import AboutData from "../../../src/data/about_data.json";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

const AboutPage = () => {
  return (
    <div>
      <section className="about max-w-6xl mx-auto border-2 border-neutral-50 shadow-lg rounded-xl px-8 md:px-6 sm:px-4 my-8 pb-12 ">
        {AboutData.data.map((info) => (
          <div key={info.id} className="flex flex-col justify-start gap-2">
            <HeadingTitle
              title={info.title}
              center={false}
              className="my-2"
              mx
            />
            <p className="bg-slate-100 p-4 text-slate-500 rounded-lg">
              {info.content}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
