import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className='px-1 text-center'>
      <hr className='border-gray-300 text-black w-[90vw] m-auto' />

      <div className='px-3 grid grid-cols-1 md:grid-cols-2'>
        {posts.map(
          (post, index) => (
            console.log(post?.body[0].children),
            (
              <ClientSideRoute
                key={post._id}
                route={`/post/${post.slug.current}`}
              >
                <div className='flex flex-col group p-3 items-center justify-center'>
                  <div className='group-hover:scale-105 drop-shadow-xl mt-[2rem] ease-out transition-transform cursor-pointer'>
                    <Image
                      className='object-cover'
                      src={urlFor(post?.mainImage).url()}
                      alt={post.author.name}
                      height={30}
                      width={400}
                    />

                    <div className='flex justify-between w-[100%] text-sm absolute bottom-0 bg-black text-white bg-opacity-20 backdrop-blur-sm p-3 py-2 m-0'>
                      <div className='flex-col'>
                        <p className='font-bold'>{post.title}</p>
                        <p className='date'>
                          {new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <div className='flex flex-col gap-1 lg:flex'>
                        {post?.categories?.map((category) => (
                          <p className='bg-gray-800 text-[8px] text-white text-center rounded-lg px-2'>
                            {category.title}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='w-[94%] lg:w-[90%] font-bold py-[2rem] mt-2 text-left'>
                    <p className='hover:underline cursor-pointer w-max flex items-center mb-1'>
                      {post.title} <BsBoxArrowUpRight className='ml-2 w-3' />
                    </p>
                    <p className='font-light line-clamp-2'>
                      {post?.description}
                    </p>
                  </div>
                </div>
              </ClientSideRoute>
            )
          )
        )}
      </div>
    </div>
  );
}

export default BlogList;
