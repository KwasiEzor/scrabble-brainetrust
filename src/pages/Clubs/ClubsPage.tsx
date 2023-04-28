import { Badge, Table } from "flowbite-react";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import ClubsData from "../../data/clubs.json";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import { FaPlusSquare } from "react-icons/fa";

const ClubsPage = () => {
  return (
    <div>
      <HeadingTitle title="Liste des clubs" center className="my-8" />
      <section className="p-4 max-w-7xl mx-auto">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Nom</Table.HeadCell>
            <Table.HeadCell>Adresse</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Localité</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {ClubsData.clubs.slice(0, 10).map((club) => (
              <Table.Row
                key={club.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {club.name}
                </Table.Cell>
                <Table.Cell>{club.address}</Table.Cell>
                <Table.Cell>{club.email}</Table.Cell>
                <Table.Cell>
                  <span className="flex">
                    <Badge color={"success"}>{club.locality}</Badge>
                  </span>
                </Table.Cell>
                <Table.Cell>
                  {/* <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    

                  </a> */}
                  <ModalComponent
                    label=""
                    key={club.id}
                    club={club}
                    icon={FaPlusSquare}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    </div>
  );
};

export default ClubsPage;
