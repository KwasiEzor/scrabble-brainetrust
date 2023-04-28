import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import MemberCard from "../../components/MemberCard/MemberCard";

const members = [
  {
    id: 1,
    name: "Eric Weber",
    imgUrl: "images/members/eric-weber.jpg",
    country: "",
    affiliateNumber: null,
    email: "ericweber@email.com",
  },
  {
    id: 2,
    name: "Gian Cescon",
    imgUrl: "images/members/gian-cescon.jpg",
    country: "",
    affiliateNumber: null,
    email: "giancescon@email.com",
  },
  {
    id: 3,
    name: "Joseph Gonzalez",
    imgUrl: "images/members/joseph-gonzalez.jpg",
    country: "",
    affiliateNumber: null,
    email: "josephgonzalez@email.com",
  },
  {
    id: 4,
    name: "Kim Doan",
    imgUrl: "images/members/kimson-doan.jpg",
    country: "",
    affiliateNumber: null,
    email: "kimdoan@email.com",
  },
  {
    id: 5,
    name: "Leah Hetterberg",
    imgUrl: "images/members/leah-hetteberg.jpg",
    country: "",
    affiliateNumber: null,
    email: "leahhetterberg@email.com",
  },
  {
    id: 6,
    name: "Matheus Ferrero",
    imgUrl: "images/members/matheus-ferrero.jpg",
    country: "",
    affiliateNumber: null,
    email: "matheus@email.com",
  },
  {
    id: 7,
    name: "Michael Dam",
    imgUrl: "images/members/michael-dam.jpg",
    country: "",
    affiliateNumber: null,
    email: "michaeldam@email.com",
  },
  {
    id: 8,
    name: "Podpros",
    imgUrl: "images/members/podpros.jpg",
    country: "",
    affiliateNumber: null,
    email: "podpros@email.com",
  },
  {
    id: 9,
    name: "Toa Heftiba",
    imgUrl: "images/members/toa-heftiba.jpg",
    country: "",
    affiliateNumber: null,
    email: "toaheftiga@email.com",
  },
];
const MembersPage = () => {
  return (
    <div>
      <section className="p-4">
        <HeadingTitle title="Nos membres" center className="mb-4" />
        <article className=" my-8 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {members.map((member) => (
            <MemberCard imgUrl={member.imgUrl} key={member.id}>
              <h3 className=" bg-neutral-50/10 transition-colors duration-150 cursor-pointer hover:bg-gradient-to-tr hover:from-blue-600 hover:to-sky-400 p-2 uppercase font-bold rounded-lg text-shadow">
                {member.name}
              </h3>
            </MemberCard>
          ))}
        </article>
      </section>
    </div>
  );
};

export default MembersPage;
