import { Table } from "flowbite-react";
import React from "react";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import CustomButton from "../Buttons/CustomButton";
import { NavLink } from "react-router-dom";

type AgendaPreviewsProps = {
  agendas?: [];
};

const AgendaPreviews: React.FC<AgendaPreviewsProps> = ({ agendas }) => {
  return (
    <>
      <div className="agenda mb-16">
        <section className="p-4 mt-8">
          <HeadingTitle
            title="Agenda"
            center
            subtitle="programmes d'activités"
            subtitleClass="my-4"
          />
          <article className="max-w-7xl mx-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Compétitions</Table.HeadCell>
                <Table.HeadCell>Heures</Table.HeadCell>
                <Table.HeadCell>Détails</Table.HeadCell>
                <Table.HeadCell>Lieu</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Tournoi du Scrabblophage
                    <p className="text-yellow-500 text-sm">15 Avril 2023</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-xs text-center font-semibold bg-yellow-100 text-yellow-700 rounded-xl py-1">
                      14h30
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>2 parties en 3min</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>A déterminer</p>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Amicale
                    <p className="text-blue-500 text-sm">19 Avril 2023</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-xs text-center font-semibold bg-blue-100 text-blue-700 rounded-xl py-1">
                      20h00
                    </p>
                  </Table.Cell>
                  <Table.Cell>1 partie en 3min</Table.Cell>
                  <Table.Cell>Ophain, Salle communale</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Interclub Bra B - Mat B
                    <p className="text-green-500 text-sm">15 Avril 2023</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-xs text-center font-semibold bg-green-100 text-green-700 rounded-xl py-1">
                      20h00
                    </p>
                  </Table.Cell>
                  <Table.Cell>Interclub + Amicale</Table.Cell>
                  <Table.Cell>Ophain, Salle communale</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Interclub Yod A - Bra A
                    <p className="text-green-500 text-sm">21 Avril 2023</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-xs text-center font-semibold bg-green-100 text-green-700 rounded-xl py-1">
                      20h00
                    </p>
                  </Table.Cell>
                  <Table.Cell>1 partie en 3min + Amicale</Table.Cell>
                  <Table.Cell>Trooz, Liège</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Simultanée mondiale
                    <p className="text-rose-500 text-sm">26 Avril 2023</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-xs text-center font-semibold bg-rose-100 text-rose-700 rounded-xl py-1">
                      20h00
                    </p>
                  </Table.Cell>
                  <Table.Cell>1 partie en 3min + Amicale</Table.Cell>
                  <Table.Cell>Ophain, Salle communale</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <div className="my-4 mx-auto max-w-md flex items-center justify-center pt-[3%]">
            {/* <Button className="text-shadow text-xs font-extrabold bg-gradient-to-r from-blue-600  to-sky-400 uppercase tracking-wide hover:tracking-widest transition-all max-w-fit">
              <Link to={"/agenda"}>Plus de programmes</Link>
            </Button> */}
            <CustomButton secondary>
              <NavLink to={"/agenda"}>Plus de programmes</NavLink>
            </CustomButton>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgendaPreviews;
