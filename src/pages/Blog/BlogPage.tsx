import {
  Badge,
  Button,
  Card,
  Label,
  Pagination,
  Select,
  TextInput,
} from "flowbite-react";
import BlogPostsData from "../../data/blog_posts.json";

import { BsArrowRightSquare } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import BlogCard from "./BlogCard";

interface Post {
  id: number;
  title: string;
  slug?: string;
  content: string;
  image_url?: string;
  video_url?: string;
  category_id?: number;
  user_id?: number | 1;
  publishedAt?: Date;
  source?: string;
}

const BlogPage = () => {
  console.log(BlogPostsData);
  return (
    <section className="bg-neutral-50 grid grid-cols-1 md:grid-cols-6 gap-4 min-h-screen p-4 sm:p-0">
      <div className="py-8 w-full h-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-2">
            <TextInput
              id="email4"
              type="email"
              rightIcon={HiSearch}
              placeholder="Search..."
              required={true}
            />
          </div>
        </div>
      </div>
      <article className=" col-span-6 space-x-2 space-y-2 lg:col-span-5 md:col-span-5  rounded-lg  grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {BlogPostsData &&
          BlogPostsData.posts.map((post) => (
            // <Card
            //   key={post.id}
            //   className=" group hover:bg-slate-100 hover:cursor-pointer hover:text-neutral-50 transition-all"
            // >
            //   <img
            //     src={post.image_url}
            //     alt={post.title}
            //     className="h-[15rem] object-cover rounded-lg group-hover:scale-95 transition-all"
            //   />
            //   <h3 className="text-slate-600 text-base font-medium">
            //     {post.title}
            //   </h3>
            //   <p className="font-normal text-sm text-slate-500 dark:text-gray-400 text-justify">
            //     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            //     Voluptates iste laboriosam suscipit ipsa nisi necessitatibus,
            //     eaque maiores veniam, molestiae commodi exercitationem ut modi
            //     possimus atque nobis rerum totam expedita reprehenderit nemo at
            //     accusantium reiciendis.
            //   </p>
            //   <div>
            //     <Button
            //       size={"xs"}
            //       className="bg-gradient-to-tr from-blue-400 to-sky-300 text-shadow text-white"
            //     >
            //       Lire <BsArrowRightSquare className="ml-2" />
            //     </Button>
            //   </div>
            // </Card>
            <BlogCard
              title={post.title}
              imgUrl={post.image_url}
              key={post.id}
            />
          ))}
      </article>
      <div className="flex items-center justify-center text-center">
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
      {/* <aside className=" col-span-6 lg:col-span-1 md:col-span-1  flex flex-col gap-4">
        <Card className="flex flex-col gap-2 shadow-sm">
          <h5 className="text-base text-blue-500 font-medium">Categories</h5>
          <ul className="cursor-pointer">
            <li className="text-slate-400 text-xs font-medium hover:text-slate-700 transition-all mb-2 py-1 px-3 rounded-lg bg-neutral-50">
              Amicale
            </li>
            <li className="text-slate-400 text-xs font-medium hover:text-slate-700 transition-all mb-2 py-1 px-3 rounded-lg bg-neutral-50">
              Coupe de Belgique
            </li>
            <li className="text-slate-400 text-xs font-medium hover:text-slate-700 transition-all mb-2 py-1 px-3 rounded-lg bg-neutral-50">
              Festivals de Scrabble
            </li>
            <li className="text-slate-400 text-xs font-medium hover:text-slate-700 transition-all mb-2 py-1 px-3 rounded-lg bg-neutral-50">
              Championnats du Monde
            </li>
            <li className="text-slate-400 text-xs font-medium hover:text-slate-700 transition-all  py-1 px-3 rounded-lg bg-neutral-50">
              Championnats de Belgique
            </li>
          </ul>
        </Card>
        <Card className="flex flex-col gap-2 shadow-sm">
          <h5 className="text-base text-blue-500 font-medium">
            Articles récentes
          </h5>
          <ul className="cursor-pointer">
            <li className="text-slate-500 text-xs font-normal hover:text-yellow-400 transition-all  py-1 px-3 rounded-lg flex items-center justify-between gap-2">
              <img
                src="https://images.unsplash.com/photo-1583334648584-6c2ba1fb41cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="image"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span>Mondiaux de scrabble de Louvain</span>
            </li>
            <li className="text-slate-500 text-xs font-normal hover:text-yellow-400 transition-all  py-1 px-3 rounded-lg flex items-center justify-between gap-2">
              <img
                src="https://images.unsplash.com/photo-1583334648584-6c2ba1fb41cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="image"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span>Mondiaux de scrabble de Louvain</span>
            </li>
            <li className="text-slate-500 text-xs font-normal hover:text-yellow-400 transition-all  py-1 px-3 rounded-lg flex items-center justify-between gap-2">
              <img
                src="https://images.unsplash.com/photo-1583334648584-6c2ba1fb41cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="image"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span>Mondiaux de scrabble de Louvain</span>
            </li>
          </ul>
        </Card>
        <Card>
          <h5 className="text-base text-blue-500 font-medium">Mots clés</h5>
          <div className="flex flex-wrap gap-2">
            <Badge
              size={"sm"}
              className="text-xs bg-blue-500 text-white rounded-full  cursor-pointer hover:scale-90 transition-all"
            >
              Compétition
            </Badge>
            <Badge
              size={"sm"}
              className="text-xs bg-yellow-400 text-white rounded-full cursor-pointer  hover:scale-90 transition-all"
            >
              Duplicate
            </Badge>
            <Badge
              size={"sm"}
              className="text-xs bg-green-400 text-white rounded-full  cursor-pointer hover:scale-90 transition-all"
            >
              Classique
            </Badge>
            <Badge
              size={"sm"}
              className="text-xs bg-red-500 text-white rounded-full  cursor-pointer hover:scale-90 transition-all"
            >
              CDM
            </Badge>
          </div>
        </Card>
      </aside> */}
    </section>
  );
};

export default BlogPage;
