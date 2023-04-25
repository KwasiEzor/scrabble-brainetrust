import React from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link } from "react-router-dom";

import { AiFillCheckCircle } from "react-icons/ai";
type JoinUsProps = {
  image?: string;
};

const JoinUs: React.FC<JoinUsProps> = () => {
  return (
    <>
      <div className="cta-area min-h-full">
        <section className="bg-gradient-to-r from-blue-600 to-sky-500 min-h-[70vh] max-h-fit text-neutral-50 grid grid-cols-1 md:grid-cols-2">
          <div className="left hidden md:block"></div>
          <div className="right grid  place-content-center p-[5%]">
            <div className="w-full border-2 border-neutral-50/50 rounded-lg p-4">
              <h2 className="text-neutral-100 text-2xl font-semibold mb-2">
                Rejoignez Nous
              </h2>
              <h1 className="text-yellow-300 text-4xl  font-bold">
                Maintenant !
              </h1>
              <ul className="mt-8 text-neutral-100 font-normal">
                <li className="mb-1 flex flex_auto_1fr items-center">
                  <AiFillCheckCircle className="mr-2" />
                  <span>Participer aux différentes compétitions</span>
                </li>
                <li className="mb-1 flex flex_auto_1fr items-center">
                  <AiFillCheckCircle className="mr-2" />
                  <span>S'entrainer avec des joueurs expérimentés</span>
                </li>
                <li className="mb-1 flex flex_auto_1fr items-center">
                  <AiFillCheckCircle className="mr-2" />
                  <span>Jouer chaque semaine de nouvelles parties</span>
                </li>
                <li className="mb-1 flex flex_auto_1fr items-center">
                  <AiFillCheckCircle className="mr-2" />
                  <span>Vivre et partager des moments de Scrabble unique</span>
                </li>
              </ul>
              <CustomButton className="mt-8">
                <Link to={"/register"}>Rejoindre</Link>
              </CustomButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinUs;
