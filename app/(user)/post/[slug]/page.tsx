import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-8 drop-shadow-lg text-white mt-8 flex flex-col relative m-auto overflow-hidden items-center h-[25vh] w-[90vw] lg:w-full justify-center'>
      {/* Image section */}
      <section className='h-full w-auto opacity-50'>
        <Image
          className='overflow-hidden absolute top-0 w-[90vw] object-cover blur-sm h-full'
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </section>

      {/* Name, author, etc section. */}
      <section className='bg-[#00000059] w-full z-10 absolute top-0 h-full opacity-80'>
        <div className='flex flex-col lg:flex-row justify-between h-full p-4'>
          {/* Title and date */}
          <div className='flex justify-evenly flex-col'>
            <h1 className='font-extrabold text-2xl'>{post.title}</h1>
            <p>
              {new Date(post._createdAt).toLocaleDateString("eng-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            {/* Description */}
            <div className='mt-5'>
              <em>{post.description}</em>
            </div>
          </div>

          {/* Author */}
          <div className='z-20 flex justify-between items-center gap-2 lg:flex-col-reverse lg:justify-evenly lg:items-end'>
            <div className='flex items-center gap-2 w-[90%]'>
              <Image
                className='rounded-[80%]'
                src={urlFor(post.author.image).url()}
                height={10}
                width={40}
                alt={post.author.name}
              />
              <p className='font-bold'>{post.author.name}</p>
            </div>
            <div className='w-screen lg:w-max h-[50%] overflow-x-scroll'>
              {post?.categories?.map((category) => (
                <button className='bg-yellow-400 font-semibold text-black p-2 rounded-xl text-xs m-1'>
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Post;
