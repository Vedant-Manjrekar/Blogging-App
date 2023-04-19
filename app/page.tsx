import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='flex bg-white min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-black text-[2rem]'>Welcome to the blog.</h1>
    </main>
  );
}
