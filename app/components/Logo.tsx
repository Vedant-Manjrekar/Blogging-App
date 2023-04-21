import Image from "next/image";

function Logo() {
  return (
    <>
      <Image
        alt='logo'
        src='https://i.imgur.com/R4QFoQu.png'
        className='object-cover rounded-[50%]'
        width='50'
        height='50'
      />
    </>
  );
}

export default Logo;
