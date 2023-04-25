import React from "react";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

type AgendaPageProps = {
  agendas?: [];
};

const AgendaPage: React.FC<AgendaPageProps> = ({ agendas }) => {
  return (
    <div>
      <section></section>
      <section className="p-4">
        <HeadingTitle
          title="Agenda"
          center
          className="my-8"
          subtitle="Programme complet du club"
          subtitleClass="mt-4"
        />
      </section>
    </div>
  );
};

export default AgendaPage;
