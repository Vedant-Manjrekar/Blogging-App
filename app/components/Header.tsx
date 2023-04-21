import Image from "next/image";

function Header() {
  return (
    <header className='flex text-black font-bold items-center justify-between px-8 py-5 bg-gray-100'>
      <div>
        <Image
          alt='logo'
          src='https://i.imgur.com/R4QFoQu.png'
          className='object-cover rounded-[50%]'
          width='40'
          height='40'
        />
      </div>
      <div>Eleem2</div>
    </header>
  );
}

export default Header;
