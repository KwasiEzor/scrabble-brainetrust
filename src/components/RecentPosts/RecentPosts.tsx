import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import CustomButton from "../Buttons/CustomButton";

interface RecentPostsProps {
  posts?: [];
}

const postsData = [
  {
    id: 1,
    title: "Champion de Scrabble francophone, sans parler français",
    subtitle: "Une performance hors norme d'un joueur unique",
    slug: "champion-de-scrabble-francohone-sans-parler-français",
    author: "",
    source:
      "https://www.ledevoir.com/culture/445649/champion-de-scrabble-francophone-sans-parler-francais",
    content:
      "Bruxelles — Un joueur néo-zélandais ne parlant pas un mot de français a remporté lundi le Championnat du monde de Scrabble francophone, après avoir appris par coeur les mots de L’officiel du Scrabble, ont rapporté mardi les organisateurs de ce tournoi.Nigel Richards, un Néo-Zélandais à la barbe fournie, vivant en Malaisie, n’est pas un inconnu des cercles de Scrabble : il a déjà été champion du monde anglophone en 2007 et 2011.  Mais c’est la première fois qu’un joueur ne maîtrisant pas la langue de Molière remporte le Championnat francophone classique, qui a rassemblé lundi quelque 74 joueurs.",
    imgUrl:
      "https://media1.ledevoir.com/images_galerie/nwdp_326005_218901/image.jpg",
    publishedAt: "22-07-2015",
  },
  {
    id: 2,
    title: "Champion de Scrabble francophone, sans parler français",
    subtitle: "Une performance hors norme d'un joueur unique",
    slug: "champion-de-scrabble-francohone-sans-parler-français",
    author: "",
    source:
      "https://www.ledevoir.com/culture/445649/champion-de-scrabble-francophone-sans-parler-francais",
    content:
      "Bruxelles — Un joueur néo-zélandais ne parlant pas un mot de français a remporté lundi le Championnat du monde de Scrabble francophone, après avoir appris par coeur les mots de L’officiel du Scrabble, ont rapporté mardi les organisateurs de ce tournoi.Nigel Richards, un Néo-Zélandais à la barbe fournie, vivant en Malaisie, n’est pas un inconnu des cercles de Scrabble : il a déjà été champion du monde anglophone en 2007 et 2011.  Mais c’est la première fois qu’un joueur ne maîtrisant pas la langue de Molière remporte le Championnat francophone classique, qui a rassemblé lundi quelque 74 joueurs.",
    imgUrl:
      "https://media1.ledevoir.com/images_galerie/nwdp_326005_218901/image.jpg",
    publishedAt: "22-07-2015",
  },
  {
    id: 3,
    title: "Champion de Scrabble francophone, sans parler français",
    subtitle: "Une performance hors norme d'un joueur unique",
    slug: "champion-de-scrabble-francohone-sans-parler-français",
    author: "",
    source:
      "https://www.ledevoir.com/culture/445649/champion-de-scrabble-francophone-sans-parler-francais",
    content:
      "Bruxelles — Un joueur néo-zélandais ne parlant pas un mot de français a remporté lundi le Championnat du monde de Scrabble francophone, après avoir appris par coeur les mots de L’officiel du Scrabble, ont rapporté mardi les organisateurs de ce tournoi.Nigel Richards, un Néo-Zélandais à la barbe fournie, vivant en Malaisie, n’est pas un inconnu des cercles de Scrabble : il a déjà été champion du monde anglophone en 2007 et 2011.  Mais c’est la première fois qu’un joueur ne maîtrisant pas la langue de Molière remporte le Championnat francophone classique, qui a rassemblé lundi quelque 74 joueurs.",
    imgUrl:
      "https://media1.ledevoir.com/images_galerie/nwdp_326005_218901/image.jpg",
    publishedAt: "22-07-2015",
  },
  {
    id: 4,
    title: "Champion de Scrabble francophone, sans parler français",
    subtitle: "Une performance hors norme d'un joueur unique",
    slug: "champion-de-scrabble-francohone-sans-parler-français",
    author: "",
    source:
      "https://www.ledevoir.com/culture/445649/champion-de-scrabble-francophone-sans-parler-francais",
    content:
      "Bruxelles — Un joueur néo-zélandais ne parlant pas un mot de français a remporté lundi le Championnat du monde de Scrabble francophone, après avoir appris par coeur les mots de L’officiel du Scrabble, ont rapporté mardi les organisateurs de ce tournoi.Nigel Richards, un Néo-Zélandais à la barbe fournie, vivant en Malaisie, n’est pas un inconnu des cercles de Scrabble : il a déjà été champion du monde anglophone en 2007 et 2011.  Mais c’est la première fois qu’un joueur ne maîtrisant pas la langue de Molière remporte le Championnat francophone classique, qui a rassemblé lundi quelque 74 joueurs.",
    imgUrl:
      "https://media1.ledevoir.com/images_galerie/nwdp_326005_218901/image.jpg",
    publishedAt: "22-07-2015",
  },
];

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <>
      <HeadingTitle
        title="Publications récentes"
        subtitle="Actualités autour du scrabble"
        center
        className="my-8"
      />
      <section className="p-4 mb-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-8 place-content-center">
        {postsData.map((post) => (
          <ImageCard
            className=""
            imgSrc={post.imgUrl}
            key={post.id}
            alt={post.title}
          >
            <h3 className="mb-4 text-sm font-bold p-2 bg-neutral-50/30 rounded-md hover:bg-blue-500 hover:transition-all">
              {post.title}
            </h3>
            {/* <h5 className="text-xs my-4">{post.subtitle}</h5> */}
            <CustomButton size="sm" primary>
              Suite
            </CustomButton>
          </ImageCard>
        ))}
      </section>
    </>
  );
};

export default RecentPosts;
