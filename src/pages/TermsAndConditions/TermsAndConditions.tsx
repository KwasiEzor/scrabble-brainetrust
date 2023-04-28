import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import TermsData from "../../data/terms_conditions.json";

import { BiCheckDouble } from "react-icons/bi";

const TermsAndConditions = () => {
  return (
    <div>
      <HeadingTitle title="Conditions générales" center className="my-8" />
      <section className="p-4 max-w-7xl mx-auto">
        {TermsData.data.map((term) => (
          <div key={term.id}>
            <h2 className=" text-blue-500 font-medium my-4">
              Article {term.id} : {term.title}
            </h2>
            <div className="bg-neutral-100 p-4 rounded-lg text-slate-500">
              <p className="mb-4 text-justify">{term.content}</p>
              <ul className="text-base font-light">
                {term.details &&
                  term.details.map((info, index) => (
                    <li
                      className="text-slate-500  flex items-center justify-start mb-1"
                      key={index}
                    >
                      <BiCheckDouble className="mr-2" size={20} />
                      <span>{info.item}</span>
                    </li>
                  ))}
              </ul>
              <ul className="text-base  font-light">
                {term.features &&
                  term.features.map((feature, index) => (
                    <li
                      className=" text-slate-500 flex items-center justify-start mb-1"
                      key={index}
                    >
                      <BiCheckDouble className="mr-2" size={20} />
                      <span>{feature.details}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TermsAndConditions;
