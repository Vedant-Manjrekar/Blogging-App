function Banner() {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between font-mono items-center py-5 px-6 font-bold'>
        <div className='text-center px-2'>
          <h2 className='text-[6vw] lg:text-[4.5vw] font-mono'>
            Vedant's Blog.
          </h2>
          <p className='text-center text-[1.7vw] lg:text-[17px] font-light'>
            Welcome to the{" "}
            <span className='bg-yellow-200 px-1'>most loved</span> tech blog of
            all times.
          </p>
        </div>
        <p className='text-gray-400 text-[1.3vw] lg:text-[.8vw] lg:w-[30vw] md:w-[30vw] p-2 lg:p-0 text-center'>
          Hottest news of the tech space | Coding tips and tricks | Stuff you
          don't wanna miss.
        </p>
      </div>
    </>
  );
}

export default Banner;
