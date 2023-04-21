import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { previewData } from "next/headers";
import { Inter } from "next/font/google";
import PreviewBlogList from "../components/PreviewBlogList";
import BlogList from "../components/BlogList";
import { cache } from "react";

const clientFetch = cache(client.fetch.bind(client));

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main className='flex bg-white min-h-screen flex-col items-center justify-between p-24'>
      {previewData() ? (
        <PreviewSuspense
          fallback={
            <div role='status' className=''>
              Loading..
            </div>
          }
        >
          <p>We are in Preview</p>
          {/* <PreviewBlogList query={query} /> */}
        </PreviewSuspense>
      ) : (
        // <p>We are not in preview mode.</p>
        <BlogList posts={posts} />
      )}
    </main>
  );
}
