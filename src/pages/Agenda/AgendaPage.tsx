import React from "react";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import { Pagination, Table, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
type AgendaPageProps = {
  agendas?: [];
};

const AgendaPage: React.FC<AgendaPageProps> = ({ agendas }) => {
  return (
    <div>
      {/* <Banner /> */}
      <section className="p-4">
        <HeadingTitle
          title="Agenda"
          center
          className="my-8"
          subtitle="Programme complet du club"
          subtitleClass="mt-4"
        />
      </section>
      <section>
        <form className="max-w-4xl mx-auto p-4 flex items-center justify-center mb-8">
          <TextInput
            id="searchInput"
            rightIcon={HiSearch}
            name="search"
            type="search"
            sizing="md"
            className="w-full"
          />
        </form>
      </section>
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
      <div className="flex items-center justify-center text-center my-12">
        <Pagination
          currentPage={1}
          layout="pagination"
          onPageChange={() => null}
          showIcons={true}
          totalPages={1000}
          previousLabel=""
          nextLabel=""
        />
      </div>
    </div>
  );
};

export default AgendaPage;
